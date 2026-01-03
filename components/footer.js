import { getCurrentFormattedDate } from "../modules/luxon.js";

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const year = new Date().getFullYear();
  const currentDate = getCurrentFormattedDate();

  footer.innerHTML = `<div class="footer-content"><p class="footer-copy">@ ${year} Awesome Books. All rights reserved.</p><p class="footer-date"> ${currentDate}</p></div>`;

  const wrapper = document.getElementById("page-wrapper");
  wrapper.appendChild(footer);
};

export default createFooter;
