// var a = 10;

// function f1() {
//   console.log("inside f1()");

//   function f2() {
//     console.log("inside f2()");
//   }
//   f2();
// }

// f1();



//////////////////////////////////////////////////////////


function outerFunction() {
    let a = 10;
  
    let name = "harshit";
  
    function innerFunction() {
      console.log(a); // 10
      console.log(name); // harshit
    }
  
    return innerFunction;
  }
  
  let x = outerFunction();
  
  x();







  //////////////////////////////////////////////////////////////////////////////
