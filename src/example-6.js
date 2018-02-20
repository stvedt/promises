const fetch = require('node-fetch');
const prettyjson = require('prettyjson');

let getProducts = fetch('https://raw.githubusercontent.com/stvedt/promises/master/data/products-fail.json');

getProducts.then((response) => {

  console.log(response.status);
  if(response.status === 404){
    return Promise.reject(response.status);
  }
  return response.json();

}).then((json) => {
  //this never happens
  console.log(prettyjson.render(json));

}).catch((err) => {
  console.log('error:', err);
});
