// Exercise 12
// By Rajat Kumar

const date = '2025-09-26';

const extractDate = date => {
    let [year, month, day] = date.split('-');
    console.log(year, month, day);

    // OR

    [,year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec(date);
    console.log(year, month, day);
};

extractDate(date);