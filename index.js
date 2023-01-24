// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
        
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
 
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "builtWith",
        message: "Who are the contributors of this projects?"
    },

    {
        type: "input",
        name: "GitHub",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("newborn README.you did it")
    });
}
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        var data = generateMarkdown(answers);
        console.log(data);
        writeToFile("README.md", data);
    })
}

// Function call to initialize app
init();
