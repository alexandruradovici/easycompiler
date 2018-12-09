import { Node, NodeID, ParentNode } from './Node';
import { Block } from './Block';
import { Expression } from './Expression';
import { ASTError } from 'ast/errors';

export class Branch extends Node implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.BRANCH;

	constructor (private _expression:Expression, private _thenBlock: Block, private _elseBlock: Block)
	{
		super ();
		_expression.parent = this;
		_thenBlock.parent = this;
		_elseBlock.parent = this;
	}

	get expression ():Expression
	{
		return this._expression;
	}

	set expression (newExpression: Expression)
	{
		newExpression.parent = this;
		let oldExpression = this._expression;
		this._expression = newExpression
		oldExpression.removeFromParent ();
	}

	get thenBlock ():Block
	{
		return this._thenBlock;
	}

	set thenBlock (newBlock: Block)
	{
		newBlock.parent = this;
		let oldBlock = this._thenBlock;
		this._thenBlock = newBlock;
		oldBlock.removeFromParent ();
	}

	get elseBlock ():Block
	{
		return this._elseBlock;
	}

	set elseBlock (newBlock: Block)
	{
		newBlock.parent = this;
		let oldBlock = this._elseBlock;
		this._elseBlock = newBlock;
		oldBlock.removeFromParent ();
	}

	_removeChild (node: Node): void
	{
		if (node === this._expression)
		{
			throw new ASTError ('The expression cannot be removed from Branch node');
		}
		else
		if (node === this._thenBlock)
		{
			throw new ASTError ('The then block cannot be removed from Branch node');
		}
		else
		if (node === this._elseBlock)
		{
			throw new ASTError ('The else block cannot be removed from Branch node');
		}
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.expression = this._expression.toJSON ();
		json.thenBlock = this._thenBlock.toJSON ();
		json.elseBlock = this._elseBlock.toJSON ();
		return json;
	}
}