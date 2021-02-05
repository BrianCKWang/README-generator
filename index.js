// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeToFile = require('./utils/file-handlers.js');
const {projectQuestions, userQuestions} = require('./utils/inquirer-questions.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
// writeToFile(fileName, data);

const promptUser = projectData => {
  return inquirer.prompt(userQuestions)
  .then(userData => {
    return {
      ...userData,
      project: projectData
    }
  })
};

const promptProjectDetails = () => {
  return inquirer.prompt(projectQuestions)
};

// TODO: Create a function to initialize app
function init() {
  promptProjectDetails()
  .then(promptUser)
  .then(portfolioData => {
    return generateMarkdown(portfolioData);
  })
  .then(markdownData => {
    return writeToFile(markdownData);
  })
  .catch(err => {
    console.log(err);
  });
}

// Function call to initialize app
init();
