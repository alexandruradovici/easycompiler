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
import { Identifier } from './Identifier';
import { INode, NodeID } from '@easycompiler/util';
import { Value } from './Value';
 
export interface iConstant extends INode{
	name: string;
	type: Type|JSON;
	value: Value|JSON;
}

/** 
     * AST Node corresponding to a constant
	 * @param name
	 * @param type
	 * @param value
*/
export class Constant extends Identifier implements iConstant
{
	static ID: NodeID = "constant";
    public nodeId: NodeID = Constant.ID;
	public value: Value;
	constructor (name: string, type: Type, value: Value)
	{
		super (name, type);
		this.value=value;
	}

	public toJSON(): string {
        const json: iConstant = {
			name: this.name,
			type: this.type.stringToJSON(),
            value: this.value.stringToJSON(),
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}

