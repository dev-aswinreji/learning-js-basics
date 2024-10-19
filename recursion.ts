function recursion(n) {
  if(n === 100){
    return "hello world"
  }
  n++
  return recursion(n)
}

const data = recursion(1)
