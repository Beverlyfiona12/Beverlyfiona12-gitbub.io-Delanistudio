
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
// HOVER
$('.work1').mouseover(function() {
    $('.work1-overlay').show();
  }).mouseout(function() {
    $('.work1-overlay').hide();
  });
  $(".work2").mouseenter(function() {
    $(".work2-overlay").show();
  }).mouseleave(function() {
    $(".work2-overlay").hide();
  });
  $(".work3").mouseenter(function() {
    $(".work3-overlay").show();
  }).mouseleave(function() {
    $(".work3-overlay").hide();
  });
  $(".work4").mouseenter(function() {
    $(".work4-overlay").show();
  }).mouseleave(function() {
    $(".work4-overlay").hide();
  });
  $(".work5").mouseenter(function() {
    $(".work5-overlay").show();
  }).mouseleave(function() {
    $(".work5-overlay").hide();
  });
  $(".work6").mouseenter(function() {
    $(".work6-overlay").show();
  }).mouseleave(function() {
    $(".work6-overlay").hide();
  });
  $(".work7").mouseenter(function() {
    $(".work7-overlay").show();
  }).mouseleave(function() {
    $(".work7-overlay").hide();
  });
  $(".work8").mouseenter(function() {
    $(".work8-overlay").show();
  }).mouseleave(function() {
    $(".work8-overlay").hide();
  });
  

 //Form Validation
 $("form").submit(function() {
    var name= $("input#name").val();
    alert("We've received your message "+name+". Thank you for contacting us");
  Event.preventDefault();
  });

