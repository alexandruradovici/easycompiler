/**
 * @module ast/types
 */

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

import { Type, TypeID } from './Type';
import { u32 } from '@easycompiler/util';

// export class StructElement {
// 	constructor (public name: string, public type: Type)
// 	{

// 	}

// 	toJSON ():any
// 	{
// 		let json:any = {
// 			name: this.name,
// 			type: this.type.toJSON ()
// 		};
// 		return json;
// 	}
// }

import { StructElement } from '../nodes';
 
export class Struct extends Type
{
	protected readonly TYPE_ID: TypeID = TypeID.STRUCT;

	constructor (name: string, public readonly elements: StructElement[] = [])
	{
		super (name);
	}

	addElement (element: StructElement, position: u32 = -1)
	{
		if (this.hasElement (element.name))
		{
			this.deleteElement (element);
		}
		this.elements.splice (position, 0, element);
	}

	deleteElement (element: StructElement | u32 | string ): void
	{
		let position = -1;
		if (element instanceof StructElement || typeof element === 'string')
		{
			position = this.getElementPosition (element);
		}
		else
		{
			position = element;
		}
		if (position >= 0)
		{
			this.elements.splice (position, 1);
		}
	}

	getElement (name: StructElement | string): StructElement | null
	{
		if (name instanceof StructElement) name = name.name;
		for (const element of this.elements)
		{
			if (element.name === name) return element;
		}
		return null;
	}

	getElementPosition (name: StructElement | string): u32
	{
		if (name instanceof StructElement) name = name.name;
		for (const index in this.elements)
		{
			if (this.elements[index].name === name) return parseInt(index);
		}
		return -1;
	}

	hasElement (name: StructElement | string)
	{
		return (this.getElement (name) === null);
	}

	toJSON ():any
	{
		const json = super.toJSON ();
		json.elements = [];
		for (const element in this.elements)
		{
			json.elements.push (this.elements[element].toJSON ());
		}
		return json;
	}
}