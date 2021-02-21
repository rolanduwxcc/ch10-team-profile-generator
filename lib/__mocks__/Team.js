const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('.../src/page-template.js');
const { writeFile, copyFile } = require('.../utils/generate-site');
const Employee = require('../Employee');
const Manager = require('../Manager');
const Engineer = require('../Engineer');
const Intern = require('../Intern');
const { Color } = require('chalk');

class Team {
    constructor() {
        this.employees = [
            Manager = {
            name: 'Nick Fury',
            id: '1',
            email: 'furious@shield.org',
            officeNumber: '01'
            },
            Engineer = {
            name: 'Tony Start',
            id: '2',
            email: 'iamironman@shield.org',
            github: 'theMechanic'
            },
            Engineer = {
            name: 'Steve Rogers',
            id: '3',
            email: 'together@shield.org',
            github: 'theShield'
            },
            Engineer = {
            name: 'Carol Danvers',
            id: '4',
            email: 'marvelous@shield.org',
            github: 'marVel'
            },
            Intern = {
            name: 'Peter Parker',
            id: '9',
            email: 'spiderboy@shield.org',
            school: 'peterTingle'
            }
        ];
    }

    finishTeamPage() {
        console.table(this.employees);
        const pageHTML = generatePage(this.employees);

        writeFile(pageHTML)
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

    }
}