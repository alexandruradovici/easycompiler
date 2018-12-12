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



import { Node, NodeID, ParentNode } from '@easycompiler/util/Node';
import { Block } from './Block';
import { Expression } from './Expression';
import { ASTError } from '@easycompiler/ast/errors';

export class Branch extends Node implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.BRANCH;

	constructor (private _expression:Expression, private _thenBlock: Block, private _elseBlock: Block)
	{
		super ();
		_expression.parent = this;
		_thenBlock.parent = this;
		_elseBlock.parent = this;
	}

	get expression ():Expression
	{
		return this._expression;
	}

	set expression (newExpression: Expression)
	{
		newExpression.parent = this;
		let oldExpression = this._expression;
		this._expression = newExpression
		oldExpression.removeFromParent ();
	}

	get thenBlock ():Block
	{
		return this._thenBlock;
	}

	set thenBlock (newBlock: Block)
	{
		newBlock.parent = this;
		let oldBlock = this._thenBlock;
		this._thenBlock = newBlock;
		oldBlock.removeFromParent ();
	}

	get elseBlock ():Block
	{
		return this._elseBlock;
	}

	set elseBlock (newBlock: Block)
	{
		newBlock.parent = this;
		let oldBlock = this._elseBlock;
		this._elseBlock = newBlock;
		oldBlock.removeFromParent ();
	}

	_removeChild (node: Node): void
	{
		if (node === this._expression)
		{
			throw new ASTError ('The expression cannot be removed from Branch node');
		}
		else
		if (node === this._thenBlock)
		{
			throw new ASTError ('The then block cannot be removed from Branch node');
		}
		else
		if (node === this._elseBlock)
		{
			throw new ASTError ('The else block cannot be removed from Branch node');
		}
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.expression = this._expression.toJSON ();
		json.thenBlock = this._thenBlock.toJSON ();
		json.elseBlock = this._elseBlock.toJSON ();
		return json;
	}
}