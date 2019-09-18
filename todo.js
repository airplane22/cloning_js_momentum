const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li"); //variable name li-- not important / createElement tagname-- important!
    const delBtn = document.createElement("button");
    const newId = toDos.length+1;
    delBtn.innerText = "x";

    const span = document.createElement("span"); //li 안에 넣어줄 span tag
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text:text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); //맨 마지막에!
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    };

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();