// -- XHR -- //
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an XHR Object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            document.getElementById('output').innerHTML = `
            <h6>${xhr.responseText}</h6>
            `;
        }

    }

    xhr.send();
}

// -- JSON -- //
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customer.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.response);
            const customer = JSON.parse(this.response);
            const output = `
            <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;

        }
    }

    xhr.send();

}

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customers.json", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function (customer) {
                output += `
                <ul>
                    <li>${customer.name}</li>
                    <li>${customer.name}</li>
                    <li>${customer.company}</li>
                    <li>${customer.phone}</li>
                </ul>
                `;

            });

            document.getElementById("customers").innerHTML = output;

        }
    }

    xhr.send();

}

// -- Data From an External API - Chuck Norris Project -- //
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = "";
            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `
                    <li>${joke.joke}</li>
                    `;
                });

            } else {
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.jokes').innerHTML = output;

        }
    }

    xhr.send();
    e.preventDefault();

}


// -- Callback Functions -- //
const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }

];

function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            // const error = true;
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');

            }

        }, 2000)

    })
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;

        });

        document.body.innerHTML = output;

    }, 1000)
}

createPost({
        title: 'Post three',
        body: 'This is post three'
    }).then(getPosts)
    .catch(function (error) {
        console.log(error);

    });