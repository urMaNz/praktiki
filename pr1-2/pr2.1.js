
function factorial(n) {
  if (n < 0) {
    return undefined; 
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Выведет 120
console.log(factorial(0)); // Выведет 1
console.log(factorial(3)); // Выведет 6
