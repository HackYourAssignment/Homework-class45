
function createBookList(books) {
  const ulElement = document.createElement("ul");
  ulElement.id = "bookList";
  
  books.forEach((book) => {
    const liElement = document.createElement("li");
    
    const bookInfo = document.createElement("p");
    bookInfo.textContent = `${book.title} by ${book.author}`;


    const coverImg = document.createElement("img");
    const formattedTitle = book.title.toLowerCase().replace(/ /g, '_').replace(/^\./, '');
    coverImg.src = `assets/${formattedTitle}.jpg`;
    coverImg.alt = `${book.title} Cover`;

    liElement.appendChild(bookInfo);
    liElement.appendChild(coverImg); 

    if (book.alreadyRead) {
      liElement.style.backgroundColor = "green";
    } else {
      liElement.style.backgroundColor = "red";
    }

    ulElement.appendChild(liElement);
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
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
