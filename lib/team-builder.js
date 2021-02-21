//---------------------------------------------------MODULES
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const inquirer = require('inquirer');
const { type } = require('os');

// const generateSite = require('./utils/generate-site.js');
// use object DESTRUCTURING 
const {writeFile, copyFile} = require('./utils/generate-site.js');


//---------------------===--------------------------VARIABLES
const promptTeamMembers = team => {
    //if there's no 'projects' array property, create one
    if (!team.members) {
        team.members = [];
    }

    console.log(`
    ===================
    Add a Team Member
    ===================
    `);
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: `What is the ${employeeType}'s name? (required)`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: `What is the ${employeeType}'s employe number? (required)`,
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter employee number!');
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: `What is the ${employeeType}'s email? (required)`,
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: `What is the ${employeeType}'s office number? (required)`,
            when: () => {
                if (employeeType === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: `What is the ${employeeType}'s GitHub Username? (required)`,
            when: () => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: 'school',
            type: 'input',
            message: `What is the ${employeeType}'s school? (required)`,
            when: () => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: 'action',
            type: 'list',
            message: 'What would like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'Generate Team Page', 'Quit']
            .then(({ action }) => {
                if (action === 'Add Engineer') {
                    this.addTeamMemberInfo("Engineer");
                } else if (action === 'Add Intern') {
                    this.addTeamMemberInfo("Intern");
                } else if (action === 'Generate Team Page') {
                    console.table(this.employees);
                    return;
                } else {
                    return;
                }
            })
            // .then(answer => {
            //     if (answer.action === 'Add Engineer') {
            //         this.addTeamMemberInfo('Engineer');
            //     } else if (answer.action === 'Add Intern') {
            //         this.addTeamMemberInfo('Intern');
            //     } else if (answer.action === 'Generate Team Page') {
            //         console.table(this.employees);
            //     } else {
            //         return;
            //     }
            // })
        }
    ])
        .then(teamMember => {
            team.members.push(teamMember);
            if (teamMember.confirmAddProject) {
                return promptTeamMembers(team);
            }
            else {
                return team;
            }
        });
};

const promptUser = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your name? (required)',
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
            name: 'github',
            type: 'input',
            message: 'What is your GitHub Username? (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some info about yoself for an "About" section?',
            default: true,
        },
        {
            name: 'about',
            type: 'input',
            message: 'Provide some information about yoself: ',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ]);
    // .then((answer) => {
    //     console.log(answer);
    //     console.log("Hello " + answer.userName);
    //     console.log("GitHub name " + answer.githubName);
    // });
};

//UNCOMMENT AFTER TESTING
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

