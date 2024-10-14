function recursion(n) {
  if(n === 100){
    return "hello world"
  }
  n++
  return recursion(n)
}

const data = recursion(1)
console.log(data,'data is showing');
