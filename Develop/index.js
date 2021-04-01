const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application
//Done
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'github',
        message:'What is your GitHub Repository URL/Information?',
    },
    {
        type:'input',
        name:'title',
        message:'What is your project title?',  
    },
    {
        type:'input',
        name:'description',
        message:'What is your project description?',  
    },
    {
        type:'input',
        name:'contents',
        message:'What is your project table of contents?',  
    },
    {
        type:'input',
        name:'contibutions',
        message:'How can other contribute to your project?',  
    },
    {
        type:'input',
        name:'test',
        message:'What are the test that you ran on your project?',  
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?',  
    },
    {
        type:'input',
        name:'name',
        message:'What is your name?',  
    },
    {
        type:'list',
        name:'license',
        message:'Which license did you use?',
        choices: ['MIT','Apache 2.0','None'],

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('newreadmd.md',generateMarkdown({...answers}));

        } )
        // .catch(function(e){
        //     console.error(e.message);
        // })  
    }

//Function call to initialize app
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README