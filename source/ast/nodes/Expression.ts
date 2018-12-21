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

import { NodeID } from '@easycompiler/util/Node';
import { Type, Unknown } from '@easycompiler/ast/types';
import { AST } from './AST';

export abstract class Expression extends AST
{
	protected NODE_ID: NodeID = NodeID.EXPRESSION;

	constructor (public readonly type: Type = new Unknown())
	{
		super ();
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.type = this.type.toJSON ();
		return json;
	}
}