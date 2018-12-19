import { ParseTree } from '@parsetree/nodes';
import { ParserContext } from '@parsetree/context';
import { SymbolTable } from '@easycompiler/ast/symbol';

export class Jison
{
	parse (text:string, ...fn:Function[]):ParseTree;
}
