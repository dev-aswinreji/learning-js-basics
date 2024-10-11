// const str = "Hello World"
// let newStr = ""
// function reverseString(str,n){
//     newStr += str[n]
//     if(n=== 0){
//        return newStr
//     }
//     return reverseString(str,--n)
// }

// reverseString(str,str.length-1)

// console.log(newStr,'newStr');

const num = [4,3,2,9,1,5,8]

function bubbleSort(num){
    let swapped = true
    while(swapped){
        swapped = false
        for(let i =0; i<num.length;i++){
            if(num[i]>num[i+1]){
               let temp = num[i]
               num[i] = num[i+1]
               num[i+1] = temp
                swapped = true
            }
        }
    }
}

bubbleSort(num)

let left,right;
function insertionSort(){
    
}

console.log(num,'sorted');


function recursiveBinarySearch(num,left,right,target){
    let middleIndex = Math.floor((left+right)/2)
    if(left>right){
        return -1
    }
    if(target === num[middleIndex]){
        return middleIndex
    }
    if(target < num[middleIndex]){
        return recursiveBinarySearch(num,left,middleIndex - 1,target)
    }else{
        return recursiveBinarySearch(num,middleIndex+1,right,target)
    }
}
let targetIndex = recursiveBinarySearch(num,left=0,right=num.length-1,11)
console.log(targetIndex,'targetIndex');

function binarySearch(num,left,right,target){
    while(left<right){
        let middleIndex = Math.floor((left+right)/2)
        if(target === num[middleIndex]){
            return middleIndex
        }
        if(target < num[middleIndex]){
            right = middleIndex - 1
        }else {
            left = middleIndex + 1
        }
    }
    return -1
}

let index = binarySearch(num,left=0,right=num.length -1,4)
console.log(index,'index is here ');



const obj = {
    names:"neymar"
}


const {names} = obj

console.log(names,'names is showing here');

const shallowObj = {...obj}

console.log(shallowObj);

const arr = [1,2,3,4]

const [a,b] = arr

console.log(a,b);

const newArr = [...arr]

console.log(newArr);

const fixedSizeArray = new Array(40)

fixedSizeArray[0] = 3

console.log(fixedSizeArray);

// Array methods
fixedSizeArray.push(3)
fixedSizeArray.pop()
