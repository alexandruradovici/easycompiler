import { Definition } from "./Definition";
import { Type } from 'ast/types';
import { NodeID } from './Node';

export class VariableDefinition extends Definition
{
	protected NODE_ID: NodeID = NodeID.VARIABLE_DEFINITION;

	constructor (public name: string, public type: Type)
	{
		super ();
	}

	toJSON ():any
	{
		let json: any = super.toJSON ();
		json.name = this.name;
		json.type = this.type.toJSON ();
		return json;
	}
}