import { Node, NodeID, ParentNode } from './Node';
import { Block } from './Block';
import { ASTError } from 'ast/errors';

export class Module extends Node implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.MODULE;

	constructor (public name: string, private _block: Block)
	{
		super ();
		_block.parent = this;
	}

	get block (): Block
	{
		return this._block;
	}

	set block (newBlock: Block)
	{
		newBlock.parent = this;
		let oldBlock = this._block;
		this._block = newBlock;
		newBlock.removeFromParent ();
	}

	_removeChild (expression: Node): void
	{
		if (expression === this._block)
		{
			throw new ASTError ('You can not remove the block from the Module node');
		}
	}

	toJSON ():any
	{
		let json: any = super.toJSON ();
		json.id = this.NODE_ID;
		json.name = this.name;
		json.block = this._block.toJSON ();
		return json;
	}
}