const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPswd = require('./createPswd');


program.version('1.0.0').description('Password Generator');


const prog = program.
    option('-l, --length <number>', 'Length of Password', '8')
    .option('-s, --save', 'Save Passwords to pswd.txt')
    .option('-rm, --no-numbers', 'Remove Numbers')
    .option('-rs, --no-symbols', 'Remove Symbols')

    .parse();


const { length, save, numbers, symbols } = prog.opts();

const generatedPswd = createPswd(length, numbers, symbols);

console.log(chalk.green('Generated Password: ') + chalk.bold(generatedPswd));