// // TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
// const { renderLicenseLink, generateMarkdown } = require('./utils/generateMarkdown.js')


// // TODO: Create an array of questions for user input
// const questions = [];

const badgeType = ["GPLv3", "Mozilla", "ODbL", "Perl", "MIT"]
inquirer
    .prompt([
        {
            message: "Enter your name",
            name: "yourName",
            type: "input",
        },
        //     message: "Enter your Github Username",
        //     name: "gitUser",
        //     type: "input",
        // },
        //     message: "What did you learn about the project?",
        //     name: "learn",
        //     type: "input",
        // },
        // {
        //     message: "What is the Title of your README?",
        //     name: "title",
        //     type: "input",
        // },
        // {
        //     message: "Give description of your README?",
        //     name: "description",
        //     type: "input",
        // },
        // {
        //     message: "What is your motivation for this project?",
        //     name: "motivation",
        //     type: "input",
        // },
        // {
        //     message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
        //     name: "theWhy",
        //     type: "input",
        // },
        // {
        //     message: "What does this application solve?",
        //     name: "solve",
        //     type: "input",
        // },
        // {
        //     message: "What did you learn about the project?",
        //     name: "learn",
        //     type: "input",
        // },
        // {
        //     message: "How do you use this application (what is its usage)?",
        //     name: "testUsage",
        //     type: "input",
        // },
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
        const goGetReadme = myReadmeMarkdown(data,licenseIs)
        console.log("Now go and write it to file")
        writeToFile("README-NEW.md",goGetReadme);
    });

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
    // writeToFile(license);
    // console.log("readmefile " + myReadmeMarkdown)
    // writeToFile("readme-new.md",myReadmeMarkdown);

    return badge;
}

// console.log("show license information " + renderLicenseLink);

// // TODO: Create a function to write README file
function writeToFile(fileName, markdownData) {

    fs.writeFile(fileName, markdownData, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const myReadmeMarkdown = function (data,licenseIs) {
    const title = data.title || "TITLE";
    const description = data.description || "DESCRIPTION";
    const motivation = data.motivation || "MOTIVATION";
    const theWhy = data.theWhy || "THE WHY";
    const solve = data.solve || "WHAT IS IT GOING TO SOLVE?";
    const learn = data.learn || "WHAT DID YOU LEARN?";
    const testUsage = data.testUsage || "ENTER THE TEST USAGE CASE";
    const license = licenseIs || "HERE IS WHERE THE BADGE GOES";

    const readMeTemplate = `# ${title}
                        
                        ## Description
                        
                        ${description}:
                        
                        - ${motivation}
                        - ${theWhy}
                        - What problem does it solve?
                        - What did you learn?
                        
                        ## Table of Contents (Optional)
                        
                        If your README is long, add a table of contents to make it easy for users to find what they need.
                        
                        - [Installation](#installation)
                        - [Usage](#usage)
                        - [Credits](#credits)
                        - [${license}
                        
                        ## Installation
                        
                        What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
                        
                        ## Usage
                        
                        Provide instructions and examples for use. Include screenshots as needed.
                        
                        To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
                        
                        \`\`\`md
                        ![alt text](assets/images/screenshot.png)
                        \`\`\`
                        
                        ## Credits
                        
                        List your collaborators, if any, with links to their GitHub profiles.
                        
                        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
                        
                        If you followed tutorials, include links to those here as well.
                        
                        ## License
                        
                        The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
                        
                        ---
                        
                        🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
                        
                        ## Badges
                        
                        ${license}
                        ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
                        
                        Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
                        
                        ## Features
                        
                        If your project has a lot of features, list them here.
                        
                        ## How to Contribute
                        
                        If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
                        
                        ## Tests
                        
                        Go the extra mile and write tests for your application. Then provide examples on how to run them here.
                        `
                        return readMeTemplate;
};
// writeToFile("NEW-README.md");