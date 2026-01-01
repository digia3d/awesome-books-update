// This script is the entry point for the book management application.
import { Book, BookList } from '../modules/Book.js';
import { setupContactForm } from '../components/ContactSection.js';
import { initNavigation } from '../components/navigation.js';
import createFooter from '../components/footer.js';
import { renderBooks } from '../components/BookListSection.js';

// --- Book Management Logic ---
const bookList = new BookList();

const addNewBook = (title, author) => {
  const newBook = new Book(title, author);
  bookList.addBook(newBook);
  renderBooks(bookList);
};

renderBooks(bookList);

const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();

  if (title && author) {
    addNewBook(title, author);
    form.reset();
  } else {
    alert('Please fill in both fields.');
  }
});

// --- DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  setupContactForm();
  createFooter();
});
