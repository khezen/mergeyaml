#!/usr/bin/env node

var mergeyaml = require("./mergeyaml");
 var args = process.argv.slice(2);
console.log(mergeyaml(args));
