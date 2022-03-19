export class UI {
  constructor() {
    const d = document;
    this.location = d.getElementById("weather-location");
    this.description = d.getElementById("weather-description");
    this.string = d.getElementById("weather-string");
    this.humidity = d.getElementById("weather-humidity");
    this.wind = d.getElementById("weather-wind");
  }

  async render(weather) {
    this.location.textContent = `${weather.name} / ${weather.sys.country}`;
    this.description.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `${weather.main.temp} °C`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.wind.textContent = `${weather.wind.speed} m/s`;
  }
}
