const API_KEY = "2051edc3aa596e4115728546915d231e";

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(date =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = date.name;
        weather.innerText = `${date.weather[0].main} / ${date.main.temp}`
    }));
}
function onGeoError () {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError)