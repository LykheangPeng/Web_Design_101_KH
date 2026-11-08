const menu = [
  { name: "Iced coffee",    price: 1.5,  hot: false },
  { name: "Black coffee",   price: 1.25, hot: true  },
  { name: "Coconut latte",  price: 2.25, hot: false },
];

const names = menu.map(item => item.name);
const cold  = menu.filter(item => !item.hot);
const sum   = menu.reduce((acc, item) => acc + item.price, 0);

console.log(names);
console.log(cold.length, "cold drinks");
console.log("Average price:", (sum / menu.length).toFixed(2));
console.log(menu[2].name.toUpperCase());
