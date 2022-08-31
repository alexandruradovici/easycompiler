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
import { i32 } from '@easycompiler/util';
import { Type } from '../types';
import { Block } from './Block';
import { Definition } from './Definition';
import { VariableDefinition } from './VariableDefinition';
import { u32 } from '@easycompiler/util';
import { AstError } from '../errors';
import { IAst } from './Ast';
import { IFunctionCall } from './FunctionCall';
 
interface IFunctionDefinition extends IAst{
	name: string, 
	block: Block,
	returnType: Type,
	parameters?: IAst[],
}

/** 
     * Ast Node corresponding to a function definition
     * 
     * @param name - Name of the function 
	 * @param _parameters - Parameters deckaration
	 * @param _block - Block of code contained in the function
	 * @param returnType - Type of function return 
*/
export class FunctionDefinition extends Definition implements ParentNode, IFunctionDefinition
{
	static ID: NodeID = "functionDefinition";
    public nodeId: NodeID = FunctionDefinition.ID;
	public name: string;
	public returnType: Type;
	public parameters?:VariableDefinition[];

	constructor (name: string, block: Block, returnType: Type, parameters?: VariableDefinition[])
	{
		super ();
		this.name=name;
		this.block=block;
		this.returnType=returnType;
		if(parameters){
			this.parameters=parameters;
		}
	}

	get block (): Block
	{
		return this.block;
	}

	set block (newBlock: Block)
	{
		this.block = newBlock;
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (variableDefinition: Node | u32): void
	{
		if (variableDefinition === this.block)
		{
			throw new AstError ('You can not remove the block from the function definition');
		}
		else
		{
			let pos; 
			if (variableDefinition instanceof VariableDefinition)
			{
				pos = this.getParameterPosition (variableDefinition);
			}
			else
			if (variableDefinition instanceof Node)
			{
				pos = -1;
			}
			else
			{
				pos = variableDefinition;
			}
			if (pos >= 0)
			{
				if(this.parameters){
					this.parameters.splice (pos, 1);
				}
			}
		}
	}

	/** 
     * Gets the position of the given parameter
     * 
     * @param arg - Parameter to be verified
	 * @returns the position of the parameter
	*/
	public getParameterPosition (param: VariableDefinition): i32
	{
		if(this.parameters){
			for (const pos in this.parameters)
			{
				if (this.parameters[pos] === param) 
					return parseInt (pos);
			}
		}	
		return -1;
	}

	public asInterface():IFunctionDefinition{
		let json_parameters=[];
		if(this.parameters){
			for (const index in this.parameters)
			{
				json_parameters.push (this.parameters[index].asInterface());
			}
		}
        const json: IFunctionDefinition = {
			...super.asInterface(),
            name: this.name,
			block: this.block,
			returnType: this.returnType,
            parameters: json_parameters,
            
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