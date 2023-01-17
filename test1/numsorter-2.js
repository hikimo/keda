const numbers = [5, 2, 3, 12, 1, 2, 9];

// Sort function
// Using BubbleSort Algorithm
function mysort(arr) {
 for (let i = 0; i < arr.length; i++) {
  for (let n = 0; n < (arr.length - i - 1); n++) {
    const curr = arr[n];
    const next = arr[n + 1];
    
    if (curr > next) {
      // Swap index
      arr[n] = next;
      arr[n + 1] = curr;
    }
  }
 }

  return arr;
}

// Test running cases
console.log("Sorting case 1:", mysort(numbers));
console.log("Sorting case 2:", mysort([ 44, 21, -21, 45, 2, 5, 7, 18, 43 ]));
console.log("Sorting case 3:", mysort([ 10, 2, 6, 4, 5, 1, 8, 9, 3 ]));