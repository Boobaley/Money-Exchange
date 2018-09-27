// PLEASE DON'T change function name
module.exports = function makeExchange(amount) {
    if (amount > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  
    const currencyMap = {50: "H", 25: "Q", 10: "D", 5: "N", 1: "P"};
  const currencyValues = Object.keys(currencyMap).map(currency => parseInt(currency)).sort((left, right) => right - left);
  const result = {};
  while (amount>0) {
      const maxCurrency = currencyValues.find(currency => amount >= currency);
    const coinsNumber = Math.floor(amount / maxCurrency);
    result[currencyMap[maxCurrency]] = coinsNumber;
    amount -= coinsNumber * maxCurrency;
  }
  return result;
}
