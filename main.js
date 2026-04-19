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

// function caesarCipher(str, shift) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const code = char.charCodeAt(0);

//     if (code >= 65 && code <= 90) {
//       const shifted = ((((code - 65 + shift) % 26) + 26) % 26) + 65;
//       result += String.fromCharCode(shifted);
//     } else if (code >= 97 && code <= 122) {
//       const shifted = ((((code - 97 + shift) % 26) + 26) % 26) + 97;
//       result += String.fromCharCode(shifted);
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }

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
