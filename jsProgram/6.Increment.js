// there arwe 2 types of increment 1.Pre-increment and 2.post-increment
// preincrement(++a):-when the increment operator (++) comes beafore variable that is called pre-increment or we can say it will
//  increment the value then it will   assign the value or print he value.

//  Post-increment (a++):- when the increment operatoer comes after the variable and increase the value after
//   assign the value or print the value.


// pre-increment
let a = 10;
let b = ++a
console.log(b)    //expected output is 11


//post-increment
let d = 55;
let f = d++;
console.log(f)   //expected output is 55

let e = 40
e++
console.log(e)


let g = 10;
let h = ++g + g++
console.log(h)     //expected value is 22

console.log(g)      //expected value is 12

let x =5
let y = x + x++
console.log(y)   //expected value is 10

console.log(x)   //expected value is 6

var input = 13;
var output1 = input++ +input++ +input++;   
var output2= ++input + ++input+ ++input;    
console.log(output1)                       //expected value is 33
console.log(output2)                            //expected value is 36
var output3 = input++ + ++input + input++;
console.log(output3)                                            //expected value is 43