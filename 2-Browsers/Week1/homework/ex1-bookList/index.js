function createBookList(books) {
  const div = document.getElementById('bookList');
  const listOfBooks = document.createElement('ul');

  div.appendChild(listOfBooks);

  books.forEach((book) => {
    const alreadyRead = book.alreadyRead;

    const li = document.createElement('li');
    li.className = 'book-li';
    li.style.backgroundColor = 'red';
    if (alreadyRead) {
      li.style.backgroundColor = 'green';
    }

    const p = document.createElement('p');
    const imgElement = document.createElement('img');

    p.textContent = `${book.title} by ${book.author}`;
    imgElement.src = book.image;
    imgElement.alt = 'book-img';
    imgElement.style.padding = '30px';

    const bookDiv = document.createElement('div');
    bookDiv.style.padding = '20px';

    bookDiv.appendChild(p);
    bookDiv.appendChild(imgElement);

    li.appendChild(bookDiv);

    listOfBooks.appendChild(li);
  });
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      image: 'assets/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      image: 'assets/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      image: 'assets/the_pragmatic_programmer.jpg',
    },
  ];

  createBookList(myBooks);
}

window.addEventListener('load', main);
