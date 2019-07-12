// Exercise 16
// By Rajat Kumar

const maxCommon = (str1, str2, len = 1) => {
    // Returns if any of  the string is empty
    if(str1.length === 0 || str2.length === 0) {
        return 0;
    }
    console.log(str1, str2, len);
    if(str1[0] === str2[0]) {
        len += 1;
        maxCommon(str1.substr(1), str2.substr(1), len);
    } else {
        maxCommon(str1.substr(1), str2, 0); 
    }
    return len;
};

console.log(maxCommon('55444','55f444g'));