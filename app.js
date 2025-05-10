function formatPhoneNum(num) {
  let format = "(xxx)-xxx-xxxx";
  for (let i = 0; i < num.length; i++) {
    format = format.replace("x", num[i]);
  }
  return format;
}
console.log(formatPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function formatPhoneNum2(num) {
  return (
    "(" +
    num.slice(0, 3).join("") +
    ")" +
    "-" +
    num.slice(3, 6).join("") +
    "-" +
    num.slice(6).join("")
  );
}
console.log(formatPhoneNum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function findTheOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) return arr[i];
  }
}
console.log(findTheOdd([1, 1, 2, 3, 3]));

function camelCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}
console.log(camelCase("hola mundo"));

function sumDigits(num) {
  while (num >= 10) {
    let sum = 0;
    for (let digit of num.toString()) {
      sum += parseInt(digit);
    }
    num = sum;
  }
  return num;
}
console.log(sumDigits(942));

function panagram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerStr.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

console.log(panagram("The quick brown fox jumps over the lazy dog"));
