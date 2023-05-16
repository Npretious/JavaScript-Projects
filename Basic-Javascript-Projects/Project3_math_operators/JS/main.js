//main.js

function addition() { //defining the addition function and naming it
    var add = 10 + 5; //defining the variable add and giving it the value of 10 + 5
    document.getElementById("Add").innerHTML = "10 + 20 =" + add; //displaying the value of add
}

function subtraction() { //defining the subtraction function and naming it
    var sub = 10 - 5; //defining the variable sub and giving it the value of 10 - 5
    document.getElementById("Sub").innerHTML = "10 - 5 = " + sub; //displaying the value of sub
}

function multiplication() { //defining the multiplication function and naming it
    var mult = 10 * 5; //defining the variable mult and giving it the value of 10 * 5
    document.getElementById("Mult").innerHTML = "10 * 5 = " + mult; //displaying the value of mult
}

function division() { //defining the division function and naming it
    var divide = 10 / 5; //defining the variable divide and giving it the value of 10 / 5
    document.getElementById("Div").innerHTML = "10 / 5 = " + divide; //displaying the value of divide
}

function modulus() { //defining the modulus function and naming it
    var mod = 100 % 52; //defining the variable mod and giving it the value of 100 % 52
    document.getElementById("Mod").innerHTML = "100 % 52 = " + mod; //displaying the value of mod
}

function negation() { //defining the negation function and naming it
    var x = 50; //defining the variable x and giving it the value of 50
    document.getElementById("Neg").innerHTML = -x; //displaying the value of x
}

function random() { //defining the random function and naming it
    var rand = Math.random() * 100; //defining the variable rand and giving it the value of a random number between 0 and 100
    document.getElementById("Rand").innerHTML = rand; //displaying the value of rand
}

function increment() { //defining the increment function and naming it
    var x = 100; //defining the variable x and giving it the value of 100
    x++; //incrementing the variable x by 1
    document.getElementById("Inc").innerHTML = x; //displaying the value of x
}

function decrement() { //defining the decrement function and naming it
    var x = 100; //defining the variable x and giving it the value of 100
    x--; //decrementing the variable x by 1
    document.getElementById("Dec").innerHTML = x; //displaying the value of x
}