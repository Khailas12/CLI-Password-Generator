const program = require('commander');


program.version('1.0.0').description('Password Generator');


const prog = program.
    option('-l, --length <number>', 'Length of Password', '8')
    .option('-s, --save', 'Save Passwords to pswd.txt', '8')

    .parse();

console.log(prog.opts());