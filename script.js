
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
function creatColumns(size, location){
    const randlist = makeunorderedlist(size);
    const colsize = Math.floor(size/3);
    let j = 1;
    for (let i = 0; i< size; i++){
        // if we're at a third of the size then move on to next column
        // but if we're on final column, just dump rest of the images
        if ((i+1)%colsize == 0 && j < 3){
            j++;
        }
        const image = document.createElement('img');
        
        image.src = './images/'+location+'/' + randlist[i] + '.jpg';
        
        // handle the image popping up
        image.onclick = () => {
            let popup = document.querySelector('.popup-imag');
            let popimage= document.querySelector('.actualpop');
            let header = document.querySelector('.header');
            popimage.src = './images/'+location+'/' + randlist[i] + '.jpg';
            popup.style.display = 'block';

        }

        document.getElementById('column'+j).appendChild(image);
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

