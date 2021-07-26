const quote = document.getElementById('quote');
const pic = document.getElementById('pic');
const author = document.getElementById('author');

const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = data.content,
        author.innerHTML = data.author
        });

    fetch('https://picsum.photos/2000/1000')
    .then((res) => {
        pic.innerHTML = `<img src=${res.url} />`
    })
};

quote.addEventListener('click', () => getQuote());
getQuote();