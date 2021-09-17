$.ajax({
  url: "enderecodomeupost.php",
  method: "POST",
  data: {
    meuinput: document.getElementById("meu_input").value,
  },
})
  .done(function (data) {
    console.log("success", data);
  })
  .fail(function (xhr) {
    console.log("error", xhr);
  });

document.getElementById("meu_input").value = "";
