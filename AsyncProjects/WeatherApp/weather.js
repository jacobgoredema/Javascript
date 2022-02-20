class Weather {
    constructor(city, state) {
        this.apiKey = 'd0fe8c3082bea10e3f2c3af59502d202';
        this.city = city;
        this.state = state;

    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city},${this.state}.json`);
        // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;

    }

    // change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;

    }

}