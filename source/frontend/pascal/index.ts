import 'module-alias/register';

import { parser } from './pascal.js';
import { ParseTree } from '@parsetree/nodes';

let parseTree:ParseTree = parser.parse ('program test; begin end.');

console.log ('Parse Tree');
console.log (JSON.stringify (parseTree.toJSON (), null, 3));

let flattenedParseTree = parseTree.flattenTree ();
console.log ('Flattened Parse Tree');
console.log (JSON.stringify (flattenedParseTree.toJSON (), null, 3));