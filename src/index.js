import home from './home';
import menu from '../src/menu.js';
import contact from './contact';

const tabs = document.querySelectorAll('.nav-list');
const contactTab = document.querySelector('.contact');
const menuTab = document.querySelector('.menu');
const content = document.querySelector('.content');
const homeTab = document.querySelector('.home');

// activate home tab when load

// Event listeners of when clicked on each tab, content changes
homeTab.addEventListener('click', home);

menuTab.addEventListener('click', menu);

contactTab.addEventListener('click', contact);

// function for each tab click is replaced with webpack module import.
// function that changes content html when click on menu tab
// function changeContentMenu() {
// 	content.innerHTML = 'menu';
// }

// function that changes content html when clicked on contact us
// function changeContentContact() {
// 	content.innerHTML = 'contact';
// }

// // function that changes content html when clicked on home
// function changeContentHome() {
// 	content.innerHTML = 'home';
// }
