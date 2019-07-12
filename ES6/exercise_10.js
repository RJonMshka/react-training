// Exercise 10
// By Rajat Kumar

const givenArray = [1,10,40,31,0,9,54,80];

const avoidFirstItemFn = ([, ...allExceptFirst]) => {
    return allExceptFirst;
}

console.log(avoidFirstItemFn(givenArray));