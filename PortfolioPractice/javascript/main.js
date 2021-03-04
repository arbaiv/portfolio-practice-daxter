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
}
responseButton.addEventListener('click', responsiveNavbar, false);

