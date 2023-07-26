function f1(num , x, name){
    console.log("inside function f1")
    console.log(num,name)
    x("India");   //calling function f2 which is as argument passed in f1 function
}

f1(10,function f2(country){
    console.log("I am in inside function f2 ")   //function f2 passed as argument in f1 function
    console.log(country);
}, "Raja"
);