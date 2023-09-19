function createBookList(books) {
  const ulTag = document.createElement('ul');
  books.forEach((book) => {
    const newPTag = document.createElement('p');
    const liTag = document.createElement('li');
    newPTag.text = `${book.title} BY ${book.author} `;
    liTag.appendChild(newPTag);
    const imgTag = document.createElement('img');
    imgTag.src = `${book.img}`;
    imgTag.alt = `${book.title}`;
    liTag.appendChild(imgTag);
    if (book.alreadyRead) {
      liTag.style.background = 'green';
    } else {
      liTag.style.background = 'red';
    }
    ulTag.appendChild(liTag);
  });
  return ulTag;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      img: './assets/the_design_of_everyday_things.jpg',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      img: './assets/the_most_human_human.jpg',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      img: './assets/the_pragmatic_programmer.jpg',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
