const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.employees = [];
        this.menuChoice = "";
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
        console.log('Manager info');

        this.quitOrGetTeamInfo();
    }

    addTeamMemberInfo() {
        console.log('Team Member info');

        this.quitOrGetTeamInfo();
    }

    quitOrGetTeamInfo() {
        inquirer.prompt({
            type: 'list',
            message: 'What would like to do?',
            name: 'action',
            choices: ['Add Engineer', 'Add Intern', 'Finish']
        })
        .then(({ action }) => {
            if (action === 'Add Engineer') {
                console.log("Adding an engineer");
                this.addTeamMemberInfo();
            } else if (action === 'Add Intern') {
                console.log("Adding an Intern");
                this.addTeamMemberInfo();
            } else {
                return;
            }
        })
    }

}

module.exports = Team;