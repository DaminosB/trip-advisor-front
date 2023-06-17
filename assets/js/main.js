const $ = document; // création d'un raccourci
$.addEventListener("DOMContentLoaded", () => {
  // Action au clic sur le bouton connexion
  $.querySelector("#form").addEventListener("click", () => {
    $.querySelector("#contact-form").classList.toggle("hidden");
  });

  // Action au clic sur la croix
  $.querySelector("#close").addEventListener("click", () => {
    $.querySelector("#contact-form").classList.add("hidden");
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

      $.querySelector("#contact-form").classList.add("hidden");
    } catch (error) {
      $.querySelector("#text-error").classList.toggle("hidden");
      console.log(error.message);
    }
  });
});
