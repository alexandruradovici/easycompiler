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
import { ParentNode, NodeID } from '@easycompiler/util';
import { AstError } from '../errors';
import { IAst, Ast } from "./Ast";

interface iTypeCast{
	target: IAst,
	type: Type,
}

/** 
     * Ast Node corresponding to a type cast in code
     * 
     * @param _target - The variable that will have the new type
	 * @param type - The new type
*/
export class TypeCast extends Expression implements iTypeCast, ParentNode
{
	static ID: NodeID = "typeCast";
    public nodeId: NodeID = TypeCast.ID;
	public type: Type;
	constructor (target: Ast, type: Type)
	{
		super ();
		this.target=target;
		this.type=type;
	}

	get target (): Ast
	{
		return this.target;
	}

	set target (newTarget: Ast)
	{
		newTarget.parent = this;
		const oldTarget = this.target;
		this.target = newTarget;
		oldTarget.removeFromParent ();
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Ast): void
	{
		if (node === this.target)
		{
			throw new AstError ('You can not remove the target from the TypeCast node');
		}
	}

	public toJSON(): string {
        const json: iTypeCast = {
            target: this.target.asInterface(),
            type: this.type,
            ...super.asInterface()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}