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


import type { NodeID } from '@easycompiler/util';
import { Type } from 'src/types';
import { AST } from './AST';
import { Value } from './Value';
 
export interface iExpression{
	readonly value?: Value;
	readonly type?: Type;
}

/** 
     * AST Node corresponding to an expression
     * 
     * @param value
	 * @param type
*/
export abstract class Expression extends AST implements iExpression
{

	protected NODE_ID: NodeID = "expression";
	public readonly value?:Value;
	public readonly type?: Type;
	constructor (value?: Value, type? :Type)
	{
		super();
		if(value){
			this.value=value;
		}
		if(type){
			this.type=type;
		}
	}

	public toJSON(): string {
        const json: iExpression = {
            value: this.value,
            type: this.type,
            ...this.nodeObject()
        };
        return JSON.stringify(json);
    }
}