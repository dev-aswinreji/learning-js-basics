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
//
//const num = [4,3,2,9,1,5,8]
//
//function bubbleSort(num){
//    let swapped = true
//    while(swapped){
//        swapped = false
//        for(let i =0; i<num.length;i++){
//            if(num[i]>num[i+1]){
//               let temp = num[i]
//               num[i] = num[i+1]
//               num[i+1] = temp
//                swapped = true
//            }
//        }
//    }
//}
//
//bubbleSort(num)
//
//let left,right;
//function insertionSort(){
//
//}
//
//console.log(num,'sorted');
//
//
//function recursiveBinarySearch(num,left,right,target){
//    let middleIndex = Math.floor((left+right)/2)
//    if(left>right){
//        return -1
//    }
//    if(target === num[middleIndex]){
//        return middleIndex
//    }
//    if(target < num[middleIndex]){
//        return recursiveBinarySearch(num,left,middleIndex - 1,target)
//    }else{
//        return recursiveBinarySearch(num,middleIndex+1,right,target)
//    }
//}
//let targetIndex = recursiveBinarySearch(num,left=0,right=num.length-1,11)
//console.log(targetIndex,'targetIndex');
//
//function binarySearch(num,left,right,target){
//    while(left<right){
//        let middleIndex = Math.floor((left+right)/2)
//        if(target === num[middleIndex]){
//            return middleIndex
//        }
//        if(target < num[middleIndex]){
//            right = middleIndex - 1
//        }else {
//            left = middleIndex + 1
//        }
//    }
//    return -1
//}
//
//let index = binarySearch(num,left=0,right=num.length -1,4)
//console.log(index,'index is here ');
//
//
//
//const obj = {
//    names:"neymar"
//}
//
//
//const {names} = obj
//
//console.log(names,'names is showing here');
//
//const shallowObj = {...obj}
//
//console.log(shallowObj);
//
//const arr = [1,2,3,4]
//
//const [a,b] = arr
//
//console.log(a,b);
//
//const newArr = [...arr]
//
//console.log(newArr);
//
//const fixedSizeArray = new Array(40)
//
//fixedSizeArray[0] = 3
//
//console.log(fixedSizeArray);

// Array methods
//fixedSizeArray.push(3)
//fixedSizeArray.pop()


// Linked List 

class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }

  getSize(){
    return this.size
  }

  isEmpty (){
    return this.size === 0
  }

  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node 
    }else {
      node.next = this.head
      this.head = node
    }
    this.size++

  }

  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node 
    }else {
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node 
      this.size++
    }

  }

  display(){
    console.log(this.head)
  }
}

const list = new LinkedList()

list.prepend(3)
list.prepend(4)
list.prepend(5)
list.append(1)
list.display()
