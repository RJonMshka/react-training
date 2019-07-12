// Exercise 19
// By Rajat Kumar

// First Exercise
const concatenatingFn = (separator, ...args) => {
    return args.join(separator);
};

console.log(concatenatingFn('-', 'Hey', 'Dev', 'Kill', 'the', 'code'));


// Second Exercise
const listItems = '<li>A</li><li>B</li><li>C</li>';

const createList = str => {
    switch (str) {
        case 'u': return `<ul>${listItems}</ul>`;
        case 'o': return `<ol>${listItems}</ol>`;
        default: throw new Error('Unable to create list items')
    }
}

console.log(createList('o'));


// Third Exercise
const factorialCalculator = num => {
    if (typeof num !== 'number') throw new Error('Not a number');
    if (num < 0) throw new Error('Negative number');
    if (num) return num * factorialCalculator(num-1);
    else return 1;
};

console.log(factorialCalculator(5));