// function createCounter(num) {
//  return {
//    increment:()=>{
//    num = ++num
//    }
//  } 
// }
//
// let num = 4
// const count = createCounter(num)
// console.log(count,'countttt')
// const data =count.increment()
// console.log(data,'dataaaa')
// console.log(num)

// function invocation 

// var x = 1;
// a()
// b()
// console.log(x)
//
// function  a() {
//   var x = 10;
//   console.log(x);
// }
//
// function b() {
//  var x = 100; 
//   console.log(x)
// }
//
// console.log(global.window)


function yoo(params) {
 var a = 10; 
}
yoo()
console.log(a,'a')

// window is actually a global object which is created along with the global execution context
// whenever any js program is run there is global object is created global execution context is created and along with the execution context this variable is created 
// global object in case of browser is window 
// wherever js running it has js engine , all this js engine has the repsonsibility to create the global object , in the case of browser it is known as window ,
// At this global level this === window 
