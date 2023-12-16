# fed_generate_password

### Install

```js
npm install fed_generate_password
```

### Method

```js
generatePassword(); // 8jBEwtfX will generate a password of 8 characters only from uppercase and lowercase English letters and numbers
generatePassword(10, 5); // qW9#*bXnD%/m6G> will generate a password 15 characters long from 10 uppercase, capital English letters and numbers and 5 special characters
```

### Usage

```js
const genPass = require("fed_generate_password");
genPass.generatePassword(); // = 8jBEwtfX 8 characters only from uppercase and lowercase English letters and numbers
genPass.generatePassword(10); // = y3G0moOIN8 10 characters only from uppercase and lowercase English letters and numbers
genPass.generatePassword(10, 5); // = qW9#*bXnD%/m6G> 10 uppercase, capital English letters and numbers and 5 special characters
```
