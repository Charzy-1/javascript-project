export const cart = [];

// write a funtion that add products to cart 
export function addTOCart(productId1) {
  // create a temporary box to hold the item when looping through 
  let matchingItem;

  // check if the product is in the cart by looping through the cart using forEach loop
  cart.forEach((cartItem) => {
    if (productId1 === cartItem.productId) {
      matchingItem = cartItem;
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
}