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

import { INode, NodeID } from '@easycompiler/util';
import { Ast, IAst } from './Ast';



/** 
     * Ast Node corresponding to a definition
*/
export abstract class Definition extends Ast
{
     static ID: NodeID = "definition";
     public nodeId: NodeID = Definition.ID;

	constructor ()
	{
		super ();
	}

    public asInterface():IAst{
        const json: IAst = {
            ...super.asInterface()
        };
        return json;
    }
	public toJSON(): string {
        return JSON.stringify(this.asInterface());
    }

}