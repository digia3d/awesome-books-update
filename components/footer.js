import { getCurrentFormattedDate } from '../modules/luxon.js';


const createFooter = () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const year = new Date().getFullYear();
  const currentDate = getCurrentFormattedDate();

  footer.innerHTML = `<p>@ ${year} Awesome Books. All rights reserved.</p><p>Current Date and Time: ${currentDate}<p>`;

  document.body.appendChild(footer);
};

export default createFooter;