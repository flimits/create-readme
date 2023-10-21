// // TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
// const { renderLicenseLink, generateMarkdown } = require('./utils/generateMarkdown.js')

goAskTheQuestions = function () {
    // Array of questions for user input. Used to build README.md

    const badgeType = ["GPLv3", "Mozilla", "ODbL", "Perl", "MIT"];

    inquirer
        .prompt([
            {
                message: "Enter your name",
                name: "yourName",
                type: "input",
            },
            {
                message: "Enter your Github Username",
                name: "gitUser",
                type: "input",
            },
            {
                message: "What is the Title of your README/Application (should match repo)?",
                name: "title",
                type: "input",
            },
            {
                message: "Give description of your project.",
                name: "description",
                type: "input",
            },
            {
                message: "What is your motivation for this project?",
                name: "motivation",
                type: "input",
            },
            {
                message: "Where there any outside contributors to meantion (links too)?",
                name: "contributions",
                type: "input",
            },
            {
                message: "How do you install this application? (Step by Step instructions.)",
                name: "installation",
                type: "input",
            },
            {
                message: "How do you use this application (what is its usage)?",
                name: "usage",
                type: "input",
            },
            {
                name: "badgeName",
                type: "rawlist",
                message: "Pick a  Licensed Badge are you using.",
                choices: badgeType,
            },
        ])
        .then((data) => {
            // console.log(data);
            console.log(data.badgeName);
            const licenseIs = renderLicenseLink(data.badgeName);
            console.log("Now that you have the license, we should render it")
            // console.log(data[0])

            // console.log("badge lin " + license.renderLicenseLink(badgeType[0]))
            const goGetReadme = myReadmeMarkdown(data, licenseIs)
            console.log("Now go and write it to file")
            writeToFile("README-NEW.md", goGetReadme);
        });
}
// This function is to take in the choice for the badge, and use switch case to match up the license.
function renderLicenseLink(badge) {
    console.log(badge)

    switch (badge) {
        case "GPLv3":
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case "Mozilla":
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case "ODbL":
            badge = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
            break;
        case "Perl":
            badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
            break;
        case "MIT":
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        default:
            badge = '';
            break;
    }

    if (badge === "") {
        badge = "No license specified.";
    }

    console.log("The license chosen is " + badge);

    return badge;
}


// This function is to write README file to local disk
function writeToFile(fileName, markdownData) {

    fs.writeFile(fileName, markdownData, (err) =>
        err ? console.error(err) : console.log('Successfully wrote ' + fileName + ' readme file!')
    )
};

const myReadmeMarkdown = function (data, licenseIs) {
    const title = data.title || "TITLE";
    const gitUser = data.gitUser || "GITHUB USER";
    const email = data.email || "PUT YOUR EMAIL HERE";
    const description = data.description || "DESCRIPTION";
    const motivation = data.motivation || "MOTIVATION";
    const installation = data.learn || "ADD INSTALLATION HERE";
    const usage = data.usage || "USAGE: HOW YOU RUN THIS CODE";
    const license = licenseIs || "HERE IS WHERE THE BADGE GOES";
    const contributions = data.contributions || "HERE IS WHERE THE CONTRIBUTORS TO YOUR PAGE GO";

    const readMeTemplate = `# Welcome to ${title}
                        
## Description

- ${description}:
- ${motivation}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [GitHub Project](#github-project)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## GitHub project.

This project will be deployed at: [https://${gitUser}.github.io/${title}](https://${gitUser}.github.io/${title})

## Installation

${installation}

## Usage

${usage}

## Credits

${contributions}

## License

Here is a list of licensing and badges associaged with them that you use in this application.

## Badges

${license}
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Tests


## Contact Me

You may contact me can follow my Github Projects  through:
<a href="https://github.com/${gitUser}/">https://github.com/${gitUser}/</a>
       OR
Email me at: <${email}>

### Thank you for stoppying by!
`
    return readMeTemplate;
};

// Function to initialize app
function init() {
    goAskTheQuestions();
}

// Function call to initialize app
init();