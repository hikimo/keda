function reverseText(text = "") {
  const reversed = text.toLowerCase().split("").reverse().join("");
  
  return text === reversed
    ? true
    : false;
}

// Test cases
// False case
console.log("False case with kurakura:", reverseText("kurakura"));
// True case
console.log("True case with apa:", reverseText("apa"));