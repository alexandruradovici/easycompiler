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
import { Expression } from './Expression';
import { AstError } from '../errors';
import { Ast, IAst } from './Ast';
 
interface IBranch extends IAst{
	expression: Expression;
	thenBlock: Block;
	elseBlock: Block
}
/** 
     * Ast Node corresponding to a branch in the code
	 * @param _expression - expression that is verified in the branch
	 * @param _thenBlock - Ast block that contains the code to be executed after `_expression` is true
	 * @param _elseBlock - Ast block that contains the code to be executed after `_expression` is false
*/
export class Branch extends Ast implements IBranch,ParentNode
{
	static ID: NodeID = "branch";
    public nodeId: NodeID = Branch.ID;
	
	constructor (expression:Expression, thenBlock: Block, elseBlock: Block)
	{
		super ();
		this.expression=expression;
		this.thenBlock=thenBlock;
		this.elseBlock=elseBlock;
	}

	get expression ():Expression
	{
		return this.expression;
	}

	set expression (newExpression: Expression)
	{
		newExpression.parent = this;
		const oldExpression = this.expression;
		this.expression = newExpression
		oldExpression.removeFromParent ();
	}

	get thenBlock ():Block
	{
		return this.thenBlock;
	}

	set thenBlock (newBlock: Block)
	{
		newBlock.parent = this;
		const oldBlock = this.thenBlock;
		this.thenBlock = newBlock;
		oldBlock.removeFromParent ();
	}

	get elseBlock ():Block
	{
		return this.elseBlock;
	}

	set elseBlock (newBlock: Block)
	{
		newBlock.parent = this;
		const oldBlock = this.elseBlock;
		this.elseBlock = newBlock;
		oldBlock.removeFromParent ();
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Ast): void
	{
		if (node === this.expression)
		{
			throw new AstError ('The expression cannot be removed from Branch node');
		}
		else
		if (node === this.thenBlock)
		{
			throw new AstError ('The then block cannot be removed from Branch node');
		}
		else
		if (node === this.elseBlock)
		{
			throw new AstError ('The else block cannot be removed from Branch node');
		}
	}

	public asInterface(): IBranch{
		const json: IBranch = {
			...super.asInterface(),
			expression: this.expression,
			thenBlock: this.thenBlock,
			elseBlock: this.elseBlock,
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