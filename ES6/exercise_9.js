// Exercise 8
// By Rajat Kumar

let text = '';
let nodes = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
text = Array.from(nodes, node => {
    const [firstChar] = node.textContent;
    return firstChar;
}).reduce((prev, next) => {
    return prev+next;
}, '');

console.log(text);

// OR

text = '';

for(const node of nodes) {
    const [firstChar] = node.textContent;
    text += firstChar;
}

console.log(text);