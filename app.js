function mytodo(){
    let inputBox = document.getElementById("input");
    // console.log(inputBox.value)
    let listItem = document.getElementById("list-container");
    let listElement = document.createElement("li");

    let listText = document.createTextNode(inputBox.value)

    listElement.appendChild(listText);

//// delete///
    let deletebtn = document.createElement("button");
    let deleteText =document.createTextNode("Delete");
    deletebtn.appendChild(deleteText);
    deletebtn.setAttribute("onclick","delTodo(this)")
    listElement.appendChild(deletebtn)
    

//// Edit///
    let editbtn = document.createElement("button");
    let editText =document.createTextNode("Edit");
    editbtn.appendChild(editText);
   
    listElement.appendChild(editbtn)
   
    listItem.appendChild(listElement)
    editbtn.setAttribute("onclick","editTodo(this)")
    console.log(listElement)

    inputBox.value="";
}
function deleteTodo(){
    let listItem = document.getElementById("list-container");
    // listItem.innerHTML = "";
    listItem.remove();

}

function delTodo(a){
    console.log(a.parentNode.remove());

}
function editTodo(a){
    let currentli =a.parentNode.firstChild.nodeValue;
    // console.log(a)
    var inputField= prompt("Please Enter new task",currentli);
    a.parentNode.firstChild.nodeValue = inputField ;

}



