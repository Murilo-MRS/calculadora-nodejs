const operations = require("./operations");
const readline = require("readline-sync");

const num1 = readline.questionInt("Digite um numero:");
const oper = readline.question("Digite a operação: +, -, *, / ");
const num2 = readline.questionInt("Digite um numero:");

switch (oper) {
    case '+':
        operations.sum(num1, num2)
        break;
    case '-':
        operations.sub(num1, num2)
        break;
    case '*':
        operations.multi(num1, num2)
        break;
    case '/':
        operations.div(num1, num2)
        break;

    default:
        console.log("Opa, operação inexistente.");
        break;
}