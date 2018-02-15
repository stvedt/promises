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
      //all done
    });
  });
});

/* promise */

var myPromise = new Promise(function(resolve, reject) {
  //do something Async
  setTimeout(() => {
    if(true) {
      resolve(1);
    } else {
      reject('Failure!');
    }
  }, 1000);
	
});

myPromise.then((outcome) => {
  console.log('promise ', outcome);
  return 2;
}).then((outcome) => {
  console.log('promise ', outcome);
  return 3;
}).then((outcome) => {
  console.log('promise ', outcome);
  return 'final value';
}).catch((err) => {
  console.log('error:', err);
});
