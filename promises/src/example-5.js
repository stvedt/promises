const fetch = require('node-fetch');
const prettyjson = require('prettyjson');

let getProducts = fetch('https://raw.githubusercontent.com/stvedt/promises/master/data/products.json');

getProducts.then((response) => {
  return response.json(); // Fetch.json() returns another promise

}).then((json) => {

  console.log(prettyjson.render(json));

}).catch((err) => {
  console.log('error:', err);
});
