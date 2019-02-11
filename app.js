'use strict';

const fs = require('fs');
const csvParse = require('csv-parse/lib/sync'); // requiring sync module

const file = 'input.csv';
let data = fs.readFileSync(file);

let res = csvParse(data);

console.log(res);