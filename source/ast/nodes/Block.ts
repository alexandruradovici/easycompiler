import { Node, NodeID, ParentNode } from './Node';
import { i32 } from 'util/types';
import { u32 } from 'util/types';

export class Block extends Node implements ParentNode
{
	protected readonly NODE_ID: NodeID = NodeID.BLOCK;

	public readonly children: Node[] = [];

	addChild (node: Node): void
	{
		node.parent = this;
		this.children.push (node);
		// TODO should throw or just silently remove element from parent
	}

	getChildPosition (node: Node): i32
	{
		for (let pos in this.children)
		{
			if (this.children[pos] === node) return parseInt (pos);
		}
		return -1;
	}

	_removeChild (node: Node | u32): void
	{
		let pos; 
		if (node instanceof Node)
		{
			pos = this.getChildPosition (node);
		}
		else
		{
			pos = node;
		}
		if (pos >= 0)
		{
			this.children.splice (pos, 1);
		}
	}

	isEmpty (): boolean
	{
		return this.children.length === 0;
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.children = [];
		for (let index in this.children)
		{
			json.children.push (this.children[index].toJSON());
		}
		return json;
	}
}