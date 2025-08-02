import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

// FIrst step here is to SAVE THE DATA by creating an array of object to hold all cards to be generated. 
// But datais now saved inside the cart.js file and loaded on the html page

let productsHTML = '';

// Second step is to loop through the array to GENERATE THE HTML 
products.forEach((product) => {

  productsHTML += `
  <div class="product-container">
    <div class="product-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCent / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id='${product.id}'>
      Add to Cart
    </button>
  </div>`
});

// Last step is combine the HTML together and put on the webpage by createing a variable above name productsHTML

// Finally put the HTML on the page using the DOM in otherwords generate the html on the page using javascript

const productGrid = document.querySelector('.js-product-grid');

productGrid.innerHTML = productsHTML;

// Third Step is to make the page interactive 

// finds every button on the page 
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId1 = button.dataset.productId;
      // create a temporary box to hold the item when looping through 
      let matchingItem;

      // check if the product is in the cart by looping through the cart using forEach loop
      cart.forEach((item) => {
        if (productId1 === item.productId) {
          matchingItem = item;
        }
      });

      // if it is, increase the quantity and if Notification, add it to the cart 
      if (matchingItem) {
        matchingItem.quantity += 1
      } else {
        cart.push({
        productId: productId1,
        quantity: 1
      });
      }

      // To sum the number of quantity selected by the User, we loop throught the cart and update the quantity 
      let cartQuantity = 0;

      cart.forEach((item) => {
        // cartQuantity = cartQuantity + item.quantity;
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
    });
  });