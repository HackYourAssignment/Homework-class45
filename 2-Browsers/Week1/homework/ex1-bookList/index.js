//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const ulElement = document.createElement('ul');

  books.forEach((book) => {
    const pElement = document.createElement('p');
    pElement.textContent = `${book.title} by ${book.author}`;

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    liElement.append(pElement);

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', book.src);
    imgElement.setAttribute('alt', `Book cover for ${pElement.textContent}`);

    liElement.appendChild(imgElement);

    if (book.alreadyRead === false)
      return (liElement.style.backgroundColor = 'red');
    else return (liElement.style.backgroundColor = 'green');
  });

  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      src: 'https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      src: 'https://media.s-bol.com/O5MgYVgzEyvp/86qKV8L/548x840.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      src: 'https://media.s-bol.com/qD2DQKpwk2Ky/Oym85Og/550x718.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
