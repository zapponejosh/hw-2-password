// Set event listeners
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generatePassword);
var passwordDisplay = document.getElementById("passwordField");



// set variables
var numOfChar = 0;
var includeSpecialChar = true;
var includeNum = true;
var includeUpperCase = false;

var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChars = "0123456789";
var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function userCriteria() {
    numOfChar = prompt("How many characters would you like your password? ");
    if (numOfChar < 8 || numOfChar > 128) {
        alert("Password must be between 8 and 128 characters.");
        var badCount = true;
        return;
    }
    includeSpecialChar = confirm("Would you like to include special characters? ");
    includeNum = confirm("Would you like to include numbers? ");
    includeUpperCase = confirm("Would you like to include uppercase letters? ")
    // console.log(numOfChar);
    // console.log(includeSpecialChar);
    // console.log(includeNum);
    // console.log(includeUpperCase);
}

function createSet() {
    userCriteria();
    var charSet = '';
    if (includeNum && includeSpecialChar && includeUpperCase) {
        charSet = lowerChars.concat(numChars,symbolChars,upperChars).split("");
    }
    else if (includeNum && includeSpecialChar && includeUpperCase === false) {
        charSet = lowerChars.concat(numChars,symbolChars).split("");
    }
    else if (includeNum && includeSpecialChar === false && includeUpperCase === false) {
        charSet = lowerChars.concat(numChars).split("");
    }
    else if (includeNum && includeSpecialChar === false && includeUpperCase) {
        charSet = lowerChars.concat(numChars,upperChars).split("");
    }
    else if (includeNum === false && includeSpecialChar && includeUpperCase) {
        charSet = lowerChars.concat(symbolChars,upperChars).split("");
    }
    else if (includeNum === false && includeSpecialChar === false && includeUpperCase) {
        charSet = lowerChars.concat(upperChars).split("");
    }
    else if (includeNum === false && includeSpecialChar && includeUpperCase === false) {
        charSet = lowerChars.concat(symbolChars).split("");
    }
    else {
        charSet = lowerChars;
    }
    // console.log(charSet);
    return charSet;
}

function generatePassword() {
    var charSet = createSet();
    if (badCount) {
        return;
    }
    var setLength = charSet.length;
    var userPassword = [];
    // console.log(setLength);
    for (var i = 0; i < numOfChar; i++) {
        var randomIndex = Math.floor(Math.random() * setLength);
        var chosenChar = charSet[randomIndex];
        userPassword.push(chosenChar);
    }
    // Turn userPassword array into string
    userPassword = userPassword.join("");
    passwordDisplay.innerHTML = userPassword
    console.log(userPassword);
}

