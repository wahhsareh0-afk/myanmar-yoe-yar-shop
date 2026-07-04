// menu
const burgerMenuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

let isMenuOpen = false;

burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('open');

    if(isMenuOpen) {
        nav.classList.remove('fade-in');
        nav.classList.add('fade-out');
        setTimeout(() => {
            nav.classList.add('hidden');
        }, 300);
    } else {
        nav.classList.remove('fade-out');
        nav.classList.remove('hidden');
        nav.classList.add('fade-in');
    }
    isMenuOpen = !isMenuOpen;
});

// sidepanel
const googleMapImage = document.getElementById('google-map-image');
const sidepanel = document.getElementById('sidepanel');
const sidepanelCloseBtn = document.getElementById('sidepanel-close-btn');

googleMapImage.addEventListener('click', () => {
    sidepanel.classList.toggle('hidden');
    sidepanel.classList.add('fade-in');
    sidepanel.classList.remove('fade-out');
})

sidepanelCloseBtn.addEventListener('click', () =>{
    sidepanel.classList.remove('fade-in');
    sidepanel.classList.add('fade-out');
    setTimeout(() => {
        sidepanel.classList.toggle('hidden');
    }, 600);
})

// wishlist add success
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('successButton').click();
});

//select quantity button
function plus() {
    var preValue = document.getElementById("counter").value;
    document.getElementById("counter").value = parseInt(preValue) + 1;
}
function minus() {
    var preValue = document.getElementById("counter").value;
    if (parseInt(preValue) != 0) {
        document.getElementById("counter").value = parseInt(preValue) - 1;
    }
}




