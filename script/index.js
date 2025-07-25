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
    bookElement.textContent = `"${book.title}" by ${book.author}`;
    // Here we can add buttons or links for further actions like delete or edit

    listContainer.appendChild(bookElement);
  });
};

// Initial rendering of books
renderBooks();

