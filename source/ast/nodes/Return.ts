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

import { ParentNode, NodeID } from '@easycompiler/util/Node';
import { Node } from "@easycompiler/util/Node";
import { Expression } from './Expression';
import { Type } from '@easycompiler/ast/types';

export class Return extends Node implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.RETURN;

	constructor (private _expression: Expression | undefined, public type: Type)
	{
		super ();
		if (_expression)
		{
			_expression.parent = this;
		}
	}

	get expression ():Expression | undefined
	{
		return this._expression;
	}

	set expression (expression: Expression | undefined)
	{
		if (this._expression)
		{
			this._expression.removeFromParent ();
		}
		if (expression)
		{
			expression.parent = this;
		}
	}

	_removeChild (node: Node): void
	{
		if (node === this.expression)
		{
			this.expression = undefined;
		}
	}

	toJSON ():any
	{
		let json: any = super.toJSON ();
		if (this.expression) json.expression = this.expression.toJSON ();
		json.type = this.type.toJSON ();
		return json;
	}
}