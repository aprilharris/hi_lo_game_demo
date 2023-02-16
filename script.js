let targetNum = Math.floor(Math.random()*100+1);
console.log(`targetNum: ${targetNum}`);




/* optional: uncomment the below code if you want to execute function when the user hits the ENTER key */
/* document.addEventListener('keypress', ({key}) => key === 'Enter' && checkValue());*/

function checkValue(){
   let result = parseInt($(".form-control").val());

  
   if ( result > targetNum) {
   $("#result").css("color","crimson");
   $("#result").text("Too high!");
 } 
     
 else if (result < targetNum) {
 

   $("#result").css("color","darkgoldenrod");
   $("#result").text("Too low!");
 } 
 else if(result == targetNum) {
 

   $("#result").css("color","green");
   $("#result").text("You got it!");



 } else {
  $("#result").css("color","brown");
   $("#result").text("Invalid entry. Please enter an actual number.");
 }

};
