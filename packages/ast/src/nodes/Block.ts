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
import { AST } from './AST';

interface iBlock{
	readonly children: AST[]|string[];
	readonly name: string;
}

/** 
     * AST Node corresponding to a block of code
     * 
	 * @param name
     * @param children - AST Nodes that are contained
	 * 
*/
export class Block extends AST implements iBlock,ParentNode
{
	static ID: NodeID = "block";
    public nodeId: NodeID = Block.ID;

	public readonly children: AST[] = [];
	public readonly name: string;
	constructor(name: string){
		super();
		this.name=name;
	}

	/** 
     * Adds child AST node to the block 
     * 
     * @param node - AST node to be added
	*/
	addChild (node: AST): void
	{
		node.parent = this;
		this.children.push (node);
		// TODO should throw or just silently remove element from parent
	}

	/** 
     * Gets position of child AST node
     * 
     * @param node - AST Node to be verified
	 * @returns position of the AST node if it exists, otherwise -1
	*/
	getChildPosition (node: AST): i32
	{
		for (const pos in this.children)
		{
			if (this.children[pos] === node) return parseInt (pos);
		}
		return -1;
	}
	
	/** 
     * Removes AST Node
     * 
     * @param node - AST Node to be removed
	*/
	_removeChild (node: Node | u32): void
	{
		let pos; 
		if (node instanceof AST)
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
     * Checks if AST Block is empty 
     * 
	 * @returns true if the AST Block is empty, otherwise false
	*/
	isEmpty (): boolean
	{
		return this.children.length === 0;
	}

	public toJSON(): string {
		let json_children=[];
		for(const child of this.children){
			json_children.push(child.stringToJSON())
		}
        const json: iBlock = {
            name: this.name,
            children: this.children,
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}