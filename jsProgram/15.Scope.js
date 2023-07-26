//there are 2 types of scope 
//1.Global scope : the variable which is create out of block 
// that could be acessible from everywhere it could be acess from any block which is written in codes

// 2. Local Scope : the variable which are mention in the block 
//it could only acess with in that specific block 

let age = 10;
let name = "rajeev"

console.log(age);

function f1(){
    let number = 110;
    console.log(number)
    console.log(name)
}

   f1();


