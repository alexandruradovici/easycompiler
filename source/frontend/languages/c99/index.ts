import 'module-alias/register';

import { ParseTree } from '@parsetree/nodes';
import { JisonParser } from '@easycompiler/frontend/parser/JisonParser.js';

let jisonParser: JisonParser = new JisonParser ('@languages/c99/c99.js');

let parseTree:ParseTree = jisonParser.parseString ('typedef unsigned int a, *l; int s; unsigned int test(unsigned t, unsigned short s){a*s;}');

console.log ('Parse Tree');
console.log (JSON.stringify (parseTree.toJSON (), null, 3));

let flattenedParseTree = parseTree.flattenTree ();
console.log ('Flattened Parse Tree');
console.log (JSON.stringify (flattenedParseTree.toJSON (), null, 3));