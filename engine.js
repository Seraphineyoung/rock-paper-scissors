// listen to button clicked
var choices = ["rock", "paper", "scissors"];

var won = 0;
var lost = 0;
var draw = 0;
var played = 0;
var userIcon = $("#you_images");
var computerIcon = $("#computer_images");

function computer_move() {
  computerIcon.empty();
  var play_machine = Math.floor(Math.random() * 3);
  computer_play = choices[play_machine];
$("#computer_move").html(" " + computer_play);
$("#computer_images").append("<img src='css/" + computer_play + ".png '/>");
}

function compare(you, machine) {
  var verdict;
  $("body").removeClass();

  $("#game_played").html(played);
  played++;

  if (you == machine) {
    draw++;
    verdict = "Draw"
    $("body").addClass("draw");
    $("#game_draw").html(draw);
  }

  if (
    you == "rock" && machine == "scissors" ||
    you == "paper" && machine == "rock" ||
    you == "scissors" && machine == "paper") {
    won++;
    verdict = "Won"
    $("body").addClass("win");
    $("#game_won").html(won);
  }

  if (
    machine == "rock" && you == "scissors" ||
    machine == "paper" && you == "rock" ||
    machine == "scissors" && you == "paper") {
    lost++;
    verdict = "Lost"
    $("body").addClass("lost");
    $("#game_lost").html(lost);
  }

$("#verdict").html(" " + verdict);
}



$(".mybutton").click(function(event) {
  // remove btnColorcolor class from all .mybutton
  $(".mybutton").removeClass("btnColor");
  userIcon.empty();
  var play_you = $(this).val();
  $("#play_you").html(" " + play_you);
  $("#you_images").append("<img src='css/" + play_you + ".png '/>");
  computer_move();
  compare(play_you, computer_play)
  $(this).addClass("btnColor");
});

$("#reset").click(function(event) {
   won = 0;
   lost = 0;
   draw = 0;
   played = 0;

$("#game_won").html(" " + won);
$("#game_lost").html(" " + lost);
$("#game_draw").html(" " + draw);
$("#game_played").html(" " + played);
$("#play_you").html(" ");
$("#computer_move").html(" ");

});
