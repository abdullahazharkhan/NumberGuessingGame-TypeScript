#! /usr/bin/env node

import * as inquirer from 'inquirer';
import chalk from "chalk";
const prompt = inquirer.createPromptModule();
let tries = 0;
let noOfChances = 3;
let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(chalk.bgCyan(`GUESS A NUMBER 👌`));
function guessNumber() {
    prompt([
        {
            type: "input",
            name: "num",
            message: "Enter a number between 1 to 10..."
        }
    ])
        .then(answer => {
        if (answer["num"] != "") {
            const guessed = isNumber(answer["num"]);
            if (guessed) {
                const guessedNum = answer["num"];
                if (guessedNum == randomNumber && tries <= noOfChances) {
                    tries = tries + 1;
                    noOfChances--;
                    console.log(chalk.greenBright("you have guessed the right number"));
                    console.log(chalk.green(`you guessed it in ${tries} tries.`));
                }
                else if (guessedNum > randomNumber && tries <= noOfChances) {
                    tries = tries + 1;
                    noOfChances--;
                    console.log(`you guessed a number bigger than the random number and you have ${noOfChances} chance(s) left`);
                    guessNumber();
                }
                else if (guessedNum < randomNumber && tries <= noOfChances) {
                    tries = tries + 1;
                    noOfChances--;
                    console.log(`you guessed a number smaller than the random number and you have ${noOfChances} chance(s) left`);
                    guessNumber();
                }
                else {
                    console.log(chalk.redBright("you lost"));
                }
            }
            else {
                console.log(chalk.bgRedBright(`only numbers are valid`));
                guessNumber();
            }
        }
        else {
            console.log(chalk.red(`enter number to try`));
            guessNumber();
        }
    });
}
function isNumber(num) {
    let parse = parseInt(num);
    let check = !isNaN(parse);
    return check;
}
guessNumber();
//# sourceMappingURL=index.js.map