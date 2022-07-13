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

export enum UnaryExpressionOperator {
	OPERATOR_NEGATIVE = '-',
	OPERATOR_NOT = '!',
	OPERATOR_DEFERENCE = '*',
	OPERATOR_INCREMENT = '++',
	OPERATOR_DECREMENT = '--'
}

export class UnaryExpression extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.UNARY_EXPRESSION;

	constructor (private _expression: Expression, private operator: UnaryExpressionOperator | string)
	{
		super ();
	}

	get expression (): Expression
	{
		return this._expression;
	}

	set expression (expression: Expression)
	{
		expression.parent = this;
		const oldExpression = this._expression;
		this._expression = expression;
		oldExpression.removeFromParent ();
	}

	_removeChild (node: Node): void
	{
		if (node === this.expression)
		{
			throw new ASTError ('You can not remove the left expression from a UniaryExpression');
		}
	}

	toJSON ():string
	{
		const json = JSON.parse(super.toJSON ());
		json.expression = this._expression.toJSON ();
		json.operator = this.operator;
		return JSON.stringify(json);
	}
}