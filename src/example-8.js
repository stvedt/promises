const fetch = require('node-fetch');

let cat1 = fetch('https://github.com/stvedt/promises/raw/master/images/cat1.jpg');

let cat2 = fetch('https://github.com/stvedt/promises/raw/master/images/cat2.jpg');

let cat3 = fetch('https://github.com/stvedt/promises/raw/master/images/cat3.jpg');

let cat4 = fetch('https://github.com/stvedt/promises/raw/master/images/cat-fail.jpg')
// .then((response)=>{
//   if (response.status === 404 ){
//     return Promise.reject('404 error');
//   }
// });

Promise.all([cat1, cat2, cat3, cat4])
.then((response) => {
  console.log('complete');
  for(let i = 0; i < response.length; i++){
    if (response[i].status === 404 ){
      return Promise.reject('404 error');
    }
  }
}).catch((err) => {
  console.log('error:', err);
});
