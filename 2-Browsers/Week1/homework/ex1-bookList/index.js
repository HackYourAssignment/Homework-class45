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

/**
 * * not allowed to use: .innerHTML.
 * To create HTML elements, use document.createElement().
 * To set the text content of an element, use .textContent.
 * The homework tests currently do not support .innerText.
 */

function createBookList(books) {
  const ulDisplay = document.createElement('ul');
  books.forEach((book) => {
    const pairTitleAuthor = document.createElement('p');
    pairTitleAuthor.textContent = `${book.title} by ${book.author}`;

    const bookCover = document.createElement('img');
    bookCover.src = book.imgUrl;
    bookCover.alt = `${book.title} Book Cover`;

    const liDisplay = document.createElement('li');
    liDisplay.appendChild(pairTitleAuthor);
    liDisplay.appendChild(bookCover);
    ulDisplay.appendChild(liDisplay);

    book.alreadyRead
      ? (liDisplay.style.background = 'green')
      : (liDisplay.style.background = 'red');
  });
  return ulDisplay;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      imgUrl: 'assets/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      imgUrl: 'assets/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      imgUrl: 'assets/the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
