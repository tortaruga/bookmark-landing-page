const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const mobileMenu = document.querySelector('.mobile-menu');
const logo = document.querySelector('.logo');
const contactForm = document.querySelector('.contact-form');
const userEmail = document.querySelector('.user-email');
const errorMsg = document.querySelector('.error-message');
const errorWrapper = document.querySelector('.error-wrapper');
const body = document.querySelector('body');

// console.log('i wanna die'); 


const questionBtns = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
// console.log(questionBtns);

questionBtns.forEach(btn => {
   btn.addEventListener('click', (e) => {
      let index = Array.from(questionBtns).indexOf(e.currentTarget); 
      console.log(index);

      Array.from(answers)[index].classList.toggle('hidden'); 
   })      
}); 

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    if (mobileMenuBtn.classList.contains('open')) {
      mobileMenuBtn.innerHTML = '<img class="sm:hidden" src="./images/icon-close.svg" alt="icon close menu">'
      nav.classList.toggle('nav-menu-open');  
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex'); 
      logo.src = "./images/logo-white.svg";
      body.classList.toggle('overflow-hidden');
    } else {
        mobileMenuBtn.innerHTML = '<img class="sm:hidden" src="./images/icon-hamburger.svg" alt="icon open menu">';
      nav.classList.toggle('nav-menu-open');  
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex'); 
      logo.src = "./images/logo-bookmark.svg"; 
      body.classList.toggle('overflow-hidden');

    } 
    
})

let emailValue;

contactForm.addEventListener('submit', (e) => {
   e.preventDefault();
  emailValue = userEmail.value;
  const emailRegex = /^[A-Za-z0-9-%_.]+@[A-Za-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(emailValue)) {
   errorMsg.classList.remove('hidden');   
   errorWrapper.classList.toggle('bg-accent');
   errorWrapper.classList.toggle('p-0.5');
  } else {
   errorMsg.classList.add('hidden'); 
   errorWrapper.classList.toggle('p-0.5');
   errorWrapper.classList.toggle('bg-accent');
  }
})

const tab1 = document.querySelector('.tab-one');
const tab2 = document.querySelector('.tab-two');
const tab3 = document.querySelector('.tab-three');
const tabLink1 = document.querySelector('.tab-link-one');
const tabLink2 = document.querySelector('.tab-link-two');
const tabLink3 = document.querySelector('.tab-link-three');

tabLink1.addEventListener('click', (e) => {
  e.preventDefault();
  tabLink1.classList.add('underlined');
  tabLink2.classList.remove('underlined');
  tabLink3.classList.remove('underlined');

  tab1.classList.remove('hidden');
  tab1.classList.add('sm:flex');
  tab2.classList.add('hidden');
  tab2.classList.remove('sm:flex');
  tab3.classList.add('hidden');
  tab3.classList.remove('sm:flex');
})

tabLink2.addEventListener('click', (e) => {
  e.preventDefault();

  tabLink2.classList.add('underlined');
  tabLink1.classList.remove('underlined');
  tabLink3.classList.remove('underlined');

  tab2.classList.remove('hidden');
  tab2.classList.add('sm:flex');
  tab1.classList.add('hidden');
  tab1.classList.remove('sm:flex');
  tab3.classList.add('hidden');
  tab3.classList.remove('sm:flex');

  
})

tabLink3.addEventListener('click', (e) => { 
  e.preventDefault();

  tabLink3.classList.add('underlined');
  tabLink1.classList.remove('underlined');
  tabLink2.classList.remove('underlined');

  tab3.classList.remove('hidden');
  tab3.classList.add('sm:flex');

  tab2.classList.add('hidden');
  tab2.classList.remove('sm:flex');

  tab1.classList.add('hidden');
  tab1.classList.remove('sm:flex');

})



const iconFb = document.querySelectorAll('.icon-fb');
const iconX = document.querySelectorAll('.icon-x');
 
iconFb.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.src = "./images/fb-hover.svg";
  })

  icon.addEventListener('mouseleave', () => {
    icon.src = "./images/icon-facebook.svg"; 
  })

})

iconX.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.src = "./images/x-hover.svg";
  })
  
  icon.addEventListener('mouseleave', () => {
    icon.src = "./images/icon-twitter.svg"; 
  }) 
  
})

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('mouseenter', () => {
    arrow.src = "./images/arrow-red.svg";
  })

  arrow.addEventListener('mouseleave', () => {
    arrow.src = "./images/icon-arrow.svg";
  }) 
})