// hide and show the skills part
$(document).ready(function(){
  
  // $(".btn-show").hide();

  $(".btn-show").click(function(){
    $(this).next().fadeToggle("slow");
  })

});