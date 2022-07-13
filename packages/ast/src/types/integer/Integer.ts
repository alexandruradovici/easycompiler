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

import { Type, TypeID } from '../Type';
import { u32 } from '@easycompiler/util';
 

export class Integer extends Type
{
	protected readonly TYPE_ID: TypeID = TypeID.INTEGER;

	constructor (name: string, public readonly bits: u32, public readonly signed: boolean)
	{
		super (name);	
	}

	toJSON ():any
	{
		const json = super.toJSON ();
		json.bits = this.bits;
		json.signed = this.signed;
		return json;
	}
}