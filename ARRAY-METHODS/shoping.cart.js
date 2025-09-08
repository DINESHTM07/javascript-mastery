let cart = [
  { item: "laptop", price: 60000, quantity: 1 },
  { item: "watch", price: 2999, quantity: 1 },
  { item: "mobile", price: 40000, quantity: 1 },
];

function addItem(item, price, quantity) {
  cart.push({ item: item, price: price, quantity: quantity });
  console.log(`${item} Added to the cart.`);
}

function removeItem(item) {
  cart = cart.filter((product) => product.item !== item);
  console.log(`${item} Removed from the cart`);
}

function calculateTotal() {
  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  console.log(`Total price: ${total}`);
}

function listCart() {
  cart.forEach((product) => {
    console.log(`${product.item}--${product.price} x ${product.quantity}`);
  });
}


listCart();
addItem("Mouse", 1200, 1);
listCart();
removeItem("laptop");
listCart();
calculateTotal();
