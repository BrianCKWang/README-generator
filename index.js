const inquirer = require('inquirer');
const questions = require('./utils/inquirer-questions.js');
const writeToFile = require('./utils/file-handlers.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUserDetails = () => {
  console.log("");
  console.log("=== User Details: ===");
  return inquirer.prompt(questions.userQuestions)
          .catch(err => {
            console.log(err);
          });
};

const promptProjectDetails = portfolioData => {
  console.log("");
  console.log("=== Project Details: ===");
  return inquirer.prompt(questions.projectQuestions)
          .then(projectData => {
            return {
              ...portfolioData,
              project: projectData
            };
          })
          .catch(err => {
            console.log(err);
          });
};

const promptFor = (section, sectionQuestions, sectionName, portfolioData) => {
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
              return promptFor(section, sectionQuestions, sectionName, portfolioData);
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

function init() {
  promptUserDetails()
  .then(promptProjectDetails)
  .then(portfolioData => {
    return promptFor(
              'installation',
              {
                firstQ: questions.installationQuestion_first,
                nextQ: questions.installationQuestion_next,
                confirm: questions.installationQuestion_confirm
              },
              "Installation Instruction",
              portfolioData
      )
    }
  )
  .then(portfolioData => {
    return promptFor( 
              'usage',
              {
                firstQ: questions.usageQuestion_first,
                nextQ: questions.usageQuestion_next,
                confirm: questions.usageQuestion_confirm
              },
              "Usage Instruction",
              portfolioData
      )
    }
  )
  .then(portfolioData => {
    return promptFor(
              'test', 
              {
                firstQ: questions.testQuestion_first,
                nextQ: questions.testQuestion_next,
                confirm: questions.testQuestion_confirm
              },
              "Test Instruction",
              portfolioData
      )
    }
  )
  .then(portfolioData => {
    return promptFor(
              'contributionGuideline', 
              {
                firstQ: questions.contributionQuestion_first,
                nextQ: questions.contributionQuestion_next,
                confirm: questions.contributionQuestion_confirm
              },
              "Contribution Guideline",
              portfolioData
      )
    }
  )
  .then(promptLicense)
  .then(portfolioData => {
    console.log("Creating file...");
    return generateMarkdown(portfolioData);
  })
  .then(markdownData => {
    return writeToFile('./dist/README.md', markdownData);
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
