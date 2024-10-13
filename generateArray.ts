//function* generator(num:number) {
// yield num;
// yield num + 10;
//}
//
//const gen = generator(10)
//
//console.log(gen.next().value);
//console.log(gen.next().value);
//
//
//function* yieldAndReturn() {
//  yield "Y";
//  yield "$Hello"
//  return "R";
//  yield "unreacheable";
//}
//
//const gene = yieldAndReturn()
//
//console.log(gene.next());
//console.log(gene.next());
//console.log(gene.next());
//console.log(gene.next());
//
//
function* powers(n:number) {
  
  for(let current = n; ; current *= n){
    yield current;
  }
}

for (const power of powers(2)) {
  if(power > 32) {
    break
  }
  console.log(power);
}
