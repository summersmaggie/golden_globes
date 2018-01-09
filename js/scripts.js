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

});
