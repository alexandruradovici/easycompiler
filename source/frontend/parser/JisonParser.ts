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