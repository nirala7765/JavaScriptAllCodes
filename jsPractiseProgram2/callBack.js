function f1(callback){
    callback("India",100)
}

f1(function f2(country,age){
    console.log(country)
    console.log(age)

})