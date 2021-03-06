// Chaining and multiple calls

/* call back */
function laterCallback(message, callback){
  console.log('callback', message);//success or error
  if (callback){
    callback();
  }
}

laterCallback(1, () => {
  laterCallback(2, () => {
    laterCallback(3, () => {
      console.log('all done');
    });
  });
});

/* promise */

let myPromise = new Promise(function(resolve, reject) {
  //do something Async
  setTimeout(() => {
    if(true) {
      resolve(1);
    } else {
      reject('Failure!');
    }
  }, 0);
	
});

let myPromise2 = myPromise.then((outcome) => {
  console.log('promise ', outcome);
  return 2;
  // return Promise.resolve(2); // returning a value is always wrapped in a resolved promise
}).then((outcome) => {
  console.log('promise ', outcome);
  return 3;
}).then((outcome) => {
  console.log('promise ', outcome);
  return 'final value';
}).catch((err) => {
  console.log('error:', err);
});

console.log(myPromise2);
