import { JSDOM } from "jsdom";
import { createHttpClientWithRetries } from "../utils/httpClient";
import { link } from "fs";

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function isPrefixOrSuffix(title: string, heading: string): boolean {
  const t = normalizeText(title).split(/\s+/);
  const h = normalizeText(heading).split(/\s+/);

  if (h.length === 0 || t.length === 0) return false;

  const prefixMatch = t.slice(0, h.length).join(" ") === h.join(" ");
  const suffixMatch = t.slice(-h.length).join(" ") === h.join(" ");
  return prefixMatch || suffixMatch;
}

function computeNodeStats(node: Element) {
  const linkTextLen = Array.from(node.querySelectorAll("a"))
    .map((a) => (a.textContent || "").trim().length)
    .reduce((sum, len) => sum + len, 0);

  const totalTextLen = (node.textContent || "").trim().length || 1;
  const linkRatio = linkTextLen / totalTextLen;

  const nodeCount = node.querySelectorAll("*").length || 1;
  const textDensity = totalTextLen / nodeCount;
  return { textDensity, linkRatio, textLength: totalTextLen };
}

function cleanNonTextElements(root: Element): Element {
  const removeTags = [
    "img",
    "svg",
    "video",
    "audio",
    "canvas",
    "iframe",
    "picture",
    "figure",
    "object",
    "embed",
    "source",
    "noscript",
    "script",
    "head",
  ];

  //  Remove all non-text elements
  removeTags.forEach((tag) => {
    root.querySelectorAll(tag).forEach((el) => el.remove());
  });

  // Remove empty nodes
  const allNodes = root.querySelectorAll("*");
  allNodes.forEach((node) => {
    const text = node.textContent?.trim() ?? "";
    if (text.length === 0) {
      node.remove();
    }
  });

  const walker = root.ownerDocument?.createTreeWalker(
    root,
    root.ownerDocument.defaultView?.NodeFilter.SHOW_TEXT,
    null
  );
  if (walker) {
    const textNodes: Text[] = [];
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      node.textContent = node.textContent?.replace(/\s+/g, " ").trim() ?? "";
      textNodes.push(node);
    }
  }

  return root;
}

function trimLinkHeavyEdges(container: Element): Element {
  const LINK_THRESHOLD = 0.6;
  const TEXT_DENSITY_THRESHOLD = 40;

  const allNodes = container.children;

  if (allNodes.length === 0) return container;

  for (const node of allNodes) {
    const { linkRatio, textDensity } = computeNodeStats(node);
    if (linkRatio > LINK_THRESHOLD && node.querySelectorAll("*").length >= 4) {
      node.remove();
    }
  }

  return container;
}

export async function extractMainContent(title: string, doc: Document) {
  const headings: Element[] = Array.from(doc.querySelectorAll("h1, h2, h3"));

  const matchEl = headings.find((el) =>
    isPrefixOrSuffix(title, el.textContent || "")
  );
  if (!matchEl) {
    console.warn("No heading matching title prefix/suffix found");
    return doc;
  }

  let current = matchEl;
  let prevStats = computeNodeStats(current);
  const trail: any[] = [prevStats];

  // find ancestor with sharp increment in text density & decrementin  link density
  while (current?.parentElement) {
    const parent = current.parentElement;
    const parentStats = computeNodeStats(parent);

    const textDiff = parentStats.textDensity / prevStats.textDensity;
    const linkDiff = parentStats.linkRatio / prevStats.linkRatio;

    trail.push(parentStats);
    console.log(textDiff, linkDiff);

    if (textDiff > 1.5 || linkDiff < 0.5) {
      current = parent;
      prevStats = parentStats;
      break;
    }

    current = parent;
    prevStats = parentStats;
  }

  // propagate upward
  while (current?.parentElement) {
    const parent = current.parentElement.cloneNode(true) as Element;

    // remove the identified child to see parent's content without it
    const originalChild = Array.from(parent.children).find(
      (ch) => (ch as Element).outerHTML === current.outerHTML
    );
    if (originalChild) parent.removeChild(originalChild);

    const parentStats = computeNodeStats(parent);
    const textDiff = parentStats.textDensity / prevStats.textDensity;
    const linkDiff = parentStats.linkRatio / prevStats.linkRatio;

    if (textDiff < 0.8 || linkDiff > 1.2) {
      break;
    }

    current = current.parentElement;
    prevStats = parentStats;
  }

  const { window } = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  const newDoc = window.document;

  const cleanedDom = trimLinkHeavyEdges(cleanNonTextElements(current));
  newDoc.body.appendChild(cleanedDom.cloneNode(true));
  return newDoc;
}
