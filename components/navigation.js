import { setupContactForm } from './ContactSection.js';
const listLink = document.getElementById("list-link");
const addLink = document.getElementById("add-link");
const contactLink = document.getElementById("contact-link");

const bookSection = document.getElementById("book-section");
const addSection = document.getElementById("add-section");
const contactSection = document.getElementById("contact-section");

const showSection = (sectionToShow) => {
  // Hide all sections
  bookSection.style.display = "none";
  addSection.style.display = "none";
  contactSection.style.display = "none";

  // Show the selected section
  sectionToShow.style.display = "block";

  // Add animation for Contact Section
  if (sectionToShow.id === "contact-section") {
    sectionToShow.classList.add("visible");
        setupContactForm();
  }
  else {
    contactSection.classList.remove("visible");
  }
};

export const initNavigation = () => {
  listLink.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(bookSection);
    setActiveLink("list-link");
  });
  addLink.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(addSection);
    setActiveLink("add-link");
  });
  contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(contactSection);
    setActiveLink("contact-link");
  });

  // Show the book section by default
  showSection(bookSection);
  setActiveLink("list-link");
};

function setActiveLink(activeId) {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.classList.toggle("active-link", link.id === activeId);
  });
}

export { setActiveLink };
