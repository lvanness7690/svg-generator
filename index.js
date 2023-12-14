const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

function promptUser() {
  const questions = [
    // Add your questions here
  ];

  inquirer.prompt(questions).then((answers) => {
    // Process the answers here
  });
}

promptUser();
