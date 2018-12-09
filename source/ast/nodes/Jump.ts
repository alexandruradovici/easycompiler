import { Node, NodeID } from 'ast/nodes';

export enum JumpType {
	BREAK = 'break',
	CONTINUE = 'continue',
	JUMP_TO_LABEL = 'label'
};

export abstract class Jump extends Node
{
	protected NODE_ID: NodeID = NodeID.JUMP;

	constructor (public jumpType: JumpType | string, public name?: string)
	{
		super ();
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.name = this.name;
		json.jumpType = this.jumpType;
		return json;
	}
}