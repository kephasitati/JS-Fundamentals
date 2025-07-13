const arg = process.argv[2];
const num = parseInt(arg);

function factorial(n) {
  if (isNaN(n) || n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
