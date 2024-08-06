const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const mobileMenu = document.querySelector('.mobile-menu');
const logo = document.querySelector('.logo');
const contactForm = document.querySelector('.contact-form');
const userEmail = document.querySelector('.user-email');
const errorMsg = document.querySelector('.error-message');
const errorWrapper = document.querySelector('.error-wrapper');
const body = document.querySelector('body');
const questionBtns = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const errorIcon = document.querySelector('.error-icon');
const tab1 = document.querySelector('.tab-one');
const tab2 = document.querySelector('.tab-two');
const tab3 = document.querySelector('.tab-three');
const tabLink1 = document.querySelector('.tab-link-one');
const tabLink2 = document.querySelector('.tab-link-two');
const tabLink3 = document.querySelector('.tab-link-three');
const iconFb = document.querySelectorAll('.icon-fb');
const iconX = document.querySelectorAll('.icon-x');
const arrows = document.querySelectorAll('.arrow');

// faq section   
questionBtns.forEach(btn => {
   btn.addEventListener('click', (e) => {
      let index = Array.from(questionBtns).indexOf(e.currentTarget); 
      Array.from(answers)[index].classList.toggle('hidden'); 
   })      
}); 

arrows.forEach(arrow => {
  arrow.addEventListener('mouseenter', () => {
    arrow.src = "./images/arrow-red.svg";
  })

  arrow.addEventListener('mouseleave', () => {
    arrow.src = "./images/icon-arrow.svg";
  }) 
})

// mobile nav menu

const closeMenuImg = '<img class="sm:hidden" src="./images/icon-close.svg" alt="icon close menu">';
const openMenuImg = '<img class="sm:hidden" src="./images/icon-hamburger.svg" alt="icon open menu">';

function updateMenuIcon(icon) {
  mobileMenuBtn.innerHTML = icon;
}

function updateSrc(img, path) {
   img.src = path;
}

function handleNavMenu() {
  nav.classList.toggle('nav-menu-open');  
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex'); 
  body.classList.toggle('overflow-hidden');
}

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('open');

    if (mobileMenuBtn.classList.contains('open')) {
      updateMenuIcon(closeMenuImg);
      handleNavMenu();
      updateSrc(logo, "./images/logo-white.svg");
    } else {
      updateMenuIcon(openMenuImg);
      handleNavMenu();
      updateSrc(logo, "./images/logo-bookmark.svg");
    }   
})

// email validation

let emailValue;
const emailRegex = /^[A-Za-z0-9-%_.]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;
 
function handleErrorStyle() {
  errorWrapper.classList.toggle('bg-accent');
  errorWrapper.classList.toggle('p-0.5');
}

function showElement(element, flex) {
  element.classList.remove('hidden');

  if (flex === 'flex') {
    element.classList.add('sm:flex');
  } else if (flex === 'noFlex') {
    return;
  }
}

function hideElement(element, flex) {
  element.classList.add('hidden');

  if (flex === 'flex') {
    element.classList.remove('sm:flex');
  } else if (flex === 'noFlex') {
    return;
  }
}

contactForm.addEventListener('submit', (e) => {
   e.preventDefault();

  emailValue = userEmail.value;
 
  if (!emailRegex.test(emailValue)) {
    showElement(errorMsg, 'noFlex');
    showElement(errorIcon, 'noFlex');  
   handleErrorStyle();
  } else {

    hideElement(errorMsg, 'noFlex');
    hideElement(errorIcon, 'noFlex');
   handleErrorStyle();
  }
})

// feature tabs

function underline(link) {
  link.classList.add('underlined');
}

function removeUnderline(link) {
  link.classList.remove('underlined');
}

tabLink1.addEventListener('click', (e) => {
  e.preventDefault();

  underline(tabLink1);
  removeUnderline(tabLink2);
  removeUnderline(tabLink3);

  showElement(tab1, 'flex');
  hideElement(tab2, 'flex');
  hideElement(tab3, 'flex');
})

tabLink2.addEventListener('click', (e) => {
  e.preventDefault();

  underline(tabLink2);
  removeUnderline(tabLink1);
  removeUnderline(tabLink3);

  showElement(tab2, 'flex');
  hideElement(tab3, 'flex');
  hideElement(tab1, 'flex');
})

tabLink3.addEventListener('click', (e) => { 
  e.preventDefault();

  underline(tabLink3);
  removeUnderline(tabLink2);
  removeUnderline(tabLink1);

  showElement(tab3, 'flex');
  hideElement(tab2, 'flex');
  hideElement(tab1, 'flex');

})

// social icons hover effect
 
iconFb.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    updateSrc(icon, "./images/fb-hover.svg");
  })

  icon.addEventListener('mouseleave', () => {
    updateSrc(icon, "./images/icon-facebook.svg");
  })

})

iconX.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    updateSrc(icon, "./images/x-hover.svg");
  })
  
  icon.addEventListener('mouseleave', () => {
    updateSrc(icon, "./images/icon-twitter.svg");
  }) 
  
})
