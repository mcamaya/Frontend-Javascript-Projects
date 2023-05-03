const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burger = document.querySelector('.menu');
const mobileSidebar = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
burger.addEventListener('click', toggleSidebarMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
} 

function toggleSidebarMenu() {
    mobileSidebar.classList.toggle('inactive');
}