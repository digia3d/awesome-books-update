const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

const bookSection = document.getElementById('book-section');
const addSection = document.getElementById('add-section');
const contactSection = document.getElementById('contact-section');

const showSection = (sectionToShow) => {
  bookSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';

  sectionToShow.style.display = 'block';
};

export const initNavigation = () => {
  listLink.addEventListener('click', () => { showSection(bookSection);
  setActiveLink('list-link');
});
  addLink.addEventListener('click', () => { showSection(addSection)
    setActiveLink('add-link');
  });
  contactLink.addEventListener('click', () => { showSection(contactSection)
    setActiveLink('contact-link');
  });

  // Show the book section by default
  showSection(bookSection);
  setActiveLink('list-link');
}

function setActiveLink(activeId) {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    if (link.id === activeId) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
  }

  export { setActiveLink };