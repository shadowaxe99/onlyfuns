import { performance } from 'perf_hooks';

/**
 * Measures the execution time of a function.
 * @param func - The function to measure.
 * @returns The execution time in milliseconds.
 */
export function measureExecutionTime(func: () => void): number {
  const startTime = performance.now();
  func();
  const endTime = performance.now();
  return endTime - startTime;
}

/**
 * Checks if the current device has enough resources to handle the app.
 * @returns True if the device has enough resources, false otherwise.
 */
export function hasEnoughResources(): boolean {
  // Implementation to check device resources
  // ...
  return true;
}

/**
 * Optimizes the performance of a given function by throttling its execution.
 * @param func - The function to optimize.
 * @param delay - The delay in milliseconds between each execution.
 * @returns The optimized function.
 */
export function optimizePerformance(func: () => void, delay: number): () => void {
  let timeout: NodeJS.Timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}