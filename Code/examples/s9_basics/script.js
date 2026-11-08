const shop = "Mekong Coffee";   // cannot be reassigned
let cups = 3;                     // can change
cups = cups + 2;

const price = 1.5;
const total = cups * price;

console.log(shop, "sold", cups, "cups");
console.log(`Total: $${total.toFixed(2)}`);
console.log(typeof shop, typeof cups, typeof true);
console.log("5" + 2, "5" * 2);   // careful with types!
console.log(0.1 + 0.2 === 0.3);
