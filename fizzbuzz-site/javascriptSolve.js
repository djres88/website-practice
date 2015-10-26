var counter = 1;
function divisibleBy(n, divisor) {
  return (n % divisor === 0);
};
function currentCount() {
    if divisibleBy(counter,$(userFizzNum)){
      return "Fizz";
    } else if divisibleBy(counter,$(userBuzzNum)){
      return "Buzz";
    } else if divisibleBy((counter,$(userFizzNum) && (counter,userBuzzNum))) {
      return "FizzBuzz";
    } else {
      return counter;
    }
  };
$(".icons").click(function() {
    counter += 1;
    $('#currentNumber').text(counter);
    $('#counterIconText').text(counter+1);
});
var display = currentCount();
$("#fizzIcon").click(function() {
  if(display === "Fizz"){
    //this action;
});
$("#buzzIcon").click(function() {
  if(display === "Buzz"){
    //this action;
});
$("#fizzBuzzIcon").click(function() {
  if(display === "FizzBuzz"){
    //this action;
});
$("#counterIcon").click(function() {
  if(display === counter){
    //this action;
  }
});
$("#reset").click(function() {
  counter = 1;
  $('#currentNumber').text(counter);
  $('#counterIconText').text(counter+1);
});
