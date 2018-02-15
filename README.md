## Callback more like drawbacks.

### lack of sequentiality

### lack of trustability

handing over callback to a third party
will they invoke our callback at all? How many times?


# What is a promise?

A promise is well a promise that you will get a future value. This future value though can have two states a success or failure.



## The states of a promise?

- Pending
- Resolved
- Rejected

Once a promise has been resolved or rejected it's state cannot be changed.

## Promise Resolution
When a promise gets resolved that means it is no longer pending. As mentioned before there are two states it can have success or failure and those are handled with .then() and .catch() respectively.

## Chainability
.then() and .catch() also always return promises so that future .then()/.catch()'s can be called.

Even when defining an explicit return from a promise it will immediate resolve that return value in another promise: `Promise.resolve('your returned value')`

## Breaking the chain
If at any point in your promise chain an error is thrown no additional .then()'s will be called and the thrown error will be passed to .catch()

## Use with fetch