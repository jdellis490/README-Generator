// Function to generate markdown for README with added licence badge and link
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to contirbute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation

${data.installation}

## Usage

${data.usage}

## How to Contribute

${data.contribution}

## Tests

${data.tests}

## License

The project license is under ${data.license}\n
![GitHub license](https://img.shields.io/badge/license-${data.license}-brightgreen.svg)\n
(https://opensource.org/licenses/${data.license})

## Questions

Contact me on GitHub: https://github.com/${data.github} or email ${data.email} for any addtional questions.
`;
}

module.exports = generateMarkdown;
