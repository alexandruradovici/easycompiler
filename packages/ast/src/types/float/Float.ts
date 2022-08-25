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

interface iFloat extends IType{
	name: string,
	precision: Precision
}


export enum Precision {
	SIMPLE = 0,
	DOUBLE = 1
}

export class Float extends Type implements iFloat
{
	protected readonly TYPE_ID: TypeID = TypeID.FLOAT;
	public readonly name: string;
	public readonly precision: Precision;
	constructor (name: string, precision: Precision)
	{
		super (TypeID.FLOAT);	
		this.name=name;
		this.precision=precision
	}

	public toJSON(): string {
        const json: iFloat = {
			name: this.name,
			precision: this.precision as number,
			typeID: super.type
		};
        return JSON.stringify(json);
    }
}