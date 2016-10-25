"use strict";

var YAML = require("yamljs");
var mergejson = require("mergejson");

function mergeyaml(){
    var args = [];
    if(arguments[0] instanceof Array){
        args = arguments[0];
    }else{
        for (var index in arguments){
            if(arguments.hasOwnProperty(index)){
                args[index] = arguments[index];
            }
        }
    }
    for(var i = 0; i < args.length; i++){
        args[i] = YAML.parse(args[i]);
    }
    return YAML.stringify(mergejson(args));
}

module.exports = mergeyaml;
