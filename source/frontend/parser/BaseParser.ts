import { ParseTree } from "@parsetree/nodes";
import { readFileSync } from "fs";
import { ParserContext } from "@parsetree/context";
import { SymbolTable } from "@easycompiler/ast/symbol";

export interface Parse
{
	parseString (text: string, flush:boolean): ParseTree;
	parseFile (filename: string, flush:boolean): ParseTree;
}

export abstract class BaseParser implements Parse
{
	public abstract parseString (text: string, flush:boolean): ParseTree;
	public readonly context: ParserContext = new ParserContext ();
	public readonly symbolTable: SymbolTable = new SymbolTable ();

	parseFile (filename: string, flush:boolean = true): ParseTree
	{
		return this.parseString (readFileSync (filename).toString(), flush);
	}
	flushContext ()
	{
		this.symbolTable.flush ();
		this.context.flush ();
	}
}