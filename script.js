
$(document).ready(function() {

    $("#design").click(function(){
      $("#design-showing").toggle("slow");
      $(".hide-design-image").toggle();
    })
  
    $("#development").click(function(){
      $("#development-showing").toggle("slow");
      $(".hide-development-image").toggle();
    })
  
    $("#product").click(function(){
      $("#product-showing").toggle("slow");
      $(".hide-product").toggle();
    })

});
  