// COMPOTENTE FIXO
$("document").ready(function () {
  let page = localStorage.getItem("page");
  let i = 0;
  let url = [
    "./index.html",
    "./acesso.html",
    "./plano.html",
    "./extras.html",
    "./revisao.html",
    "./pedido.html",
  ];
  $("#next").on("click", function () {
    $(localStorage.setItem(i, i));
    $(window.document.location).attr("href", url[page]);

    i++;
    page++;

    if (page == 6) {
      page = 0;
    }

    localStorage.setItem("page", page);

    console.log(page);
  });

  // COMPOTENTE REATIVO

  // $("document").ready(function () {
  //   let count = 0;
  //   $(".step").each(function () {
  //     count++;
  //   });
  //   let i = 0;
  //   $("#next").on("click", function () {
  //     if (count > i + 1) {
  //       i++;
  //       $(".active").removeClass("active");
  //       $(".step").eq(i).addClass("active");
  //       $(".activeText").removeClass("activeText");
  //       $(".stepText").eq(i).addClass("activeText");
  //     }
  //   });
  //   $("#prev").on("click", function () {
  //     if (i > 0) {
  //       i--;
  //       $(".active").removeClass("active");
  //       $(".step").eq(i).addClass("active");
  //       $(".activeText").removeClass("activeText");
  //       $(".stepText").eq(i).addClass("activeText");
  //     }
  //   });
});
