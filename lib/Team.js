const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { Color } = require('chalk');

class Team {
    constructor() {
        this.employees = [];
    }

    startApp() {
        console.log(`
        ===========================
        Let's build a Team Profile
        ===========================
        `);
        this.requestManagerInfo();
    }

    requestManagerInfo() {
        this.addTeamMemberInfo("Manager");
        // this.quitOrGetTeamInfo();
    }

    addTeamMemberInfo(employeeType) {
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
    }
}

module.exports = Team;