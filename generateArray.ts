function* generator(num:number) {
 yield num;
 yield num + 10;
}

const gen = generator(10)

console.log(gen.next().value);
console.log(gen.next().value);


function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreacheable";
}

const gene = yieldAndReturn()

console.log(gene.next());
console.log(gene.next());
console.log(gene.next());


