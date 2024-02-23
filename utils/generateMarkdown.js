// get license badge
function licenseBadge(license) {
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license === "Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  }
};



// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1> # ${data.title} </h1>
${licenseBadge(data.license)}
<div>
<h2> ## Description </h2>
${data.description}
</div>

<div>
<h2> ## Table of Contents </h2>
[Installation](#Dependencies)
[Usage](#Usage)
[Contributions](#Contributors)
[Tests](#Test)
[Questions](#Questions)
</div>
  

## Installation
${data.dependencies}
## Usage
${data.usage}
## Contributions
${data.contributors}
## Tests
${data.test}
## Questions 
Please send any questions to;
${[data.name], [data.email]}

`;
}

module.exports = generateMarkdown;