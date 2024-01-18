// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Get the original element
var original = document.querySelector('.container');

// Clone the original element
var clone = original.cloneNode(true);

// Add a class to the clone for positioning
clone.classList.add('clone');

// Insert the clone after the original element
original.parentNode.insertBefore(clone, original.nextSibling);

// fun window scrolling stolen from my html portfolio... Hopefully works for mobile scrolling
window.onscroll = () => {
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// This should be copying "Poggers" to clipboard
let copyEmailButton = document.querySelector('.button');

copyEmailButton.onclick = () => {
    navigator.clipboard.writeText("Tjcrimando@gmail.com");
    console.log("Buttonn Clicked");
    }
