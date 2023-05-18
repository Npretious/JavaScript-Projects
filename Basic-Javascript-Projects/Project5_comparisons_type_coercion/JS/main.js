//main.js

//variable using a boolean data type
var x = true;

//printing data type of variable x
document.write(typeof x);
document.write("<br>");

//printing an expression with a string and a number
document.write("50" + 25);
document.write("<br>");

//using the double equal sign operator to compare two values
document.write(34 === 34);
document.write("<br>");

//using the double equal sign operator to compare two values
x = 92;
y = "82";
document.write(x === y);
document.write("<br>");

//using the the > and && operators to compare two values
document.write(25 > 15 && 63 > 24); //&& and operator true

//using the < and || operators to compare two values
document.write(25 < 15 || 63 < 24); //|| or operator false

//Using the ! operator
function not_Function() { 
    document.getElementById("Not").innerHTML = !(55 > 21); //not operator false
}

