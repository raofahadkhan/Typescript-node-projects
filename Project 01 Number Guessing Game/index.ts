import inquirer from "inquirer";

type ansType = {
  userGuess: number;
};

const systemGeneratedNum = Math.floor(Math.random() * 10);

const answers: ansType = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "Write Your Guess",
  },
]);

const { userGuess } = answers;

if (userGuess === systemGeneratedNum) {
  console.log("Yeah Your Guess is Correct \n You Won");
} else {
  console.log("Your Had a Wrong Guess Try again later");
}
