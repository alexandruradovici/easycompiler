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
import { AST } from './AST';

export enum JumpType {
	BREAK = 'break',
	CONTINUE = 'continue',
	JUMP_TO_LABEL = 'label'
}

interface iJump{
	jumpType: JumpType|string;
	name?:string;
}

/** 
     * AST Node corresponding to a jump in code
     * 
     * @param jumpType - Type of jump in the code
	 * @param name
*/
export abstract class Jump extends AST implements iJump
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

	public toJSON(): string {
        const json: iJump = {
            name: this.name,
            jumpType: this.jumpType as string,
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
}