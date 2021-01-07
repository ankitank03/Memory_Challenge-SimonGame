var gamePattern = [];
var userClickedPattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var started=false;
var level=-1;


// Starting The Game
$("body").on("keydown",function(){
if(!started)
   {
     $("#Opener").remove();
     nextSequence();
}
started=true;

});


// Detecting ID of the Button clicked
$(".btn").on("click", function(event) {
  playSound(event.target.id);

});

//Genrating The List of Colors User has Entered
function playSound(buttonId) {

  var useChosenColor = buttonId;
  userClickedPattern.push(useChosenColor);
   animate(useChosenColor);
   generateSounds(useChosenColor);
    checkAnswer(userClickedPattern.length-1);
}

// Selecting a Random Pattern

function nextSequence() {
  userClickedPattern=[];
  level++;
$("h1#level-title").html("Level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);

  animate(randomChosenColor);
  // generateSounds(randomChosenColor);

}





//Game Play
function checkAnswer(currentlevel)
{
  if(userClickedPattern[currentlevel]===gamePattern[currentlevel])
  {console.log("Success");
 if(userClickedPattern.length===gamePattern.length)
 setTimeout(function(){
   nextSequence()
 },1000);
}

// Game Over

else
  {

    $("body").addClass("game-over");
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function(){
      $("body").removeClass("game-over");
    },1000);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();


  }
}


// Restart The Game

function startOver()
{
level=-1;
gamePattern=[];
started=false;

}

// Generating Sounds

function generateSounds(color) {
  switch (color) {
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    default:

  }
}

// Animations
function animate(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function(){
    $("#"+color).removeClass("pressed");
  },100);


}
