//Question 1.

function searchNumber(arr, searchElem) {
    var positions = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === searchElem) {
        positions.push(i);
      }
    }
    
    if (positions.length === 0) {
      return -1;
    } else if (positions.length === 1) {
      return positions[0];
    } else {
      return positions;
    }
  }
  
 
  var arr = [1, 2, 3, 4, 5, 1, 3];
  var searchElem = 4;

  var result = searchNumber(arr, searchElem);
  console.log(result); 
  
  searchElem = 1;
  result = searchNumber(arr, searchElem);
  console.log(result); 
  
  searchElem = 7;
  result = searchNumber(arr, searchElem);
  console.log(result);




  console.log("Q1 END =====================")
  
  

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question2

function printPattern(rows) {
    for (var i = rows; i >= 1; i--) {
      var pattern = "";
      for (var j = 5; j >= i; j--) {
        pattern += j;
      }
      console.log(pattern);
    }
  }
  
  
  var numRows = 5;
  printPattern(numRows);



  console.log("Q2 END =====================")

  

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question3
  function sortArray(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  
  var inputArray = [3, 2, 1, 4, 5, 45];
  var sortedArray = sortArray(inputArray);
  console.log(sortedArray);  

  


  console.log("Q3 END =====================")


  ////////////////////////////////////////////////////////////////////////////////////////

//Question4
  function areAnagrams(str1, str2) {

    var cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    var cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
  
    var sortedStr1 = cleanStr1.split('').sort().join('');
    var sortedStr2 = cleanStr2.split('').sort().join('');
  
   
    return sortedStr1 === sortedStr2;
  }
  
  
  var inputStr1 = 'LISTEN';
  var inputStr2 = 'SILENT';
  var result = areAnagrams(inputStr1, inputStr2);
  console.log(result);  
  
  inputStr1 = 'HELLO';
  inputStr2 = 'JELLO';
  result = areAnagrams(inputStr1, inputStr2);
  console.log(result);  
  
  
  console.log("Q4 END =====================")

  ////////////////////////////////////////////////////////////////////////////////////////


  // Question5.
  function reverseString(str) {
    var reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str.charAt(i);
    }
    return reversedStr;
  }
  
  
  var inputStr = 'Hello';
  var reversedStr = reverseString(inputStr);
  console.log(reversedStr);


  console.log("Q5 END =====================")

  //////////////////////////////////////////////////////////////////////////////////////