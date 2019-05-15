class Player{
  constructor(dieroll,cumScore){
    this.dieroll = dieroll;
    this.cumScore = cumScore;
  }
}
var player1 = new Player(0,0);
var player2 = new Player(0,0);
  
$(document).ready(function(){
  
  
  $("#spin-1").on('click',function(){
    player1.dieroll = Math.floor((Math.random() * 6) + 1);
    if(player1.dieroll === 1){
      $("#spin-1").attr("disabled", true);
      alert("Its the next player's turn")
      $("#spin-2").attr("disabled", false);
    }
    player1.cumScore += player1.dieroll;
    $("#dieroll-1").text(player1.dieroll);
    $("#cumulative-1").text(player1.cumScore);
  })
  $("#spin-2").on('click',function(){
    player2.dieroll = Math.floor((Math.random() * 6) + 1);
    if(player2.dieroll === 1){
      $("#spin-2").attr("disabled", true);
      alert("Its the next player's turn");
      $("#spin-1").attr("disabled", false);

    }
    player1.cumScore += player2.dieroll;
    $("#dieroll-2").text(player2.dieroll);
    $("#cumulative-2").text(player2.cumScore);
  })

//hold button
  $("#hold-1").on('click',function(){
  $("#spin-1").attr("disabled", true);
  $("#hold-1").attr("disabled", true);
  $("#spin-2").attr("disabled", false);
  $("#hold-2").attr("disabled", false);

    
  })
    $("#hold-2").on('click',function(){
    $("#spin-2").attr("disabled", true);
    $("#hold-2").attr("disabled", true);
    $("#spin-1").attr("disabled", false);
    $("#hold-1").attr("disabled", false);

  })
  


   

  
})