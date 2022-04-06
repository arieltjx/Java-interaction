var doubleButton;
var doubleInput;
var wordInput;
var wordOutput;
var sqButton;
var sqInput;
var resetButton;
var text;


var word_names = ["positive and calm 2022!", "energetic but chill 2022!", "sensitive but bold 2022!", "fragile but savvy 2022!"];

document.addEventListener("DOMContentLoaded", function(){
 doubleButton = document.getElementById("double-button");
 doubleInput = document.getElementById("double-input");
 sqButton = document.getElementById("sq-button");
 sqInput = document.getElementById("sq-input");
 wordButton = document.getElementById("word-button");
 wordInput = document.getElementById("word-input");
 wordOutput = document.getElementById("word-output");
 text = document.getElementById("text");
 resetButton = document.getElementById("reset-button");


 doubleButton.addEventListener("click", function(){
   var currentdoubleInput = doubleInput.value;;
   doubleNumber(currentdoubleInput);
 });

 sqButton.addEventListener("click", function(){
   var currentsqInput = sqInput.value;;
   sqNumber(currentsqInput);
 });
 wordButton.addEventListener("click", function(){
   var currentwordInput = wordInput.value;
   word(currentwordInput);
 });

 resetButton.addEventListener("click", reset);
});


function doubleNumber(num){
  double_num = num * 2;
  alert(double_num);
  console.log("double of " + num.toString() + " is " + double_num.toString());
}

function sqNumber(num){
  sq_num = num * num;
  alert(sq_num);
  console.log("square of " + num.toString() + " is " + sq_num.toString());
}

function word(name){
  var word_output = name + ", u gonna have a ";
  word_output += " " + word_names[Math.floor(Math.random() * word_names.length)];
  text.innerText = word_output;
}

function reset(){
  var R = Math.random() * 220;
  var G = Math.random() * 220;
  var B = Math.random() * 220;
  var outputColorString = "rgb(" + R + "," + G + "," + B + ")";
  var fontfamilyArray = ["arial","monospace","Times"];
  var type = Math.floor(Math.random()*fontfamilyArray.length);
  var angle = Math.random() * 55;
  wordOutput.style.backgroundColor = outputColorString;
  text.style.fontFamily = ""+ fontfamilyArray[type] + "";
  wordOutput.style.transform = "rotate(" + angle + "deg)";
}
