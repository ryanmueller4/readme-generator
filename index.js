// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  }, {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  }, {
    type: 'input',
    name: 'installation',
    message: 'How is your application installed?',
  }, {
    type: 'input',
    name: 'usage',
    message: 'How do you use your application?',
  }, {
    type: 'input',
    name: 'contribution',
    message: 'Who are the contributors?',
  }, {
    type: 'input',
    name: 'test',
    message: 'How do you test your application?'
  }, {
    type: 'list',
    message: 'Choose the following license.',
    name: 'license',
    choices: ['MIT', 'IBM', 'Apache', 'Mozilla'],
  }, {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  }, {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();