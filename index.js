function capitalize(strIn) {
  if (typeof strIn === "string" && strIn.length > 0)
    return strIn.replace(strIn[0], strIn[0].toUpperCase());
}

function reverseString(strIn) {
  let temp = "";
  const strLen = strIn.length - 1;
  for (let i = strLen; i >= 0; i--) {
    temp = temp.concat(strIn[i]);
  }
  return temp;
}
export { capitalize, reverseString };
