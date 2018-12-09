import { Node, NodeID } from './Node';
import { Type, Unknown } from 'ast/types';

export abstract class Expression extends Node
{
	protected NODE_ID: NodeID = NodeID.EXPRESSION;

	constructor (public readonly type: Type = new Unknown())
	{
		super ();
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.type = this.type.toJSON ();
		return json;
	}
}