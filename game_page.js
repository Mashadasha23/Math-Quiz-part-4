//start your code here//
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt (number2);
    question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()' >Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    question_turn = "player1";
    answer_turn = "player2";
    function check(){
        get_answer = document.getElementById("input_check_box").value;
        if(get_answer == actual_answer)
        {
          if(answer_turn == "player1")
          {
              //Increment the player1_score
              player1_scrore = player1_scrore +1;
              // Show the player1-score value on the screen
              document.getElementById("player1_score").innerHTML = player1_scrore;
          }
          else
          {
            player2_scrore = player2_scrore +1;
            document.getElementById("player2_score").innerHTML = player2_scrore;

          }
        }

    }
     if (question_turn == "player1") 
     {
        question_turn == "player2" 
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
     }
      else 
     {
        //Mention question_turn to player1
        question_turn == "player1" 
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ; 
     }

     if (answer_turn == "player1") 
     {
        answer_turn == "player2" 
        //add document.getElementById block to show the player2 name
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
     }
      else 
     {
        
        answer_turn == "player1" 
        document.getElementById("player_question").innerHTML = "Answer Turn - " + player1_name ; 
     } 
}  
