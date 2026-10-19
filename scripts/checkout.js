import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

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

          <div class="delivery-option">
            <input type="radio" class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input"
              name="${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

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