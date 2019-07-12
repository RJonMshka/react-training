// Ecercise 3
// By Rajat Kumar

const books = [
    { title: 'Full Stack JavaScript', author: 'Colin Ihrig and Adam Bretz', url: 'http://www.sitepoint.com/store/full-stack-javascript/' },
    { title: 'JavaScript: Novice to Ninja', author: 'Darren Jones', url: 'http://www.sitepoint.com/store/leaern-javascript/' },
    { title: 'Jump Start CSS', author: 'Louis Lazaris', url: 'http://www.sitepoint.com/store/jump-start-css/' },
];

const extractBooksData = (books = []) => {

    for(const {title, author} of books) {
        console.log(title, author);
    }

    // OR

    const [
        {
            title: title1,
            author: author1
        },
        {
            title: title2,
            author: author2
        },
        {
            title: title3,
            author: author3
        }
    ] = books;

    console.log(title1, author1);
    console.log(title2, author2);
    console.log(title3, author3);
};

extractBooksData(books);
