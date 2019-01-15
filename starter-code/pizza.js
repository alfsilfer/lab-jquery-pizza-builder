// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {
  
  $('btn')
  $('.btn-pepperonni').click(function(){
    $('.pep').toggle();
  });
  
  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
  });
  
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
  });
  $('.btn-sauce').click(function(){
    
    $('.sauce-white').toggle();
    $('.sauce').toggle();
  })
  $('.btn-crust').click(function(){
    $('.cheese').toggle();
  })
});
