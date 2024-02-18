
const options = require("../index.js");

// get license badge
function licenseBadge(license) {
  if (license === options.Apache) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === options.GNU) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === options.MIT) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === options.Boost) {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license === options.Eclipse) {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license === options.Mozilla) {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    console.log(license);
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}
## Description
${data.descrition}
## table of Contents //list of sections in the README with links to each

## Installation
${data.dependencies}
## Usage
${date.usage}
## Contributions
${data.contributors}
## Tests
${data.test}
## Questions // github username & email address added here with link to profile
Please send any questions to;
${[data.name], [data.email]}
`;
}

module.exports = generateMarkdown;