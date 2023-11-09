async function retryAsyncOperation(asyncFunction, maxRetries) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      return await asyncFunction();
    } catch (error) {
      retries++;
    }
  }
  throw new Error("Max retries reached.");
}
