let str = "";

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    break loop1;
  }
  str = str + i;
}

console.log(str);
