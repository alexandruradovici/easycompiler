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
import { ASTError } from '../../errors';

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
};

export class BinaryExpression extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.BINARY_EXPRESSION;

	constructor (private _left: Expression, 
				 private _right: Expression,
				 public operator: BinaryExpressionOperator | string)
	{
		super ();
	}

	get left (): Expression
	{
		return this._left;
	}

	set left (expression: Expression)
	{
		expression.parent = this;
		let oldExpression = this._left;
		this._left = expression;
		oldExpression.removeFromParent ();
	}

	get right ():Expression
	{
		return this._right;
	}

	set right (expression: Expression)
	{
		expression.parent = this;
		let oldExpression = this._right;
		this._right = expression;
		oldExpression.removeFromParent ();
	}

	_removeChild (node: Node): void
	{
		if (node === this.left)
		{
			throw new ASTError ('You can not remove the left expression from a BinaryExpression');
		}
		if (node === this.right)
		{
			throw new ASTError ('You can not remove the right expression from a BinaryExpression');
		}
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.left = this._left.toJSON ();
		json.rght = this._right.toJSON ();
		json.operator = this.operator;
		return json;
	}
}