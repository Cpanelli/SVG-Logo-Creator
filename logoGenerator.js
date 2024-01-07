const inquirer = require("inquirer");
const svg2 = require("svg-builder");
const fs = require("fs");

async function generateLogo() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to three characters):",
      validate: function (input) {
        return input.length <= 3 || "Please enter up to three characters.";
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter color for the shape (keyword or hexadecimal):",
    },
  ]);

  const svgMarkup = generateSVG(
    answers.text,
    answers.shape,
    answers.shapeColor
  );
  saveSVGToFile(svgMarkup);
}

function generateSVG(text, shape, shapeColor) {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white">${text}</text>
    </svg>
  `;

  return svgMarkup;
}

function saveSVGToFile(svgMarkup) {
  fs.writeFileSync("logo.svg", svgMarkup);
  console.log("Generated logo.svg");
}

module.exports = { generateLogo };
