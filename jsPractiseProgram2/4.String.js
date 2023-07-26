let Myname = "Arun Kumar Nirala";
let sortName = 'Arun';

let NickName = `Nirala`;

console.log(Myname);
console.log(sortName);
console.log(NickName);
  //.length calculate your length of your string like how many character in your string
console.log(NickName.length);

//.toLowecase and .touppercase  is the function which will change your string in to alphabet



console.log(Myname.toLowerCase());
console.log(sortName.toUpperCase());

console.log(Myname[5]);
console.log(NickName[0]);

console.log(Myname[500]);



//concatFunction it will join to 2 string together 
let MidName= "Kumar";

let fullName = sortName.concat(" "+MidName+ " " +NickName);
console.log(fullName);

//substring and slice is find the substring from your given String 
console.log(fullName.substring(0,8));
console.log(fullName.slice(0,8));
  

// split function can split your string according to your prefrence



let river = "gabaga is very Log River";
console.log(river.split(","));

console.log(river.substring(0,1).toUpperCase() + river.substring(1, river.length+1));


//trim function it will remove sapce from the sentence

let dummy = "    ARavisha     ";
console.log(dummy);
console.log(dummy.trim());

//indexof cam return the index of of your given character which is in your string 
// lastIndexOf can return from the last of your string
console.log(dummy.indexOf("v"));
console.log(dummy.indexOf("a"));
console.log(dummy.lastIndexOf("a"));


// .includes it will check that given substring is your specified string or not it will return boolean value either true or false 
console.log(dummy.includes("vi"));
console.log(dummy.includes("iv"));

// .charAt it will return the char which is present in your string according to your input index 


console.log(dummy.charAt(7));



