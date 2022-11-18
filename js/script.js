

let passInput = document.querySelector("#pass_input");
let copyIcon = document.querySelector(".container .fa-copy");
let rangeInput = document.querySelector("#value");
let rangeNumber = document.querySelector(".range_input");
let generateButton = document.querySelector(".btn");




let allCharacters = "qwertyuıopasdfghjklizxvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!'^+%&/()=?_<>£#$½{[]}\|:;~";
rangeInput.addEventListener("input", () => {
    rangeNumber.innerHTML = rangeInput.value;
    generatePassword();
    copyIcon.classList.replace("fa-solid","fa-regular");
});

generateButton.addEventListener("click",generatePassword);
copyIcon.addEventListener("click",() => {
    navigator.clipboard.writeText(passInput.value);
    copyIcon.classList.replace("fa-regular","fa-solid");
});


function generatePassword () {
    let newPassword = "";
    for(let i = 0 ; i < rangeInput.value ; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumbers];
    } 
    passInput.value = newPassword;
    copyIcon.classList.replace("fa-solid","fa-regular");
    console.log(newPassword);
}
