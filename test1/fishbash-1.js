function fishbash(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("Bash");
    } else if (i % 3 === 0) {
      console.log("Fish");
    } else {
      continue;
    }
  }
}

fishbash(100);