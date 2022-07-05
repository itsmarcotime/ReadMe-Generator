// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project? (required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project. (required)'
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Add key words for the Table of Contents.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter programs that needed to be installed for this app.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What can this app be used for?'
        },
        //could make license Q a checkbox 
        {
            type: 'input',
            name: 'license',
            message: 'What license does this app have?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who helped with this application?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command/file is used to start this app?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your github username for any questions related to this app. (required)'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions();
