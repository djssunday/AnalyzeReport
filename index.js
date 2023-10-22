import fetch from "node-fetch";

let response = fetch("https://www.binance.com/api/v3/exchangeInfo");
console.log(response);
