"use strict";
var YAML = require("yaml");
var mergejson = require("mergejson");

function mergeyaml(){
    var args = arguments;
    if(args[0] instanceof Array){
        args = args[0];
    }
    for(var i = 0; i < args.length; i++){
        args[i] = YAML.eval(args[i]);
    }
    return mergejson(args);
}

module.export = mergeyaml;