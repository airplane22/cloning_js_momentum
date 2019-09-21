const weather = document.querySelector(".js-weather");

const API_KEY = "6ef3c983c480ff895d4a255286037522";
const COORDS = 'coords';

function getWeather(lat, lng){ //개발자도구 - network에서 request 확인가능
    fetch(
        `https:\\api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response) {
            console.log(response);
            return response.json();
    })
        .then(function(json){
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
 // then으로 데이터 로드 끝난 후 실행시킬 함수를 지정
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // latitude : latitude 와 같음. key와 value 값 같을 때 이렇게 쓰면 됨
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log(`Can't access geo location`);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather;
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();