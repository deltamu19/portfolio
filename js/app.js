
$(document).ready(function(){
  $('#home-link').click(function() {
      $('html,body').animate({
          scrollTop: $('#home').position().top
      }, 1000);
  });
  $('#work-link').click(function() {
      $('html,body').animate({
          scrollTop: $('#work').position().top
      }, 1000);
  });
  $('#tech-link').click(function() {
      $('html,body').animate({
          scrollTop: $('#tech').position().top
      }, 1000);
  });
  $('#info-link').click(function() {
      $('html,body').animate({
          scrollTop: $('#info').position().top
      }, 1000);
  });
});
