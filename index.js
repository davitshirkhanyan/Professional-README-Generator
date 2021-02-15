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

    // Project Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples'
    },

    // Project License
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 
        'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 
        'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 
        'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 
        'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0',
        'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 
        'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 
        'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },

];
