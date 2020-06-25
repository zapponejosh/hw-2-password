// set variables
var numOfChar = 0;
var includeSpecialChar = true;
var includeNum = true;
var includeUpperCase = false;

var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChars = "0123456789";
var symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var userPassword = [];

function userCriteria() {
    numOfChar = prompt("How many characters would you like your password? ");
    if (numOfChar < 8 || numOfChar > 128) {
        alert("Password must be between 8 and 128 characters.");
        return;
    }
    includeSpecialChar = confirm("Would you like to include special characters? ");
    includeNum = confirm("Would you like to include numbers? ");
    includeUpperCase = confirm("Would you like to include uppercase letters? ")
    console.log(numOfChar);
    console.log(includeSpecialChar);
    console.log(includeNum);
    console.log(includeUpperCase);
    
    function createSet() {
        if (includeNum && includeSpecialChar && includeUpperCase) {
            var charSet = lowerChars.concat(numChars,symbolChars,upperChars).split("");
            console.log(charSet);
            var setLength = charSet.length;
            console.log(setLength);
            for (var i = 0; i < numOfChar; i++) {
                var randomIndex = Math.floor(Math.random() * setLength);
                var chosenChar = charSet[randomIndex];
                userPassword.push(chosenChar);
                
            }
        else if (includeNum)
        }

    }

    
    // Turn userPassword array into string
    userPassword = userPassword.join("");
}

userCriteria();
console.log(userPassword);

