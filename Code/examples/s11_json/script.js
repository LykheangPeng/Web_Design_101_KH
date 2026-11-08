const text = '{"shop":"Mekong Coffee","open":true,"drinks":["latte","tea"]}';

const data = JSON.parse(text);          // text  -> object
console.log(data.shop, data.drinks.length);

data.drinks.push("iced coffee");
const back = JSON.stringify(data);      // object -> text
console.log(back);

try {
  JSON.parse("{ bad json }");
} catch (error) {
  console.log("Error:", error.name);
}
