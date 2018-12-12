/**
 * Copyright 2018 Alexandru RADOVICI
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Type, Struct } from '@easycompiler/ast/types';
import { Expression } from './Expression';
import { Unknown } from '@easycompiler/ast/types';
import { Node, ParentNode, NodeID } from '@easycompiler/util/Node';
import { ASTError } from '@easycompiler/ast/errors';

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