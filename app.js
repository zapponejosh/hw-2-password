// Set event listeners on buttons
var generateBtn = document.getElementById("generateBtn");
var passwordDisplay = document.getElementById("passwordField");

// Calls main function
generateBtn.addEventListener("click", makePassword);


//Copies password to clipboard
function copyPassword() {
    var range = document.createRange();
                range.selectNode(document.getElementById("passwordField"));
                window.getSelection().removeAllRanges(); // clear current selection
                window.getSelection().addRange(range); // to select text
                document.execCommand("copy");
                window.getSelection().removeAllRanges();// to deselect
    alert("Copied the text: " + passwordDisplay.value);
}

// Called by Generate btn click
function makePassword() {
    // Get user password settings choices
    var charCount = document.getElementById("numChoice");
    var numOfChar = charCount.value;
    // console.log(numOfChar);
    var includeNum = document.getElementById("numCheck");
    var includeSpecialChar = document.getElementById("symCheck");
    var includeUpperCase = document.getElementById("capsCheck");

    // console.log(numOfChar);
    // console.log(includeSpecialChar.checked);
    // console.log(includeNum.checked);
    // console.log(includeUpperCase.checked);

    // Validate character count
    if (numOfChar < 8 || numOfChar > 128) {
        alert("Password must be between 8 and 128 characters.");
        return;
    }
    
    // Create character set given user setting choices
    var charSet = createSet(includeNum, includeSpecialChar, includeUpperCase);
    // Uses character set to generate password
    var userPassword = generatePassword(charSet, numOfChar);
    
    passwordDisplay.innerHTML = userPassword;
    // console.log(userPassword);   
    
    // Cannot copy password until it has been generated
    copyBtn.addEventListener("click", copyPassword);
}

// Called by makePassword function. 
function createSet(includeNum, includeSpecialChar, includeUpperCase) {
    // character options
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var charSet = [
        lowerChars,
        includeUpperCase.checked ? upperChars : "",
        includeNum.checked ? numChars : "",
        includeSpecialChar.checked ? symbolChars : ""
    ].join("");
    // console.log(charSet);
    return charSet;
}

// Called by makePassword function aft character set is generated
function generatePassword(charSet, numOfChar) {
    var setLength = charSet.length;
    var userPassword = [];
    // console.log(setLength);
    // Chooses random character from the character set. Outputs an array.
    for (var i = 0; i < numOfChar; i++) {
        var randomIndex = Math.floor(Math.random() * setLength);
        var chosenChar = charSet[randomIndex];
        userPassword.push(chosenChar);
    }
    // Turn userPassword array into string
    userPassword = userPassword.join("");

    return userPassword
}
