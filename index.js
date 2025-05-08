function capitalize(strIn) {
  if (typeof strIn === "string" && strIn.length > 0)
    return strIn.replace(strIn[0], strIn[0].toUpperCase());
}

function reverseString(strIn) {}
export { capitalize };
