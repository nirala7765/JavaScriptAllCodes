// function outerFunction(){
//     let a= 10;
//     let name ="harshit"

//     function innerFunction(){
//         console.log(a)
//         console.log(name)
//     }

//     return innerFunction;
// }


// let x = outerFunction();
// x();




function outerFunction(){
    let a= 10;
    let name ="harshit"

    function innerFunction(){

        function f1(){
            let a= 100;
            console.log(a)
            console.log(name)

        }

        return f1;
       
    }

    return innerFunction;
}


let x = outerFunction();
x();


let y = x();

y();



