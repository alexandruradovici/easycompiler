/**
 * @module util
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

import { u32 } from './types';
import { Tags, NodeTag, NodeTagValue } from './Tags';

export enum NodeID {
	NODE="Node",

	// AST Nodes
	AST="AST",
	ARRAY_ELEMENT="ArrayElement",
	BLOCK="Block",
	BRANCH="Branch",
	CONSTANT="Constant",
	DEFINITION="Definition",
	EXPRESSION="Expression",
	FUNCTION_CALL="FunctionCall",
	FUNCTION_DEFINITION="FunctionDefinition",
	IDENTIFIER="Identifier",
	LOOP="Loop",
	STRUCT_ELEMENT="StructElement",
	TYPE_CAST="TypeCast",
	VARIABLE_DEFINITION="VariableDefinition",
	BINARY_EXPRESSION="BinaryExpression",
	UNARY_EXPRESSION="UnaryExpression",
	RETURN="Return",
	MODULE="Module",
	JUMP="Jump",
	LABEL="Label",
	TYPE_DEFINITION="TypeDefinition",
	VALUE="Value",

	// ParseTree Nodes
	RULE="Rule",
	TOKEN="Token",

	// Other
	OTHER="Other"
}

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
		if(this.tags[label]) 
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	removeFromParent (): void
	{
		if (this._parent)
		{
			this._parent._removeChild (this)
			this._parent = undefined;
		}
	}

	toJSON (): string
	{
		type json_type={
			version: u32,
			node?: NodeID,
			tags?: {
				[key: string]: NodeTagValue,
			}
		}
		
		const json:json_type={
			node: this.NODE_ID,
			version: this.VERSION,
			tags: {}
		};
		if(json.tags){
			for (const tag in this.tags)
			{
				json.tags[tag]=this.tags[tag];
			}
		}
		//json.tags= this.tags;
		return JSON.stringify(json);
	}
	parseJSON():JSON{
		return JSON.parse(this.toJSON());
	}
}

