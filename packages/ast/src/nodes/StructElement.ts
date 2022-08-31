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

import { Type, Struct } from '../types';
import { Expression } from './Expression';
import { Unknown } from '../types';
import { ParentNode, NodeID } from '@easycompiler/util';
import { AstError } from '../errors';
import { Ast, IAst } from './Ast';
import { VariableDefinition } from './VariableDefinition';
 
export interface IStructElement extends IAst{
	name: string,
	struct: VariableDefinition,
}

/** 
     * Ast Node corresponding to a struct element
     * 
     * @param _struct - The definition of the struct element
	 * @param name - The name of the struct element
*/
export class StructElement extends Expression implements IStructElement,ParentNode
{
	static ID: NodeID = "structElement";
    public nodeId: NodeID = StructElement.ID;
	public name:string;
	constructor (name:string, struct: VariableDefinition, )
	{
		super ();
		this.name=name;
		this.struct=struct;
	}

	get struct ():VariableDefinition
	{
		return this.struct;
	}

	set struct (newStruct: VariableDefinition)
	{
		this.struct = newStruct;
	}

	/** 
     * Gets type of the struct element
     * 
     * @returns - The type of the struct element
	*/
	getType ():Type
	{
		if (this.struct.type instanceof Struct)
		{
			const element = this.struct.type.getElement (this.name);
			if (element){
				if(element.type){
					return element.type;
				}
			}
		}
		return new Unknown();
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Ast): void
	{
		if (node === this.struct)
		{
			throw new AstError ('You can not remove the struct from the StructElement node');
		}
	}

	public asInterface(){
		const json: IStructElement = {
			...super.asInterface(),
            name: this.name,
            struct: this.struct,
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