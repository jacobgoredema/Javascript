const http = new easyHTTP;

// -- Get Posts -- //
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
//     console.log(response);
//     if (error) {
//         console.log(error);

//     } else {
//         console.log(response);

//     }

// });

// -- Get Single Posts -- //
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
//     if (error) {
//         console.log(error);

//     } else {
//         console.log(response);
//     }
// })

// -- Create Data // 
const data = {
    title: 'Custom post',
    body: ' This is a custom posts'
};

// -- Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, response) {
//     if (error) {
//         console.log(error);

//     } else {
//         console.log(response);

//     }

// });

// -- Update Post -- //
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, response) {
//     if (error)
//         console.log(error);
//     else
//         console.log(response);

// });

// -- Delete Post -- //
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
    if (error) {
        console.log(error);

    } else {
        console.log(response);

    }

});