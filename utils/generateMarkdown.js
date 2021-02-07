const renderLicenseBadge = require('./license-info.js');

function displaySteps(instructions) {
  if(instructions.length > 1){
  return `
  ${instructions.map(({step}) => {
    return `1. ${step}
  `
  }).join('')}
  `;
  }
  else{
  return `
  ${instructions.map(({step}) => {
    return `   ${step}
  `
  }).join('')}
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `# ${data.project.title}
## Description
${data.project.description}

## Table of Contents
1. [Description](#description)
1. [Usage](#usage)
1. [Installation](#installation-instructions)
1. [Test](#test-instructions)
1. [Contribution Guidelines](#contribution-guidelines)
1. [Questions](#questions)
1. [License](#license)

## Usage 
${displaySteps(data.usage)}

## Installation Instructions
${displaySteps(data.installation)}

## Test Instructions
${displaySteps(data.test)}

## Contribution Guidelines
${displaySteps(data.contributionGuideline)}

## Questions
What is your github username? 

  * https://github.com/${data.github}

Where can I reach out to you for questions? 

  * Email: ${data.email}

## License
This project is licensed under:

${renderLicenseBadge(data.license.license)}

`;
}

module.exports = generateMarkdown;
