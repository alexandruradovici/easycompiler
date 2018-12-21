/**
 * @module frontend/parser
 */

/**
 * Copyright 2018 Alexandru RADOVICI
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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