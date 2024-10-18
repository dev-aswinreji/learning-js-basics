
const obj = {name:"user",some:{
  age:34
}}
const clObj = {...obj}

const newObj = structuredClone(obj)

console.log(newObj,'obj')

newObj.name = "changed"
console.log(obj)

clObj.some.age= "shallow"

console.log(obj,'bojejejejej')
