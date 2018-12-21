/**
 * @module frontend/parsetree/nodes
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

import { NodeTagValue } from '@easycompiler/util/Tags';
import { NodeID } from '@easycompiler/util/Node';
import { Node } from "@easycompiler/util/Node";
import { ParseTree } from './ParseTree';

export function T (name: string, value?: NodeTagValue):Token
{
	return new Token (name, value);
}

export function TT (name: string, value?: NodeTagValue):Token
{
	let token = new Token (name, value);
	token.transparent = true;
	return token;
}

export class Token extends ParseTree
{
	protected readonly NODE_ID: NodeID = NodeID.TOKEN;
	public transparent: boolean = false;

	constructor (public name: string, public value?: NodeTagValue)
	{
		super ();
	}

	flatten (): ParseTree | undefined
	{
		if (!this.transparent) return this.clone ();
		else return undefined;
	}

	clone():Token
	{
		let token = new Token (this.name, this.value);
		for (let tag in this.tags) token.tags[tag] = this.tags[tag];
		token.transparent = this.transparent;
		return token;
	}

	toJSON():any 
	{
		let json = super.toJSON ();
		json.name = this.name;
		// json.transparent = this.transparent;
		if (this.value)
		{
			json.value = this.value;
		}
		return json;
	}
}