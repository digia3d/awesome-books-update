const createFooter = () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const year = new Date().getFullYear();
  footer.innerHTNL = `<p>@ ${year} Awesome Books. All rights reserved.</p>`;

  document.body.appendChild(footer);
};

export default createFooter;