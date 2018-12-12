import { Node, NodeTagValue, NodeID } from '@easycompiler/util//Node';

export function T (name: string, value?: NodeTagValue)
{
	return new Token (name, value);
}

export class Token extends Node
{
	protected readonly NODE_ID: NodeID = NodeID.TOKEN;

	constructor (public name: string, public value?: NodeTagValue)
	{
		super ();
	}

	toJSON():any 
	{
		let json = super.toJSON ();
		json.name = this.name;
		if (this.value)
		{
			json.value = this.value;
		}
		return json;
	}
}