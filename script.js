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

var numPass = ['1','2','3','4','5','6','7','8','9','0'];

var lcPass = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var ucPass = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var specialPass = ['!','@','#','$','%','^','&','*','(','',' ','-','+','=','[',']','\\',';',',','.','/','{','}','|','"','>','?',"'"]
var possibleChar = [];
var password = '';

var globalPass = [lcPass, ucPass, numPass, specialPass];
function generatePassword() {

  var options = parseInt(
    prompt("How many number of characters in your password? ")
  );
  if (isNaN(options) === true) {
    alert("Password must be a number!");
    return;
  }
  if (options < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (options > 128) {
    alert("Password must be at less than 128 characters");
    return;
  }
  var lcConfirm = confirm("click OK for lowercase letters");
  var ucConfirm = confirm("click OK for uppercase letters");
  var numConfirm = confirm("click OK for numbers");
  var specConfirm = confirm("click OK for special characters")

if (lcConfirm===false && ucConfirm===false && numConfirm===false){
  alert("You must select one character type");
  return;
}
  console.log(options, lcConfirm, ucConfirm, numConfirm);
var rulesObject ={
  options:options,
lcConfirm:lcConfirm  }
console.log(rulesObject,rulesObject.options,rulesObject.options)


console.log (ucConfirm)
console.log(possibleChar)
if (ucConfirm)  {
possibleChar=possibleChar.concat(ucPass)
}
if (numConfirm) {
possibleChar=possibleChar.concat(numPass);
}
if (specConfirm) {
possibleChar=possibleChar.concat(specialPass);

}
if (lcConfirm) {
  possibleChar=possibleChar.concat(lcPass);
}
console.log(possibleChar);



var i;
for (i=0; i<options; i++) {
  var randNum = Math.floor(Math.random() * possibleChar.length);
  password += possibleChar[randNum]
} 
return password;


  
  console.log(randNum);
}
