const program = require('commander');
const log = console.log();

const createPswd = require('createPswd');


program.version('1.0.0').description('Password Generator');


const prog = program.
    option('-l, --length <number>', 'Length of Password', '8')
    .option('-s, --save', 'Save Passwords to pswd.txt')
    .option('-rm, --no-numbers', 'Remove Numbers')
    .option('-rs, --no-symbols', 'Remove Symbols')

    .parse();


const { length, save, numbers, symbols } = prog.opts();


const generatedPswd = createPswd(length, numbers, symbols) ;

log(generatedPswd);