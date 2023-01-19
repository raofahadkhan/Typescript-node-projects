import inquirer from "inquirer";

const answer: {
  numberOne: number;
  numberTwo: number;
  operator: string;
} = await inquirer.prompt([
  {
    type: "number",
    name: "numberOne",
    message: "Kindly enter your first No:",
  },
  {
    type: "number",
    name: "numberTwo",
    message: "Kindly enter your Second No:",
  },
  {
    type: "list",
    name: "operator",
    choices: ["*", "+", "-", "/"],
    message: "Select Operator: ",
  },
]);

const { numberOne, numberTwo, operator } = answer;

if (numberOne && numberTwo && operator) {
  let result: number = 0;
  if (operator === "+") {
    result = numberOne + numberTwo;
  } else if (operator === "-") {
    result = numberOne - numberTwo;
  } else if (operator === "*") {
    result = numberOne * numberTwo;
  } else if (operator === "/") {
    result = numberOne / numberTwo;
  }
  console.log("OUTPUT: ", result);
} else {
  console.log("Kindly Enter Valid Input");
}
