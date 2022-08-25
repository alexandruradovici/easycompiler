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




import { IType, Type, TypeID } from './Type';
import { u32 } from '@easycompiler/util';
 
interface iArray extends IType{
	name: string,
	arrayType: Type|string,
	size: u32,
}

export class Array extends Type implements iArray
{
	protected readonly TYPE_ID: TypeID = TypeID.ARRAY;
	public readonly name: string;
	public readonly arrayType: Type;
	public readonly size: u32;

	constructor (name: string, type: Type, size: u32)
	{
		super (TypeID.ARRAY);
		this.name=name;
		this.arrayType=type;
		this.size=size;
	}
	
	public toJSON(): string {
        const json: iArray = {
			name: this.name,
			arrayType: this.arrayType.toJSON(),
			size: this.size,
			typeID: super.type
		};
        return JSON.stringify(json);
    }
}