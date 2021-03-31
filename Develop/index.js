const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Include packages needed for this application
//Done
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'github',
        message:'What is your github username',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
