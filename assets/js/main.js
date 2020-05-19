
document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
      e.target.classList.add('did-fade-in');
  }
});

document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
      e.target.classList.remove('did-fade-in');
   }
});


// menu

$(document).ready(function(){
  $(".menu i").click(function(){
    $(".navigation").toggleClass("navshow");
    $(".menu").toggleClass("menuicon");
  });
});


// menu active
$(document).ready(function() {
  $('.menu-items li').on('click', function() {
    $(this)
      .siblings()
      .removeClass('menu-active');
    $(this).addClass('menu-active');
  });
});


// click and change menu icon
$(document).ready(function() {
  $(".menu-items li").click(function(){
   $(".menu i").toggleClass("fas fa-times fas fa-bars");
  });
 });

$(document).ready(function() {
  $(".menu-items li").click(function(){
   $(".navigation").toggleClass("navshow");
  });
 });
 
$(document).ready(function(){
  $(".menu").click(function(){
    $(this).find('i').toggleClass('fas fa-times fas fa-bars')
  });
});




// custom cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 24)+"px; left: "+(e.pageX - 24)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})



