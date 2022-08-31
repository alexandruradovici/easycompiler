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


 
import { Node, NodeID, ParentNode } from '@easycompiler/util';
import { i32, u32 } from '@easycompiler/util';
import { IAst, Ast } from './Ast';

interface IBlock extends IAst {
	readonly children: IAst[];
	readonly name: string;
}

/** 
     * Ast Node corresponding to a block of code
     * 
	 * @param name
     * @param children - Ast Nodes that are contained
	 * 
*/
export class Block extends Ast implements IBlock,ParentNode
{
	static ID: NodeID = "block";
    public nodeId: NodeID = Block.ID;

	public readonly children: Ast[] = [];
	public readonly name: string;
	constructor(name: string){
		super();
		this.name=name;
	}

	/** 
     * Adds child Ast node to the block 
     * 
     * @param node - Ast node to be added
	*/
	addChild (node: Ast): void
	{
		node.parent = this;
		this.children.push (node);
		// TODO should throw or just silently remove element from parent
	}

	/** 
     * Gets position of child Ast node
     * 
     * @param node - Ast Node to be verified
	 * @returns position of the Ast node if it exists, otherwise -1
	*/
	getChildPosition (node: Ast): i32
	{
		for (const pos in this.children)
		{
			if (this.children[pos] === node) return parseInt (pos);
		}
		return -1;
	}
	
	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Node | u32): void
	{
		let pos; 
		if (node instanceof Ast)
		{
			pos = this.getChildPosition (node);
		}
		else
		if (node instanceof Node)
		{
			pos = -1;
		}
		else
		{
			pos = node;
		}
		if (pos >= 0)
		{
			this.children.splice (pos, 1);
		}
	}
	/** 
     * Checks if Ast Block is empty 
     * 
	 * @returns true if the Ast Block is empty, otherwise false
	*/
	isEmpty (): boolean
	{
		return this.children.length === 0;
	}

	public asInterface(): IBlock {
		let json_children=[];
		for(const child of this.children){
			json_children.push(child.asInterface());
		}
        const json: IBlock = {
            ...super.asInterface(),
			name: this.name,
            children: json_children,
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