// TODO: Create an array of questions for user input
// -project title
// -description
// table of contents
// -installation instruction
// -usage information
// license
// -contribution guidelines
// -test instructions
// github username
// email address
let projectQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information for the project (Required)',
    validate: instructionInput => {
      if (instructionInput) {
        return true;
      } else {
        console.log('Please enter usage information for the project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines for the project (Required)',
    validate: instructionInput => {
      if (instructionInput) {
        return true;
      } else {
        console.log('Please enter contribution guidelines for the project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide test instructions for the project (Required)',
    validate: instructionInput => {
      if (instructionInput) {
        return true;
      } else {
        console.log('Please enter test instructions for the project!');
        return false;
      }
    }
  }
];

const installationQuestion_first = [
  {
    type: 'input',
    name: 'installation',
    message: 'Provide an instruction of installation for the project (Required)',
    validate: instructionInput => {
      if (instructionInput) {
        return true;
      } else {
        console.log('Please enter instruction of intallation for the project!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'hasNext',
    message: 'Is there a next step?',
    default: false
  },
];

const installationQuestion_next = [
  {
    type: 'input',
    name: 'installation',
    message: 'Provide another instruction of installation (Required)',
    validate: instructionInput => {
      if (instructionInput) {
        return true;
      } else {
        console.log('Please enter an instruction!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'hasNext',
    message: 'Is there a next step?',
    default: false
  },
];

const installationQuestion_confirm = [
  {
    type: 'confirm',
    name: 'confirmStep',
    message: 'Please confirm the installation instruction steps. Okay to proceed?',
    default: true
  },
];

const userQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your GItHub Username!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you like to enter some information about yourself for an "About" section?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself',
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    }
  }
];

module.exports = {
  projectQuestions, 
  userQuestions, 
  installationQuestion_first,
  installationQuestion_next,
  installationQuestion_confirm
};