// fake dictionary for attatching an html page to it's respective images folder
const index = {imagesfolder: "./images/splashpage", count:173};
const architectual = {imagesfolder: "./images/architectual", count:25};
const blackandwhite = {imagesfolder: "./images/bnw", count:41};
const interior = {imagesfolder: "./images/interior", count:15};
const nature = {imagesfolder: "./images/nature", count:48};
const portrait = {imagesfolder: "./images/portrait", count:28};
const sport = {imagesfolder: "./images/sport", count:13};
const street = {imagesfolder: "./images/street", count:20};

const all_pages = {index,architectual,blackandwhite,interior,nature,portrait,sport,street};

var path = window.location.pathname;
var page = path.split("/").pop();
page = page.replace(".html", "");
var page_imag = all_pages[page].imagesfolder;

var imag_counter = 0;
var folder_size = all_pages[page].count;
console.log(page)


if (!page) page = "index";


// creat a list of size size, and then return it in a random order
function makeunorderedlist(size){
    const a = [];
    for (let i = 0; i < size; i++){
        a.push(i+1);
    }

    var i = size,
    j = 0,
    temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;

    }

    return a;

}

// the code that creates the 3 columns
function createColumns(){
    const randlist = makeunorderedlist(folder_size);
    const colsize = Math.floor(folder_size/3);
    let j = 1;
    for (let i = 0; i < folder_size && i < 9 && imag_counter < folder_size; i++){
        // if we're at a third of the size then move on to next column
        // but if we're on final column, just dump rest of the images
        if ((i)%3 == 0 && i != 0 && j < 3){
            j++;
        }
        const image = document.createElement('img');
        
        image.src = page_imag+'/' + randlist[imag_counter] + '.jpg';
        
        // handle the image popping up
        image.onclick = () => {
            let popup = document.querySelector('.popup-imag');
            let popimage= document.querySelector('.actualpop');
            popimage.src = image.src;
            popup.style.display = 'block';

        }

        document.getElementById('column'+j).appendChild(image);
        imag_counter++;
    }
}

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
