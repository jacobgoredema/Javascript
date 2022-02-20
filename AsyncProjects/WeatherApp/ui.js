class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewPoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.location.name}, ${weather.location.region}`;
        this.description.textContent = weather.current.weather_descriptions;
        this.string.textContent = weather.current.temperature + " C";
        this.icon.setAttribute('src', weather.current.weather_icons);
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike}`;

        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
        this.dewPoint.textContent = `DewPoint: ${weather.current.temperature}`;
        this.wind.textContent = `Wind Degree is ${weather.current.wind_degree}, Wind Direction from ${weather.current.wind_dir} and Wind Speed is ${weather.current.wind_speed}`;

    }
}