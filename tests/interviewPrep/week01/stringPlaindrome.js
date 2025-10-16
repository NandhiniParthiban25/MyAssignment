//Check if a string is a palindrome

let str = "madam";
let reversed = str.split("").reverse().join("");
if (str === reversed) {
  console.log("It's a palindrome ");
} else {
  console.log("Not a palindrome");
}