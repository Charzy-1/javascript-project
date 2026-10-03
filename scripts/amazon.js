/* 
STEP ONE:
SAVING THE DATA IN ARRAY OF OBJECTS.
*/
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
}];

/*
SECOND STEP
GENERATE THE HTML USING FOREACH TO LOOP THROUGH THE ARRAY
WHAT FOREACH DOES THAT IS THAT IT SAVES EACH ARRAY INTO THE PARAMETER PASSED INSIDE THE FUNCTION AND RUN THE ARROW FUNCTION
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
          src="images/ratings/rating-${param.ratings.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${param.ratings.count}
        </div>
      </div>

      <div class="product-price">
        $${param.priceCents / 100}
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

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  `;
})

// STEP 4: PUT THE CONBINED HTML ON THE PAGE USING THE DOM

document.querySelector('.js-products-grid')
.innerHTML = productsHTML;