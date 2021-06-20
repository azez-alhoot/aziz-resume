// hide and show the skills part
$(document).ready(function(){
  
  $(".btn-show").next().fadeOut();

  $(".btn-show").click(function(){
    $(this).next().slideToggle("slow");
  })

});