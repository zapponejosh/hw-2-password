// Set event listeners
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", makePassword);
var passwordDisplay = document.getElementById("passwordField");

copyBtn.addEventListener("click", copyPassword);


// password settings
var numCheck = document.getElementById("numCheck");
var symCheck = document.getElementById("symCheck");
var capsCheck = document.getElementById("capsCheck");
var charCount = document.getElementById("numChoice");



function copyPassword() {
    var range = document.createRange();
                range.selectNode(document.getElementById("passwordField"));
                window.getSelection().removeAllRanges(); // clear current selection
                window.getSelection().addRange(range); // to select text
                document.execCommand("copy");
                window.getSelection().removeAllRanges();// to deselect

  alert("Copied the text: " + passwordDisplay.value);
}


function makePassword() {

    var numOfChar = charCount.value;
    var includeSpecialChar = false;
    var includeNum = false;
    var includeUpperCase = false;
    var badCount = false;

    console.log(numOfChar);

    // User selections
    if (numCheck.checked === true) {
        console.log(
            "Num is checked");
        includeNum = true;
    }
    if (symCheck.checked === true) {
        console.log(
            "Num is checked");
        includeSpecialChar = true;
    }
    if (capsCheck.checked === true) {
        console.log(
            "Num is checked");
        includeUpperCase = true;
    }


    // numOfChar = prompt("How many characters would you like your password? ");
    if (numOfChar < 8 || numOfChar > 128) {
        alert("Password must be between 8 and 128 characters.");
        badCount = true;
        return;
    }
    badCount = false;

    // console.log(numOfChar);
    // console.log(includeSpecialChar);
    // console.log(includeNum);
    // console.log(includeUpperCase);
    var charSet = createSet(includeNum, includeSpecialChar, includeUpperCase, numOfChar);
    var userPassword = generatePassword(charSet, numOfChar);
    
    passwordDisplay.innerHTML = userPassword;
    // console.log(userPassword);
    
}

function createSet(includeNum, includeSpecialChar, includeUpperCase, numOfChar) {
    // character options
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var charSet = [
        lowerChars,
        includeUpperCase ? upperChars : "",
        includeNum ? numChars : "",
        includeSpecialChar ? symbolChars : ""
    ].join("");
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
