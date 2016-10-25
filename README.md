Merge 2 documents into a new document.

# Node.js Usage

install
```
npm install mergeyaml --save
```

one.yml
```
1: hello
4:
    4.1: jhon
    4.2: doe
```

two.yml
```
2: world
4:
    4.1: jhon
    4.2: lenon
    4.3: from two

```

three.yml
```
3: !
4: 
    4.1: jhon
    4.2: lennon
    4.3: from three

```

example.js
```
'use strict';
var fs = require('fs');
var mergeyaml = require('mergeyaml');

var one = fs.readFileSync(__dirname + '/one.yml', 'utf8');
var two = fs.readFileSync(__dirname + '/two.yml', 'utf8');
var three = fs.readFileSync(__dirname + '/three.yml', 'utf8');

console.log(mergeyaml(one, two, three));
// or
console.log(mergeyaml([one, two, three]));
// ->
/*
1: hello
2: world
3: !
4: 
    4.1: jhon
    4.2: doe
    4.3: from two 
*/
```

# Terminal Usage
 ```
 npm install -g mergeyaml
 ```
 ```
 mergeyaml $(cat one.yml) $(cat two.yml) $(cat three.yml)
# ->
#
# 1: hello
# 2: world
# 3: !
# 4: 
#     4.1: jhon
#     4.2: doe
#     4.3: from two 
 
 ```