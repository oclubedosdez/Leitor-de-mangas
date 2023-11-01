$(function () {



  $(".counter").text(rating);


  var caixa_estrelas = document.querySelector('.caixa-estrelas')

  caixa_estrelas.onmouseenter = function () {
    $(".counter").text("Deixe sua nota")
    $(".counter").addClass("nome_avaliacao")
    
  }

  caixa_estrelas.onmouseleave = function () {
    $(".counter").text(rating)
  }

  $("#rateYo1").on("rateyo.init", function () { console.log("rateyo.init"); });

  $("#rateYo1").rateYo({
    rating: rating,
    numStars: 5,
    precision: 1,
    starWidth: "30px",
    spacing: "5px",
    rtl: false,
    minValue: 1,
    maxValue: 5,
    normalFill: "#ffffff",
    ratedFill: "red",
    
    onInit: function () {

      console.log("On Init");
    },
    onSet: function (rating1) {
      $(".counter").text(rating1);
      rating = rating1;
    }
  }).on("rateyo.set", function () { console.log("rateyo.set"); })
    .on("rateyo.change", function () { console.log("rateyo.change"); });

});

$("#rateYo1").mouseenter(function () {
});

// $("#rateYo1").rateYo({
//   "rating": 3.5,
//   starWidth: "40px",
//   normalFill: "#000000ee",
//   ratedFill: "#E74C3C",
//   "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">' +
//       '<path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379' +
//       ' 4.246-3.611-2.625-3.612 2.625' +
//       ' 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833' +
//       ' 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388' +
//       ' 7.416 5.388-2.833-8.718' +
//       ' 7.417-5.389h-9.167l-2.833-8.718z"></path>' +
//       '</svg>'
// });



