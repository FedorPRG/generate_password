function generatePassword(passwordLength = 8, specialСharacter = 0) {

    specialCharset = "!@#$%^&*_+-/%{}[]~<>";
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    retVal = "";
    if (specialСharacter === 0) {
        for (var i = 0, n = charset.length; i < passwordLength; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
    } else {
        for (var i = 0, n = charset.length; i < passwordLength; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        for (var i = 0, n = specialCharset.length; i < specialСharacter; ++i) {
            retVal += specialCharset.charAt(Math.floor(Math.random() * n));
        }
        retValList = retVal.split('');
        for (let i = retValList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = retValList[i];
            retValList[i] = retValList[j];
            retValList[j] = temp;
        }
        retVal = retValList.join('');
    }
    return retVal;
}

module.exports = { generatePassword };