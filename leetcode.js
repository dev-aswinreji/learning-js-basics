let str = "abcdefghi";

let k = 3;

let count = 0
let arr = []
let newStr = ""

for (let i =0; i<str.length; i++){
  newStr += str[i]
    count++
  if(count == k)  {
    arr.push(newStr)  
    count = 0
    newStr = ""
  }
}

let str = "abcde"

let k = 3

let fill = "x"


for(let i = 0; i<str.length; i++){
  
}


console.log(arr,'arr')
