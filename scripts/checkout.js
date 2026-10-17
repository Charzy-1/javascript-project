import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

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
  `<div class="cart-item-container">
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
            $${matchingProduct.priceCents / 100}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary">
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
              name="delivery-option-2">
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
              name="delivery-option-2">
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
              name="delivery-option-2">
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