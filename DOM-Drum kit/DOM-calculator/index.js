function add(num1,num2){
  return num1 + num2;
}
function subtract(num1,num2){
  if(num1>num2)
  return num1 - num2;
  else
  return num2 - num1;
}
function multiply(num1,num2){
  return num1 * num2;
}
function divide(num1,num2){
  return num1 / num2;
}
function remainder(num1,num2){
  return num1-num2;
}

function calculator(num1,num2,operator){
  return operator(num1,num2);           //called another fn operator inside fn calculator
}

//inside console call the fn calculator as calculator(9.8,multiply);
//Inside chrome dev tools we can run debugger just by tying debugger; then shift & enter calculator(8,9,multiply); enter and now we can step through all of the steps
