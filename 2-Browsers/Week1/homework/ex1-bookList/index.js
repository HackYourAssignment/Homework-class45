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
  const bookList = document.getElementById('bookList');
  const ul = document.createElement('ul');
  bookList.appendChild(ul);
  ul.style.cssText = 'display:flex; justify-content :space-evenly';

  books.forEach((element) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');

    p.textContent = `${element.title} by ${element.author}`;
    li.appendChild(p);

    img.src = `${element.imgLink}`;
    img.alt = '';
    li.appendChild(img);

    if (element.alreadyRead === false) {
      li.style.cssText =
        'background:red;  display:inline-block; width: 400px; margin: 8px; padding: 8px;';
    } else {
      li.style.cssText =
        'background:green;  display:inline-block; width: 400px; margin: 8px; padding: 8px;';
    }

    ul.appendChild(li);
  });
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      imgLink:
        'https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/assets/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      imgLink:
        'https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/assets/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      imgLink:
        'https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/assets/the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
