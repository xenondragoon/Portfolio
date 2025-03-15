document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "All fields are required!";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      this.reset(); // Clear form
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  function scrollToContact() {
    const contactSection = document.querySelector("#contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const contactButton = document.querySelector("#contact");
  if (contactButton) {
    contactButton.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToContact();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const libraryButton = document.querySelector(".library-live-button");

  if (libraryButton) {
    libraryButton.addEventListener("click", function () {
      window.open(
        "https://xenondragoon.github.io/library-Managment/",
        "_blank"
      );
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const recipeButton = document.querySelector(".recipe-live-button");

  if (recipeButton) {
    recipeButton.addEventListener("click", function () {
      window.open("https://xenondragoon.github.io/Recipe-finder/", "_blank");
    });
  }
});
