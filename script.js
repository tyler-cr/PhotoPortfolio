function makeunorderedlist(size){
    const a = []
    for (let i = 0; i < size; i++){
        a.push(i+1)
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

function creatColumns(size){
    
}