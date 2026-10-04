/* 
STEP ONE:
SAVING THE DATA IN ARRAY OF OBJECTS.

const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  ratings: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090
  
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  ratings: {
    stars: 4  ,
    count: 127
  },
  priceCents: 2095

}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  ratings: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799

}, {
  image: 'images/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  ratings: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899
}];

SECOND STEP
GENERATE THE HTML USING FOREACH TO LOOP THROUGH THE ARRAY.
WHAT FOREACH DOES IS THAT IT SAVES EACH ARRAY INTO THE PARAMETER PASSED INSIDE THE FUNCTION AND RUN THE ARROW FUNCTION
*/

let productsHTML = '';

products.forEach((param) => {
 
  // Step 3: Combine the HTML together into one string using the accumlatore pattern 

  // Generate the html
  productsHTML = productsHTML + `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${param.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${param.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${param.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${param.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(param.priceCents / 100).toFixed(2)}
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

      <button class="add-to-cart-button button-primary js-add-cart-btn" data-product-id = '${param.id}'>
        Add to Cart
      </button>
    </div>
  `;
})

// STEP 4: PUT THE CONBINED HTML ON THE PAGE USING THE DOM

document.querySelector('.js-products-grid')
.innerHTML = productsHTML;

// TO MAKE THE PAGE INTERACTIVE WHEN WE CLICK ON THE Add to Cart Button, WE ADD EVENTLISTENERS TO THE BUTTON
// We loop through each button, add eventlistener to the button and perform a function when clicked
document.querySelectorAll('.js-add-cart-btn')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      // Check if product name is already in the cart by looping through the cart using forEach method

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      // If the product name is found, only increase it's quantity else add it to the cart. Remember matching item is an object now.
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }

      // FOR US TO GET TO TOTAL NUMBER OF QUANTITY ADDED TO cart, WE NEED TO SUM ALL QUANTITIES ADDED
      // lET'S GET A VARIABLE TO HOLD THE QUANTITY
      let cartQuantity = 0;

      // LOOPING THROUGH THE CART AGAIN USING FOREACH
      cart.forEach((item) => {
        cartQuantity += item.quantity
      });

      // Putting the cart on the page
      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
    })  
  })

  