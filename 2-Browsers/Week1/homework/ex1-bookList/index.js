function createBookList(books) {
  const ulBookList = document.createElement('ul');

  books.forEach((book) => {
    const liBook = document.createElement('li');
    if (book.alreadyRead) {
      liBook.setAttribute('class', 'read');
    } else if (!book.alreadyRead) {
      liBook.setAttribute('class', 'unread');
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = `${book.title}. ${book.author}.`;

    const img = document.createElement('img');
    img.src = `assets/${book.title.toLowerCase().replace(/\s/g, '_')}.jpg`;
    img.alt = `Cover of ${book.title}`;

    liBook.appendChild(paragraph);
    liBook.appendChild(img);

    ulBookList.appendChild(liBook);
  });

  return ulBookList;
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
