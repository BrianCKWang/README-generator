// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const questions = require('./utils/inquirer-questions.js');
const writeToFile = require('./utils/file-handlers.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
// writeToFile(fileName, data);

const promptProjectDetails = () => {
  console.log("");
  console.log("=== Project details: ===");
  return inquirer.prompt(questions.projectQuestions)
          .catch(err => {
            console.log(err);
          });
};

const promptUser = projectData => {
  console.log("");
  console.log("=== User details: ===");
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

const promptFor = (portfolioData, section, sectionQuestions, sectionName) => {
  console.log("");
  console.log("=== " + sectionName + ": ===");
  return promptSteps([], sectionQuestions)
          .then(steps=> {
            portfolioData[section] = steps;

            console.log("");
            console.log(sectionName + ":");
            for(let i = 0, currentStep = 1; i < portfolioData[section].length; i++, currentStep++){
              console.log("Step " + currentStep + ": " + portfolioData[section][i].step);
            }
            console.log("");
          })
          .then(() => {
            return inquirer.prompt(sectionQuestions.confirm)
          })
          .then(confirmation =>{
            if(confirmation.confirmStep){
              console.log("");
              console.log("** " + sectionName + " confirmed!");
              return portfolioData;
            }
            else{
              console.log("");
              console.log("** " + sectionName + " cleared.");
              section = [];
              return promptFor(portfolioData, section, sectionQuestions, sectionName);
            }
          })
          .catch(err => {
            console.log(err);
          });
};

const promptSteps = (steps, sectionQuestions) => {
  if(steps == null){
    steps = [];
  }

  let currentStep = steps.length + 1;
  console.log("Step " + currentStep + ": ");

  return inquirer.prompt(currentStep == 1 ? sectionQuestions.firstQ : sectionQuestions.nextQ)
          .then(step => {
            steps.push(step);
            return step.hasNext ? promptSteps(steps, sectionQuestions) : steps;
          })
          .catch(err => {
            console.log(err);
          });
};

const promptLicense = portfolioData => {
  console.log("");
  console.log("=== License details: ===");
  return inquirer.prompt(questions.licenseQuestions)
          .then(license => {
            portfolioData.license = license;
          })
          .then(() => {
            return inquirer.prompt(questions.licenseQuestion_confirm) 
          })
          .then(confirmation => {
            if(confirmation.confirmLicense){
              console.log("");
              console.log("** License confirmed!");
              return portfolioData;
            }
            else{
              console.log("** License cleared. Please choose license.");
              return promptLicense(portfolioData);
            }
          })
          .catch(err => {
            console.log(err);
          });
};

// TODO: Create a function to initialize app
function init() {
  promptProjectDetails()
  .then(promptUser)
  .then(portfolioData => {
    return promptFor(portfolioData, 
              'installation',
              {
                firstQ: questions.installationQuestion_first,
                nextQ: questions.installationQuestion_next,
                confirm: questions.installationQuestion_confirm
              },
              "Installation Instruction"
      )
    }
  )
  .then(portfolioData => {
    return promptFor(portfolioData, 
              'usage',
              {
                firstQ: questions.usageQuestion_first,
                nextQ: questions.usageQuestion_next,
                confirm: questions.usageQuestion_confirm
              },
              "Usage Instruction"
      )
    }
  )
  .then(portfolioData => {
    return promptFor(portfolioData, 
              'test', 
              {
                firstQ: questions.testQuestion_first,
                nextQ: questions.testQuestion_next,
                confirm: questions.testQuestion_confirm
              },
              "Test Instruction"
      )
    }
  )
  .then(portfolioData => {
    return promptFor(portfolioData, 
              'contributionGuideline', 
              {
                firstQ: questions.contributionQuestion_first,
                nextQ: questions.contributionQuestion_next,
                confirm: questions.contributionQuestion_confirm
              },
              "Contribution Guideline"
      )
    }
  )
  .then(promptLicense)
  .then(portfolioData => {
    console.log(portfolioData);
    return generateMarkdown(portfolioData);
  })
  .then(markdownData => {
    // console.log(markdownData);
    return writeToFile('README.md', markdownData);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse.message);
  })
  .catch(err => {
    console.log(err);
  });
}

// Function call to initialize app
init();
