function AddTask(){
    let inputItem = document.getElementById("input1");
    if(inputItem.value && inputItem.value.length >2){
       let li = document.createElement("li")
       li.innerText=inputItem.value;
       inputItem.value="";


       let listsItem = document.getElementById("lists")
       listsItem.appendChild(li)

       

    }
    else{
        alert("Task Should not be Empty or Less than 2 Character")
    }


}


function RemoveAll(){
    let listsItem1 = document.getElementById("lists")
    listsItem1.innerHTML=""

}

function Remove1st(){

    

    let lisItem2 = document.getElementById("lists")
    let FirstItem = lisItem2.firstElementChild;
        lisItem2.removeChild(FirstItem)

    // if(lisItem2.value.length>1){
        

    // }else{
    //     alert("To-do List is Empt")
    // }
    

}
function RemoveLast(){

    

    let lisItem3 = document.getElementById("lists")
    let LasttItem = lisItem3.lastElementChild;
        lisItem3.removeChild(LasttItem)

    // if(lisItem2.value.length>1){
        

    // }else{
    //     alert("To-do List is Empt")
    // }
    

}