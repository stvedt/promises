/* call back */
function doSomething(callback) {
  if(true){
    callback('Success!');
  } else {
    callback('Failure!')
  }
}

function later(message){
  console.log('callback', message);//success or error
}

doSomething(later);

/* promise */
var myPromise = new Promise(function(resolve, reject) {
	if(true) {
		resolve('Success!');
	} else {
		reject('Failure!');
	}
});

console.log('promise', myPromise);
myPromise.then((outcome) => {
  console.log('then:', outcome);
  // console.log('promise state:', myPromise)
}).catch((err) => {
  console.log('error:', err);
  // console.log('promise state:', myPromise)
});

setTimeout(() => {
  console.log('later promise:', myPromise);
}, 500);