function capitalize(strIn) {
  if (typeof strIn === "string" && strIn.length > 0)
    return strIn.replace(strIn[0], strIn[0].toUpperCase());
}

function reverseString(strIn) {
  if (strIn === "" || strIn.length === 1) {
    return strIn;
  }

  return reverseString(strIn.substring(1)) + strIn[0];
}

const calculator = {
  add: (x, y) => x + y,
  sub: (x, y) => x - y,
  mult: (x, y) => x * y,
  div: (x, y) => x / y,
};

function caesarCipher(strIn, shiftVal) {
  let cipherText = "";
  for (let i = 0; i < strIn.length; i++) {
    const charCode = strIn.charCodeAt(i);
    let newCode = 0;
    // lowercase letters
    if (charCode >= 97 && charCode <= 122) {
      newCode = (charCode + shiftVal) % 123;
      if (newCode < 97) {
        newCode = newCode + 97;
      }
      cipherText = cipherText.concat(String.fromCharCode(newCode));
    } else if (charCode >= 65 && charCode <= 90) {
      newCode = (charCode + shiftVal) % 91;
      if (newCode < 65) {
        newCode = newCode + 65;
      }
      cipherText = cipherText.concat(String.fromCharCode(newCode));
    } else {
      const nonLetterChar = String.fromCharCode(charCode);
      cipherText = cipherText.concat(nonLetterChar);
    }
  }
  return cipherText;
}

function analyzeArray(arr) {
  let avg = arr.reduce((sum, current) => sum + current, 0) / arr.length;
  // return avg;

  let min = arr.reduce((acc, curr) => (acc <= curr ? acc : curr), arr[0]);

  let max = arr.reduce((acc, curr) => (acc > curr ? acc : curr), arr[0]);

  return { average: 4, min: min, max: max, length: arr.length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
