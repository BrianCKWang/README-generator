// TODO: Create an array of questions for user input
// -project title
// -description
// table of contents
// -installation instruction
// -usage information
// -license
// -contribution guidelines
// -test instructions
// -github username
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
  }
];

const licenseQuestions = [
  {
    type: 'rawlist',
    name: 'licenseCategory',
    message: 'Choose a license category.',
    choices: ['Apache', 
              'Boost', 
              'BSD', 
              'Creative Commons', 
              'Eclipse', 
              'GNU', 
              'IBM', 
              'ISC', 
              'MIT', 
              'Mozilla', 
              'Open Data Commons', 
              'Perl', 
              'SIL',
              'Unlicense',
              'WTFPL',
              'Zlib'
            ],
    default: 'Apache',
    
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['Apache 2.0 License'],
    default: 'Apache 2.0 License',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Apache') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['Boost Software License 1.0'],
    default: 'Boost Software License 1.0',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Boost') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['BSD 3-Clause License', 'BSD 2-Clause License'],
    default: 'BSD 3-Clause License',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'BSD') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['CC0', 
              'Attribution 4.0 International', 
              'Attribution-ShareAlike 4.0 International', 
              'Attribution-NonCommercial 4.0 International',
              'Attribution-NoDerivates 4.0 International',
              'Attribution-NonCommmercial-ShareAlike 4.0 International',
              'Attribution-NonCommercial-NoDerivatives 4.0 International'
            ],
    default: 'CC0',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Creative Commons') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['Eclipse Public License 1.0'],
    default: 'Eclipse Public License 1.0',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Eclipse') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['GNU GPL v3',
              'GNU GPL v2',
              'GNU AGPL v3',
              'GNU LGPL v3',
              'GNU FDL v1.3'
            ],
    default: 'GNU GPL v3',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'GNU') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['IBM Public License Version 1.0'],
    default: 'IBM Public License Version 1.0',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'IBM') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['ISC License (ISC)'],
    default: 'ISC License (ISC)',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'ISC') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['The MIT License'],
    default: 'The MIT License',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'MIT') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['Mozilla Public License 2.0'],
    default: 'Mozilla Public License 2.0',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Mozilla') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['Attribution License (BY)',
              'Open Database License (ODbL)',
              'Public Domain Dedication and License (PDDL)'
            ],
    default: 'Attribution License (BY)',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Open Data Commons') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['The Perl License',
              'The Artistic License 2.0'
            ],
    default: 'The Perl License',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Perl') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['SIL Open Font License 1.1'],
    default: 'SIL Open Font License 1.1',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'SIL') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['The Unlicense'],
    default: 'The Unlicense',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Unlicense') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['The Do What the Fuck You Want to Public License'],
    default: 'The Do What the Fuck You Want to Public License',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'WTFPL') {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Choose a license.',
    choices: ['The zlib/libpng License'],
    default: 'The zlib/libpng License',
    when: ({ licenseCategory}) => {
      if (licenseCategory == 'Zlib') {
        return true;
      } else {
        return false;
      }
    }
  }

];

const licenseQuestion_confirm = [
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Please confirm the license. Okay to proceed?',
    default: true
  }
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
    message: 'Would you like to provide email for additional contact information?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Please enter email',
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
  installationQuestion_confirm,
  licenseQuestions,
  licenseQuestion_confirm
};