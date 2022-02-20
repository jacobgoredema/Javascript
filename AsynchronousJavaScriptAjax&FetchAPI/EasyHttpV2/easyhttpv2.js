class EasyHTTP {
    // Make an Http GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    resolve(data);
                })
                .catch(error => {
                    // console.log(error);
                    reject(error);
                });

        });

    }

    // -- Make an Http POST Request -- //
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)

                })
                .then(resolve => resolve.json())
                .then(data => resolve(data))
                .catch(error => reject(error));

        });

    }

    // -- Make a HTTP PUT Request -- //
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)

                })
                .then(resolve => resolve.json())
                .then(data => resolve(data))
                .catch(error => reject(error));

        });
    }

    // -- Make an HTTP DELETE Request -- //
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resolve => resolve.json())
                .then(() => resolve('data deleted.'))
                .catch(error => reject(error));

        });
    }

}