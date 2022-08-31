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

import { Definition } from "./Definition";
import { Type } from '../types';
import { NodeID } from '@easycompiler/util';
import { IAst } from "./Ast";

interface IVariableDefinition extends IAst{
	name: string,
	type: Type,
}

/** 
     * Ast Node corresponding to a variable definition in code
     * 
     * @param name - The name of the variable
	 * @param type - The type of the variable
*/
export class VariableDefinition extends Definition implements IVariableDefinition
{
	static ID: NodeID = "variableDefinition";
    public nodeId: NodeID = VariableDefinition.ID;
	public name: string;
	public type: Type;
	constructor (name: string, type: Type)
	{
		super ();
		this.name=name;
		this.type=type;
	}

	public asInterface():IVariableDefinition{
		const json: IVariableDefinition = {
			...super.asInterface(),
            name: this.name,
            type: this.type,
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