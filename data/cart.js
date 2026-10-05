export const cart = [];

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
      quantity: 1
    });
  }
}