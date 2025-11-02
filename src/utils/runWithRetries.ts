/**
 * Generic retry utility that can retry any async function
 * @param task - The async function to retry
 * @param options - Retry configuration options or number of retries
 * @returns Promise that resolves with the task result or rejects after all retries
 */
export async function runWithRetries<T>(
	task: () => Promise<T>,
	options:
		| number
		| {
				retries?: number;
				delayMs?: number;
				backoffMultiplier?: number;
		  } = {},
): Promise<T> {
	// Handle both number and options object
	const config = typeof options === "number" ? { retries: options } : options;

	const { retries = 1, delayMs = 1000, backoffMultiplier = 1 } = config;

	// If retries < 1, just run the task once without retry logic
	if (retries < 1) {
		return await task();
	}

	for (let attempt = 1; attempt <= retries + 1; attempt++) {
		try {
			return await task();
		} catch (error) {
			if (attempt === retries + 1) {
				const errorMessage =
					error instanceof Error ? error.message : String(error);
				console.log(
					`   ❌ Failed after ${retries + 1} attempts: ${errorMessage}`,
				);
				throw error;
			}

			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.log(
				`   🔄 Retry ${attempt}/${retries} in ${delayMs}ms: ${errorMessage}`,
			);

			await new Promise((resolve) => setTimeout(resolve, delayMs));
			await new Promise((resolve) => setTimeout(resolve, delayMs));
		}
	}

	// This should never be reached due to the throw in the loop
	throw new Error("Unexpected end of retry loop");
}
