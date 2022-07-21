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



import { Type } from '../types';
import { Expression } from './Expression';
import { NodeID, ParentNode } from '@easycompiler/util';
import { Node } from "@easycompiler/util";
import { ASTError } from '../errors';
 

export class ArrayElement extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.ARRAY_ELEMENT;

	constructor (private _expression: Expression, public _index:Expression)
	{
		super ();
		this._expression.parent = this;
		this._index.parent = this;
	}

	get expression ():Expression
	{
		return this._expression;
	}

	set expression (expression: Expression)
	{
		expression.parent = this;
		const oldExpression = this._expression;
		this._expression = expression;
		oldExpression.removeFromParent ();
		
	}

	get index ():Expression
	{
		return this._index;
	}

	set index (index: Expression)
	{
		index.parent = this;
		const oldIndex = this._index;
		this._index = index;
		oldIndex.removeFromParent ();
		
	}

	getType ():Type
	{
		if(this.expression.type){
			return this.expression.type;
		}
		return new Type("unknown");
	}

	_removeChild (node: Node): void
	{
		if (node === this.expression)
		{
			throw new ASTError ('You can not remove the expression from an ArrayElement');
		}
	}

	toJSON ():string
	{
		const json = JSON.parse(super.toJSON());
		json.expression = this._expression.toJSON ();
		json.index = this._index;
		return JSON.stringify(json);
	}
}