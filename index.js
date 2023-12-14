import('inquirer').then((inquirerModule) => {
    const inquirer = inquirerModule.default;
    const fs = require('fs');
    const { Circle, Triangle, Square } = require('./lib/shapes');
  
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
          default:
            console.error('Invalid shape type selected');
            return;
        }
  
        const svgContent = shape.render(answers.text, answers.textColor);
        fs.writeFile('logo.svg', svgContent, 'utf8', (err) => {
          if (err) {
            console.error('Error writing to file:', err);
          } else {
            console.log('Generated logo.svg');
          }
        });
      });
    }
  
    promptUser();
  }).catch((error) => {
    console.error('Error importing inquirer:', error);
  });
  