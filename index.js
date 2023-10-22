import fetch from "node-fetch";

var getData = async () => {
  var response = await fetch("https://fapi.binance.com/fapi/v1/exchangeInfo");
  let data = await response.json();
  let symbols = data.symbols
    .filter(
      (x) =>
        x.status == "TRADING" &&
        x.contractType == "PERPETUAL"  
      )
    .filter((value, index, self) => self.map(x => x.baseAsset).indexOf(value.baseAsset) == index) 
    .map((x) => x.symbol)
    .sort()
    .map((x) => `BINANCE:${x}`);
  
  symbols.forEach(x => console.log(x));
};
getData();
// console.log(response);
