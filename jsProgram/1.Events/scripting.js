let btn1 = document.getElementById("btn")
btn1.addEventListener('click', function () {
    let h1 = document.createElement("h1")
    h1.innerText = "Added by Single click"
    document.body.appendChild(h1)
})

let btn2 = document.getElementById("btn2")

btn2.addEventListener('dblclick',function(){
    let h2 = document.createElement("h2")
    h2.innerText="Added By Double Click"
    document.body.appendChild(h2)

})

let btn3 = document.getElementById("btn3")

btn3.addEventListener('mouseover',function(){
    let h3 = document.createElement("h3")
    h3.innerText="Addeed by MouseOver"
    document.body.appendChild(h3)
})


let btn4 = document.getElementById("btn4")

btn4.addEventListener('mouseout',function(){
    let h4 = document.createElement("h4")
    h4.innerText="Added by Mouse Out"
    document.body.appendChild(h4)
})


let input1 = document.getElementById("inpt1")

input1.addEventListener('keydown',function(event){
    console.log("key pressed",event.key)

})

let input2 = document.getElementById("inpt1")

input1.addEventListener('keyup',function(event){
    console.log("key Released",event.key)

})



let scrl1 = document.getElementById("scrl")

scrl1.addEventListener("scroll",function(){
    console.log("i am Scrolling",scrl1.scrollTop)

    if( scrl1.scrollTop > 362 && scrl1.scrollTop <370 ){
        let h1  = document.createElement("h1")
        h1.innerText="You are in Middle"
        document.body.appendChild(h1)
    }


})


let img1 = document.getElementById('img1')
img1.addEventListener("load",function(){
    console.log("Image Loaded SucessFulyy.........")
})

let img2 = document.getElementById('img1')
img2.addEventListener("error",function(){
    // console.log("Image Loading Failed.........")

    let h7 = document.createElement("h1")
    h7.innerText="Image Loading Failed"
    document.body.appendChild(h7)
})

