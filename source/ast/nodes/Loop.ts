import { Node, ParentNode, NodeID } from './Node';
import { Block } from './Block';
import { ASTError } from 'ast/errors';

export class Loop extends Node implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.LOOP;

	constructor (private _header:Block, private _body: Block, private _end: Block)
	{
		super ();
		_header.parent = this;
	}

	get header (): Block
	{
		return this._header;
	}

	set header (newHeader: Block)
	{
		newHeader.parent = this;
		let oldBlock = this._header;
		this._header = newHeader;
		oldBlock.removeFromParent ();
	}

	get body (): Block
	{
		return this._body;
	}

	set body (newBody: Block)
	{
		newBody.parent = this;
		let oldBody = this._body;
		this._body = newBody;
		oldBody.removeFromParent ();
	}

	get end (): Block
	{
		return this._end;
	}

	set end (newEnd: Block)
	{
		newEnd.parent = this;
		let oldEnd = this._end;
		this._end = newEnd;
		oldEnd.removeFromParent ();
	}

	_removeChild (expression: Node): void
	{
		if (expression === this._header)
		{
			throw new ASTError ('You can not remove the header block from the loop definition');
		}
		else
		if (expression === this._body)
		{
			throw new ASTError ('You can not remove the body block from the loop definition');
		}
		else
		if (expression === this._end)
		{
			throw new ASTError ('You can not remove the end block from the loop definition');
		}
	}

	toJSON ():any 
	{
		let json = super.toJSON ();
		json.header = this._header.toJSON ();
		json.body = this._body.toJSON ();
		json.end = this._end.toJSON ();
		return json;
	}
}