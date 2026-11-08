function discount(total, isStudent) {
  if (isStudent && total >= 5) {
    return total * 0.9;        // 10% off
  } else if (isStudent) {
    return total * 0.95;       // 5% off
  }
  return total;
}

console.log(discount(10, true));
console.log(discount(4, true));
console.log(discount(10, false));

for (let i = 1; i <= 3; i++) {
  console.log(`Order #${i} is ready`);
}
