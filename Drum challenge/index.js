//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key) {

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
            default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);


}


//keydown instead of keypress

//Drum Kit
        //var numberOfDrumButtons = document.querySelectorAll(".drum").length;

        //for(var i = 0; i < numberOfDrumButtons; i++){

        //    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //        alert("I got clicked");

        //    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ //Important to note that "".sounds will not work with audio as pathway. It's just "sounds".
        //        var audio = new Audio("sounds/tom-1.mp3");
        //        audio.play();
        //        this.style.color = "White"  

        //function Aurdio (fileLocation) {
        //  this.fileLocation = fieLocation;
        //  this.play = function() {
        //  
        //  }
        //}

//higher order Function Challange Solution

        //function subtract(num1, num2) {
        //return num1 - num2;
        //}
        
        //function multiply(num1, num2) {
        //return num1 * num2;
        //}
        
        //function divide(num1, num2) {
        //return num1 / num2;
        //}
        
        //function calculator(num1, num2, operator) {
        //return operator(num1, num2);
        //}

//Higher understanding of java script
        //var bellBoy1 = {
        //  name: "Timmy",
        //  age: 19,
        //  hasWorkPermit: true,
        //languages: ["French," "English"]
        //}

        //alert("Hi, I am " + bellBoy1.name + ". Welcome!");

//Construtor Function
        // function BellBoy (name, age, hasWorkPermit, languages){
        // this.name = name;
        // this.age = age;
        // this.hasWorkPermit = hasWorkPermit
        // this.languages = languages;
        // this.moveSuitcases = function() {
        //      alert("May I take your suitcases?");
        //      pickUpSuitcase();
        //      move();
        //   }
        //}

        //var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);