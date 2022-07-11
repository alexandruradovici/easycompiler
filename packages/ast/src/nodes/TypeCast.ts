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

import { Expression } from "../nodes/Expression";
import { Type } from "../types";
import { ParentNode, NodeID } from '../util/Node';
import { ASTError } from '../errors';
import { AST } from "./AST";

export class TypeCase extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.TYPE_CAST;

	constructor (private _target: AST, public type: Type)
	{
		super ();
		_target.parent = this;
	}

	get target (): AST
	{
		return this._target;
	}

	set target (newTarget: AST)
	{
		newTarget.parent = this;
		let oldTarget = this._target;
		this._target = newTarget;
		oldTarget.removeFromParent ();
	}

	_removeChild (expression: AST): void
	{
		if (expression === this._target)
		{
			throw new ASTError ('You can not remove the target from the TypeCast node');
		}
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.target = this._target.toJSON ();
		return json;
	}
}