

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


import { u32 } from '@easycompiler/util';

export enum TypeID {
	TYPE,
	INTEGER,
	FLOAT,
	STRING,
	CHAR,
	ARRAY,
	FUNCTION,
	POINTER,
	STRUCT,
	UNKNOWN,
	VOID,
	BOOL
}

export class Type
{
	protected version:u32 = 1;
	protected readonly TYPE_ID: TypeID = TypeID.TYPE;

	constructor (public readonly name: string)
	{
		switch (name.toLowerCase()){
			case "integer": {
				this.TYPE_ID=TypeID.INTEGER;
				break;
			}
			case "float": {
				this.TYPE_ID=TypeID.FLOAT;
				break;
			}
			case "string": {
				this.TYPE_ID=TypeID.STRING;
				break;
			}
			case "char": {
				this.TYPE_ID=TypeID.CHAR;
				break;
			}
			case "array": {
				this.TYPE_ID=TypeID.ARRAY;
				break;
			}
			case "function": {
				this.TYPE_ID=TypeID.FUNCTION;
				break;
			}
			case "pointer": {
				this.TYPE_ID=TypeID.POINTER;
				break;
			}
			case "struct": {
				this.TYPE_ID=TypeID.STRUCT;
				break;
			}
			case "void": {
				this.TYPE_ID=TypeID.VOID;
				break;
			}
			case "bool": {
				this.TYPE_ID=TypeID.BOOL;
				break;
			}
			default:{
				this.TYPE_ID=TypeID.UNKNOWN;
			}
		}
	}

	toJSON ():string 
	{
		const json = {
			version: this.version,
			typeID: this.TYPE_ID,
			name: this.name
		};
		return JSON.stringify(json);
	}
	parseJSON():JSON{
		return JSON.parse(this.toJSON());
	}
}