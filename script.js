// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function joins all the user responses
function generatePassword() {
  var newpassword = [""];
  var userchoice = [""];
  var lengthofpassword = window.prompt("How many characters(between 8 and 128)?");
 
// added if statment to prompt user to choose numbers between 8-128
  if ((lengthofpassword < 8)||(lengthofpassword > 128)) {
    alert("please enter a number between 8 and 128");
    return null;
  }

// Created Arrays of Possible Character Choices
// Created function to ask user which options and made conditional statements to ensure minimum option requirements were met.
var numbers = window.confirm("Would you like to include numbers?");
if (numbers === true) {
  userchoice.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
}

var upperCase = window.confirm("Would you like to include uppercase letters?");
if (upperCase === true) {
  userchoice.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
}

var lowerCase = window.confirm("Would you like to include lowercase letters?");
if (lowerCase === true) {
  userchoice.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
}

var special = window.confirm("Would you like to include special characters?");
if (special === true) { 
  userchoice.push('@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.');
}

// added if statment to prompt user to choose at least one option
if((!numbers)&&(!upperCase)&&(!lowerCase)&&(!special)) {
alert("Must choose at least one type.");
return null;
}

// A for loop repeats until a specified condition evaluates to false.
for (var i = 0; i < lengthofpassword; i++) {
  newpassword += userchoice[Math.floor(Math.random() *userchoice.length)];
 }

  return newpassword;
}