import fetch from "node-fetch";

var getData = async () => {
  var response = await fetch("https://dapi.binance.com/dapi/v1/exchangeInfo");
  let data = await response.json();
  let symbols = data.symbols
    .filter(
      (x) =>
        x.contractStatus== "TRADING" &&
        x.contractType == "PERPETUAL"  
      )
    .filter((value, index, self) => self.map(x => x.baseAsset).indexOf(value.baseAsset) == index) 
    .map((x) => `BINANCE:${x.baseAsset}${x.quoteAsset}.P`)
    .sort();
  
  symbols.forEach(x => console.log(x));
};
getData();
// console.log(response);
