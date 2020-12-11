var navContainer = document.getElementsByClassName('nav-container')[0];
var menuOpen = document.getElementsByClassName('menu-open')[0];

menuOpen.addEventListener('click',  function() {
    navContainer.classList.add('active');
})

var menuClose = document.getElementsByClassName('menu-close')[0];
menuClose.addEventListener('click', function() {
    navContainer.classList.remove('active');
})
