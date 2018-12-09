import { Expression } from "ast/nodes/expression";
import { Type } from "ast/types";
import { i32 } from 'util/types';
import { Node, ParentNode, NodeID } from './Node';
import { ASTError } from 'ast/errors';

export class TypeCase extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.TYPE_CAST;

	constructor (private _target: Node, public fromType: Type, public type: Type)
	{
		super ();
		_target.parent = this;
	}

	get target (): Node
	{
		return this._target;
	}

	set target (newTarget: Node)
	{
		newTarget.parent = this;
		let oldTarget = this._target;
		this._target = newTarget;
		oldTarget.removeFromParent ();
	}

	_removeChild (expression: Node): void
	{
		if (expression === this._target)
		{
			throw new ASTError ('You can not remove the target from the TypeCast node');
		}
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.target = this._target.toJSON ();
		json.fromType = this.fromType.toJSON ();
		return json;
	}
}