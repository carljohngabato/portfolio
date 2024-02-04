// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200); // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200); // Else fade out the arrow
  }
});
$('#return-to-top').click(function() { // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 500);
});

//Pop-up balloons
function hide_expdesk(){
  var x = document.getElementById("exp-desc");
  if(x.style.display === "none"){
    x.style.visibility = "visible";
    x.style.transition = "opacity 1s ease-in-out"
  }else{
    x.style.visibility = "hidden";
  }
}