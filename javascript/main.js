//For navbar link design
var nav = document.querySelectorAll('div#navbar a');

function activeDesignZero(){
    nav[0].className = 'clicked';
    nav[1].className = 'unclicked';
    nav[2].className = 'unclicked';
    nav[3].className = 'unclicked';
}

function activeDesignOne(){
    nav[0].className = 'unclicked';
    nav[1].className = 'clicked';
    nav[2].className = 'unclicked';
    nav[3].className = 'unclicked';
}

function activeDesignTwo(){
    nav[0].className = 'unclicked';
    nav[1].className = 'unclicked';
    nav[2].className = 'clicked';
    nav[3].className = 'unclicked';
}

function activeDesignThree(){
    nav[0].className = 'unclicked';
    nav[1].className = 'unclicked';
    nav[2].className = 'unclicked';
    nav[3].className = 'clicked';
}

nav[0].addEventListener('click', activeDesignZero, false);
nav[1].addEventListener('click', activeDesignOne, false);
nav[2].addEventListener('click', activeDesignTwo, false);
nav[3].addEventListener('click', activeDesignThree, false);

// For responsive navbar
var mobileNavbar = document.getElementById('navbar');
var responseButton = document.querySelector('div#response-button i');

function responsiveNavbar(){
    mobileNavbar.classList.toggle('afterClick');
    /*the if statement is for when the toggle closes the navbar will have an animation affect for disapearing*/
    if(mobileNavbar.getAttribute('class').value = 'beforeClick'){
        mobileNavbar.style.display = 'block';
      }
    /*for burger menu to change to cross*/
    var menuIcon = document.querySelectorAll('div#response-button span');
    menuIcon[0].classList.toggle('firstRotate');
    menuIcon[1].classList.toggle('middlehide');
    menuIcon[2].classList.toggle('thirdRotate');
}
responseButton.addEventListener('click', responsiveNavbar, false);

