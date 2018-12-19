import 'module-alias/register';

import { BaseParser } from "./BaseParser";
import { Jison } from './Jison';
import { ParseTree } from "@parsetree/nodes";

export class JisonParser extends BaseParser
{
	private jison:Jison;

	constructor (jisonFile: string)
	{
		super ();
		this.jison = require (jisonFile);
	}

	parseString (text:string, flush:boolean=true):ParseTree
	{
		if (flush) this.flushContext ();
		return this.jison.parse (text, this.symbolTable.SYM.bind(this.symbolTable), this.symbolTable.SYM_TYPE.bind(this.symbolTable), this.context.SF.bind (this.context), this.context.UF.bind(this.context), this.context.IS.bind(this.context), this.context.F.bind(this.context), this.context.RF.bind(this.context));
	}
}