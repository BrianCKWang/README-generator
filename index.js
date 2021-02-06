// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const questions = require('./utils/inquirer-questions.js');
const writeToFile = require('./utils/file-handlers.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
// writeToFile(fileName, data);

const promptProjectDetails = () => {
  return inquirer.prompt(questions.projectQuestions)
          .catch(err => {
            console.log(err);
          });
};

const promptUser = projectData => {
  return inquirer.prompt(questions.userQuestions)
          .then(userData => {
            return {
              ...userData,
              project: projectData
            };
          })
          .catch(err => {
            console.log(err);
          });
};

const promptInstallation = portfolioData => {
  return promptInstallationSteps()
          .then(steps=> {
            portfolioData.installationSteps = steps;
            console.log("Installation instructions:");
            for(let i = 0, currentStep = 1; i < portfolioData.installationSteps.length; i++, currentStep++){
              console.log("Step " + currentStep + ": " + portfolioData.installationSteps[i].installation);
            }
          })
          .then(() => {
            return inquirer.prompt(questions.installationQuestion_confirm)
          })
          .then(confirmation =>{
            if(confirmation.confirmStep){
              console.log("** Installation instruction confirmed!");
              return portfolioData;
            }
            else{
              console.log("** Installation instruction cleared. Please enter installation instruction.");
              portfolioData.installationSteps = [];
              promptInstallation(portfolioData);
            }
          })
          .catch(err => {
            console.log(err);
          });
};

const promptInstallationSteps = steps => {
  const install = {
    firstQ: questions.installationQuestion_first,
    nextQ: questions.installationQuestion_next,
  }

  if(steps == null){
    steps = [];
  }

  let currentStep = steps.length + 1;
  console.log("Step " + currentStep + ": ");

  return inquirer.prompt(currentStep == 1 ? install.firstQ : install.nextQ)
          .then(step => {
            steps.push(step);
            return step.hasNext ? promptInstallationSteps(steps) : steps;
          })
          .catch(err => {
            console.log(err);
          });;
};

const promptLicense = portfolioData => {
  return inquirer.prompt(questions.licenseQuestions)
          .then(license => {
            portfolioData.license = license;
          })
          .then(() => {
            return inquirer.prompt(questions.licenseQuestion_confirm) 
          })
          .then(confirmation => {
            if(confirmation.confirmLicense){
              console.log("** License confirmed!");
              return portfolioData;
            }
            else{
              console.log("** License cleared. Please choose license.");
              promptLicense(portfolioData);
            }
          })
          .catch(err => {
            console.log(err);
          });;
};

// TODO: Create a function to initialize app
function init() {
  promptProjectDetails()
  .then(promptUser)
  .then(promptInstallation)
  .then(promptLicense)
  .then(portfolioData => {
    console.log(portfolioData);
    // return generateMarkdown(portfolioData);
  })
  // .then(markdownData => {
  //   return writeToFile(markdownData);
  // })
  .catch(err => {
    console.log(err);
  });
}

// Function call to initialize app
init();
