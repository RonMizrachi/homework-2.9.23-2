// function usdilsRate() {
//   return fetch("https://api.exchangerate.host/latest")
//     .then((response) => response.json())
//     .then((data) => data.rates.ILS);
// }

// function btcusdRate() {
//   return fetch("https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
//     .then((response) => response.json())
//     .then((data) => data.lastPrice);
// }

// async function exchangerate() {
//   let usdils = await usdilsRate();
//   let btcusdt = await btcusdRate();
//   let screen = document.getElementById("screen");
//   screen.innerText = btcusdt * usdils;
// }

// exchangerate();

// setInterval(exchangerate, 15000);
// function usdilsRate() {
//   return fetch("https://api.exchangerate.host/latest")
//     .then((response) => response.json())
//     .then((data) => data.rates.ILS);
// }

// function btcusdRate() {
//   return fetch("https://data.binance.com/api/v3/ticker/24hr")
//     .then((response) => response.json())
//     .then((data) =>
//       data.find((symbolObject) => symbolObject.symbol == "BTCUSDT")
//     );
// }

// async function exchangerate() {
//   let usdils = await usdilsRate();
//   let btcusdt = await btcusdRate();
//   btcusdt = btcusdt.lastPrice;
//   let screen = document.getElementById("screen");
//   screen.innerText = btcusdt * usdils;
// }

// exchangerate();

// setInterval(exchangerate, 15000);
