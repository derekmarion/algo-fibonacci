function fibonacci(num) {
  let fib = [0, 1]; //seed first two numbers in fibonacci sequence
  if (num <= 1) { //handle cases where n is 0 or 1
    return fib[num];
  };
  for (i = 2; i <= num; i++) { //build fib sequence up to place n
    let current_value = fib[i-2] + fib[i - 1];
    fib.push(current_value);
  };
  return fib.slice(-1)[0]; //return last value of fib sequence
}

module.exports = fibonacci;
