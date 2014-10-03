$(function() {
  $('.navbar-nav a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(document).ready(function(){
$('.scroll-content').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});
$(function()
{
	$('.scroll-content, .a-inner').jScrollPane();
});
});
(function() {
  $('.bs-docs-sidebar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('.scroll-content').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(window).load(function() {
  $('.flexslider, .carousel-bottom').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 130,
    itemMargin: 10
  });
});
