const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const carritoMenu = document.querySelector('.product-detail');
const burger = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const mobileSidebar = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container')

/* navbar */
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

/* cards */
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}, {
    name: "Laptop",
    price: 310,
    image: 'https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2029.jpg'
}, {
    name: "Mouse",
    price: 60,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_615158-MLA46232793009_062021-V.webp'
}, {
    name: "Headphones",
    price: 150,
    image: 'https://m.media-amazon.com/images/I/71y8S8RsvVL.jpg'
}, {
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
}, {
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
}, {
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
}, {
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
}, {
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
}, {
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
}, {
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
}, {
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}, {
    name: 'Botas',
    price: 50,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Boots_3_by_wax115.jpg/1200px-Boots_3_by_wax115.jpg'
}, {
    name: 'Frenos',
    price: 20,
    image: 'https://acnews.blob.core.windows.net/imgnews/medium/NAZ_c77c2dfcd5c34802a4d4c2ae28d752ca.jpg'
}, {
    name: 'Pulserita',
    price: 10,
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/804/588/products/90089511_218206199383636_6211461925032477471_n1-e056e2745c7e62045c15942250355368-640-0.webp'
}, {
    name: 'Gorros de natación',
    price: 45,
    image: 'https://cdn.coordiutil.com/imagen-gorro_de_natacion_piscina_en_silicona-1684087-0-0-0-100.jpg'
});

/* Estructura base que debemos construir con JS
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

for (product of productList) {
    const img = document.createElement('img');
    const productCard = document.createElement('div');
    const productInfo = document.createElement('div');
    const infoDivContainer = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    const infoFigureContainer = document.createElement('figure');
    const imgCart = document.createElement('img');

    productCard.classList.add('product-card');
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    img.setAttribute('src', product.image);

    productInfo.classList.add('product-info');
    productInfo.appendChild(infoDivContainer);
    productInfo.appendChild(infoFigureContainer);
    
    infoDivContainer.appendChild(productPrice);
    infoDivContainer.appendChild(productName);

    productPrice.innerText = '$' + product.price
    productName.innerText = product.name;

    infoFigureContainer.appendChild(imgCart);


    imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    

    cardsContainer.appendChild(productCard)
}