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

import { ParentNode, NodeID } from '@easycompiler/util';
import { Block } from './Block';
import { ASTError } from '../errors';
import { AST } from './AST';

interface iLoop{
	header: Block|JSON,
	body: Block|JSON,
	end: Block|JSON,
}

/** 
     * AST Node corresponding to a loop
     * 
     * @param _header - The definition of the loop
	 * @param _body - Block of code contained in the loop
	 * @param _end - The end of the loop
*/
export class Loop extends AST implements iLoop,ParentNode
{
	static ID: NodeID = "loop";
    public nodeId: NodeID = Loop.ID;
	constructor (header:Block, body: Block, end: Block)
	{
		super ();
		this.header=header;
		this.body=body;
		this.end=end;
	}

	get header (): Block
	{
		return this.header;
	}

	set header (newHeader: Block)
	{
		this.header = newHeader;
	}

	get body (): Block
	{
		return this.body;
	}

	set body (newBody: Block)
	{
		this.body = newBody;
	}

	get end (): Block
	{
		return this.end;
	}

	set end (newEnd: Block)
	{
		this.end = newEnd;
	}

	/** 
     * Removes AST Node
     * 
     * @param node - AST Node to be removed
	*/
	_removeChild (node: AST): void
	{
		if (node === this.header)
		{
			throw new ASTError ('You can not remove the header block from the loop definition');
		}
		else
		if (node === this.body)
		{
			throw new ASTError ('You can not remove the body block from the loop definition');
		}
		else
		if (node === this.end)
		{
			throw new ASTError ('You can not remove the end block from the loop definition');
		}
	}

	/** 
     * Removes AST Node
     * 
     * @param node - AST Node to be removed
	*/
	public toJSON(): string {
        const json: iLoop = {
            header: this.header.stringToJSON(),
            body: this.body.stringToJSON(),
			end:this.end.stringToJSON(),
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}