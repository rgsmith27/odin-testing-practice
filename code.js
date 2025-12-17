function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

export { capitalize, reverse, calculator };
