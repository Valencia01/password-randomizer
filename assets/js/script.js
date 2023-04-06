// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var passLen = prompt("Input a number for the length of password. Must be at least 5", "i.e. 8");

  const generatedPass = [];

  var lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCase = lowerCaseStr.split('');

  var upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const upperCase = upperCaseStr.split('');


  while (isNaN(passLen) || passLen < 5 || passLen - Math.floor(passLen) !== 0) {
    passLen = prompt("Invalid input please enter a valid number")
  }

  for(let i = 0; i < passLen; i++) {
    generatedPass[i] = lowerCase[Math.floor(Math.random() * lowerCase.length)];

  }

  var includeUpper = prompt("Should the password include uppercase? (y/n)")

  while (includeUpper !== "y" && includeUpper !== "n" ) {
    includeUpper = prompt("Invalid input please enter either y or n");
  }

  if (includeUpper === "y") {
    for (var j = 0; j < passLen; j += 2) {
      generatedPass[j] = upperCase[Math.floor(Math.random() * upperCase.length)];
    }
  }

  return generatedPass.join("");
}
