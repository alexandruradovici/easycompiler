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
import { IAst, Ast } from './Ast';

interface iLabel extends IAst{
	name: string
}

/** 
     * Ast Node corresponding to a label
     * 
     * @param name
*/
export class Label extends Ast implements iLabel
{
	static ID: NodeID = "label";
    public nodeId: NodeID = Label.ID;
	public name:string;
	constructor (name: string)
	{
		super ();
		this.name=name;
	}

    public asInterface(): iLabel {
        const json: iLabel = {
            ...super.asInterface(),
            name: this.name,
        };
        // console.log(json);
       return json;
    }

	public toJSON(): string {
        return JSON.stringify(this.asInterface());
    }
    public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}