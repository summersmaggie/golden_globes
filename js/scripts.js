$(document).ready(function() {

$(".comedy").click(function() {
  $("#comedy").slideToggle();
});

$(".drama").click(function() {
  $("#drama").slideToggle();
});

$(".animated").click(function() {
  $("#animated").slideToggle();
});

// $("h4:#winner1").click(function() {
//   $("li:not(#winner1)").fadeToggle();
// });

$("#comedywinner").click(function() {
  $("#winner1").css('font-weight','bold');
});

$("#dramawinner").click(function() {
  $("#winner2").css('font-weight', 'bold');
});

$("#animatedwinner").click(function() {
  $("#winner3").css('font-weight','bold');
});

$("button#dark").click(function() {
  $("body").addClass("darktheme");
});

$("button#light").click(function() {
   $("body").removeClass();
});

$(".category#comedy").click(function() {
  $(".category#comedy").addClass("box");
});

$(".category#drama").click(function() {
  $(".category#drama").addClass("box");
});

$(".category#animated").click(function() {
  $(".category#animated").addClass("box");
});

});
