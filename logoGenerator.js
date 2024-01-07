const inquirer = require("inquirer");
const svg2 = require('svg-builder');
const fs = require("fs");

async function generateLogo() {

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "color",
      message: "Select a color:",
      choices: ["red", "green", "blue"],
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo:",
    },
  ]);

  
  const svgMarkup = generateSVG(answers.color, answers.shape, answers.text);

  
  saveSVGToFile(svgMarkup);
}

function generateSVG(color, shape, text) {
  
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <rect width="100%" height="100%" fill="${color}" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white">${text}</text>
    </svg>
  `;

  return svgMarkup;
}

function saveSVGToFile(svgMarkup) {
  
  fs.writeFileSync("logo.svg", svgMarkup);
  console.log("Logo saved to logo.svg");
}

module.exports = { generateLogo };
