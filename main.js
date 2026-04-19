function capitalize(str) {
  if (str.length === 0) {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

function analyzeArray(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return {
    average: sum / arr.length,
    min: min,
    max: max,
    length: arr.length,
  };
}

export default {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
