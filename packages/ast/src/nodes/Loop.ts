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
import { AstError } from '../errors';
import { Ast, IAst } from './Ast';

interface ILoop extends IAst{
	header: Block,
	body: Block,
	end: Block,
}

/** 
     * Ast Node corresponding to a loop
     * 
     * @param _header - The definition of the loop
	 * @param _body - Block of code contained in the loop
	 * @param _end - The end of the loop
*/
export class Loop extends Ast implements ILoop,ParentNode
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
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Ast): void
	{
		if (node === this.header)
		{
			throw new AstError ('You can not remove the header block from the loop definition');
		}
		else
		if (node === this.body)
		{
			throw new AstError ('You can not remove the body block from the loop definition');
		}
		else
		if (node === this.end)
		{
			throw new AstError ('You can not remove the end block from the loop definition');
		}
	}

	public asInterface():ILoop{
		 const json: ILoop = {
			...super.asInterface(),
            header: this.header,
            body: this.body,
			end:this.end,
        };
		return json;
	}

	public toJSON(): string {
        return JSON.stringify(this.asInterface());
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}