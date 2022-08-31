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

interface iUnaryExpression{
	expression: Expression,
	operator: UnaryExpressionOperator|string
}

export enum UnaryExpressionOperator {
	OPERATOR_NEGATIVE = '-',
	OPERATOR_NOT = '!',
	OPERATOR_DEFERENCE = '*',
	OPERATOR_INCREMENT = '++',
	OPERATOR_DECREMENT = '--'
}


/** 
     * Ast Node corresponding to a binary expression
     * 
     * @param left - The left part of the binary expression
	 * @param right - The right part of the binry expression
	 * @param operator - The operator of the expression
*/
export class UnaryExpression extends Expression implements ParentNode,iUnaryExpression
{
	static ID: NodeID = "unaryExpression";
    public nodeId: NodeID = UnaryExpression.ID;
	public operator: UnaryExpressionOperator|string;
	public expression: Expression;


	constructor (expression: Expression, operator: UnaryExpressionOperator | string)
	{
		super();
		this.expression=expression;
		this.operator=operator;
	}

	// get expression(): Expression
	// {
	// 	return this.expression;
	// }

	// set expression(expression: Expression)
	// {
	// 	this.expression = expression;
	// }

	/** 
     * Removes Ast Node
     * 
     * @param node - Ast Node to be removed
	*/
	_removeChild (node: Node): void
	{
		if (node === this.expression)
		{
			throw new AstError ('You can not remove the left expression from a UniaryExpression');
		}
	}

	public toJSON(): string {
        const json: iUnaryExpression = {
            expression: this.expression,
            operator: this.operator,
            ...this.asInterface()
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}