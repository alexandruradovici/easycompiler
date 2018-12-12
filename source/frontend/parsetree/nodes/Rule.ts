import { Node, ParentNode, NodeID } from '@easycompiler/util/Node';
import { i32, u32 } from '@easycompiler/util/types'

export function R (name:string, ...children:Node[])
{
	return new Rule (name, ...children);
}

export class Rule extends Node implements ParentNode
{
	protected readonly NODE_ID: NodeID = NodeID.RULE;
	public readonly children:Node[];

	constructor (public name: string, ...children:Node[])
	{
		super ();
		this.children = children;
	}

	addChild (node: Node)
	{
		node.parent = this;
		this.children.push (node);
	}

	findChildPosition (node: Node):i32
	{
		for (let index in this.children)
		{
			if (this.children[index] === node) return parseInt (index);
		}
		return -1;
	}


	_removeChild(node: Node | u32): void {
		if (node instanceof Node)
		{
			node = this.findChildPosition (node);
		}
		if (node >= 0)
		{
			this.children.splice (node, 1);
		}
	}

	toJSON():any
	{
		let json = super.toJSON ();
		json.name = this.name;
		json.children = [];
		for (let node of this.children)
		{
			if (node && node.toJSON)
			{
				json.children.push (node.toJSON());
			}
			else
			{
				json.children.push ({
					error: 'child is not a node',
					value: node
				});
			}
		}
		return json;
	}
}