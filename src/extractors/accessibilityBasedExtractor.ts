import { JSDOM } from "jsdom";
import { createHttpClientWithRetries } from "../utils/httpClient";

export async function extractMainContainer(doc: Document) {
  // Find main content node
  const mainEl =
    doc.querySelector("#main-content") ||
    doc.querySelector("#main") ||
    doc.querySelector('[role="main"]') ||
    doc.querySelector("main") ||
    doc.querySelector("#content");

  if (mainEl) {
    const { window } = new JSDOM("<!DOCTYPE html><html><body></body></html>");
    const newDoc = window.document;
    newDoc.body.appendChild(mainEl.cloneNode(true));
    return newDoc;
  } else {
    console.warn("No main content node found");
    return doc;
  }
}
