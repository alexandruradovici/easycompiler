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

 
import { NodeID } from '@easycompiler/util';
import { AST } from './AST';

export interface iLabel{
	name: string
}

/** 
     * AST Node corresponding to a label
     * 
     * @param name
*/
export class Label extends AST implements iLabel
{
	static ID: NodeID = "label";
    public nodeId: NodeID = Label.ID;
	public name:string;
	constructor (name: string)
	{
		super ();
		this.name=name;
	}

	public toJSON(): string {
        const json: iLabel = {
            name: this.name,
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
}