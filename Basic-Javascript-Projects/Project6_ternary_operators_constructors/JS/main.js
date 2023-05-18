//main.js

//Utilizing the ternary operator to determine if the user is tall enough to ride the ride
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Creating a constructor function and utilizing the "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//Creating a function to display the results of the constructor function
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Creating a nested function to add strings
function add_Strings() {
    var start_string = "My name is";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("Nick!");
    document.getElementById("Nested_Function").innerHTML = start_string;
    
}