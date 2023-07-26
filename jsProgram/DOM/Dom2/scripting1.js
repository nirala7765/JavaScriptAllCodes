// console.log(document);
// // console.log(document.body);

let para1 = document.getElementById("p1")
let para2 = document.getElementById("p2")
console.log(para1)
console.log(para2)
para1.style.color="blue"
para1.style.fontSize="30px"
// para1.innerText="Company logo"
// para1.textContent="NewCompanyLogo"

para1.innerHTML="<h1>Company Logo Using Tag</h1>"

  


// let Names = document.getElementsByClassName("names")
// // console.log(Names)
// // console.log(Names[3])
// console.log(Names.length)

// Names[0].innerText = "Nirala"



function HideNames(){
    let Names= document.getElementsByClassName("names")
    for(let i =0;i<Names.length;i++){
        Names[i].style.visibility="hidden"
    }
}
function ShowNames(){
    let Names= document.getElementsByClassName("names")
    for(let i =0;i<Names.length;i++){
        Names[i].style.visibility="Visible"
    }
}
function ChangeColor(){
    let Names= document.getElementsByClassName("names")
    for(let i =0;i<Names.length;i++){
        Names[i].style.color="Red"
    }
}



function changeColor(){

    let courses = document.getElementsByTagName("h2")
    // console.log(courses)
    // console.log(courses.length-1)
    courses[1].style.color="red"
    
}


let newItem = document.createElement("h1")
newItem.innerText="Orange"

let items = document.getElementById("item")

items.appendChild(newItem);


const para3 = document.createElement("p")

para3.innerText="These are Healthy fruits"
items.appendChild(para3)






////////////////////////////////////using Query Selector/////////////////////////////////////////////////////////////////////////////////



let para4 = document.querySelector("#pl1")
para4.style.color="lightblue"

let para5 = document.querySelector(".pl2")
para5.style.color="Blue"


let para6 = document.querySelector("p")
para6.style.color="Gray"

















