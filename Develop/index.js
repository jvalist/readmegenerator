// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title of your project",
        name:"title"
    },
    {
        type:"input",
        message:"What is the description of your project",
        name:"description"
    },
    {
        type:"input",
        message:"What is the installation of your project",
        name:"installation"
    },
    {
        type:"input",
        message:"How should your project be used",
        name:"usage"
    },
    {
        type:"input",
        message:"What are the contribution guidelines of your project",
        name:"contribution"
    },
    {
        type:"input",
        message:"How would your project be tested",
        name:"tests"
    },
    
    {
        type:"input",
        message:"What is your github username",
        name:"questions"
    },
    {
        type:"input",
        message:"What is your github license",
        name:"license"
    },
];
inquirer.prompt(questions)
.then(answers=>{
    fs.writeFileSync("./dist/README.md",`
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Constribution
${answers.constribution}

## Tests
${answers.tests}

## Questions
${answers.questions}

## License
${answers.license}
    `)
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
