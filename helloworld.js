console.log("Welcome to our application");
var pass = prompt("Create password: ");
console.log("You created a password successfully");
var login = prompt("Enter password: ");

while(pass!=login){
    login = prompt("Oh sorry! Your password is incorrect, please try again: ");
}
console.log("You are in");