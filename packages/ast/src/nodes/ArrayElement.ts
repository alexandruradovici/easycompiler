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



import { Type, TypeID } from '../types';
import { Expression } from './Expression';
import { ParentNode } from '@easycompiler/util';
import { Node } from "@easycompiler/util";
import { AstError } from '../errors';

import type { NodeID } from '@easycompiler/util';
import { IAst } from './Ast';
 
interface IArrayElement extends IAst{
	expression: Expression,
	index: Expression
}
/** 
     * Ast Node corresponding to an array element
     * 
     * @param _expression - The element of the array
	 * @param _index - The position in the array
*/
export class ArrayElement extends Expression implements IArrayElement,ParentNode
{
	static ID: NodeID = "arrayElement";
    public nodeId: NodeID = ArrayElement.ID;
	constructor (expression: Expression, index:Expression)
	{
		super ();
		this.expression=expression;
		this.index=index;
		this.expression.parent = this;
		this.index.parent = this;
	}

	get expression ():Expression
	{
		return this.expression;
	}

	set expression (expression: Expression)
	{
		expression.parent = this;
		const oldExpression = this.expression;
		this.expression = expression;
		oldExpression.removeFromParent ();
		
	}

	get index ():Expression
	{
		return this.index;
	}

	set index (index: Expression)
	{
		index.parent = this;
		const oldIndex = this.index;
		this.index = index;
		oldIndex.removeFromParent ();
		
	}
	/** 
     * Gets type of the array element
     * 
     * @returns The type of the array element
	*/
	public getType ():Type
	{
		if(this.expression.type){
			return this.expression.type;
		}
		return new Type(TypeID.UNKNOWN);
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Node): void
	{
		if (node === this.expression)
		{
			throw new AstError ('You can not remove the expression from an ArrayElement');
		}
	}

	public asInterface(): IArrayElement{
		const json: IArrayElement = {
            ...super.asInterface(),
			expression: this.expression,
            index: this.index,
        };
		return json;
	}

	public toJSON(): string {
        return JSON.stringify(this.asInterface());
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}