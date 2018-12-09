import { NodeID } from './Node';
import { Type } from 'ast/types';
import { Expression } from './expression';

export class Identifier extends Expression
{
	protected NODE_ID: NodeID = NodeID.IDENTIFIER;

	constructor (public name: string, public readonly type: Type)
	{
		super ();
	}

	toJSON ():any 
	{
		let json = super.toJSON ();
		json.name = this.name;
		json.type = this.type.toJSON ();
		return json;
	}
}