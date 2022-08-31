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
import { AstError } from '../errors';
import { Identifier } from './Identifier';
import { Ast, IAst } from './Ast';
import { ParameterList } from './ParameterList';
 
export interface IFunctionCall extends IAst{
	fn: Identifier;
	args?: IAst;
}

/** 
     * Ast Node corresponding to a function call
     * 
     * @param _fn - name of the function
	 * @param type - type of return
	 * @param args - array of arguments
*/
export class FunctionCall extends Expression implements ParentNode, IFunctionCall
{	
	static ID: NodeID = "functionCall";
    public nodeId: NodeID = FunctionCall.ID;
	public fn: Identifier;
	public args?: ParameterList;
	constructor (fn: Identifier, args?: ParameterList)
	{
		super ();
		this.fn=fn;
		if(args){
			this.args=args;
		}
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (expression: Node | string | u32): void
	{
		if (expression === this.fn)
		{
			throw new AstError ('You can not remove the function expression from the function call');
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
				if(this.args) {
					if(this.args.parameters){
						this.args.parameters.splice (pos as u32, 1);
					}
				}
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
		if(this.args instanceof ParameterList)
		if(this.args.parameters)
			for (const pos in this.args.parameters)
			{
					if (this.args.parameters[pos] === arg) return parseInt (pos);
			}
		return -1;
	}

	public asInterface():IFunctionCall{
		// let json_args=[];
		// if(this.args instanceof ParameterList)
		// 	if(this.args.parameters){
		// 		for (const index in this.args.parameters)
		// 		{
		// 			json_args.push (this.args.parameters[index].asInterface());
		// 		}
		// 	}
        const json: IFunctionCall = { 
			...super.asInterface(),
            fn: this.fn,
			args: this.args,
           
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