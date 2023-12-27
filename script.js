//your code here


const addbtn = document.getElementById("addTodoBtn");
const ol = document.getElementById("todoList");
const inputVal = document.getElementById("newTodoInput");

function listAdd (){
	const li = document.createElement("li");
	li.innerText = inputVal.value;
	ol.appendChild(li);
	inputVal.value = ""
}

addbtn.addEventListener ("click", listAdd);






