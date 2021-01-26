#!/usr/bin/env node

console.log('doing business');

const chalk = require("chalk");
const boxen = require("boxen");

const data = {
name: chalk.bold.red('                  Kevin Cassart'),
    work: chalk.bold.bgRed('Junior Web Developer'),
    npm: chalk.cyanBright('https://npmjs.com/~kevksar'),
    github: chalk.cyanBright('https://github.com/KevKsar'),
    linkedin: chalk.cyanBright('https://linkedin.com/in/kevin-cassart'),
    npx: chalk.red('npx') + ' ' + chalk.white('Kev'),
    labelWork: chalk.white.bold('Work:'),
    labelOpenSource: chalk.white.bold('Open Source:'),
    labelnpm: chalk.white.bold('npm:'),
    labelGitHub: chalk.white.bold('GitHub:'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    labelCard: chalk.white.bold('Card:')
};

const lineBreak = '\n';
const emptyLine = '';

console.log(
    chalk.cyanBright(
        boxen(
            [
                `${data.name}`,
                emptyLine,
                `${data.labelWork} ${data.work}`,
                `${data.labelnpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelCard} ${data.npx}`,
            ].join(lineBreak),
            {
                borderColor: 'cyan',
                padding: 2,
                margin: 1,
                borderStyle: 'round',
                float: 'left'
            }
        )
    )
)