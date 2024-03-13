//JavaScript_1.js

function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        case "Orange":
            Color_Output = "Orange" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// getElementsByClassName() Method

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Canvas animation
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);