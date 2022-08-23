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

import { IType, Type, TypeID } from '../Type';
import { u32 } from '@easycompiler/util';
 
export interface iInteger extends IType{
	name: string,
	bits: u32,
	signed: boolean
}


export class Integer extends Type implements iInteger
{
	protected readonly TYPE_ID: TypeID = TypeID.INTEGER;
	public readonly name: string;
	public readonly bits: u32;
	public readonly signed: boolean;

	constructor (name: string,bits: u32, signed: boolean)
	{
		super (TypeID.INTEGER);
		this.name=name;
		this.bits=bits;
		this.signed=signed;	
	}

	public toJSON(): string {
        const json: iInteger = {
			name: this.name,
			bits: this.bits,
			signed: this.signed,
			typeID: super.type
		};
        return JSON.stringify(json);
    }
}