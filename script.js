const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');
const close_mobile_menu =document.querySelector('.close-mobile-menu');

hamburger.addEventListener('click', () => {
    mobile_menu.classList.add('mobile-menu-active');
});

close_mobile_menu.addEventListener('click',() => {
    mobile_menu. classList.remove('mobile-menu-active') ;
});

// dropdown
const user_icon = document.querySelector('.login');
const user_dropdown = document.querySelector('.user-dropdown');


user_icon.addEventListener('mouseover', () => {
user_dropdown.classList.add('user-dropdown-active');
});

    user_icon.addEventListener('mouseout', () => {
    user_dropdown.classList.remove('user-dropdown-active');
    });


  