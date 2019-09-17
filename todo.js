const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";

function paintToDos(text){
    const li = document.createElement("li"); //variable name li-- not important / createElement tagname-- important!
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";

    const span = document.createElement("span"); //li 안에 넣어줄 span tag
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){};

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();