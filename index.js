// Dynamically import the inquirer module
import('inquirer').then((inquirerModule) => {
    const inquirer = inquirerModule.default;
    const { Circle, Triangle, Square } = require('./lib/shapes'); // This will also need to be imported dynamically if you convert it to ESM
    const fs = require('fs'); // Consider using `fs/promises` module for promise-based interaction
  
    function promptUser() {
      const questions = [
        {
          type: 'input',
          name: 'text',
          message: 'What text would you like on your logo? (up to three characters)',
          validate: (input) => input.length <= 3 && input.length > 0,
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like the text to be? (color keyword or hex code)',
          default: 'white',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like?',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What color would you like the shape to be? (color keyword or hex code)',
          default: 'green',
        },
      ];
  
      inquirer.prompt(questions).then((answers) => {
        let shape;
        switch (answers.shape) {
          case 'circle':
            shape = new Circle(answers.shapeColor);
            break;
          case 'triangle':
            shape = new Triangle(answers.shapeColor);
            break;
          case 'square':
            shape = new Square(answers.shapeColor);
            break;
        }
  
        const svgContent = shape.render(answers.text, answers.textColor);
  
        fs.writeFile('logo.svg', svgContent, (err) => {
          if (err) throw err;
          console.log('Generated logo.svg');
        });
      });
    }
  
    promptUser();
  }).catch(error => console.error('Error importing inquirer:', error));
  