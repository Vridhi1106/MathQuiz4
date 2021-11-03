player_display_1 = localStorage.getItem("player1");
player_display_2 = localStorage.getItem("player2");

score1= 0
score2= 0

document.getElementById("playr_1_score").innerHTML=score1;
document.getElementById("playr_2_score").innerHTML=score2;

document.getElementById("playr_1").innerHTML=player_display_1 + " : ";
document.getElementById("playr_2").innerHTML=player_display_2 + " : " ;

document.getElementById("QT").innerHTML=player_display_1;
document.getElementById("AT").innerHTML=player_display_2;

function send(){

    no_one_input= document.getElementById("no1").value;
    no_two_input= document.getElementById("no2").value;
    right_answer= parseInt(no_one_input) * parseInt(no_two_input)
    ques= "<h4> Q. &nbsp; " + no_one_input + " x " + no_two_input + "</h4> <br>";
    ans= "<h4> ANS. <input id='answer' placeholder='Add answer here' type='text'> </h4> <br> ";
    button= "<button id='check_btn' onclick= 'check()'> Check </button>";
  
    row= ques + ans + button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("no1").value= "";
    document.getElementById("no2").value= "";
   
}

question_turn = "player_1"
 answer_turn = "player_2"

 function check(){


   answer = document.getElementById("answer").value;
   

   if (answer == right_answer){
      if (answer_turn == "player_1"){
      score1= score1 + 1;
      document.getElementById("playr_1_score").innerHTML=score1;

   } else {

    score2 = score2 + 1;
    document.getElementById("playr_2_score").innerHTML=score2;
   }
   }
   if( question_turn == "player_1"){

    question_turn = "player_2";
    document.getElementById("QT").innerHTML =player_display_2;
   } else{
     question_turn = "player_1";
     document.getElementById("QT").innerHTML = player_display_1;
   }
    
   if( answer_turn == "player_1"){

    answer_turn = "player_2";
    document.getElementById("AT").innerHTML = player_display_2;
   } else{
     answer_turn = "player_1";
     document.getElementById("AT").innerHTML = player_display_1;
   }

       document.getElementById("output").innerHTML= "";

  }
