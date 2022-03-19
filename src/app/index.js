const { Weather } = require("./wheater");
const { UI } = require("./UI");
const { Store } = require("./Store");

require("./index.css");
const d = document;
//
const store = new Store();
const { city, countryCode } = store.getLocationData();
console.log(city, countryCode);
//
const ui = new UI();
const weather = new Weather(city, countryCode);

//

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

//
d.addEventListener("DOMContentLoaded", fetchWeather);

const _btn = d.getElementById("weather-change-btn");

_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const _city = d.getElementById("city").value;
  const _countryCode = d.getElementById("country-code").value;
  weather.changeLocation(_city, _countryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
  console.log(_city, _countryCode);
});
