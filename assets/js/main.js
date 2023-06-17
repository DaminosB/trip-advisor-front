const $ = document; // création d'un raccourci

$.addEventListener("DOMContentLoaded", () => {
  // Action au clic sur le bouton connexion
  $.querySelector("#connexion-header").addEventListener("click", () => {
    $.querySelector("#contact-form-wrapper").classList.toggle("hidden");
    $.querySelector("#contact-form-background").classList.remove("hidden");
  });

  $.querySelector("#connexion-menu").addEventListener("click", () => {
    $.querySelector("#contact-form-wrapper").classList.toggle("hidden");
  });

  // Action au clic sur la croix
  $.querySelector("#close-contact-form").addEventListener("click", () => {
    $.querySelector("#contact-form-wrapper").classList.add("hidden");
  });

  $.querySelector("#close-menu").addEventListener("click", () => {
    $.querySelector("#menu-wrapper").classList.add("hidden");
  });

  $.querySelector("#confirmation-box-button").addEventListener("click", () => {
    $.querySelector("#confirmation-box").classList.add("hidden");
    $.querySelector("#contact-form-wrapper").classList.add("hidden");
  });

  // Formulaire de contact
  $.querySelector("form").addEventListener("submit", async (event) => {
    try {
      event.preventDefault();

      const firstname = $.querySelector("#firstname").value;
      const lastname = $.querySelector("#lastname").value;
      const message = $.querySelector("#message").value;
      const email = $.querySelector("#email").value;

      const response = await axios.post(
        "https://site--trip-advisor-back--kc7q9tc45mqv.code.run/form/new-message",
        {
          firstname,
          lastname,
          email,
          message,
        }
      );

      $.querySelector("#firstname").value = "";
      $.querySelector("#lastname").value = "";
      $.querySelector("#email").value = "";
      $.querySelector("#message").value = "";

      $.querySelector("#contact-form-background").classList.add("hidden");
      $.querySelector("#confirmation-box").classList.remove("hidden");
    } catch (error) {
      $.querySelector("#text-error").classList.toggle("hidden");
      console.log(error.message);
    }
  });

  $.querySelector("#menu").addEventListener("click", () => {
    $.querySelector("#menu-wrapper").classList.toggle("hidden");
  });

  window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;

    const divElement = $.querySelector("#menu-wrapper");

    if (windowWidth > 768) {
      divElement.classList.add("hidden");
    }
  });
});
