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

//returns the generated password
function generatePassword() {
  
  //prompts the user for the length of password
  var passLen = prompt("Input a number for the length of password. Must be at least 5", "i.e. 8");

  const generatedPass = [];

  //makes a string of all the lowercase characters and splits it into an array
  var lowerCaseStr = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCase = lowerCaseStr.split('');

  //makes a string of all the uppercase characters and splits it into an array
  var upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const upperCase = upperCaseStr.split('');

  //makes a string of all the number characters and splits it into an array
  var numberStr = '1234567890'
  const numbers = numberStr.split('');

  //makes a string of all the special characters and splits it into an array
  var specialStr = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  const special = specialStr.split('');


  //This validates that the user input is a positive whole number that is greater than 4
  while (isNaN(passLen) || passLen < 5 || passLen - Math.floor(passLen) !== 0) {
    passLen = prompt("Invalid input please enter a valid number")
  }

  //This fills out the password array with random lowercase letters at the length the user inputed
  for(let i = 0; i < passLen; i++) {
    generatedPass[i] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  //This prompts the user if they want to have upper case letters and validates that their input is either y or n
  var includeUpper = prompt("Should the password include uppercase? (y/n)")

  while (includeUpper !== "y" && includeUpper !== "n" ) {
    includeUpper = prompt("Invalid input please enter either y or n");
  }
  //if the user types y then it replaces every other character with a random uppercase character
  if (includeUpper === "y") {
    for (var i = 0; i < passLen; i += 2) {
      generatedPass[i] = upperCase[Math.floor(Math.random() * upperCase.length)];
    }
  }

  //This prompts the user if they want to have numbers and validates that their input is either y or n
  var includeNumbers = prompt("Should the password include numbers? (y/n)")

  while (includeNumbers !== "y" && includeNumbers !== "n" ) {
    includeNumbers = prompt("Invalid input please enter either y or n");
  }
  //if the user types y then it replaces every 3rd character with a random number
  if (includeNumbers === "y") {
    for (var i = 2; i < passLen; i += 3) {
      generatedPass[i] = numbers[Math.floor(Math.random() * numbers.length)];
    }
  }

  //This prompts the user if they want to have special characters and validates that their input is either y or n
  var includeSpecial = prompt("Should the password include special characters? (y/n)")

  while (includeSpecial !== "y" && includeSpecial !== "n" ) {
    includeSpecial = prompt("Invalid input please enter either y or n");
  }
  //if the user types y then it replaces every 4th character with a random special character
  if (includeSpecial === "y") {
    for (var i = 3; i < passLen; i += 4) {
      generatedPass[i] = special[Math.floor(Math.random() * special.length)];
    }
  }
  //combines the array into a string to display the generated password
  return generatedPass.join("");
}
