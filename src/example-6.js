const fetch = require('node-fetch');
const prettyjson = require('prettyjson');

let cat1 = fetch('images/cat1.jpg');

let cat2 = fetch('images/cat2.jpg');

let cat3 = fetch('images/cat3.jpg');

Promise.all([])
.then((response) => {

  console.log('response:', response);
  console.log(response.json());
  return response.json();

}).then((json) => {

  console.log('json', json);

}).catch((err) => {
  console.log('error:', err);
});
