const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';


const createPswd = (
    length = '8', hasNumbers = true, hasSymbols = true
) => {
    let chars = letters;
    hasNumbers ? (chars += numbers) : '';
    hasSymbols ? (chars += symbols) : '';

    return chars;
};

module.exports = createPswd;