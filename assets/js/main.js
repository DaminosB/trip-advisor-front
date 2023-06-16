const $ = document; // création d'un raccourci
$.addEventListener("DOMContentLoaded", () => {
  //   const element = $.querySelector("#example");
  //   console.dir(el);
  // `dir` retournera l'arbre de l'élément

  //   console.log("loaded");

  $.querySelector("#form").addEventListener("click", () => {
    console.log($.querySelector("#contact-form"));

    $.querySelector("#contact-form").classList.toggle("hidden");
  });

  $.querySelector("#close").addEventListener("click", () => {
    $.querySelector("#contact-form").classList.add("hidden");
  });

  $.querySelector("form").addEventListener("submit", async (event) => {
    // ===> Empêche le comportement par défaut de la soumission d'un formulaire = rafraîchissement de la page
    event.preventDefault();

    console.log("submit", event);

    // ===> On récupère les valeurs de chaque input
    const firstname = $.querySelector("#firstname").value;
    const lastname = $.querySelector("#lastname").value;
    const message = $.querySelector("#message").value;
    const email = $.querySelector("#email").value;

    // console.log({ firstname, lastname, email, message });

    const response = await axios.post(
      "http://localhost:3000/form/new-message",
      {
        firstname,
        lastname,
        email,
        message,
      }
    );

    console.log(response.data);
  });
});
