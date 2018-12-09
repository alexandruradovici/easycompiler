import { Node, ParentNode, NodeID } from './Node';
import { Expression } from './Expression';
import { Type } from 'ast/types';

export class Return extends Node implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.RETURN;

	constructor (private _expression: Expression | undefined, public type: Type)
	{
		super ();
		if (_expression)
		{
			_expression.parent = this;
		}
	}

	get expression ():Expression | undefined
	{
		return this._expression;
	}

	set expression (expression: Expression | undefined)
	{
		if (this._expression)
		{
			this._expression.removeFromParent ();
		}
		if (expression)
		{
			expression.parent = this;
		}
	}

	_removeChild (node: Node): void
	{
		if (node === this.expression)
		{
			this.expression = undefined;
		}
	}

	toJSON ():any
	{
		let json: any = super.toJSON ();
		if (this.expression) json.expression = this.expression.toJSON ();
		json.type = this.type.toJSON ();
		return json;
	}
}