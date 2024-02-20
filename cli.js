


import { program } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";

program
    .name("mycli")
    .description("An example CLI tool with Node.js")
    .version("1.0.0");

program
    .command("greet")
    .description("Greet a user interactively")
    .action(() => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?",
            },
            {
                type: "list",
                name: "color",
                message: "What is your favorite color?",
                choices: ["Red", "Green", "Blue"],
            }
        ]).then(answers => {
            console.log(chalk.hex("#FF5733")(`Hello, ${answers.name}! Your favorite color is ${answers.color}.`));
        });
    });

// 解析命令行参数
program.parse(process.argv);
