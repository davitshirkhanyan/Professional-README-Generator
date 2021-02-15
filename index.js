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
    }
];
