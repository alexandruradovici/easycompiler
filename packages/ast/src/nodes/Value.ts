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
import { NodeID } from '@easycompiler/util';
import { AST } from "./AST";
export class Value extends AST {
    protected NODE_ID: NodeID = NodeID.VALUE;
    public readonly value: string | number | boolean;
    public readonly type: Type | undefined;
    constructor(value: string | number | boolean, type?: Type) {
        super();
        this.value = value;
        this.type = type;
    }

    toJSON(): string {
        const json = JSON.parse(super.toJSON());
        json.value = this.value;
        if (this.type) {
            json.type = this.type.parseJSON();
        }
        return JSON.stringify(json);
    }
}