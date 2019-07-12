// Exercise 8
// By Rajat Kumar


const person = {
    first: 'Mohan',
    last: 'Singh',
    address: {
        lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
        city: 'Gurgaon',
        state: 'Haryana'
    }
};

const requiredFn = ({ address }) => {
    const [, requiredAddressItem] = address.lines;

    return requiredAddressItem;
};


console.log(requiredFn(person));

