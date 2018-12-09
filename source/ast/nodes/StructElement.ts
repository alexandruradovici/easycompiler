import { Type, Struct } from 'ast/types';
import { Expression } from './Expression';
import { Unknown } from 'ast/types';
import { Node, ParentNode, NodeID } from './Node';
import { ASTError } from 'ast/errors';

export class StructElement extends Expression implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.STRUCT_ELEMENT;

	constructor (private _struct: Expression, public elementName:string)
	{
		super ();
		_struct.parent = this;
	}

	get struct ():Expression
	{
		return this._struct;
	}

	set struct (newStruct: Expression)
	{
		newStruct.parent = this;
		let oldStruct = this._struct;
		this._struct = newStruct;
		oldStruct.removeFromParent ();
	}

	getType ():Type
	{
		if (this._struct.type instanceof Struct)
		{
			let element = this._struct.type.getElement (this.elementName);
			if (element) return element.type;
		}
		return new Unknown();
	}

	_removeChild (expression: Node): void
	{
		if (expression === this._struct)
		{
			throw new ASTError ('You can not remove the struct from the StructElement node');
		}
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.struct = this._struct.toJSON ();
		json.elementName = this.elementName;
		return json;
	}
}