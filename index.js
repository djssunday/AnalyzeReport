import fetch from "node-fetch";

var getData = async () => {
  var response = await fetch("https://www.binance.com/api/v3/exchangeInfo");
  let data = await response.json();
  let symbols = data.symbols
    .filter(
      (x) =>
        x.status == "TRADING" &&
        (x.quoteAsset == "BUSD" || x.quoteAsset == "USDT"),
    )
    .filter((value, index, self) => self.map(x => x.baseAsset).indexOf(value.baseAsset) == index) 
    .map((x) => x.symbol)
    .sort()
    .map((x) => `BINANCE:${x}`);
  
  symbols.forEach(x => console.log(x));
};
getData();
// console.log(response);
