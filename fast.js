console.time()

let sum = 0
for(let i = 0; i<100000000000;i++){
  console.log(i)
	sum += i
}

console.log(sum,"sum is showing")

console.timeEnd()
