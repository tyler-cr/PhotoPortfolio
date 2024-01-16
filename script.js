// fake dictionary for attatching an html page to it's respective images folder
const index = {imagesfolder: "./images/splashpage"};
const architectual = {imagesfolder: "./images/architectual"};
const blackandwhite = {imagesfolder: "./images/bnw"};
const interior = {imagesfolder: "./images/interior"};
const nature = {imagesfolder: "./images/nature"};
const portrait = {imagesfolder: "./images/portrait"};
const sport = {imagesfolder: "./images/sport"};
const street = {imagesfolder: "./images/street"};

const all_pages = {index,architectual,blackandwhite,interior,nature,portrait,sport,street};

var path = window.location.pathname;
var page = path.split("/").pop();
page = page.replace(".html", "");
var page_imag = all_pages[page].imagesfolder;

var imag_counter = 0;

// CHECK IF IMAGE EXISTS
function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;
    
    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      
      img.onerror = () => {
        callback(false);
      };
    }
  }


// Uses check if exists in O(n) time (I think) to see how many photos are in designated folder
function sizeoffolder(folder, i = 1) {
    return new Promise((resolve, reject) => {
        checkIfImageExists(folder + '/' + i + '.jpg', (exists) => {
            if (exists) {
                resolve(sizeoffolder(folder, i + 1));
            } else {
                resolve(i);
            }
        });
    });
}

var folder_size;

sizeoffolder(page_imag).then(result => {
    folder_size = result-1;
}).catch(error => {
    console.error(error);
});

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

function addColumns(){
    var a = "placeholder";
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
