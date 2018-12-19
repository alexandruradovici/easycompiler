import 'module-alias/register';

import { ParseTree } from '@parsetree/nodes';
import { JisonParser } from '@easycompiler/frontend/parser/JisonParser.js';

let jisonParser: JisonParser = new JisonParser ('@languages/basic/basic.js');

let parseTree:ParseTree = jisonParser.parseString ('LET S = 0\nINPUT V\n');


console.log ('Parse Tree');
console.log (JSON.stringify (parseTree.toJSON (), null, 3));

let flattenedParseTree = parseTree.flattenTree ();
console.log ('Flattened Parse Tree');
console.log (JSON.stringify (flattenedParseTree.toJSON (), null, 3));