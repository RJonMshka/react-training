// Exercise 7
// By Rajat Kumar

const request = ({method, url}) => {
    console.log(url);
    console.log(method);
};

request({url: 'http://www.google.com', method: 'GET' });