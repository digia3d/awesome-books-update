// This script is the entry point for the book management application.
import { Book, BookList } from '../modules/Book.js';

// Import the renderBooks function from BookListSection
import { renderBooks } from '../components/BookListSection.js';

// Creating an instance of BookList
const bookList = new BookList();

// Add a sample book to the list

const addNewBook = (title, author) => {
  const newBook = new Book(title, author);
  bookList.addBook(newBook);
  renderBooks(bookList); // Re-render the book list after adding a new book
};

// Rendering the books when the page loads

renderBooks(bookList);

// Function to handle adding a new book from a form
const form = document.getElementById('book-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    addNewBook(title, author); // Add the new book
    form.reset(); // Reset the form fields
  } else {
    alert('Please fill in both fields.'); // Alert if fields are empty
  }
});





