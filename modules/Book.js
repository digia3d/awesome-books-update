// modules/Book.js

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now(); // Unique ID based on current timestamp
  }
}

export class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(book) {
    this.books.push(book);
    this.updateStorage();
  }

  removeBook(id) {
    this.books = this.books.filter(book => book.id !== id);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getBooks() {
    return this.books;
  }
}
