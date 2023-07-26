var a= 10;
var b = 5;
var c=12;
var e = 8;
var d;
d= parseInt((a*(c-b)/e+(b+c))<=(e*(c+a)/(b+c)+a));

console.log(d);

if(d==1){
    console.log(parseInt((a*(c-b)/e + (b+c))));
}else{
    console.log(parseInt((e*(c+a)/(b+c)+a)));
}



//question10

var valA = "true";
var valB = "false";
var valC = true;
var valD = false;

console.log(!!valA==!!valB);
console.log(!!valC==!!valD);
