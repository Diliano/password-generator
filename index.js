const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["1","2","3","4","5","6","7","8","9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let characters = letters;

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
let generatePasswordsButton = document.getElementById("generate-passwords-btn");

generatePasswordsButton.addEventListener("click", function() {
    passwordOneEl.textContent = "";
    passwordTwoEl.textContent = "";
    characters = letters;

    let selectedLength = document.getElementById("lengths").value;
    let includeNumbers = document.getElementById("numbers").value;
    let includeSymbols = document.getElementById("symbols").value;

    if (includeNumbers === "on") {
        characters = characters.concat(numbers);
    }   
    
    if (includeSymbols === "on") {
        characters = characters.concat(symbols);
    }
    
    for (let i = 0; i < selectedLength; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        let randomIndexTwo = Math.floor(Math.random() * characters.length);
        passwordOneEl.textContent += characters[randomIndexOne];
        passwordTwoEl.textContent += characters[randomIndexTwo];
    }
});

function copyPassword(passwordEl) {
    let password = passwordEl.textContent;
    navigator.clipboard.writeText(password);

    passwordEl.textContent = "Copied!";

    setTimeout(function() {
        passwordEl.textContent = password;
    }, 2000);
}

passwordOneEl.addEventListener("click", function() {
    copyPassword(passwordOneEl);
});

passwordTwoEl.addEventListener("click", function() {
    copyPassword(passwordTwoEl);
});