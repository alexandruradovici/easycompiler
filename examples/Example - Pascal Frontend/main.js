"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const pascalLexer_1 = require("./pascalLexer");
const pascalParser_1 = require("./pascalParser");
const fs = __importStar(require("fs"));
//imports don't work
// import * as AST from '@easycompiler/ast';
// import { IFrontEnd } from '@easycompiler/frontend';
// Create the lexer and parser
let input = fs.readFileSync('./code-pascal.txt').toString();
let inputStream = antlr4ts_1.CharStreams.fromString(input);
let lexer = new pascalLexer_1.pascalLexer(inputStream);
let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
let parser = new pascalParser_1.pascalParser(tokenStream);
// Parse the input, where `program` is whatever entry point you defined
let tree = parser.program();
console.log(tree);
// class Frontend implements IFrontEnd{
//     parse(input: string){
//         //visitor?
//         visitFunctionCall(): AST.AST{
//             return new AST.FunctionCall(parser.)
//         }
//     }
// }
