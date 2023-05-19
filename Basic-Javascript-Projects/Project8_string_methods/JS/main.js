//main.js

//utilizing the concat() method
function full_Sentence() {
    var part_1 = "The ";
    var part_2 = "Nissan Skyline ";
    var part_3 = "is the greatest ";
    var part_4 = "car ever made!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//utilizing the slice() method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//utilizing the toString() method
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//utilizing the toPrecision() method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}