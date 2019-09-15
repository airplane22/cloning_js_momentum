const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",  //미리 써놓은 것인 듯!
    SHOWING_CN = "showing";

function setName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); //form submit 날아가고 새로고침 되는 것 막아줌
    const currentUser = input.value;
    paintGreeting(currentUser);
    setName(currentUser);
}

function askForName() {
    form.classList.add(SHOWING_CN); //form이 보이도록 클래스리스트에 추가
    form.addEventListener("submit", handleSubmit); //submit 되었을 때 handleSubmit
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); //아직 showing class 안 붙였는데 미리 제거해주는 듯
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName()
    } else {
        paintGreeting(currentUser)
    }
}


function init() {
    loadName()
}

init()
