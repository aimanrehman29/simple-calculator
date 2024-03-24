#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "type first number", type: "number", name: "firstno" },
    { message: "type second number", type: "number", name: "secondno" },
    { message: "select one operator", type: "list", name: "operator", choices: ["addition", "subraction", "multiplication", "division"] }
]);
if (answer.operator === "addition") {
    console.log(answer.firstno + answer.secondno);
}
else if (answer.operator === "subraction") {
    console.log(answer.firstno - answer.secondno);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstno * answer.secondno);
}
else if (answer.operator === "division") {
    console.log(answer.firstno / answer.secondno);
}
else {
    console.log("plese choice right operator");
}
