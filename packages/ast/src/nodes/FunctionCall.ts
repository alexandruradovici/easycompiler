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
import { Node } from "@easycompiler/util";
import { Expression } from './Expression';
import { u32 } from '@easycompiler/util';
import { i32 } from '@easycompiler/util';
import { ASTError } from '../errors';
import { Block } from './Block';
 

export class FunctionCall extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.FUNCTION_CALL;

	constructor (private _fn: Expression, public readonly args: Block)
	{
		super ();
		//_fn.parent = this;
		// for (const expression of args)
		// {
		// 	expression.parent = this;
		// }
	}

	get fn (): Expression
	{
		return this._fn;
	}


	// set fn (newFn: Expression)
	// {
	// 	newFn.parent = this;
	// 	const oldFn = this._fn;
	// 	this._fn = newFn;
	// 	oldFn.removeFromParent ();
	// }

	getType ()
	{
		return this._fn.type;
	}

	_removeChild (expression: Node | u32): void
	{
		if (expression === this._fn)
		{
			throw new ASTError ('You can not remove the function expression from the function call');
		}
		// else
		// {
		// 	let pos; 
		// 	if (expression instanceof Expression)
		// 	{
		// 		pos = this.getArgPosition (expression);
		// 	}
		// 	else
		// 	if (expression instanceof Node)
		// 	{
		// 		// this is not a child here
		// 		pos = -1;
		// 	}
		// 	else
		// 	{
		// 		pos = expression;
		// 	}
		// 	if (pos >= 0)
		// 	{
		// 		this.args.splice (pos, 1);
		// 	}
		// }
	}

	// getArgPosition (expression: Expression): i32
	// {
	// 	for (const pos in this.args)
	// 	{
	// 		if (this.args[pos] === expression) return parseInt (pos);
	// 	}
	// 	return -1;
	// }

	toJSON ():string 
	{
		const json = JSON.parse(super.toJSON());
		json.fn = this._fn.parseJSON();
		json.args = [];
		for (const index in this.args)
		{
			json.args.push (this.args.parseJSON());
		}
		return JSON.stringify(json);
	}
}