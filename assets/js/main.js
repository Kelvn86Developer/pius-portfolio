// CHANGE NAV STYLE ON SCROLL
window.addEventListener('scroll',()=> {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});


// CONTACT BUTTONS
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textBtn => {
    let text = textBtn.querySelector('p');

   text.innerHTML =  text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
       1023: {
        slidesPerView: 3,
        spaceBetween: 60,
       } 
    }
});

// WORKING WITH NAV BAR
const nav = document.querySelector('.nav__links');
const openBtn = document.querySelector('.nav__toggle-open');
const closeBtn = document.querySelector('.nav__toggle-close');

const openNav = ()=> {
    nav.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
}
const closeNav = ()=> {
    nav.style.display = 'none';
   
    openBtn.style.display = 'flex';
    closeBtn.style.display = 'none';
}

openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);