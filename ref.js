
const arr = [{ a: 1 }, { b: 2 }];
const b = [...arr];
b[1].b = 5
console.log(arr === b)
console.log(b,'b ',arr)
