const fetch = require('node-fetch');
const prettyjson = require('prettyjson');

let getProducts = fetch('https://raw.githubusercontent.com/stvedt/promises/master/data/products.json');

getProducts.then((response) => {

  // console.log('response:', response);
  // console.log(response.json());
  return response.json();

}).then((json) => {

  console.log(prettyjson.render(json));

}).catch((err) => {
  console.log('error:', err);
});
