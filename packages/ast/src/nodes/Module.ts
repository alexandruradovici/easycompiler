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
import { AstError } from '../errors';
import { Ast, IAst } from './Ast';
 
interface IModule extends IAst{
	name: string,
	block: Block,
}

/** 
     * Ast Node corresponding to a module
     * 
     * @param name - Ast Nodes that are contained
	 * @param _block - Block of code contained in the module
*/
export class Module extends Ast implements IModule,ParentNode
{
	static ID: NodeID = "module";
    public nodeId: NodeID = Module.ID;
	public name: string;
	constructor (name: string, block: Block)
	{
		super ();
		this.name=name;
		this.block=block;
	}

	get block (): Block
	{
		return this.block;
	}

	set block (newBlock: Block)
	{
		newBlock.parent = this;
		this.block = newBlock;
		newBlock.removeFromParent ();
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Ast): void
	{
		if (node === this.block)
		{
			throw new AstError ('You can not remove the block from the Module node');
		}
	}

	public asInterface():IModule{
		 const json: IModule = {
			...super.asInterface(),
            name: this.name,
            block: this.block,            
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