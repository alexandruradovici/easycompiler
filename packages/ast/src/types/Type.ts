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

export enum TypeID {
	TYPE="Type",
	INTEGER="Integer",
	FLOAT="Float",
	STRING="String",
	CHAR="Char",
	BOOL="Bool",
	ARRAY="Array",
	FUNCTION="Function",
	POINTER="Pointer",
	STRUCT="Struct",
	UNKNOWN="Unknown",
	VOID="Void"	
}


export interface IType{ 
	readonly typeID: TypeID|string;
}
export class Type implements IType
{
	public readonly typeID: TypeID = TypeID.TYPE;
	

	constructor (public readonly type: TypeID|string)
	{
	}

	public toJSON(): string {
        const json: IType = {
            typeID: this.typeID as string,
        };
        return JSON.stringify(json);
    }
	public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}