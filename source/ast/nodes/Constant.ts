import { Type } from 'ast/types';
import { Identifier } from './Identifier';
import { NodeID } from './Node';

export class Constant extends Identifier
{
	protected NODE_ID: NodeID = NodeID.CONSTANT;

	constructor (name: string, type: Type, public value: number | string)
	{
		super (name, type);
	}

	toJSON ():any
	{
		let json: any = super.toJSON ();
		json.value = this.value;
		return json;
	}
}

