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

import { NodeID, ParentNode } from '@easycompiler/util';
import { Block } from './Block';
import { ASTError } from '../errors';
import { AST } from './AST';
 

export class Module extends AST implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.MODULE;

	constructor (public name: string, private _block: Block)
	{
		super ();
		_block.parent = this;
	}

	get block (): Block
	{
		return this._block;
	}

	set block (newBlock: Block)
	{
		newBlock.parent = this;
		this._block = newBlock;
		newBlock.removeFromParent ();
	}

	_removeChild (expression: AST): void
	{
		if (expression === this._block)
		{
			throw new ASTError ('You can not remove the block from the Module node');
		}
	}

	toJSON ():any
	{
		const json = super.toJSON ();
		json.id = this.NODE_ID;
		json.name = this.name;
		json.block = this._block.toJSON ();
		return json;
	}
}