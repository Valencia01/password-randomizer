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

  var numberStr = '1234567890'
  const numbers = numberStr.split('');

  var specialStr = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  const special = specialStr.split('');


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
    for (var i = 0; i < passLen; i += 2) {
      generatedPass[i] = upperCase[Math.floor(Math.random() * upperCase.length)];
    }
  }


  var includeNumbers = prompt("Should the password include numbers? (y/n)")

  while (includeNumbers !== "y" && includeNumbers !== "n" ) {
    includeNumbers = prompt("Invalid input please enter either y or n");
  }

  if (includeNumbers === "y") {
    for (var i = 2; i < passLen; i += 3) {
      generatedPass[i] = numbers[Math.floor(Math.random() * numbers.length)];
    }
  }


  var includeSpecial = prompt("Should the password include special characters? (y/n)")

  while (includeSpecial !== "y" && includeSpecial !== "n" ) {
    includeSpecial = prompt("Invalid input please enter either y or n");
  }

  if (includeSpecial === "y") {
    for (var i = 3; i < passLen; i += 4) {
      generatedPass[i] = special[Math.floor(Math.random() * special.length)];
    }
  }

  return generatedPass.join("");
}
