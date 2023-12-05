### Conceptual Exercise

Answer the following questions below:

- **What are some ways of managing asynchronous code in JavaScript?**
    Asynchronous code can be handled with the then/catch method - where 'then' will be executed once a promise is delivered, or catch will be executed if there is an error retrieving the promise. Async/await can also be used - where a function can be declared as async, and a promise is 'awaited', meaning code after the promise will wait for the promise to be retrieved before running.

----------

- **What is a Promise?**
    A promise is a returned object which represents the  result of an asynchronous operation.

----------

- **What are the differences between an async function and a regular function?**
    The operations in a regular function are executed sequentially - one is not started until the one before finishes. Operations can run independently of each other in an asynchronous function.

----------

- **What is the difference between Node.js and Express.js?**
    Node.js is a server-side platform using JavaScript-like language to develop applications such as APIs. Express.js is a frameowrk layer built on top of Node.js used to add middleware to an application.

----------

- **What is the error-first callback pattern?**
    The error-first callback pattern is where the first object of the function call is the error, followed by the result. This callback pattern will either return the error with information, or the result of the function.

----------

- **What is middleware?**
    Middleware is code that has access to requesting objects. In express, middleware has access to the request and response objects. It is code that runs in the middle of the request / response cycle.

----------

- **What does the `next` function do?**
    The next function is used to predicate part of code that is to be executed after a middleware function is finished.

----------

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
   
1. Names are hard coded into variables.
2. Requested users should be passed to function a placed in the request.
3. There is no error handling - each promise should have a catch, or wrapped in a try/catch. 
