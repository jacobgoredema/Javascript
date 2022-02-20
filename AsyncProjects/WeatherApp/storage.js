class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = "Kempton Park ";
        this.defaultState = 'Gauteng';

    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;

        } else {
            this.city = localStorage.getItem('city');

        }

        if (localStorage.getItem('state') === null) {
            this.state = this.defaultState;

        } else {
            this.state = this.defaultState;

        }

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);

    }
}