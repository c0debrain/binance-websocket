//import library
const WebSocket = require('ws')

//define endpoint
const candleStickFeeds = new WebSocket("wss://dex.binance.org/api/ws/BNB_BTCB-1DE@kline_1m");

console.log("starting candleStickFeeds .. result every minute")

//define on receive message
candleStickFeeds.onmessage = function(evt) {
    console.info('received data', evt.data);
}

//define on error
candleStickFeeds.onerror = function(evt) {
    console.error('an error occurred', evt.data);
}