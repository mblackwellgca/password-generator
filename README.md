# password-generator

## Live Links
Published: https://mblackwellgca.github.io/password-generator/
Repository: https://github.com/mblackwellgca/password-generator

## Description
To randomly generate a password that meets certain criteria to create strong passwords on demand, for greater security.

## Usage
1. User will click the button "generate a password"
2. After clicking the button, user will be prompted with questions to create a random secure password.

![password generator](./assets/images/password_generator.png)

## Criteria 
GIVEN I need a new, secure password
* WHEN I click the button to generate a password
    * THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
    * THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
    * THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN asked for character types to include in the password
    * THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
    * THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
    * THEN a password is generated that matches the selected criteria
* WHEN the password is generated
    * THEN the password is either displayed in an alert or written to the page

3. Upon answering the prompts the password will generate and appear in the box. 

![password generated](./assets/images/password-generator.gif)

## Credits:
* Sandra Smith
* Christopher Ponzio https://github.com/ChristopherPonzio
https://www.w3schools.com/js/js_loop_for.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
https://www.w3schools.com/jsref/jsref_if.asp

## License:
MIT License