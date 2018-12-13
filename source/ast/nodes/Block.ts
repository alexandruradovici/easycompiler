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


import { NodeID, ParentNode } from '@easycompiler/util/Node';
import { Node } from "@easycompiler/util/Node";
import { i32, u32 } from '@easycompiler/util/types';

export class Block extends Node implements ParentNode
{
	protected readonly NODE_ID: NodeID = NodeID.BLOCK;

	public readonly children: Node[] = [];

	addChild (node: Node): void
	{
		node.parent = this;
		this.children.push (node);
		// TODO should throw or just silently remove element from parent
	}

	getChildPosition (node: Node): i32
	{
		for (let pos in this.children)
		{
			if (this.children[pos] === node) return parseInt (pos);
		}
		return -1;
	}

	_removeChild (node: Node | u32): void
	{
		let pos; 
		if (node instanceof Node)
		{
			pos = this.getChildPosition (node);
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

	isEmpty (): boolean
	{
		return this.children.length === 0;
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.children = [];
		for (let index in this.children)
		{
			json.children.push (this.children[index].toJSON());
		}
		return json;
	}
}