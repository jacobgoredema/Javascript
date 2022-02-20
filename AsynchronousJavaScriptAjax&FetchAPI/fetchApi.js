// -- THE FETCH API Using a Text file-- //
document.getElementById('button1').addEventListener('click', getText);

// function getText() {
//     fetch('data.txt')
//         .then(function (response) {
//             return response.text();

//         })
//         .then(function (data) {
//             console.log(data);
//             document.getElementById('output').innerHTML = data;

//         })
//         .catch(function (error) {
//             console.log(error);

//         });

// }

// -- USING ARROW FUNCTIONS -- //
function getText() {
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;

        })
        .catch(error => console.log(error));

}


// -- THE FETCH API Using a JSON file-- //
document.getElementById('button2').addEventListener('click', getJson);

// function getJson() {
//     fetch('customers.json')
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {
//             console.log(data);
//             let output = '';
//             data.forEach(function (post) {
//                 output += `<li>${post.name}</li>`;

//             });

//             document.getElementById('output').innerHTML = output;

//         })
//         .catch(function (error) {
//             console.log(error);

//         });
// }

// -- USING ARROW FUNCTIONS -- //
function getJson() {
    fetch('customers.json')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.forEach(post => {
                output += `<li>${post.name}</li>`;
            });

            document.getElementById('output').innerHTML = output;

        })
        .catch(error => console.log(error));
}

// -- THE FETCH External API Using a JSON file-- //
document.getElementById('button3').addEventListener('click', getApiData);

// function getApiData() {
//     fetch('https://api.github.com/users')
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {
//             console.log(data);
//             let output = '';
//             data.forEach(function (user) {
//                 output += `
//                 <li>
//                 <img class="logo" src=${user.avatar_url} />
//                 ${user.login}</li>`;

//             });

//             document.getElementById('output').innerHTML = output;

//         })
//         .catch(function (error) {
//             console.log(error);

//         });
// }

// -- USING ARROW FUNCTIONS -- //
function getApiData() {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(user => {
                output += `
                <li>
                <img class="logo" alt="${user.login}" title="${user.login}" src="${user.avatar_url}"/>
                 ${user.login}
                </li>`;

            });

            document.getElementById('output').innerHTML = output;

        })
        .catch(error => console.log(error));
}