// // code from Jung to use in homework
// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });


// start of actual homework code:

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input'
    userName: 'name'
    message: 'what is your GitHub username?'

},
{
    type: 'input'
    email: 'name'
    message: 'What is your email address?'

},
{
    type: 'input'
    projectName: 'name'
    message: 'What is your project name?'

},
{
    type: 'input'
    description: 'name'
    message: 'Please write a short description of your project'

},
{
    type: 'input'
    name: 'name'
    message: 'What kind of licence should your project have?'

},
{
    type: 'input'
    dependencies: 'name'
    message: 'What command should be run to instal dependencies?'

},
{
    type: 'input'
    test: 'name'
    message: 'What command should be run to run tests?'

},
{
    type: 'input'
    repo: 'name'
    message: 'What does the user need to know about using the repo?'

},
{
    type: 'input'
    contribute: 'name'
    message: 'What does the user need to know about contributing to the repo?'

},
];


;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


