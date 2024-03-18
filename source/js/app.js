//===========================================================================//
//==============================Loading Animation============================//
//===========================================================================//

let loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.classList.add('disppear');
});

//===========================================================================//
//================================Sticky Nav=================================//
//===========================================================================//

$(function () {
  // Show hide/nav in page load
  showHideNav();
  $(window).scroll(function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      $('nav').addClass('white-nav-top');
    } else {
      $('nav').removeClass('white-nav-top');
    }
  }
});

//===========================================================================//
//==============================Smooth Scroll========-=======================//
//===========================================================================//

$(function () {
  $('a.text-dark').click(function (e) {
    e.preventDefault();
    // alert('abcd')
    let section_id = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(section_id).offset().top - 104,
      },
      1250,
      'easeInOutExpo'
    );
  });
});

//===========================================================================//
//===============================Page Animation==============================//
//===========================================================================//

$(document).ready(function () {
  new WOW().init();
});

//===========================================================================//
//================================Scroll Top=================================//
//===========================================================================//

window.addEventListener('scroll', () => {
  const scroll = document.querySelector('.back-to-top');
  scroll.classList.toggle('active', window.scrollY > 500);
});

document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//===========================================================================//
//============================Copy To Clipboard==============================//
//===========================================================================//

function copy_data(id) {
  var range = document.createRange();
  range.selectNode(id);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  $('#tooltip_clipboard').show();
  setTimeout(() => {
    $('#tooltip_clipboard').hide();
  }, 1500);
}
