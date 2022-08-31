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

import { IType, Type } from '../types';
import { INode, NodeID } from '@easycompiler/util';
import { Ast } from "./Ast";

/** 
     * Ast Node corresponding to a value in code
     * 
     * @param value - The value 
	 * @param type -  The type of the value
*/
interface IValue extends INode {
    readonly value: string | number | boolean;
    readonly type: Type | undefined;
}

export class Value extends Ast implements IValue {
    static ID: NodeID = "value";
    public nodeId: NodeID = Value.ID;
    public readonly value: string | number | boolean;
    public readonly type: Type | undefined;
    constructor(value: string | number | boolean, type?: Type) {
        super();
        this.value = value;
        this.type = type;
    }

    public asInterface():IValue{
        let t;
        if(this.type){
            t=this.type
        }
        const json: IValue = {
            ...super.asInterface(),
            value: this.value,
            type: t,
        };
        return json;
    }

    public toJSON(): string {
        return JSON.stringify(this.asInterface());
    }
    public stringToJSON():JSON{
		return JSON.parse(this.toJSON())
	}
}