var string = '';

//Creates an object to keep track of values
const Calculator = {
  //This displays 0 on the screen
  Display_Value: '0',
  //This will hold the first operand for any expressions, we set it to null for now
  First_Operand: null,
  //This checks whether or not the second operand has an input
  Wait_Second_Operand: false,
  //This will hold the operator, we set it to null for now
  operator: null,
};

//This modifies values each time a button is clicked
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;
  //We are checking to see if W ait_Second_Operand is true and set
  //Display_Value to the key that was clicked.
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    //this overwrites Display_Value if the current value is 0
    //otherwise it adds onto it
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}
//This section handles decimal points
function Input_Decimal(dot) {
  //This ensures that accidental clicking of the decimal point
  //doesn't cause bugs in your operation
  if (Calculator.Wait_Second_Operand === true) return;
  if (!Calculator.Display_Value.includes(dot)) {
    //We are saying that if the Display_Value does nto contain a decimal point
    //we want to add a decimal point
    Calculator.Display_Value += dot;
  }
}

//This section handles operators
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator
  //When an operator key is pressed, we convert the current number
  //displayed on the screen to a number and  then store the result in
  //Calculator.First_Operand it it doesn't already exist
  const Value_of_Input = parseFloat(Display_Value);
  //Checks if an operator already exists and if Wait_Second_Operand is true,
  //then updates the operator and exits from the function
  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }
  if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
  } else if (operator) { //Checks if an operator already exisits
    const Value_Now = First_Operand || 0;
    //If operator already exists, property lookup is performed for the operator
    //in the Perform_Calculation object and the function that amtches the
    //operator is executed
    const result = Perform_Calculation[operator](Value_Now, Value_of_Input);

    Calculator.Display_Value = String(result);
    Calculator.First_Operand = result;
  }

  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator
}

const Perform_Calculation = {
  '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
  Calculator.Display_Value = '0'
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}
//This function updates the screen with the contents of Display_Value
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  //The target variable is an object that represents the element
  //that was clicked
  const {target}  = event;
  //If the element that was clicked on is not a button, exit the function
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }
  //Ensures that AC clears the numbers from the calculator
  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }

  Input_Digit(target.value);
  Update_Display();
})