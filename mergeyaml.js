"use strict";
var YAML = require("yamljs");
var mergejson = require("mergejson");

function mergeyaml(){
    var args = arguments;
    if(args[0] instanceof Array){
        args = args[0];
    }
    for(var i = 0; i < args.length; i++){
        args[i] = YAML.parse(args[i]);
    }
    return YAML.stringify(mergejson(args));
}

var mainFile = process.argv[1].split('/');
mainFile = mainFile[mainFile.length - 1];
if(mainFile === "mergeyaml.js"){
    var args = process.argv.slice(2);
    console.log(mergeyaml(args));
}

module.export = mergeyaml;