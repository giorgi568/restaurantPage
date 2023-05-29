import { initialize } from './initial';
import { displayMenu } from './menu';
import { displayContact } from './contact';
import { displayHome } from './home';
initialize();
// displayMenu();
// displayContact();

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', displayHome);

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', displayMenu);

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', displayContact);

