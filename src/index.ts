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

const extract = async (url: string) => {
  const doc = await createHttpClientWithRetries(async (http) => {
    const response = await http.fetch(url);
    if (!response.ok && response.status != 404)
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
  "https://www.onlinekhabar.com/2025/10/1777327/uml-in-internal-discussions-to-go-to-court-seeking-restoration-of-parliament",
  "https://www.onlinekhabar.com/2025/10/1782030/fundamental-treatment-for-those-who-act-like-i-am-the-state-home-minister-aryal",
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

const idx = 9;
const url = urls[idx]!;
const newDoc = await extract(url);
fs.writeFileSync(
  "main_output.html",
  newDoc!.documentElement.outerHTML,
  "utf-8"
);
