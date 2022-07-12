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

import { ParentNode, NodeID } from '../util/Node';
import { Node } from "../util/Node";
import { i32 } from '../util/types';
import { Type } from '../types';
import { Block } from './Block';
import { Definition } from './Definition';
import { VariableDefinition } from './VariableDefinition';
import { u32 } from '../util/types';
import { ASTError } from '../errors';
import { iJSON } from '../util/JSON';

export class FunctionDefinition extends Definition implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.FUNCTION_DEFINITION;

	constructor (public name: string, private _parameters:VariableDefinition[], private _block:Block, public returnType: Type)
	{
		super ();
		for (const parameter of _parameters)
		{
			parameter.parent = this;
		}
		_block.parent = this;
	}

	get parameters (): VariableDefinition[]
	{
		return this._parameters;
	}

	get block (): Block
	{
		return this._block;
	}

	set block (newBlock: Block)
	{
		newBlock.parent = this;
		const oldBlock = this._block;
		this._block = newBlock;
		oldBlock.removeFromParent ();
	}

	_removeChild (variableDefinition: Node | u32): void
	{
		if (variableDefinition === this._block)
		{
			throw new ASTError ('You can not remove the block from the function definition');
		}
		else
		{
			let pos; 
			if (variableDefinition instanceof VariableDefinition)
			{
				pos = this.getParameterPosition (variableDefinition);
			}
			else
			if (variableDefinition instanceof Node)
			{
				// this is not a child here
				pos = -1;
			}
			else
			{
				pos = variableDefinition;
			}
			if (pos >= 0)
			{
				this._parameters.splice (pos, 1);
			}
		}
	}

	getParameterPosition (variableDefinition: VariableDefinition): i32
	{
		for (const pos in this._parameters)
		{
			if (this._parameters[pos] === variableDefinition) return parseInt (pos);
		}
		return -1;
	}

	toJSON ():iJSON 
	{
		const json = super.toJSON ();
		json.name = this.name;
		json.parameters = [];
		for (const index in this._parameters)
		{
			json.parameters.push (this._parameters[index].toJSON());
		}
		json.block = this._block.toJSON ();
		json.returnType = this.returnType.toJSON ();
		return json;
	}
}