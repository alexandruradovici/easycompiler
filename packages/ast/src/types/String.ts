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

interface iString extends IType{
	name: string
}


export class String extends Type implements iString
{
    protected readonly TYPE_ID: TypeID = TypeID.STRING;
    public readonly name;
    constructor (name: string)
    {
        super (TypeID.STRING);
        this.name=name;
    }

    public toJSON(): string {
        const json: iString = {
            ...super.asInterface(),
			name: this.name,
			typeID: super.type
		};
        return JSON.stringify(json);
    }
 }