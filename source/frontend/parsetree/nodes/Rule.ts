import { ParentNode, NodeID } from '@easycompiler/util/Node';
import { Node } from "@easycompiler/util/Node";
import { i32, u32 } from '@easycompiler/util/types'
import { ParseTree } from './ParseTree';

export function R (name:string, ...children:ParseTree[]):Rule
{
	return new Rule (name, ...children);
}

export function TR (name:string, ...children:ParseTree[]):Rule
{
	let rule = new Rule (name, ...children);
	rule.transparent = true;
	return rule;
}

export function RR (name:string, ...children:ParseTree[]):Rule
{
	let rule = new Rule (name, ...children);
	rule.recursive = true;
	return rule;
}

export function RTR (name:string, ...children:ParseTree[]):Rule
{
	let rule = new Rule (name, ...children);
	rule.transparent = true;
	rule.recursive = true;
	return rule;
}

export class Rule extends ParseTree implements ParentNode
{
	protected readonly NODE_ID: NodeID = NodeID.RULE;
	public readonly children:ParseTree[];
	public transparent:boolean = false;
	public recursive:boolean = false;

	constructor (public name: string, ...children:ParseTree[])
	{
		super ();
		this.children = children;
	}

	addChild (node: ParseTree, pos: i32 = -1)
	{
		node.removeFromParent ();
		node.parent = this;
		if (pos === -1)
		{
			this.children.push (node);
		}
		else
		{
			this.children.splice (pos, 0, node);
		}
	}

	findChildPosition (node: ParseTree):i32
	{
		for (let index in this.children)
		{
			if (this.children[index] === node) return parseInt (index);
		}
		return -1;
	}

	equals (rule: Rule):boolean
	{
		let eq:boolean = true;
		if (this.name !== rule.name) eq = false;
		// TODO should we check the tags?
		return eq;
	}

	merge (rule: Rule)
	{
		// should we merge with priority
		for (let tag in rule.tags)
		{
			this.tags[tag] = rule.tags[tag];
		}
	}

	clone (): Rule
	{
		let rule = new Rule (this.name, ...this.children);
		for (let tag in this.tags) rule.tags[tag] = this.tags[tag];
		rule.transparent = this.transparent;
		rule.recursive = this.recursive;
		return rule;
	}

	_duplicateChildren ():ParseTree[]
	{
		let children: ParseTree[] = new Array (this.children.length);
		for (let pos in this.children) children[pos] = this.children[pos];
		return children;
	}

	_removeChild(node: Node | u32): void {
		if (node instanceof Rule)
		{
			node = this.findChildPosition (node);
		}
		else if (node instanceof Node)
		{
			node = -1;
		}
		if (node >= 0)
		{
			this.children.splice (node, 1);
		}
	}

	flattenTree (): ParseTree
	{
		let flattenedTree = this.flatten ();
		if (flattenedTree) return flattenedTree;
		else 
		{
			let rule = this.clone ();
			rule.children.splice (0);
			return rule;
		}
	}

	flatten (): ParseTree | undefined
	{
		let flattenedNode = this.clone ();
		flattenedNode.children.splice (0);
		for (let parseTree of this._duplicateChildren())
		{
			let temporaryNode = parseTree.flatten ();
			if (temporaryNode) 
			{
				if (temporaryNode instanceof Rule && (<Rule>temporaryNode).transparent)
				{
					flattenedNode.merge (temporaryNode);
					for (let node of temporaryNode._duplicateChildren())
					{
						flattenedNode.addChild (node);
					}
				}
				else
				{
					flattenedNode.addChild (temporaryNode);
				}
			}
		}
		// left recursion
		if (flattenedNode.recursive === true && flattenedNode.children[0] instanceof Rule && flattenedNode.equals(<Rule>flattenedNode.children[0]))
		{
			let temporaryNode1 = <Rule>flattenedNode.children[0];
			flattenedNode.merge (temporaryNode1);
			let pos: i32 = 0;
			temporaryNode1.removeFromParent ();
			for (let node of (<Rule>temporaryNode1)._duplicateChildren())
			{
				flattenedNode.addChild (node, pos);
				pos = pos + 1;
			}
			temporaryNode1.removeFromParent ();
		}
		else
		// right recursion
		if (flattenedNode.recursive === true && flattenedNode.children[flattenedNode.children.length-1] instanceof Rule && flattenedNode.equals(<Rule>flattenedNode.children[flattenedNode.children.length-1]))
		{
			let temporaryNode2 = <Rule>flattenedNode.children[flattenedNode.children.length-1];
			if (temporaryNode2 instanceof Rule)
			{
				flattenedNode.merge (temporaryNode2);
				temporaryNode2.removeFromParent ();
				for (let node of temporaryNode2._duplicateChildren())
				{
					flattenedNode.addChild (node);
				}
			}
		}
		return flattenedNode;
	}

	toJSON():any
	{
		let json = super.toJSON ();
		json.name = this.name;
		json.children = [];
		// json.transparent = this.transparent;
		// json.recursive = this.recursive;
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