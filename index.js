// Global variables
const fs = require("fs");
const inquirer = require("inquirer");

// user input questions
const questions = [
    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log ('Please, enter your Github Username!');
                return false;
            }
        }
    },

    // GitHub Repository
    {
        type: 'input',
        name: 'repository',
        message: 'Enter your GitHub Repository Name (Required)',
        validate: githubRepository => {
            if (githubRepository) {
                return true;
            } else {
                console.log ('Please, enter your Github Repository Name!');
                return false;
            }
        }
    },

    
];
