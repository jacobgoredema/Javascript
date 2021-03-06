// Init Storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather Class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

//-- Get weather on DOM load -- //
document.addEventListener('DOMContentLoaded', getWeather);

// -- Change location event -- //
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // change location
    weather.changeLocation(city, state);

    // Set location in LocalStorage
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close modal window
    $('#locModal').modal('hide');

});

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);

        })
        .catch(error => console.log(error));

}