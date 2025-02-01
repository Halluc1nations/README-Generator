// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README Generator!');
;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide contribution guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
        },
    ])
    .then((data) => {
        const fileName = 'README.md';
        writeToFile(fileName, generateMarkdown(data));
        //const readMe = `# ${data.title}\n ## Description\n ${data.description}\n ## Table of Contents\n - [Installation](#installation)\n - [Usage](#usage)\n - [Contributing](#contributing)\n - [Tests](#tests)\n - [License](#license)\n - [Questions](#questions)\n ## Installation\n ${data.installation}\n ## Usage\n ${data.usage}\n ## Contributing\n ${data.contributing}\n ## Tests\n ${data.tests}\n ## License\n This project is licensed under the ${data.license} license.\n ## Questions\n If you have any questions, please contact me at [${data.email}](mailto:${data.email}).\n Visit my GitHub profile at [${data.github}](
    });
    }
// Function call to initialize app
init();
