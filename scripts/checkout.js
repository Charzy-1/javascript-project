import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from '../data/deliveryOptions.js';

// GETING TODAY'S DATE USING DAY JS XTERNAL LIBRARY
const today = dayjs();

// Adding 7 days to today's date using .add
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));


// THE LAST STEP IS TO COMBINE THE HTML TOGETHER AND PUT IT ON THE PAGE BY STORING IT IN A A VARIABLE
// SO EACH TIME WE LOOP THROUGH THE CART WE ARE GOING TO ADD THE HTML INTO THE EMPTY STRING BELOW

let cartSummaryHTML = ''; 

cart.forEach((cartItem) => {

  // GET THE PRODUCT ID OUT FROM THE cart.JS FIRST
  const productId =  cartItem.productId;

  // CREATE A VARIABLE TO SAVE THE RESULT
  let matchingProduct;

  // LOOP THOUGH THE PRODUCTS
  // for each product, check if the productId on the product array in product.js is equal to our own product ID which we store in a variable above called productID
  products.forEach((product) => {
    if(product.id === productId) {
      matchingProduct = product;
    }
  });

  // GENERATE THE HTML
  cartSummaryHTML += 
  `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Wednesday, June 15
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${(matchingProduct.priceCents / 100).toFixed(2)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id='${matchingProduct.id}'>
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>

          ${delieveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
  `;
});

// LETS WRITE A FUNCTION TO GENERATE HTML FOR DELIVERY OPTION
function delieveryOptionsHTML (matchingProduct, cartItem) {
  // Commbining the html generated below
  let deliveryHTMl = '';

  // LOOPING THROUGH THE DELIVERY OPTION
  deliveryOptions.forEach((deliveryOption) => {
    // Get today's date using dayjs and put into the html generated
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 'days'
    );

    const dateFormat = deliveryDate.format('dddd, MMMM D');

    const PriceStrings = deliveryOption.priceCents === 0 
      ? 'FREE'
      : `$${(deliveryOption.priceCents / 100).toFixed(2)} -`;

      // TO FIGURE OUT WHICH DELIVER OPTION IS CHECKED
      // to be checked if delivery option id matches the delivery option id in the cart
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    // Generate some HTML
    deliveryHTMl += `
      <div class="delivery-option">
        <input type="radio"  
        ${isChecked ? 'checked' : ''}
        class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${dateFormat}
          </div>
          <div class="delivery-option-price">
            ${PriceStrings} Shipping
          </div>
        </div>
      </div>
    `
  });

  return deliveryHTMl;
}

// PUT THE GENERATED HTML ON THE PAGE NOW USING THE DOM
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

// ADD EVENTLISTENERS TO ALL DELETE BUTTONS. WE WILL SELECT ALL DELETE BUTTONS USING QUERYSELECTORALL to delete product from cart.
const jsDeleteBtn = document.querySelectorAll('.js-delete-link');

jsDeleteBtn.forEach((link) => {
  // WE ADD AN EVENTLISTER TO THE LINK PARAM WHICH SERVES AS OUR NEW DELETE BUTTONS
  link.addEventListener('click', () => {
    // REMOVE THE PRODUCT FROM THE CART AND UPDATE THE CART WHEN THE DELETE BUTTON IS CLICKED
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);

    container.remove();
  });
})

function newFunction () {
  console.log('Testin a function')
}