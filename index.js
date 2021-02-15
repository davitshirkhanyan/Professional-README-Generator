// Global variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
        default: 'npm install'
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
        choices: [
        'MIT',
        'Unlicense',
        'Apache 2.0',
        'GNU LGPLv3',
        'GNU GPLv3',
        'GNU AGPLv3',
        'BSD 3-Clause',
        'Mozilla Public License 2.0',
        'Boost Software License 1.0'
    ]
    },

    // Test for project

    {
        type: 'input',
        name: 'test',
        message: 'Provide tests for project, and explain how to test',
        default: 'npm run test'
    },

    // Contributing to Project
    {
        type: 'input',
        name: 'contribute',
        message: 'Explain how users can contribute to your project'
    },

    // Questions about the project
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log ('Please enter your email address!');
                return false;
            }
        } 
    }
];

// add function to prompt user inputs
const promptUser = () => {
    return inquirer.prompt(questions);
}

// add function to generate Readme file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

promptUser()
.then(generate => {
    return generateMarkdown(generate);
})
.then(fileContent => {
    return writeFile(fileContent);
})
.catch(err => {
    console.log(err);
});