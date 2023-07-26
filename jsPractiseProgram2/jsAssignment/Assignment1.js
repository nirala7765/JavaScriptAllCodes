// // Question 1:
// // var str1 = 'Today is';
// // var str2 = '      a beautiful day     '
// // var str3 = ' In Hawaii.     '
// // Result = 'Today is a beautiful day In Hawaii.'
// // Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.


var str1 = 'Today is';
var str2 = '       a beautiful day       ';
var str3 = ' In Hawail.';
var result = str1 + " "+ str2.trim() + str3;
console.log(result);



console.log("Q1 END =====================")






// // Question 2:
// // var enteredAlphabet = 'd' or "D"
// // Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.



var enteredAlphabet = '98';

switch (enteredAlphabet.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log(enteredAlphabet + " is a vowel.");
    break;
  case 'b':
  case 'c':
  case 'd':
  case 'f':
  case 'g':
  case 'h':
  case 'j':
  case 'k':
  case 'l':
  case 'm':
  case 'n':
  case 'p':
  case 'q':
  case 'r':
  case 's':
  case 't':
  case 'v':
  case 'w':
  case 'x':
  case 'y':
  case 'z':
    console.log(enteredAlphabet + " is a consonant.");
    break;
  default:
    console.log(enteredAlphabet + " is not an alphabet.");
}


console.log("Q2 END =====================")


// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.




function calculator() {
    var operation = true;
  
    while (operation) {
      var num1 = parseFloat(prompt("Enter the first number:"));
      var num2 = parseFloat(prompt("Enter the second number:"));
      var operator = prompt("Enter the operator (+, -, *, /) or 'q' to quit:");
  
      if (operator === 'q') {
        operation = false;
        console.log("Calculator program terminated.");
        break;
      }
  
      var result;
  
      switch (operator) {
        case '+':
          result = num1 + num2;
          console.log("Result: " + result);
          break;
        case '-':
          result = num1 - num2;
          console.log("Result: " + result);
          break;
        case '*':
          result = num1 * num2;
          console.log("Result: " + result);
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
            console.log("Result: " + result);
          } else {
            console.log("Error: Division by zero is not allowed.");
          }
          break;
        default:
          console.log("Error: Invalid operator.");
      }
    }
  }
  
  calculator();


console.log("Q3 END =====================")




// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.


var side1 = parseFloat(prompt("Enter the value of side1 :"));
var side2 = parseFloat(prompt("Enter the value of side2 :"));
var side3 = parseFloat(prompt("Enter the value of side3 :"));

if((side1==60 & side2==60 & side3==60) & (side1+side2+side3) ==180 ){
    console.log("The traingle which made by Above side values is said to be  Equilateral Triangle ");
}
else if((side1 == side2 || side2==side3 || side1==side3) & (side1+side2+side3) ==180 ){
    console.log("The traingle which made by Above side values is said to be  Isosceles Triangle ");
    
}
else if ((side1!=side2!=side3) & (side1+side2+side3) ==180 ){
    console.log("The traingle which made by Above side values is said to be  said Scalene Triangle ");
}
else{
    console.log("The above value of sides can not make traingle bcoz the sum of all side value is not between 0 to 180");
}
console.log("Q4 END =====================")

// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354


function calculateElectricityBill(units) {
    var totalBill = 0;
  
    if (units <= 50) {
      totalBill = units * 0.5;
    } else if (units <= 150) {
      totalBill = 50 * 0.5 + (units - 50) * 0.75;
    } else if (units <= 250) {
      totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
    } else {
      totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
    }
  
    // Calculate surcharge
    var surcharge = totalBill * 0.2;
    totalBill += surcharge;
  
    return "Total Units: " + units + "\n" +
           "Total Bill: INR " + totalBill.toFixed(2);
  }
  
  // Example usage
  var units = 300;
  var bill = calculateElectricityBill(units);
  console.log(bill);
  

console.log("Q5 END =====================")