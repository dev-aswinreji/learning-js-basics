
Array.prototype.last = function () {
  if (this.length === 0) {
    return - 1
  } else {
    return this[this.length - 1]
  }
}

Array.prototype.first = function () {
  if (this.length === 0) {
    return - 1
  } else {
    return this[0]
  }

}
Array.prototype.middle = function () {
  if(this.length %2 === 0){
    return "there is no middle number"
  }
  if (this.length === 0) {
    return - 1
  } else {
    return this[Math.round(this.length / 2) - 1]
  }
}
const arr = [22, 34,48, 77]

const val = arr.last()
console.log(arr.first(), 'first');
console.log(arr.middle(),'middle');
console.log(val, 'last')