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
import { Type } from 'src/types';
import { Identifier, iIdentifier } from './Identifier';
 
export interface iFunctionCall{
	fn: Identifier|JSON;
	type: Type|JSON;
	args?:Expression[]|JSON[];
}

/** 
     * AST Node corresponding to a function call
     * 
     * @param _fn - name of the function
	 * @param type - type of return
	 * @param args - array of arguments
*/
export class FunctionCall extends Expression implements ParentNode, iFunctionCall
{	
	static ID: NodeID = "functionCall";
    public nodeId: NodeID = FunctionCall.ID;
	public type: Type;
	public fn: Identifier;
	public args?: Expression[];
	constructor (fn: Identifier, type: Type, args?: Expression[])
	{
		super ();
		this.fn=fn;
		this.type=type;
		if(args){
			this.args=args;
		}
	}

	

	getType ()
	{
		return this.type;
	}

	/** 
     * Removes AST Node
     * 
     * @param node - AST Node to be removed
	*/
	_removeChild (expression: Node | string | u32): void
	{
		if (expression === this.fn)
		{
			throw new ASTError ('You can not remove the function expression from the function call');
		}
		else
		{
			let pos; 
			if (expression instanceof Expression)
			{
				pos = this.getArgPosition (expression);
			}
			else 
			{
				if (expression instanceof Node)
				{
					// this is not a child here
					pos = -1;
				}
				else
				{
					pos = expression;
				}
			}
			if (pos >= 0)
			{
				if(this.args) this.args.splice (pos as u32, 1);
			}
		}
	}

	/** 
     * Gets the position of the given argument
     * 
     * @param arg - Argument to be verified
	 * @returns the position of the argument
	*/
	getArgPosition (arg: Expression): i32
	{
		if(this.args instanceof Expression)
			for (const pos in this.args)
			{
					if (this.args[pos] === arg) return parseInt (pos);
			}
		return -1;
	}

	public toJSON(): string {
		let json_args=[];
		if(this.args instanceof Expression)
			for (const index in this.args)
			{
				json_args.push (this.args[index].stringToJSON());
			}
        const json: iFunctionCall = {
            fn: this.fn.stringToJSON(),
            type: this.type.stringToJSON(),
			args: json_args,
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}