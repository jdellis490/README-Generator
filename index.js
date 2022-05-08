const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the project?',
    },
    // {
    //   type: 'input',
    //   name: 'description',
    //   message: 'Describe the project',
    // },
    // {
    //   type: 'input',
    //   name: 'installation',
    //   message: 'How is the project installed?',
    // },
    // {
    //   type: 'input',
    //   name: 'usage',
    //   message: 'How is the project used?',
    // },
    // {
    //   type: 'input',
    //   name: 'contribution',
    //   message: 'How do I contribute to this project?',
    // },
    // {
    //   type: 'input',
    //   name: 'tests',
    //   message: 'How is the project tested?',
    // },
    {
      type: 'list',
      name: 'license',
      message: 'Which license was used?',
      choices: ['MIT', 'Apache_2.0', 'GPLv2', 'GPLv3', 'BSD_3-git -Clause', 'Other']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdownInfo = generateMarkdown(data);
// TODO: Create a function to write README file
        fs.writeFile('README.md', markdownInfo, (err) => {
            if (err){
                console.log(err);
            }else console.log('README generated!');
        })
    })
};




// Function call to initialize app
init();