/**
 * HTTP Client Utilities - Centralized impit configuration with proxy support
 */

import { Impit } from "impit";
import { runWithRetries } from "./runWithRetries";

const getProxyUrl = (type: string, country?: string) => {
  return "";
};

/**
 * Create an impit HTTP client with optional DC proxy
 */
export function createHttpClient(useProxy = false) {
  const config: any = {
    browser: "chrome",
  };

  if (useProxy) {
    try {
      const proxyUrl = getProxyUrl("resi");
      config.proxyUrl = proxyUrl;
    } catch (error) {
      if (error instanceof Error) {
        console.warn(`Failed to configure proxy: ${error.message}`);
      } else {
        console.warn(`Failed to configure proxy: ${String(error)}`);
      }
      // Continue without proxy if configuration fails
    }
  }

  return new Impit(config);
}

/**
 * Create an HTTP client with automatic retry logic
 */
export async function createHttpClientWithRetries(
  operation: (http: Impit) => Promise<any>,
  retries = 3,
  useProxy = true
) {
  return runWithRetries(async () => {
    const http = createHttpClient(useProxy);
    return operation(http);
  }, retries);
}
