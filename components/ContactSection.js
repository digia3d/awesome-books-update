const setupContactForm = () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // 🛡️ prevent adding event listener multiple times
  if (form.dataset.listenerAdded === "true") return;
  form.dataset.listenerAdded = "true";

  console.log("✨ setupContactForm aktiviran");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // ✅ If all fields are filled
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

      // Remove shake class and error styles after successful submission
      form.classList.remove("shake");
      form.style.border = "";
      form.style.boxShadow = "";

      // Highlight effect on success
      form.classList.add("highlight");
      setTimeout(() =>
        form.classList.remove("highlight")
      , 5000);

      setTimeout(() => successMessage.remove(), 5000);
    }
    // ⚠️ If any field is empty
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

      // 💢 Shake - clear and safe
      form.classList.remove("shake");
      requestAnimationFrame(() => {
        form.classList.add("shake");
      });

      setTimeout(() => warningMessage.remove(), 3000);
    }
  });
};

export { setupContactForm };
