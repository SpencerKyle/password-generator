// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

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
    passCharType(passQuestionLength);
  }
}

var passCharType = function(passQuestionLength) {

  var passLowercase = confirm("Would you like your password to contain lowercase letters?");
  var passUppercase = confirm("Would you like your password to contain UPPERCASE letters?");
  var passNumeric = confirm("Would you like your password to numbers?");
  var passSymbol = confirm("Would you like your password to contain symbols?");

  var password = {
    length: passQuestionLength,
    lowercase: passLowercase,
    uppercase: passUppercase,
    numeric: passNumeric,
    symbols: passSymbol
  };
  passwordGen(password);
}

var passwordGen = function(password) {
  var charNumber = password.length;
  
  if (password.lowercase) {
    var finalPass = 'abcdefghijklmnopqrstuvwxyz';
  } else {
    var finalPass = ''
  }

  if (password.uppercase) {
    finalPass += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    finalPass += '';
  }

  if (password.Numeric) {
    finalPass += '0123456789';
  } else {
    finalPass += '';
  }

  if (password.symbols) {
    finalPass += '@#$%^&*';
  } else {
    finalPass += '';
  }
  randomizer(finalPass, charNumber);
}

var randomizer = function(finalPass, charNumber) {
  var charFinal = finalPass;
  var passwordLength = charNumber;
  var finalPassword = '';
  for (var i=0; i<passwordLength; i++) {
    var rnum = Math.floor(Math.random() * charFinal.length);
    finalPassword += charFinal.substring(rnum,rnum+1);
  }
  enterPassword(finalPassword);
}

function enterPassword(finalPassword) {
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", passLength);