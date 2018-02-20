let p1 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 500, 'one'); 
});
let p2 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 100, 'two'); 
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // Both resolve, but p2 is faster
});

let p3 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 100, 'three');
});
let p4 = new Promise(function(resolve, reject) { 
  setTimeout(reject, 500, 'four'); 
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 is faster, so it resolves
}, function(reason) {
  // Not called
  console.log(reason);
});

let p5 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 500, 'five'); 
});
let p6 = new Promise(function(resolve, reject) { 
  setTimeout(reject, 100, 'six');
});

Promise.race([p5, p6]).then(function(value) {
  // Not called
  console.log(value);
}, function(reason) {
  console.log(reason); // "six"
  // p6 is faster, so it rejects
});