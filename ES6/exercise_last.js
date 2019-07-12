// Last Exercise
// By Rajat Kumar

// First Exercise - substr implementation
String.prototype.customSubStr = function (start = 0, length = this.length) {
    if (start >= this.length || length === 0 || typeof start !== 'number' || typeof length !== 'number') {
        return '';
    }
    let requiredStr = '';
    for (const [index, char] of Array.from(this).entries()) {
        if (index >= start) {
            requiredStr += char;
        }
        if (index === length + start - 1 || index === this.length) {
            break;
        }
    }
    return requiredStr;
}

console.log("ewdads".customSubStr(5, 2));


// Second Exercise - First nth characters
String.prototype.customSubStr = function (n = this.length) {
    if (typeof n !== 'number'|| n === 0) {
        return '';
    }
    let requiredStr = '';
    for (const [index, char] of Array.from(this).entries()) {
        requiredStr += char;
        if (index === n - 1 || index === this.length) {
            break;
        }
    }
    return requiredStr;
};

console.log("ASdad".customSubStr(2));


// Third Exercise - First Character
String.prototype.customSubStr = function() {
    const [ firstChar = '' ] = this;
    return firstChar;
}

console.log("ABC".customSubStr());