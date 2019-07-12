// Exercise 4
// By Rajat Kumar

const prices = [1.1, 2.32, 3.68, 4.9];
const taxRate = 0.07;

const totalPriceCalculator = prices => taxRate => prices.map( price => price + price * taxRate );

console.log(totalPriceCalculator(prices)(taxRate));