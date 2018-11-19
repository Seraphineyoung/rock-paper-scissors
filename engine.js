// listen to button clicked
var choices = ["Rock", "Paper", "Scissors"];
var computer_play;
var won = 0;
var lost = 0;
var draw = 0;
var played = 0;


function computer_move() {
  var play_machine = Math.floor(Math.random() * 3);
  computer_play = choices[play_machine];
}

function compare(you, machine) {
  var verdict = "lose";
  played++;
  if (you == machine) {
    draw++;
    $("#game_draw").html(draw);
  }
  if (
    you == "Rock" && machine == "Scissors" ||
    you == "Paper" && machine == "Rock" ||
    you == "Scissors" && machine == "Paper") {
    won++;

    $("#game_won").html(won);
  }
  if (
    machine == "Rock" && you == "Scissors" ||
    machine == "Paper" && you == "Rock" ||
    machine == "Scissors" && you == "Paper") {
    lost++;
    $("#game_lost").html(lost);
  }

  $("#game_played").html(played);

}



$("#rock").click(function(event) {
  var play_you = $("#rock").val()
  $("#play_you").text(" " + play_you);
   $(this).addClass("active");
  computer_move();
  $("#computer_move").html(" " + computer_play);
  compare(play_you, computer_play);



});


$("#paper").click(function(event) {
  var play_you = $("#paper").val();
  $("#play_you").text(" " + play_you);
  computer_move();
  $("#computer_move").html(" " + computer_play);
  compare(play_you, computer_play)

});

$("#scissors").click(function(event) {
  var play_you = $("#scissors").val();
  $("#play_you").text(" " + play_you);
  computer_move();
  $("#computer_move").html(" " + computer_play);
  compare(play_you, computer_play)

});
