export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "e93d5153f6bd745ab58596c98cf9a980";
    this.city = city;
    this.countryCode = countryCode;
    this.unit = "metric";
  }
  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&units=${this.unit}&appid=${this.apiKey}`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}

//https://api.openweathermap.org/data/2.5/weather?q=London,UK&units=metric&appid=e93d5153f6bd745ab58596c98cf9a980
