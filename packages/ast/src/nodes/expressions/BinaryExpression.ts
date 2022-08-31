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


 
import { Node, ParentNode, NodeID } from '..';
import { Expression } from '..';
import { AstError } from '../../errors';

export interface iBinaryExpression{
	left: Expression,
	right: Expression,
	operator: BinaryExpressionOperator|string
}

export enum BinaryExpressionOperator {
	OPERATOR_ADD = '+',
	OPERATOR_SUBTRACT = '-',
	OPERATOR_MULTIPLY = '*',
	OPERATOR_DIVIDE = '/',
	OPERATOR_REMAINDER = '%',
	OPERATOR_ATTRIBUTION = '=',
	OPERATOR_EQ = '==',
	OPERATOR_NE = '!=',
	OPERATOR_LT = '<',
	OPERATOR_LE = '<=',
	OPERATOR_GT = '>',
	OPERATOR_GE = '>=',
	OPERATIR_SHL = '<<',
	OPERATIR_SHR = '>>'
}

/** 
     * Ast Node corresponding to a binary expression
     * 
     * @param _left - The left part of the binary expression
	 * @param _right - The right part of the binry expression
	 * @param operator - The operator of the expression
*/
export class BinaryExpression extends Expression implements ParentNode, iBinaryExpression
{
	static ID: NodeID = "binaryExpression";
    public nodeId: NodeID = BinaryExpression.ID;
	public operator: BinaryExpressionOperator|string;
	constructor (left: Expression, right: Expression, operator: BinaryExpressionOperator | string)
	{
		super();
		this.left=left;
		this.right=right;
		this.operator=operator;
	}

	get left (): Expression
	{
		return this.left;
	}

	set left (expression: Expression)
	{
		this.left = expression;
	}

	get right ():Expression
	{
		return this.right;
	}

	set right (expression: Expression)
	{
		this.right = expression;
	}

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Node): void
	{
		if (node === this.left)
		{
			throw new AstError ('You can not remove the left expression from a BinaryExpression');
		}
		if (node === this.right)
		{
			throw new AstError ('You can not remove the right expression from a BinaryExpression');
		}
	}

	public toJSON(): string {
        const json: iBinaryExpression = {
            left: this.left,
			right: this.right,
            operator: this.operator,
            ...this.asInterface()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}