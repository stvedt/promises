const fetch = require('node-fetch');
const prettyjson = require('prettyjson');

let cat1 = fetch('https://github.com/stvedt/promises/raw/master/images/cat1.jpg');

let cat2 = fetch('https://github.com/stvedt/promises/raw/master/images/cat2.jpg');

let cat3 = fetch('https://github.com/stvedt/promises/raw/master/images/cat3.jpg');

Promise.all([cat1, cat2, cat3])
.then((response) => {
  console.log(response); //array of resolved promises with response value.
}).catch((err) => {
  console.log('error:', err);
});
