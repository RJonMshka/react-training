// Exercise_2
// By Rajat Kumar

const meta = {
    title: 'Destructuring Assignment',
    authors: [{ firstname: 'Craig', lastname: 'Buckler' }],
    publisher: {
        name: 'SitePoint',
        url: 'http://www.sitepoint.com/'
    }
};

const { title: doc } = meta;
const [{ firstname: name }] = meta.authors;
const { url: web } = meta.publisher;

console.log(doc, name, web);
