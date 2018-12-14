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

import { u32 } from '@easycompiler/util/types';
import { Tags, NodeTag } from './Tags';

export enum NodeID {
	// AST Nodes
	NODE,
	ARRAY_ELEMENT,
	BLOCK,
	BRANCH,
	CONSTANT,
	DEFINITION,
	EXPRESSION,
	FUNCTION_CALL,
	FUNCTION_DEFINITION,
	IDENTIFIER,
	LOOP,
	STRUCT_ELEMENT,
	TYPE_CAST,
	VARIABLE_DEFINITION,
	BINARY_EXPRESSION,
	UNARY_EXPRESSION,
	RETURN,
	MODULE,
	JUMP,
	LABEL,
	TYPE_DEFINITION,

	// Parsetree Nodes
	RULE,
	TOKEN,

	// Other
	OTHER
};

export interface ParentNode
{
	_removeChild (child:Node): void;
}

export abstract class Node implements Tags
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

