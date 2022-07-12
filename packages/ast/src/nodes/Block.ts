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


import { iJSON } from '../util/JSON';
import { Node, NodeID, ParentNode } from '../util/Node';
import { i32, u32 } from '../util/types';
import { AST } from './AST';

export class Block extends AST implements ParentNode
{
	protected readonly NODE_ID: NodeID = NodeID.BLOCK;

	public readonly children: AST[] = [];

	addChild (node: AST): void
	{
		node.parent = this;
		this.children.push (node);
		// TODO should throw or just silently remove element from parent
	}

	getChildPosition (node: AST): i32
	{
		for (const pos in this.children)
		{
			if (this.children[pos] === node) return parseInt (pos);
		}
		return -1;
	}

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

	isEmpty (): boolean
	{
		return this.children.length === 0;
	}

	toJSON ():iJSON
	{
		const json = super.toJSON ();
		json.children = [];
		for (const index in this.children)
		{
			json.children.push (this.children[index].toJSON());
		}
		return json;
	}
}