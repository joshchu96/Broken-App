Conceptual Exercise
Answer the following questions below:

What are some ways of managing asynchronous code in JavaScript? callbacks can be used to pass arguments to other functions. promises are values that are able to be available to be used (now,future, or never). Async/Await: Async functions will return a promise, and await keyword will put a function on hold until a promise is fulfilled.

What is a Promise? Promise provides a value(resolved, rejected) that can be used in a situation. Very useful when it comes to dealing with asyncronous javascript. We can chain promises for situation matters so that we can avoid a top-bottom effect of javascript coding.

What are the differences between an async function and a regular function? Aync function will return a promise and can be used alongside the "await" method. Useful when putting a function on hold before running any code under that function block. Example is requesting information from API, without the await method the regular function would just continue on before waiting for the data to be recieved from the API. Where as await will tell the async function to wait for data to be responded back from the serve prior to continuing on with the async function.

What is the difference between Node.js and Express.js? Node js is a service that helps run javascript code in the server without the use of the web browser. This is similar to how python language operates. ExpressJS is a web app framework for Node.js and allows a smoother communication between the frontend client and backend server. This is analogous to Flask in python. It provides tools to help make web development tasks easier (routes, middleware, request handling)

What is the error-first callback pattern? A function that would take two arguments in its parameter. The first argument is the "error" and second is "result". If error comes back it will return an error output. However if the function is successful the first error argument will be null or undefined. The function will then run the second argument "result".

What is middleware? A function that is independent from all your results that can be used in between the codes within a route. This creates cleaner more reusuable code.

What does the next function do? Next function will tell the code where to start the next function or route. it will pass on to the next app.use in line or next app.route. if there is a variable inside the next() it will relay to an error function.

What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

async function getUsers() {
const elie = await $.getJSON('https://api.github.com/users/elie');
const joel = await $.getJSON('https://api.github.com/users/joelburton');
const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

return [elie, matt, joel];
}
performance is very slow since we will be waiting for each code to get data in a syncronous matter at this point before getting the next persons rendering the async function useless. There is no error handling for each situation that could potentially make it difficult to fix if there is an error. The base URL is redundant so we could have just made a seperate variable for it and added a endpoint route for just username. This will provide cleaner code.
