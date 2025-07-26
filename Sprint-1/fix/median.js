// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Filter to include only numbers
  const numbers = list.filter(item => typeof item === 'number');

  // If no valid numbers, return null
  if (numbers.length === 0) return null;

  // Sort numbers in ascending order
  numbers.sort((a, b) => a - b);

  const mid = Math.floor(numbers.length / 2);

  // If odd length, return the middle number
  if (numbers.length % 2 !== 0) {
    return numbers[mid];
  }
   // If even length, return the average of the two middle numbers
  return (numbers[mid - 1] + numbers[mid]) / 2;
}

module.exports = calculateMedian;
