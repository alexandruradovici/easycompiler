import { Node, NodeID } from './Node';

export class Label extends Node
{
	protected NODE_ID: NodeID = NodeID.LABEL;

	constructor (public name: string)
	{
		super ();
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.name = this.name;
		return json;
	}
}