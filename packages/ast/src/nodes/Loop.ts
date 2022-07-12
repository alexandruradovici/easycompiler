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
import { Block } from './Block';
import { ASTError } from '../errors';
import { AST } from './AST';
import { iJSON } from '../util/JSON';

export class Loop extends AST implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.LOOP;

	constructor (private _header:Block, private _body: Block, private _end: Block)
	{
		super ();
		_header.parent = this;
	}

	get header (): Block
	{
		return this._header;
	}

	set header (newHeader: Block)
	{
		newHeader.parent = this;
		const oldBlock = this._header;
		this._header = newHeader;
		oldBlock.removeFromParent ();
	}

	get body (): Block
	{
		return this._body;
	}

	set body (newBody: Block)
	{
		newBody.parent = this;
		const oldBody = this._body;
		this._body = newBody;
		oldBody.removeFromParent ();
	}

	get end (): Block
	{
		return this._end;
	}

	set end (newEnd: Block)
	{
		newEnd.parent = this;
		const oldEnd = this._end;
		this._end = newEnd;
		oldEnd.removeFromParent ();
	}

	_removeChild (expression: AST): void
	{
		if (expression === this._header)
		{
			throw new ASTError ('You can not remove the header block from the loop definition');
		}
		else
		if (expression === this._body)
		{
			throw new ASTError ('You can not remove the body block from the loop definition');
		}
		else
		if (expression === this._end)
		{
			throw new ASTError ('You can not remove the end block from the loop definition');
		}
	}

	toJSON ():iJSON 
	{
		const json = super.toJSON ();
		json.header = this._header.toJSON ();
		json.body = this._body.toJSON ();
		json.end = this._end.toJSON ();
		return json;
	}
}