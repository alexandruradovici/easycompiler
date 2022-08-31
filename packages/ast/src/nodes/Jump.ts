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



import { NodeID } from '../nodes';
import { Ast, IAst } from './Ast';

export enum JumpType {
	BREAK = 'break',
	CONTINUE = 'continue',
	JUMP_TO_LABEL = 'label'
}

interface IJump extends IAst{
	jumpType: JumpType|string;
	name?:string;
}

/** 
     * Ast Node corresponding to a jump in code
     * 
     * @param jumpType - Type of jump in the code
	 * @param name
*/
export abstract class Jump extends Ast implements IJump
{
	static ID: NodeID = "jump";
    public nodeId: NodeID = Jump.ID;
	public jumpType: JumpType | string;
	public name?: string;
	constructor (jumpType: JumpType|string, name?: string)
	{
		super ();
		this.jumpType=jumpType;
		if(name){
			this.name=name;
		}
	}

	public asInterface():IJump{
		const json: IJump = {
			...this.asInterface(),
            name: this.name,
            jumpType: this.jumpType as string,
        };
        return json;
	}

	public toJSON(): string {
        return JSON.stringify(this.asInterface());
    }
}