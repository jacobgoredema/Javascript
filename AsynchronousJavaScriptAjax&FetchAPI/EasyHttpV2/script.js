const http = new EasyHTTP;

// -- Get Users -- //
const users = http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));



// -- Post data -- //
// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@gmail.com'

}

// create Post
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));


// -- Update Post -- //
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));


// -- Delete Post -- //
http.delete('https://jsonplaceholder.typicode.com/users/11')
    .then(data => console.log(data))
    .catch(error => console.log(error));

// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //
// --  -- //