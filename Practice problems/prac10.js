function ytbutton(selector) {
    const buttonElement = document.querySelector(selector);

    if(!buttonElement.classList.contains('is-subbed')){
        turnoffbutton();
        buttonElement.classList.add('is-subbed');
    }else {
        buttonElement.classList.remove('is-subbed');
    }
}
function turnoffbutton() {
    const prevbutton = document.querySelector('.is-subbed')
    if (prevbutton) {
        prevbutton.classList.remove('is-subbed');
    }
}