// Set event listeners
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", makePassword);
var passwordDisplay = document.getElementById("passwordField");





function makePassword() {
    var numOfChar = 0;
    var includeSpecialChar = true;
    var includeNum = true;
    var includeUpperCase = false;
    var badCount = false;
    numOfChar = prompt("How many characters would you like your password? ");
    if (numOfChar < 8 || numOfChar > 128) {
        alert("Password must be between 8 and 128 characters.");
        badCount = true;
        return;
    }
    badCount = false;
    includeSpecialChar = confirm("Would you like to include special characters? ");
    includeNum = confirm("Would you like to include numbers? ");
    includeUpperCase = confirm("Would you like to include uppercase letters? ")
    // console.log(numOfChar);
    // console.log(includeSpecialChar);
    // console.log(includeNum);
    // console.log(includeUpperCase);
    var charSet = createSet(includeNum, includeSpecialChar, includeUpperCase, numOfChar);
    var userPassword = generatePassword(charSet, numOfChar);
    
    passwordDisplay.innerHTML = userPassword
    // console.log(userPassword);
    
}

function createSet(includeNum, includeSpecialChar, includeUpperCase, numOfChar) {
    // character options
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
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

function generatePassword(charSet, numOfChar) {
    // if (badCount) {
    //     return;
    // }
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
    return userPassword
}
