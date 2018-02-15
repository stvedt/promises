var myPromise = new Promise(function(resolve, reject) {
  //do something Async
  setTimeout(() => {
    if(false) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  }, 1000);
	
});
console.log('promise', myPromise);

myPromise.then((outcome) => {
  console.log('then:', outcome);
  console.log('promise state:', myPromise)
}).catch((err) => {
  console.log('error:', err);
  console.log('promise state:', myPromise)
});



setTimeout(() => {
  console.log('later promise:', myPromise);
}, 3000);