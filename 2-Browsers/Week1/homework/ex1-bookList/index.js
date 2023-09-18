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

// TODO your code goes in here, return the ul element
// index.js
function createBookList(books) {
  // Create a new unordered list element
  const ulElement = document.createElement('ul');

  // Iterate through the array of books
  for (const book of books) {
    // Create a new list item element
    const liElement = document.createElement('li');

    // Create a paragraph element to display book title and author
    const pElement = document.createElement('p');
    pElement.textContent = `${book.title} by ${book.author}`;

    // Create an image element for the book cover
    const imgElement = document.createElement('img');
    imgElement.src = book.coverUrl;
    imgElement.alt = `${book.title} Cover`;

    // Add the paragraph and image to the list item
    liElement.appendChild(pElement);
    liElement.appendChild(imgElement);

    // Change the style based on whether the book has been read or not
    if (book.alreadyRead) {
      liElement.style.color = 'green';
    } else {
      liElement.style.color = 'red';
    }

    // Add the list item to the unordered list
    ulElement.appendChild(liElement);
  }

  return ulElement;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      coverUrl: './assets/the_design_of_everyday_things.jpg',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      coverUrl: './assets/the_most_human_human.jpg',

      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      coverUrl: './assets/the_pragmatic_programmer.jpg',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
