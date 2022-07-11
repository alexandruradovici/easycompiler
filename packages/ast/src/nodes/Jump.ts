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

import { NodeID } from '../nodes';
import { AST } from './AST';

export enum JumpType {
	BREAK = 'break',
	CONTINUE = 'continue',
	JUMP_TO_LABEL = 'label'
};

export abstract class Jump extends AST
{
	protected NODE_ID: NodeID = NodeID.JUMP;

	constructor (public jumpType: JumpType | string, public name?: string)
	{
		super ();
	}

	toJSON ():any
	{
		let json = super.toJSON ();
		json.name = this.name;
		json.jumpType = this.jumpType;
		return json;
	}
}