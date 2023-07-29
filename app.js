document.addEventListener('DOMContentLoaded', () => {
  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('header .search-bar-container');
  let formBtn = document.querySelector('#login-btn');
  let loginForm= document.querySelector('.login-form-container');
  let formClose = document.querySelector('#form-close');
  let menu=document.querySelector('#menu-bar');
  let navbar=document.querySelector('.navbar');
  let videoBtns = document.querySelectorAll('.vid-btn');


  window.onscroll = () => {
   searchBar.classList.remove('active');
   searchBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
   menu.classList.remove('fa-times');
  };
  menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
  });

  searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
  });


  function openLoginForm() {
    loginForm.classList.add('active');
  }

  function closeLoginForm() {
    loginForm.classList.remove('active');
  }

  formBtn.addEventListener('click', openLoginForm);
  formClose.addEventListener('click', closeLoginForm);

  document.addEventListener('click', (event) => {
    if (!loginForm.contains(event.target) && event.target !== formBtn) {
      closeLoginForm();
    }
  });

  








  function removeActiveClass() {
    const activeBtn = document.querySelector('.controls .active');
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
  }
  videoBtns.forEach(btn=>{
    btn.addEventListener('click',() => {
        removeActiveClass();
        btn.classList.add('active');
        const src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
  });
});
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }    
});