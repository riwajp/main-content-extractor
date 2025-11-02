import { extractMainContainer } from "./extractors/accessibilityBasedExtractor";
import {
  domDiff,
  getSiteErrorPageUrl,
  getSiteHomePageUrl,
} from "./extractors/domDiffExtractor";
import { createHttpClientWithRetries } from "./utils/httpClient";
import { extractMainContent } from "./extractors/titleBasedExtractor";
import fs from "node:fs";
import { JSDOM } from "jsdom";
import path from "node:path";
import TurndownService from "turndown";

const turndown = new TurndownService();

function filenameFromUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/[^a-zA-Z0-9]/g, "_") + ".md";
}

const extract = async (url: string) => {
  const doc = await createHttpClientWithRetries(async (http) => {
    const response = await http.fetch(url);
    if (!response.ok && response.status !== 404)
      throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const { window } = new JSDOM(html);
    return window.document;
  }, 3);

  const title = doc.querySelector("title")?.textContent || "";
  const homeUrl = getSiteHomePageUrl(url);
  const errorPageUrl = getSiteErrorPageUrl(url);

  const diffedDom = await domDiff(doc, [homeUrl, errorPageUrl]);
  const mainContainer = await extractMainContainer(diffedDom);
  const mainContent = extractMainContent(title, mainContainer!);

  return mainContent;
};

const urls: string[] = [
  "https://www.bankofcanada.ca/2025/10/triennial-central-bank-survey-foreign-april-2025/",
  "https://www.bankofcanada.ca/2025/09/fad-press-release-2025-09-17/",
  "https://www.bankofcanada.ca/2025/06/the-impact-of-us-trade-policy-on-jobs-and-inflation-in-canada/",
  "https://www.bankofcanada.ca/2025/06/talking-to-canadians-how-real-world-insights-shape-monetary-policy/",
  "https://www.bancaditalia.it/media/notizia/la-banca-d-italia-partecipa-all-edizione-2025-di-cultura/",
  "https://www.bancaditalia.it/media/notizia/luigi-federico-signorini-interviene-alla-giornata-di-studi-le-autorit-indipendenti-e-la-collaborazione-con-la-guardia-di-finanza/",
  "https://www.ecb.europa.eu/press/economic-bulletin/articles/2025/html/ecb.ebart202506_02~1a773e2ca3.en.html",
  "https://www.ecb.europa.eu/press/economic-bulletin/focus/2025/html/ecb.ebbox202506_03~ee425f3792.en.html",
  "https://www.bankofengland.co.uk/paper/2025/ps/expanding-mandatory-iso-20022-enhanced-data-in-chaps-from-2027",
  "https://www.bankofengland.co.uk/paper/2025/cp/partial-revocation-of-the-uk-technical-standard-on-resolution-reporting",
  "https://www.federalreserve.gov/newsevents/pressreleases/orders20250212c.htm",
  "https://www.rba.gov.au/speeches/2024/sp-ag-2024-09-18.html",
];

async function runAll() {
  const outputDir = "data/";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const url of urls) {
    try {
      console.log(`\nExtracting: ${url}`);
      const newDoc = await extract(url);
      const fileName = filenameFromUrl(url);
      const filePath = path.join(outputDir, fileName);
      const markdown = turndown.turndown(newDoc.documentElement.outerHTML);
      fs.writeFileSync(filePath, markdown, "utf-8");
      console.log(`Saved ${filePath}`);
    } catch (err) {
      console.error(`Error processing ${url}:`, err);
    }
  }

  console.log("\nExtraction complete.");
}

runAll();
