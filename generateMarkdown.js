// TODO: Create a function that returns a license badge based on which license is passed in

const { table } = require("console");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return`
  [![License](https://img.shields.io/badge/${license}-blue.svg)]`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `your project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
console.log(data.title) 
  
return `# ${data.title}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Built With](#builtWith)
- [Authors](#authors)
- [License](#license)


## Installation;
${data.installation}

## Built With
${data.builtWith}

## Authors
email: ${data.email}
GitHub username: ${data.GitHub}
## License
${renderLicenseBadge(data.license)}

`};

module.exports = generateMarkdown;
