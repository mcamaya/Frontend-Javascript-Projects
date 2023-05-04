const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoMenu = document.querySelector('.product-detail');
const burger = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const mobileSidebar = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
burger.addEventListener('click', toggleSidebarMenu);
shoppingCart.addEventListener('click', toggleShoppingMenu);

function toggleDesktopMenu() {
    const isShoppingCartClosed = carritoMenu.classList.contains('inactive');
    desktopMenu.classList.toggle('inactive');

    if (!isShoppingCartClosed) {
        carritoMenu.classList.add('inactive');
    }
} 

function toggleSidebarMenu() {
    const isShoppingCartClosed = carritoMenu.classList.contains('inactive');
    mobileSidebar.classList.toggle('inactive');

    if (!isShoppingCartClosed) {
        carritoMenu.classList.add('inactive');
    }

}

function toggleShoppingMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileSidebar.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileSidebar.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    carritoMenu.classList.toggle('inactive');
}