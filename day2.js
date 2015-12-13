const chalk = require('chalk');

const fs = require('fs');
var boxDimensions = [];
fs.readFile('day2/input.txt', 'utf8', (error, data) => {
  boxDimensions = data.split('\n');
  var  total = boxDimensions.reduce((previousValue, currentValue) => {
    if(!currentValue) {
      return previousValue;
    }
    const l = currentValue.split('x')[0];
    const w = currentValue.split('x')[1];
    const h = currentValue.split('x')[2];
    result = previousValue + 2*(l*w + l*h + h*w) + Math.min(l*w, l*h, w*h);
    return result;
  }, 0);

  console.log(chalk.green(`challenge 1: ${total}`));
});

