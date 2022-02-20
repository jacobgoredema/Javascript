class EasyHTTP {
    // Make an Http GET Request
    async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();

        return responseData

    }

    // -- Make an Http POST Request -- //
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        });

        const responseData = await response.json();
        return responseData;

    }

    // -- Make a HTTP PUT Request -- //
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        });

        const responseData = await response.json();
        return responseData;


    }

    // -- Make an HTTP DELETE Request -- //
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = await "Resource Deleted";
        return responseData;

    }

}