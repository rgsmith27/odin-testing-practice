function capitalize(str) {
  arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  str = arr.join("");
  return str;
}

export { capitalize };
