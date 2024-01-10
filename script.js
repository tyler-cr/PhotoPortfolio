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

function creatColumns(size, location){
    const randlist = makeunorderedlist(size);
    const colsize = Math.floor(size/3);
    let j = 1;
    for (let i = 0; i< size; i++){
        if ((i+1)%colsize == 0 && j < 3){
            j++;
        }
        const image = document.createElement('img');
        image.src = './images/'+location+'/' + randlist[i] + '.jpg';
        document.getElementById('column'+j).appendChild(image);
    }
}


// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
