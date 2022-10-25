function reverseNumber(number) {
  let r = number.toString().split("").reverse().join("");
  console.log(Math.sign(number) * parseInt(r));
}

reverseNumber(10000);
reverseNumber(1234);
reverseNumber(-321);
