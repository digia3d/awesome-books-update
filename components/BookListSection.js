// components/BookListSection.js

export const renderBooks = (bookList) => {
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
      renderBooks(bookList);
    });

    bookElement.appendChild(text);
    bookElement.appendChild(removeBtn);
    listContainer.appendChild(bookElement);
  });
};