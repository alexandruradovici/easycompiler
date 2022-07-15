import {  CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { pascalLexer } from './pascalLexer';
import { pascalParser, ProgramContext } from './pascalParser';
 
import * as fs from 'fs';

//imports don't work
// import * as AST from '@easycompiler/ast';
// import { IFrontEnd } from '@easycompiler/frontend';

let input: string = fs.readFileSync('./code-pascal.txt').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: pascalLexer = new pascalLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: pascalParser = new pascalParser(tokenStream);
 
let tree:ProgramContext = parser.program();
console.log(tree); //works

// class Frontend implements IFrontEnd{
//     parse(input: string){
//         //visitor?
//         visitFunctionCall(ctx: ProcedureOrFunctionDeclarationContext): AST.AST{
//             return new AST.FunctionCall(ctx. )
//         }
//     }
// }

