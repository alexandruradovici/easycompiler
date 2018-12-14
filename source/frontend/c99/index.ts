import 'module-alias/register';

import { parser } from './c99.js';
import { ParseTree } from '@parsetree/nodes';

let parseTree:ParseTree = parser.parse ('typedef unsigned int a, *l; int s; unsigned int test(unsigned t, unsigned short s){a*s;}');

console.log ('Parse Tree');
console.log (JSON.stringify (parseTree.toJSON (), null, 3));

let flattenedParseTree = parseTree.flattenTree ();
console.log ('Flattened Parse Tree');
console.log (JSON.stringify (flattenedParseTree.toJSON (), null, 3));