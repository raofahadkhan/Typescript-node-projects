import inquirer from "inquirer";
const systemGeneratedNum = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write Your Guess",
    },
]);
const { userGuess } = answers;
if (userGuess === systemGeneratedNum) {
    console.log("Yeah Your Guess is Correct \n You Won");
}
else {
    console.log("Your Had a Wrong Guess Try again later");
}
