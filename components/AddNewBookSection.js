// components/AddNewBookSection.js

import { Book, BookList } from '../modules/Book.js';

const bookList = new BookList();

const addNewBook = (title, author, renderBooks) => {
  const newBook = new Book(title, author);
  bookList.addBook(newBook);
  renderBooks();
};

// Handle form submission
const setupAddBookForm = (renderBooks) => {
  const form = document.getElementById('book-form');

  if (!form) return; // Ensure the form exists

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    addNewBook(title, author, renderBooks);
    form.reset(); // Clear the form
    document.getElementById('list-link').click(); // Optionally navigate to the book list section
  }
});
}

export { setupAddBookForm, bookList };