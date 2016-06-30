console.log("main.js has loaded...");
document.addEventListener("DOMContentLoaded", start());

var p1winCount = 0;
var p2winCount = 0;

function start () {
  roundStart();
}

function roundStart () {
  var roundCount = 0;
  roundCount++;

  console.log(roundCount)

  window.addEventListener("keydown", player1);
  window.addEventListener("keydown", player2);
  if (roundCount == 1) {
    function player1(e) {
      var p1ball = document.querySelector("#p1ball");
        if (e.keyCode == "65") {
        p1ball.classList.add("speed-one");
        console.log("level one");
        }
      }


    function player2(e) {
      var p2ball = document.querySelector("#p2ball");
      if (e.keyCode == "76") {
        p2ball.classList.add("level one");
        }
      }
    }
}
