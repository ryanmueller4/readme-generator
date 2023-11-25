// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "No license") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/license/mit/`
  } else if (license === "IBM") {
    return `https://www.ibm.com/docs/ja/datapower-gateway/7.5.0?topic=SS9H2Y_7.5.0/com.ibm.dp.doc/nodeslicense.htm`
  } else if (license === "Apache") {
    return `https://opensource.org/license/apache-2-0/`
  } else if (license === "Mozilla") {
    return `https://opensource.org/license/mpl-2-0/`
  } else if (license === "No license"){
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === "IBM") {
    return `The IBM license agreement and any applicable information on the web download page for IBM products refers Licensee to this file for details concerning notices applicable to code included in the products listed above ("the Program").    `
  } else if (license === "Apache") {
    return `“License” shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.`
  } else if (license === "Mozilla") {
    return `Means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.`
  } else if (license === "No license") {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  ## Contribution

  ${data.contribution}
  
  ## License

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}  
  
  ## Test

  ${data.test}

  ## Questions

  <ul>
    <li><a href="http://github.com/${data.username}">GitHub Profile</a></li>
    <li><a href="mailto:${data.email}">Email</a></li>
  </ul>

`;
}

module.exports = generateMarkdown;
