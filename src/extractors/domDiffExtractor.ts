import getXPath from "get-xpath";
import * as xpath from "xpath";
import { createHttpClientWithRetries } from "../utils/httpClient";
import { JSDOM } from "jsdom";

function cleanTree(doc: Document): Document {
  // remove boilerplate tags
  doc
    .querySelectorAll(
      "script, style, link[rel='stylesheet'], noscript, nav, aside, footer, img, iframe, .ads, .ad, .advertisement, .social, .share, .comments"
    )
    .forEach((el) => el.remove());

  // remove comments
  const walker = doc.createTreeWalker(
    doc,
    doc.defaultView!.NodeFilter.SHOW_COMMENT
  );
  let node: Node | null;
  const toRemove: Node[] = [];
  while ((node = walker.nextNode())) {
    toRemove.push(node);
  }
  toRemove.forEach((n) => n.parentNode?.removeChild(n));
  doc.querySelectorAll("*").forEach((el) => el.removeAttribute("style"));
  return doc;
}

// XPath utils ---------------
function getXPathMap(doc: Document): Record<string, string> {
  const map: Record<string, string> = {};
  const walker = doc.createTreeWalker(
    doc.body,
    doc.defaultView!.NodeFilter.SHOW_ELEMENT
  );
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const el = node as Element;
    const text = (el.textContent || "").trim();
    if (text) {
      const xp = getXPath(el);
      map[xp] = text;
    }
  }
  return map;
}

function compareXPathMaps(
  map1: Record<string, string>,
  map2: Record<string, string>
): [string[], string[]] {
  const toRemove1: string[] = [];
  const toRemove2: string[] = [];

  const allXPaths = new Set([...Object.keys(map1), ...Object.keys(map2)]);
  for (const xp of allXPaths) {
    const t1 = map1[xp];
    const t2 = map2[xp];

    if (t1 && t2) {
      if (t1 == t2) {
        toRemove1.push(xp);
        toRemove2.push(xp);
      }
    }
  }
  return [toRemove1, toRemove2];
}

function removeXpathsFromDom(
  doc: Document,
  xpathsToRemove: string[]
): Document {
  for (const xp of xpathsToRemove) {
    try {
      const nodes = xpath.select(xp, doc) as Node[];
      nodes.forEach((n) => n.parentNode?.removeChild(n));
    } catch (err) {}
  }
  return doc;
}

// Node signature utils ----------
function getNodeSignature(el: Element): string {
  const tag = el.tagName.toLowerCase();
  const id = el.id ? `#${el.id}` : "";
  const classes = el.className
    ? "." + el.className.toString().trim().replace(/\s+/g, ".")
    : "";
  const href = (el.getAttribute("href") || "").trim();

  return `${tag}${id}${classes}${href}`;
}

function getNodeSignatureMap(doc: Document): Record<string, string> {
  const map: Record<string, string> = {};
  const walker = doc.createTreeWalker(
    doc.body,
    doc.defaultView!.NodeFilter.SHOW_ELEMENT
  );
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const el = node as Element;
    const text = (el.textContent || "").trim();
    if (text) {
      const sig = getNodeSignature(el);
      map[sig] = text;
    }
  }
  return map;
}

function compareSignatureMaps(
  map1: Record<string, string>,
  map2: Record<string, string>
): string[] {
  const toRemove: string[] = [];
  for (const sig of Object.keys(map1)) {
    const text1 = map1[sig];
    const text2 = map2[sig];
    if (text2 && text1 === text2) {
      toRemove.push(sig);
    }
  }
  return toRemove;
}

function removeNodesBySignature(doc: Document, sigsToRemove: string[]) {
  const walker = doc.createTreeWalker(
    doc.body,
    doc.defaultView!.NodeFilter.SHOW_ELEMENT
  );
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const el = node as Element;
    const sig = getNodeSignature(el);
    if (sigsToRemove.includes(sig)) {
      const text = (el.textContent || "").trim();
      el.parentNode?.removeChild(el);
    }
  }
}

// General utils -------------------
export function getSiteHomePageUrl(url: string) {
  const u = new URL(url);
  return u.origin + "/";
}

export function getSiteErrorPageUrl(url: string) {
  const u = new URL(url);
  return u.origin + "/404";
}

// perform all dom-diff & removal tasks --------------------------
export async function domDiff(doc: Document, referencePageUrls: string[]) {
  const dom = cleanTree(doc);

  for (const referencePageUrl of referencePageUrls) {
    console.log("Reference page url:", referencePageUrl);

    const referenceDom = cleanTree(
      await createHttpClientWithRetries(async (http) => {
        const response = await http.fetch(referencePageUrl);
        if (!response.ok && response.status != 404)
          throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        const { window } = new JSDOM(html);
        return window.document;
      }, 3)
    );

    const xpathMap = getXPathMap(dom);
    const xpathMapHome = getXPathMap(referenceDom);
    const [xpathsToRemove] = compareXPathMaps(xpathMap, xpathMapHome);
    removeXpathsFromDom(dom, xpathsToRemove);

    const nodeSignatureMap = getNodeSignatureMap(dom);
    const nodeSignatureMapHome = getNodeSignatureMap(referenceDom);

    const signaturesToRemove = compareSignatureMaps(
      nodeSignatureMap,
      nodeSignatureMapHome
    );

    removeNodesBySignature(dom, signaturesToRemove);
  }

  console.log(`Processed urls`);

  return dom;
}
