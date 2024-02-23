const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'name',
    message: 'what is your GitHub username?',

},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',

},
{
    type: 'input',
    name: 'title',
    message: 'What is your project name?',

},
{
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',

},
{
    type: 'input',
    name: 'name',
    message: 'What kind of license should your project have?',
    options: ["Apache", "GNU", "MIT", "Boost", "Eclipse", "Mozilla"],

},
{
    type: 'input',
    name: 'dependencies',
    message: 'What command should be run to instal dependencies?',

},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',

},
{
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',

},
{
    type: 'input',
    name: 'contributors',
    message: 'What does the user need to know about contributing to the repo?',

},
];



inquirer.prompt(questions)
    .then(function (answers) {
        console.log(answers);
        const markdown = generateMarkdown(answers)
        console.log(markdown);
        fs.writeFile('output.md', markdown, function (err) {
            if (err) throw err;
            console.log("saved");
        });
    })






