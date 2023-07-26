let EmplyeeInfo = {
    name : "Amar kumar",
    emp_id: 25485,
    salary:25000,
    age : 25,
    12:"Ravish",



}

console.log(EmplyeeInfo)
console.log(EmplyeeInfo.salary)
console.log(EmplyeeInfo["emp_id"])
console.log(EmplyeeInfo[12])


// modification

EmplyeeInfo.salary=35000
EmplyeeInfo.Married = true
// EmplyeeInfo["emp_id"] = 45855
console.log(EmplyeeInfo)

// delete EmplyeeInfo.Married  //it will delete the Married Status 


console.log(EmplyeeInfo)


//get key or value 

console.log(Object.keys(EmplyeeInfo))


console.log(Object.values(EmplyeeInfo))


//freez and seal 


//Seal it will allow to modify but restrict to add

Object.seal(EmplyeeInfo);
EmplyeeInfo.Address = "India"  //  it will not added 
EmplyeeInfo.Married = false
console.log(EmplyeeInfo)


// Freez it will not allow to edit or add in the exist created object 

Object.freeze(EmplyeeInfo)

EmplyeeInfo.Address = "India"  //it will not add
EmplyeeInfo.Married = true    // it will not updated 
console.log(EmplyeeInfo)