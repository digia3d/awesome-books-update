import { Book, BookList } from '../modules/Book.js';

const bookList = new BookList();

// Example usage:

const addNewBook = (title, author) => {
  const newBook = new Book(title, author);
  bookList.addBook(newBook);
  renderBooks();
};

// Function to render the list of books

const renderBooks = () => {
  const listContainer = document.getElementById('book-list');
  listContainer.innerHTML = ''; // Clear existing content

  bookList.getBooks().forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.className = 'book-entry';

    const text = document.createElement('p');
    text.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.addEventListener('click', () => {
      bookList.removeBook(book.id);
      renderBooks();
    });

    bookElement.appendChild(text);
    bookElement.appendChild(removeBtn);
    listContainer.appendChild(bookElement);
  });
};

// Initial rendering of books
renderBooks();

// Handle form submission
const form = document.getElementById('book-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    addNewBook(title, author);
    form.reset(); // Clear the form
  }
});


