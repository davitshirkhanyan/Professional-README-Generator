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
                console.log ('Please enter your Github Username!');
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
                console.log ('Please enter your Github Repository Name!');
                return false;
            }
        }
    },

    // Title of the Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log ('Please enter your project title!');
                return false;
            }
        } 
    },

    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log ('Please describe your project!');
                return false;
            }
        } 
    },

    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },




];
