

var  a = 55;

function f1(){
    var b = 52;
    console.log(a)
    console.log(b)
}

console.log(a)      // it could be acess

// console.log(b)     // it could not be acess from outside

f1();

if(true){
    var c = 47;
    console.log(c);
}

console.log(c)
