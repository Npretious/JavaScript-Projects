//main.js

//Assigning both global and local variables
var X = 50; //this is the global variable

function Add_numbers_1() {
    var x = 153; //this is the local variable
    document.write(30 + X + "<br>"); //utilizing the local variable
}
function Add_numbers_2() {
    document.write(X + 150); //utilizing the global variable
    console.log(x); //utilizing console.log to figure out which variable is being used
}
Add_numbers_1(); 
Add_numbers_2();

//Assigning if statement
function get_Date() {
    if (new Date().getHours() < 21) {
        document.getElementById("Greeting").innerHTML = "The time is currently before 9pm local!";
    }
}

//utilizing a function with if and else statements
function get_Reply() {
    var user_input = document.getElementById("userInput").value;
    if (user_input >= 21) {
        reply = "You are old enough to drink!";
        document.getElementById("feedback").innerHTML = reply;
    }
    else {
        reply = "You are not old enough to drink!";
        document.getElementById("feedback").innerHTML = reply;
    }
}

//using the time function from previous steps
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Afternoon!";
    }
    else {
        Reply = "Goodnight!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}