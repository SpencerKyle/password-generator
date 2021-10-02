// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passLength();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

var passLength = function() {
  var passQuestionLength = prompt("How many characters would you like your password to have? (You must have at least 8, with a maximum of 128.)");

  if (passQuestionLength < 8) {
    alert("Please enter a number higher than 8 and less than 128");
    return passLength();
  }
  else if (passQuestionLength > 128) {
    alert("Who would want a password this long? Please enter a number between 8 and 128.");
    return passLength();
  }
  else {
    passCharType();
  }
}

var passCharType = function() {
  var passLowercase = confirm("Would you like your password to contain lowercase letters?");
  if (passLowercase) {
    console.log('lowercase');
  } else {
    console.log('noLowercase');
  }

  var passUppercase = confirm("Would you like your password to contain UPPSERCASE letters?");
  if (passUppercase) {
    console.log('uppercase');
  } else {
    console.log('noUppercase');
  }

  var passNumeric = confirm("Would you like your password to numbers?");
  if (passNumeric) {
    console.log('numbers');
  } else {
    console.log('noNumbers');
  }

  var passSymbol = confirm("Would you like your password to contain symbols?");
  if (passSymbol) {
    console.log('symbols');
  } else {
    console.log('noSymbols');
  }
  console.log(passLowercase, passUppercase, passNumeric, passSymbol);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

