const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';


const createPswd = (
    length = '8', hasNumbers = true, hasSymbols = true
) => {
    let chars = letters;
    hasNumbers ? (chars += numbers) : '';
    hasSymbols ? (chars += symbols) : '';

    return generatePswd(length, chars);
};



const generatePswd = ( length, chars ) => {
    let pswd = '';

    for (let i = 0; i < length; i++) {
        pswd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pswd;
}

module.exports = createPswd;