Merge 2 documents into a new document.

# Node.js Usage

install
```
npm install mergeyaml --save
```

one.yaml
```
1: hello
4:
    4.1: jhon
    4.2: doe
```

two.yaml
```
2: world
4:
    4.1: jhon
    4.2: lenon
    4.3: from two

```

three.yaml
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

var one = fs.readFileSync(__dirname + '/one', 'utf8');
var two = fs.readFileSync(__dirname + '/two', 'utf8');
var three = fs.readFileSync(__dirname + '/three', 'utf8');

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