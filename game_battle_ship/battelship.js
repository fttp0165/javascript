var location1 = 3; //ship location
var location2 = 4; //ship location
var location3 = 5; //ship location
var guess;         //record guess location
var hits=0;        //record guess hit number
var guesses=0;     //record guess total number
var isSunk=false;  //record ship is sunk

while(isSunk==false){

    guess=prompt("準備，瞄準,射擊(鑑入範圍 0-6的數字):");
    // check input guess location is available
    if(guess <0 || guess>6){
    	alert("請鑑入有效數字");	
      }else{
      	    guesses = guesses + 1; //add suess time
            if(guess==location1||guess==location2||guess==location3){
               hits=hits+1;
               alert("Hit!"); // guessed rigjt
               if(hits==3){
               	 isSunk=true;
               	 alert("你擊沉了我的戰艦");
               }
             }else{
                    alert("Miss");// guessed wrong
                  }
          }
}
var stats="你猜了"+guesses+"次便擊沉了戰艦,"+"意味你的準確率"+(3/guesses);
alert(stats);
