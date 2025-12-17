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

function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(
          ((((char.charCodeAt(0) - 97 + shift) % 26) + 26) % 26) + 97
        );
      }
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
          ((((char.charCodeAt(0) - 65 + shift) % 26) + 26) % 26) + 65
        );
      }
      return char;
    })
    .join("");
}

function analyzeArray(arr) {
  const length = arr.length;
  const sum = arr.reduce((sum, num) => sum + num, 0);
  const average = Math.floor(sum / length);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };
