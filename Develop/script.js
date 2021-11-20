// Assignment code here
// function generatePassword(){

// }

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?",8);
  var capitalsRequired = confirm("Do you want to add capital letters? CLick OK for Yes, Cancel for No.");
  var specialsRequired = confirm("Do you want to add special characters? CLick OK for Yes, Cancel for No.");
  var numbersRequired = confirm("Do you want to add numbers? CLick OK for Yes, Cancel for No.")
  var passwordCharSet = "abcdefghijklmnopqrstuvwxyz";
  var capitalCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordNumberSet = "0123456789";
  var specialCharSet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var password = "";

  //if capitals are required, add to password character set
  if (capitalsRequired){
    passwordCharSet = passwordCharSet + capitalCharSet;  
    password = password + capitalCharSet.charAt(Math.floor(Math.random() * n));
  }

  //if numbers are required, add to password character set
  if(numbersRequired){
    passwordCharSet = passwordCharSet + passwordNumberSet
    password = password + passwordNumberSet.charAt(Math.floor(Math.random() * n));
  }
  
  //if special characters are required, add to password character set
  if(specialsRequired){
    passwordCharSet = passwordCharSet + specialCharSet
    password = password + specialCharSet.charAt(Math.floor(Math.random() * n));
  }
  
  var n = passwordCharSet.length;
  //console.log("requested password length is: " + passwordLength);
  //console.log("password string length is: " + password.length);

  //had to store this seperately as I had issues doing this in the condition 
  //portion of the for loop
  totalCharacters = passwordLength - password.length 

  //loop through adding a random character until we reach desired length
  for (var i = 0; i < (totalCharacters); i++){
    password = password + passwordCharSet.charAt(Math.floor(Math.random() * n));
    //console.log(i);
  }
  //console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
