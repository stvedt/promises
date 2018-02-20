## Set up

Run `npm install` in `/promises/` directory.

To run and example from command line: `node src/example-*`

## Callback more like drawbacks

### Lack of trustability

When handing over callback to a third party what will they do with that callback?
Will they invoke our callback at all? How many times?

# What is a promise?

A promise is well a promise that you will get a future value. This future value though can have two states a success or failure.

Syntactical sugar. Promises are an API similar to Fetch. These are not native functionality but API's and anything with a promise can be acheived with some callback implementations.

## The states of a promise?

- Pending
- Resolved
- Rejected

Once a promise has been resolved or rejected it's state cannot be changed. The benefit over callbacks. Callbacks may be called multiple time but since we have state of a promise once it's resolved or rejected it cannot be changed and .then() & .catch() will only be called once.

## Promise Resolution
When a promise gets resolved that means it is no longer pending. As mentioned before there are two states it can have success or failure and those are handled with .then() and .catch() respectively.

## Chainability/Composability
.then() and .catch() also always return promises so that future .then()/.catch()'s can be called.

Even when defining an explicit return from a promise it will immediate resolve that return value in another promise: `Promise.resolve('your returned value')`

## Breaking the chain
If at any point in your promise chain an error is thrown or the promise is rejected no more .then()'s will be called and the error/rejection will be passed to .catch()

## Use with fetch

Fetch is another JS API which returns a promise as result. Since a promise is the return value we can chain/compose with .then() & .catch()

The .json method from Fetch will also return a promise. This is because the body of an API response can be large and require time to process. Hence, when we `return response.json()` we chain .then on it.