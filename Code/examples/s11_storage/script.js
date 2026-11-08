// Save a small setting in the browser
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

// Objects must be turned into text first
const cart = [{ name: "Latte", qty: 2 }];
localStorage.setItem("cart", JSON.stringify(cart));

const saved = JSON.parse(localStorage.getItem("cart"));
console.log(saved[0].name, saved[0].qty);

localStorage.removeItem("theme");
console.log(localStorage.getItem("theme"));   // null when missing
