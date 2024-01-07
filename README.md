# SVG Logo Creator

## Overview


https://github.com/Cpanelli/SVG-Logo-Creator/assets/133393733/dc60e7c7-28b8-4759-9dbf-18147fc4d4a9


This is a simple Node.js command-line application that allows users to generate SVG logos based on their input. Users can customize the text, shape, text color, and shape color.

## Features

- Accepts user input for text, shape, text color, and shape color.
- Limits text input to three characters.
- Provides a list of shapes to choose from: circle, square, and triangle.
- Supports color input in keyword or hexadecimal format.
- Generates an SVG file named `logo.svg`.
- Prints "Generated logo.svg" in the command line.
- Produces a 300x200 pixel image in the generated SVG file.

## Getting Started


Uploading Screen Recording 2024-01-08 at 6.31.16 AM.mov…


1. Clone the repository:

   git clone https://github.com/your-cpanelli/svg-logo-creator.git
   cd svg-logo-creator

2. Install dependencies:


npm install

Run the application:
npm start

Follow the prompts to input text, select a shape, and specify colors.

After completion, the generated SVG file (logo.svg) will be saved in the project directory.

## Dependencies

- inquirer: For interactive command-line prompts.
- svg-builder: For creating SVG markup.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
