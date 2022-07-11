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



import { u32 } from '../util/types';

export enum TypeID {
	TYPE,
	INTEGER,
	FLOAT,
	ARRAY,
	FUNCTION,
	POINTER,
	STRUCT,
	UNKNOWN,
	VOID,
	BOOL
};

export abstract class Type
{
	protected version:u32 = 1;
	protected readonly TYPE_ID: TypeID = TypeID.TYPE;

	constructor (public readonly name: string)
	{

	}

	toJSON ():any 
	{
		let json: any = {
			version: this.version,
			typeId: this.TYPE_ID,
			name: this.name
		};
		return json;
	}
}