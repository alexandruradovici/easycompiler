import { Node, ParentNode, NodeID } from 'ast/nodes';
import { Expression } from 'ast/nodes';
import { ASTError } from 'ast/errors';

export enum ExpressionUnaryOperator {
	OPERATOR_NEGATIVE = '-',
	OPERATOR_NOT = '!',
	OPERATOR_DEFERENCEc = '*'
};

export class UnaryExpression extends Node implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.UNARY_EXPRESSION;

	constructor (private _expression: Expression, 
				 private operator: ExpressionUnaryOperator | string)
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
		let oldExpression = this._expression;
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

	toJSON ():any
	{
		let json = super.toJSON ();
		json.expression = this._expression.toJSON ();
		json.operator = this.operator;
		return json;
	}
}