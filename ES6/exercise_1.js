// Exercise 1
// By Rajat Kumar

const givenArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Required Function
const solvingFunction = arr => {
    return arr.filter( item => item%3===0);
};

console.log(solvingFunction(givenArray));
