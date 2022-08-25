/**
 * @module ast/nodes
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

import { ParentNode, NodeID } from '@easycompiler/util';
import { Expression } from './Expression';
import { Type } from '../types';
import { AST } from './AST';
 
export interface iReturn{
	expression?: Expression|JSON
}

/** 
     * AST Node corresponding to return code
     * 
     * @param _expression - The expression that is to be returned
*/
export class Return extends AST implements iReturn,ParentNode
{
	static ID: NodeID = "return";
    public nodeId: NodeID = Return.ID;
	constructor (expression?: Expression | undefined)
	{
		super ();
		if (expression)
		{
			this.expression=expression;
		}
	}

	get expression ():Expression | undefined
	{
		return this.expression;
	}

	set expression (expression: Expression | undefined)
	{
		if (this.expression)
		{
			this.expression.removeFromParent ();
		}
		if (expression)
		{
			expression.parent = this;
		}
	}

	/** 
     * Removes AST Node
     * 
     * @param node - AST Node to be removed
	*/
	_removeChild (node: AST): void
	{
		if (node === this.expression)
		{
			this.expression = undefined;
		}
	}

	public toJSON(): string {
		let e;
		if(this.expression){
			e=this.expression.stringToJSON()
		}
        const json: iReturn = {
            expression: e,
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}