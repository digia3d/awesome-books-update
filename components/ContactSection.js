const setupContactForm = () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // 🛡️ sprečava dodavanje event listenera više puta
  if (form.dataset.listenerAdded === "true") return;
  form.dataset.listenerAdded = "true";

  console.log("✨ setupContactForm aktiviran");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // ✅ Ako su sva polja popunjena
    if (name && email && message) {
      const oldMessage = form.querySelector(
        ".success-message, .warning-message"
      );
      if (oldMessage) oldMessage.remove();

      const successMessage = document.createElement("p");
      successMessage.className = "success-message";
      successMessage.textContent = `🌸 Thank you, ${name}! Your message has been received.`;

      form.appendChild(successMessage);
      form.reset();

      setTimeout(() => successMessage.remove(), 5000);
    }
    // ⚠️ Ako neko polje fali
    else {
      const oldMessage = form.querySelector(
        ".success-message, .warning-message"
      );
      if (oldMessage) oldMessage.remove();

      const warningMessage = document.createElement("p");
      warningMessage.className = "warning-message";
      warningMessage.textContent =
        "⚠️ Please fill in all fields before submitting.";
      form.appendChild(warningMessage);

      // 💢 SHAKE — čisto i pouzdano
      form.classList.remove("shake");
      requestAnimationFrame(() => {
        form.classList.add("shake");
      });

      setTimeout(() => warningMessage.remove(), 3000);
    }
  });
};

export { setupContactForm };
