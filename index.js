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
};

export { capitalize, reverseString, calculator };
