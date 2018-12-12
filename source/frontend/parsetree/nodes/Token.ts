import { Node, NodeTagValue, NodeID } from '@easycompiler/util//Node';
import { ParseTree } from './ParseTree';

export function T (name: string, value?: NodeTagValue):Token
{
	return new Token (name, value);
}

export function TT (name: string, value?: NodeTagValue):Token
{
	let token = new Token (name, value);
	token.transparent = true;
	return token;
}

export class Token extends ParseTree
{
	protected readonly NODE_ID: NodeID = NodeID.TOKEN;
	public transparent: boolean = false;

	constructor (public name: string, public value?: NodeTagValue)
	{
		super ();
	}

	flatten (): ParseTree | undefined
	{
		if (!this.transparent) return this.clone ();
		else return undefined;
	}

	clone():Token
	{
		let token = new Token (this.name, this.value);
		for (let tag in this.tags) token.tags[tag] = this.tags[tag];
		token.transparent = this.transparent;
		return token;
	}

	toJSON():any 
	{
		let json = super.toJSON ();
		json.name = this.name;
		// json.transparent = this.transparent;
		if (this.value)
		{
			json.value = this.value;
		}
		return json;
	}
}