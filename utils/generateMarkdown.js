// Function that returns a license badge based on the selected license
// If no license is provided, it returns an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const badges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache: '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    BSD: '![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
  };

  return badges[license] || '';
}

// Function that returns the license link
// If no license is provided, it returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const links = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)',
    GPLv3: '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)',
    Apache: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    BSD: '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return links[license] || '';
}

// Function that returns the license section of the README
// If no license is provided, it returns an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${license} license.  
For more details, see ${renderLicenseLink(license)}.
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me:  
GitHub: [${data.github}](https://github.com/${data.github})  
Email: [${data.email}](mailto:${data.email})
  `;
}

export default generateMarkdown;
