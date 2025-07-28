const setupContactForm = () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
};


export { setupContactForm };