// toggle icon navbar
let header = document.querySelector('.header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let popup = document.querySelector('.popup-imag');
let body =  document.querySelector('.body');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.body.addEventListener('click', function() {
    popup.style.display = 'none';
}, true);

// load more images with the button, as long as there are more images to load
let addimages = document.querySelector('.addimages');

addimages.onclick = () => {
    if (imag_counter < folder_size){
        createColumns();
    }
    else{
        addimages.style.display = 'none';
    }
}
