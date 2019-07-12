// Exercise 18
// By Rajat Kumar

// Required Function
const delayFunction = ( callback, delayAmount = 1000 ) => {
    setTimeout( callback, delayAmount );
};

delayFunction( () => {
    console.log('Hello World!!!');
} );