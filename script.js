let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => 
{
    searchform.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let ShoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => 
{
    ShoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let LoginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => 
{
    LoginForm.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => 
{
    navbar.classList.toggle('active');
    LoginForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    searchform.classList.remove('active');

}


window.onscroll('#menu-btn').onclick = () => 
{
    searchform.classList.remove('active');
    ShoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// var swiper = new Swiper(".product-slider", {
//   // slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   // pagination: {
//   //   el: ".swiper-pagination",
//   //   clickable: true,
//   // },
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
// });
 
let swiper = new Swiper('.product-slider', {

  loop: true,
  spaceBetween:32,
  grabcursor:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});