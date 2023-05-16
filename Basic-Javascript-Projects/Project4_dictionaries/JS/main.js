//main.js  

//creating a dictionary
function my_Dictionary() { 
    var Animal = { 
        Species: "Cat", 
        Color: "Black",
        Breed: "Panther",
        Sound: "ROAR!"
    };
    delete Animal.Breed; //deleting a key value pair before displaying
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}