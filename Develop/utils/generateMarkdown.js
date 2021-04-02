// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
 }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
   }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `# License`;
   }
  return '';
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  This project uses ${data.license}.

 #Description\n
 ${data.description}

 #Table of Contents\n
 ${data.contents}\n
 *[Description](# Description)\n
 *[Contributing](# Contributing)\n
 *[Test](# Tests)\n
 *[Contact Information for Questions](# For-Questions)\n

 #Contributing\n
 ${data.contributions}

 #Tests\n
 ${data.test}

 #For Questions\n
 Name:\n
 ${data.name}
 Email:\n
 ${data.email}
 Github Profile:\n
 https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;
