// JavaScript Scroll
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
});

// Smooth-Scroll
$(function(){
  var scroll = new SmoothScroll('a[href*="section-"]');
})

// LightBox
baguetteBox.run('.tz-gallery');