const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-site');
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
        console.clear();
        console.log(`
        ===========================
        Let's build a Team Profile
        ===========================
        `);

        this.addTeamMember(this.currentEmployeeType);
    }

    addTeamMember(employeeType) {
        console.clear();
        console.log(`
        ===========================
        Enter Team Member's Data
        ===========================
        `);
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
                    message: `What is the ${employeeType}'s employee number? (required)`,
                    validate: userInput => {
                        if (!isNaN(userInput)) {
                            return true;
                        } else {
                            console.log('  Please enter valid employee number!');
                            return false;
                        }
                    }
                },
                {
                    name: 'email',
                    type: 'input',
                    message: `What is the ${employeeType}'s email? (required)`,
                    validate: email => {
                        let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                        if (valid) {
                            return true;
                        } else {
                            console.log('  Please enter a valid email');
                            return false;
                        }
                    }
                },
                {
                    name: 'officeNumber',
                    type: 'input',
                    message: `What is the ${employeeType}'s office number? (required)`,
                    validate: userInput => {
                        if (!isNaN(userInput)) {
                            return true;
                        } else {
                            console.log('  Please enter valid office number!');
                            return false;
                        }
                    },
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
            .then(({ name, id, email, officeNumber = "", github = "", school = "" }) => {
                // console.log(name, id, email, officeNumber, github, school);
                if (officeNumber) {
                    this.employees.push(new Manager(name, id, email, officeNumber));
                } else if (github) {
                    this.employees.push(new Engineer(name, id, email, github));
                } else if (school) {
                    this.employees.push(new Intern(name, id, email, school));
                } else {
                    console.log("Problem occurred adding this employee. Try again or quit and report to developer.");
                    return this.addMoreTeamMembersOrQuit();
                }
                // console.table(this.employees);
                this.addMoreTeamMembersOrQuit();
            })
    }

    addMoreTeamMembersOrQuit() {
        console.clear();
        console.log(`
        ===========================
        Please Select an Option
        ===========================
        `);
        inquirer
            .prompt([
                {
                    name: 'action',
                    type: 'list',
                    message: 'What would you like to do next?',
                    choices: ['Add Engineer', 'Add Intern', 'Generate Team Page', 'Quit without making Team Page']
                }
            ])
            .then(({ action }) => {
                if (action === 'Add Engineer') {
                    this.addTeamMember("Engineer");
                } else if (action === 'Add Intern') {
                    this.addTeamMember("Intern");
                } else if (action === 'Generate Team Page') {
                    this.finishTeamPage();
                } else {
                    console.log('Goodbye!');
                    return;
                }
            })
    }

    finishTeamPage() {
        const pageHTML = generatePage(this.employees);
        
        console.log("Building team web page for....");
        console.table(this.employees);

        writeFile(pageHTML)
            .then(writeFileResponse => {
                console.log(writeFileResponse.message);
                return copyFile();
            })
            .then(copyFileResponse => {
                console.log(copyFileResponse.message);
                console.log("The files can be found in the './dist' directory!");
                console.log(" ");
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Team;