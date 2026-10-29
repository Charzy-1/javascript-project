// GET THE CART FROM LOCAL STORAGE USING
export let cart = JSON.parse(localStorage.getItem('cart'));

// GIVE THE CART A DEFAULT VALUE IF THE CART IS NULL/EMPTY
if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: '1'
    }, 
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];
}

// FUNCTION TO SAVE OUR CART TO LOCALSTORAGE`
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add items to cart
export function addToCart(productId) {
  // Check if product name is already in the cart by looping through the cart using forEach method

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If the product name is found, only increase it's quantity else add it to the cart. Remember matching item is an object now.
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

// FUNCTION TO REMOVE A PRODUCT FROM CART. it takes the productid we have and remove it from the cart
export function removeFromCart (productId) {
  // STEP 1: CREATE A NEW ARRAY
  const newCartArray = [];

  // STEP 2: LOOP THROUGH THE cart.JS ARRAY
  cart.forEach((cartItem) => {
    // STEP 3: push EACH PRODUCT (cartItem) TO THE NEW ARRAY EXCEPT FOR THIS PROUDCTID which we stored already in a variable inside where we added eventlistner to the buttons (link) in our chechout.js page that is being cliced.

    if (cartItem.productId !== productId) {
      newCartArray.push(cartItem);
    }
  });

  // SO OUR NEW CART NOW REPLACES THE CART.JS ARRAY UP THERE
  cart = newCartArray;

  saveToStorage();
}

function addFunc () {
  console.log('This is just a test I will come soon');
}