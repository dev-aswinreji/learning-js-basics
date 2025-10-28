// let str = "abcdefghi";
// let str = "a"
//
// let k = 3;
//
// let count = 0
// let arr = []
// let newStr = ""

// for (let i =0; i<str.length; i++){
//   newStr += str[i]
//     count++
//   if(count == k)  {
//     arr.push(newStr)  
//     count = 0
//     newStr = ""
//   }
// }


// let k = 3

// let fill = "x"
//
//
// for(let i = 0; i<str.length; i++){
//   newStr += str[i] 
//   console.log(newStr,'newStr')
//   if(newStr.length < k){
//     for (let j = 0; j <= k - newStr.length; j++) {
//     newStr += fill
//     }
//   } 
//   console.log(newStr,'newStr') 
// }
//
//
// console.log(arr,'arr')
//
//
let nums = [9,4,1,7];
let k = 1;
let subArrays = []
let arr = []
let count = 0

for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i; j < nums.length - 1; j++) {

      count++
      arr.push(nums[j])

    if(count == k) {
        subArrays.push(arr)
        arr = [];
        count = 0
        break;
      }
  }
}

console.log('arr',arr)
console.log(subArrays,'newArr is here')
