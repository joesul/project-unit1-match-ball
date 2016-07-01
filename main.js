console.log("main.js has loaded...");
document.addEventListener("DOMContentLoaded", start());

var p1winCount = 0;
var p2winCount = 0;

function start () {
  playerStartRoll();
}

//function to start rolling balls
function playerStartRoll() {

  window.addEventListener("keydown", player1Go);
  window.addEventListener("keydown", player2Go);

//player 1 ball start rolling
  function player1Go(e) {
    var p1ball = document.querySelector("#p1ball");
      if (e.keyCode == "65") {
        p1ball.classList.add("speed-one");
        p1ball.classList.add("running");
        window.removeEventListener("keydown", player1Go);
      }
  }

//player 2 ball start rolling
  function player2Go(e) {
    var p2ball = document.querySelector("#p2ball");
      if (e.keyCode == "75") {
        p2ball.classList.add("speed-one");
        p2ball.classList.add("running");
        window.removeEventListener("keydown", player2Go);
      }
  }
    playerStopRoll();
}

//function to stop balls
function playerStopRoll() {

  window.addEventListener("keydown", stop1);
  window.addEventListener("keydown", stop2);

  var joeSul = 0;
  var sophieKwon = 0;

//player 1 stops ball
    function stop1(e) {
      var p1ball = document.querySelector("#p1ball");
        if (e.keyCode == "83") {
          p1ball.classList.remove("running");
          p1ball.classList.add("pause");
          window.removeEventListener("keydown", player1);
          sophieKwon++;
            if (joeSul === 1 && sophieKwon === 1){
              console.log("me");
              checkWin();
            }
        }
      }

//player 2 stops ball
      function stop2(e) {
        var p1ball = document.querySelector("#p1ball");
          if (e.keyCode == "76") {
            p1ball.classList.remove("running");
            p2ball.classList.add("pause");
            window.removeEventListener("keydown", player1);
            joeSul++;
            if (joeSul === 1 && sophieKwon === 1){
              checkWin();
            }
          }
      }
}


//determine the winner
function checkWin() {
  console.log("checkWin");

//grab the balls....
  var p1ball = document.querySelector("#p1ball");
  var p2ball = document.querySelector("#p2ball");
  var p1Distance = p1ball.getBoundingClientRect().left;
  var p2Distance = p2ball.getBoundingClientRect().left;

//grab the hidden elements
var tieLoseBox = document.querySelector("#tlbox");
var tieLose = document.querySelector("#tielose");
var p1WinBox = document.querySelector("#p1winbox");
var p2WinBox = document.querySelector("#p2winbox");


//check
  if (((p1Distance >= 575 && p1Distance <= 591) && (p2Distance >= 575 && p2Distance <= 591)) || (p1Distance === p2Distance))  {
    console.log("ITS A TIE!");
    tieLose.innerText = "TIED!";
    tieLoseBox.classList.remove("hide");
    tieLoseBox.classList.add("show");
    tieLoseBox.classList.add("pop");
  }
  else if ((p1Distance >= 575 && p1Distance <= 591) && (p2Distance < 575|| p2Distance > 591 ))  {
    console.log("Player 1 Wins!");
    p1WinBox.classList.remove("hide");
    p1WinBox.classList.add("show");
    p1WinBox.classList.add("pop");
  }
  else if ((p2Distance >= 575 && p2Distance <= 591) && (p1Distance < 575 || p1Distance > 591 ))  {
    console.log("Player 2 Wins!");

    p2WinBox.classList.remove("hide");
    p2WinBox.classList.add("show");
    p2WinBox.classList.add("pop");
  }
  else if ((p1Distance < 575 || p1Distance > 591 ) && (p2Distance < 575 || p2Distance > 591 ))  {
    console.log("YOU BOTH LOSE!");
    tieLose.innerText = "BOTH LOSE";
    tieLoseBox.classList.remove("hide");
    tieLoseBox.classList.add("show");
    tieLoseBox.classList.add("pop");
    }
  else {
    alert("error");
  }
  rematch();
}

function rematch(){
  var rematch = document.querySelector("button");
  rematch.addEventListener("click", function(e) {
    location.reload(e);
  })
}
