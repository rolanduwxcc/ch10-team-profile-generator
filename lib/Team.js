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
        this.currentEmployeeType = 'Manager';
    }

    startApp() {
        console.log(`
        ===========================
        Let's build a Team Profile
        ===========================
        `);

        this.addTeamMember(this.currentEmployeeType);
    }

    addTeamMember(employeeType) {
        inquirer
            .prompt([
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
                }
            ])
            .then(({name, id, email, officeNumber = "", github = "", school = ""}) =>{
                console.log(name, id, email, officeNumber, github, school);
                if (officeNumber) {
                    this.employees.push(new Manager(name,id,email,officeNumber));
                } else if (github) {
                    this.employees.push(new Engineer(name, id, email, github));
                } else if (school) {
                    this.employees.push(new Intern(name, id, email, school));
                } else {
                    console.log("Problem occurred adding this employee. Try again or quit and report to developer.");
                    return this.addMoreTeamMembersOrQuit();
                }

                console.table(this.employees);
                this.addMoreTeamMembersOrQuit();
            })
    }

    addMoreTeamMembersOrQuit() {
        inquirer
            .prompt([
                {
                    name: 'action',
                    type: 'list',
                    message: 'What would you like to do next?',
                    choices: ['Add Engineer', 'Add Intern', 'Generate Team Page', 'Quit']
                }
            ])
            .then(({ action }) => {
                if (action === 'Add Engineer') {
                    this.addTeamMember("Engineer");
                } else if (action === 'Add Intern') {
                    this.addTeamMember("Intern");
                } else if (action === 'Generate Team Page') {
                    console.table(this.employees);
                    return;
                } else {
                    return;
                }
            })
    }
}

module.exports = Team;