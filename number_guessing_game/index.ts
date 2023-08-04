
import inquirer from "inquirer"
import chalk from "chalk"


let score = 0;
let play = true;

async function guessNumber() {
	while (play) {
		let randomNum = Math.floor(Math.random() * 5 + 1)
		let result= await  inquirer.prompt([{
			"type": "number",
			"name": "userNumber",
			"message":"Enter any number in between 1 to 5 "
			
		}])
		if (result.userNumber === randomNum) {
			console.log(chalk.green("You guessed the right number"));
			score+=10;
			console.log(chalk.grey(`Your score is ${score}`));
			
			
			
		}
		else {
			console.log(chalk.green("Better luck Next Time !!"));
			play = false;
			
		}
		
	}
}

guessNumber()

// random numbers 1 to 5 

