"use strict";
const chalk = require('chalk');

const fs = require('fs');
let boxDimensions = [];

/**
 * First challenge
 */
fs.readFile('day2/input.txt', 'utf8', (error, data) => {
  boxDimensions = data.split('\n');
  let  total = boxDimensions.reduce((previousValue, currentValue) => {
    if(!currentValue) {
      return previousValue;
    }
    const l = Number(currentValue.split('x')[0]);
    const w = Number(currentValue.split('x')[1]);
    const h = Number(currentValue.split('x')[2]);
    return previousValue + 2*(l*w + l*h + h*w) + Math.min(l*w, l*h, w*h);
  }, 0);

  console.log(chalk.green(`challenge 1: ${total}`));
});

/**
 * 2nd challenge
 */
fs.readFile('day2/input.txt', 'utf8', (error, data) => {
  boxDimensions = data.split('\n');
  let  total = boxDimensions.reduce((previousValue, currentValue) => {
    if(!currentValue) {
      return previousValue;
    }
    const l = Number(currentValue.split('x')[0]),
      w = Number(currentValue.split('x')[1]),
      h = Number(currentValue.split('x')[2]),
      volume = l*h*w,
      smallestPerimeter = Math.min(2*(l+w), 2*(l+h), 2*(w+h));
    return previousValue + volume + smallestPerimeter;
  }, 0);
  console.log(chalk.green(`challenge 2: ${total}`));
});
