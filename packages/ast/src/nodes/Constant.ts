/**
 * @module ast/nodes
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



import { Type } from '../types';
import { Identifier } from './Identifier';
import { NodeID } from '../util/Node';

export class Constant extends Identifier
{
	protected NODE_ID: NodeID = NodeID.CONSTANT;

	constructor (name: string, type: Type, public value: number | string)
	{
		super (name, type);
	}

	toJSON ():any
	{
		let json: any = super.toJSON ();
		json.value = this.value;
		return json;
	}
}

