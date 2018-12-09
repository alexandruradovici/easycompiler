import { Type } from 'ast/types';
import { Expression } from './Expression';
import { Node, NodeID, ParentNode } from './Node';
import { ASTError } from 'ast/errors';
import { u32 } from 'util/types';

export class ArrayElement extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.ARRAY_ELEMENT;

	constructor (private _expression: Expression, public _index:Expression)
	{
		super ();
		this._expression.parent = this;
		this._index.parent = this;
	}

	get expression ():Expression
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

	get index ():Expression
	{
		return this._index;
	}

	set index (index: Expression)
	{
		index.parent = this;
		let oldIndex = this._index;
		this._index = index;
		oldIndex.removeFromParent ();
		
	}

	getType ():Type
	{
		return this.expression.type;
	}

	_removeChild (node: Node): void
	{
		if (node === this.expression)
		{
			throw new ASTError ('You can not remove the expression from an ArrayElement');
		}
	}

	toJSON ():any
	{
		let json: any = super.toJSON ();
		json.expression = this._expression.toJSON ();
		json.index = this._index;
		return json;
	}
}