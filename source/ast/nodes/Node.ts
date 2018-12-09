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

import { i32, u32, i64, u64, f32, f64 } from 'util/types';

type NodeTagValue = string | i32 | u32 | f32 | f64;

export enum NodeID {
	NODE = 0,
	ARRAY_ELEMENT = 1,
	BLOCK = 2,
	BRANCH = 3,
	CONSTANT = 4,
	DEFINITION = 5,
	EXPRESSION = 6,
	FUNCTION_CALL = 7,
	FUNCTION_DEFINITION = 8,
	IDENTIFIER = 9,
	LOOP = 10,
	STRUCT_ELEMENT = 11,
	TYPE_CAST = 12,
	VARIABLE_DEFINITION = 13,
	BINARY_EXPRESSION = 14,
	UNARY_EXPRESSION = 15,
	RETURN = 16,
	MODULE = 17,
	JUMP = 18,
	LABEL = 19,
	TYPE_DEFINITION = 20
};

export class NodeTag
{
	[label:string]:NodeTagValue 
}

export interface ParentNode
{
	_removeChild (child:Node): void;
}

export abstract class Node
{
	/**
	 * class version
	 */
	protected readonly VERSION: u32 = 1;

	/**
	 * class node id, used for serializing and deserializing
	 */
	protected readonly NODE_ID: NodeID = NodeID.NODE;

	public readonly tags: NodeTag = {};
	private _parent?: ParentNode = undefined;

	get parent (): ParentNode | undefined
	{
		return this._parent;
	}

	set parent (parent: ParentNode | undefined)
	{
		this.removeFromParent ();
		this._parent = parent;
	}

	hasTag (label: string): boolean
	{
		return this.tags.prototype.hasOwnProperty (label);
	}

	removeFromParent (): void
	{
		if (this._parent)
		{
			this._parent._removeChild (this)
			this._parent = undefined;
		}
	}

	toJSON (): any
	{
		let json: any = {
			node: this.NODE_ID,
			version: this.VERSION,
			tags: {}
		};
		for (let tag in this.tags)
		{
			json.tags[tag] = this.tags[tag];
		}
		return json;
	}
}

