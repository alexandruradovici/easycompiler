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
import { ASTError } from '../errors';
import { AST } from './AST';
 
export interface iBranch{
	expression: Expression;
	thenBlock: Block;
	elseBlock: Block
}
/** 
     * AST Node corresponding to a branch in the code
	 * @param _expression - expression that is verified in the branch
	 * @param _thenBlock - AST block that contains the code to be executed after `_expression` is true
	 * @param _elseBlock - AST block that contains the code to be executed after `_expression` is false
*/
export class Branch extends AST implements iBranch,ParentNode
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
     * Removes AST Node
     * 
     * @param node - AST Node to be removed
	*/
	_removeChild (node: AST): void
	{
		if (node === this.expression)
		{
			throw new ASTError ('The expression cannot be removed from Branch node');
		}
		else
		if (node === this.thenBlock)
		{
			throw new ASTError ('The then block cannot be removed from Branch node');
		}
		else
		if (node === this.elseBlock)
		{
			throw new ASTError ('The else block cannot be removed from Branch node');
		}
	}

	public toJSON(): string {
        const json: iBranch = {
            expression: this.expression,
            thenBlock: this.thenBlock,
			elseBlock: this.elseBlock,
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
}