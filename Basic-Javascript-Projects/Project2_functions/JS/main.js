//main.js

//function using the += operator
function myFunction() {
    var sentence = "My name is "; //creating a variable and assigning it a string value
    sentence += " Nicholas Pretious!"; //using the += operator to concatenate the string
    document.getElementById("Concatenate").innerHTML = sentence; //showcasing the result in the HTML element with the id "Concatenate"
}