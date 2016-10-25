'use strict';
var fs = require('fs');
var mergeyaml = require('../mergeyaml');
 
var one = fs.readFileSync(__dirname + '/one.yml', 'utf8');
var two = fs.readFileSync(__dirname + '/two.yml', 'utf8');
var three = fs.readFileSync(__dirname + '/three.yml', 'utf8');

//mergeyaml(one, two, three);
//mergeyaml([one, two, three]);
console.log(mergeyaml(one, two, three));
console.log(mergeyaml([one, two, three]));