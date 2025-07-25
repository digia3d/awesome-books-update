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

