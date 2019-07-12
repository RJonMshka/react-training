// Exercise 11
// By Rajat Kumar

const wrap = str => {
    return [str];
};

const unwrap = ([str]) => {
    return str;
}

console.log(wrap("package"));

console.log(unwrap(wrap("package")));