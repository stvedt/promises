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
  return { status: 400 };
}).then((outcome) => {
  console.log('then 2:', outcome);
  if (outcome.status === 400) {
    throw 'EEK! 400';
  }
  return 'another value';
}).then((outcome) => {
  console.log('then 3:', outcome);
}).catch((err) => {
  console.log('error:', err);
});
