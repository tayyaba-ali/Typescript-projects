#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

function sleep() {
	return new Promise((res) => {
		setTimeout(res, 2000);
	});
}

async function welcome() {
	let title = chalkAnimation.karaoke("Let's calculate");
	await sleep();

	title.stop();
	console.log(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

DEPLOYED BY TAYYABA

`);
// askQuestions();
	

}

welcome();

async function askQuestions() {
	await inquirer
		.prompt([
			{
				type: 'list',
				name: 'operator',
				message: 'Select the operator',
				choices: ['Addition', 'Subraction', 'Multiplication', 'Division'],
			},
			{
				type: 'number',
				name: 'num1',
				message: 'Enter num 1',
			},
			{
				type: 'number',
				name: 'num2',
				message: 'Enter num 2',
			},
		])
		.then((answers) => {
			let { num1, num2, operator } = answers;
			

            if(operator==="Addition"){
                console.log(`${num1}+${num2}=${num1+num2}`);
                
            }
            else if(operator==="Subtraction"){
                console.log(`${num1}-${num2}=${num1-num2}`);
                
            }
            else if(operator==="Multiplication"){
                console.log(`${num1}*${num2}=${num1*num2}`);
                
            }
            else{
                 console.log(`${num1}/${num2}=${num1/num2}`);
            }
            
		});
}

async function startAgain() {
	do {
		await  askQuestions()
		var again = await inquirer.prompt(
			[{
				type: "input",
				name: "restart",
				message:"Do you want to continue ? Press Y or N"
			}]
		)
	}
	while (again.restart.toLowerCase() === "y") {
		
	}
}
startAgain()