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
import { urls } from "./urls";

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
