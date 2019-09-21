const API_KEY = "6ef3c983c480ff895d4a255286037522";
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify('coordsObj'));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // latitude : latitude 와 같음. key와 value 값 같을 때 이렇게 쓰면 됨
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log(`Can't access geo location`);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadCoords()===null) {
        askForCoords();
    } else {
        //getWeather;
    }
}

function init(){
    loadCoords();
}
init();