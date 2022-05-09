const api = require("./api");

setInterval(async () => {
  const result = await api.depth();

  console.log(`Highest Buy: ${result.bids[0][0]}`);
  console.log(`Lowest Sell : ${result.asks[0][0]}`);
}, process.env.CRAWLER_INTERVAL);
