let targetNum = Math.floor(Math.random()*100+1);

function checkValue(){
   let result = parseInt($(".form-control").val());

   if ( result > targetNum){

   $("#result").css("color","red");
   $("#result").text("Too high!");
 } 
 else if (result < targetNum) {

   $("#result").css("color","orange");
   $("#result").text("Too low!");
 } 
 else if(result == targetNum) {

   $("#result").css("color","green");
   $("#result").text("You got it!");
 }
 else {
  $("#result").css("color","red");
   $("#result").text("Invalid entry. Please enter an actual number.");
 }
  
};
