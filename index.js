// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const questions = require('./utils/inquirer-questions.js');
const writeToFile = require('./utils/file-handlers.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
// writeToFile(fileName, data);

const promptProjectDetails = () => {
  const projectQuestions = questions.projectQuestions;
  return inquirer.prompt(projectQuestions);
};

const promptUser = projectData => {
  const userQuestions = questions.userQuestions;

  return inquirer.prompt(userQuestions)
  .then(userData => {
    return {
      ...userData,
      project: projectData
    };
  })
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
};

const promptInstallationSteps = steps => {
  const installQuestion = {
    firstQ: questions.installationQuestion_first,
    nextQ: questions.installationQuestion_next,
  }

  if(steps == null){
    steps = [];
  }

  let currentStep = steps.length + 1;
  console.log("Step " + currentStep + ": ");

  return inquirer.prompt(currentStep == 1 ? installQuestion.firstQ : installQuestion.nextQ)
          .then(step => {
            steps.push(step);
            return step.hasNext ? promptInstallationSteps(steps) : steps;
          });
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
          });
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
