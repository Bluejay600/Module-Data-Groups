// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(arr) {
  // Verify the input is a non-empty array
  if (!Array.isArray(arr)) return null;

  // Filter out non-number values (keep only actual numbers)
  const nums = arr.filter(val => typeof val === "number" && !isNaN(val));

  if (nums.length === 0) return null;

  // Clone and sort the numbers to preserve input array
  const sorted = [...nums].sort((a, b) => a - b);

  const mid = Math.floor(sorted.length / 2);

  // Return median based on even/odd length
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

module.exports = calculateMedian;