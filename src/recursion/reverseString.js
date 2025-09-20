const str = "sandip deb";

function reverseString(str) {
  if (str.length < 1) return str;
  const res = str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
  return res;
}

console.log(reverseString(str));
