const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log ("Welcome to the password validator!!");

reader.question("What password would you like to validate?", function(password){
    if (password.length >= 10){
        console.log ('Success, your password words great!')
    } else {
        console.log ('FAIL, please try again.');
    }
});


