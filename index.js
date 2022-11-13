$("h2").on("mouseover",function(){
  $("h2").fadeOut().fadeIn().css("color","#25316D");
});

$("button").on("mouseover",function(){
  $(".dropdown-menu").slideUp(3500).slideDown(3500).slideUp(3500).css("background-color","#FFEF82")
});
