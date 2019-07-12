// Exercise 5
// By Rajat Kumar

const mapperFns = item => ({isEven: item%2===0, number: item, squared: item*item});

console.log([1, 2, 3].map(mapperFns));