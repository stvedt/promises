var myPromise = new Promise(function(resolve, reject) {
  //do something Async
  setTimeout(() => {
    if(true) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  }, 1000);
	
});

myPromise.then((outcome) => {
  console.log('then:', outcome);
  return 'value';
}).then((outcome) => {
  console.log('then 2:', outcome);
  return 'another value';
}).catch((err) => {
  console.log('error:', err);
});
