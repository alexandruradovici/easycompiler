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
 import { Type } from '../types';
 import { Ast, IAst } from './Ast';
import { Expression } from './Expression';
 import { Value } from './Value';
  
 interface IParameterList extends IAst{
     parameters?:IAst[];
 }
 
 /** 
      * Ast Node corresponding to an expression
      * 
      * @param value
      * @param type
 */
 export class ParameterList extends Ast implements IParameterList
 {
 
    static ID: NodeID = "parameterList";
    public nodeId: NodeID = ParameterList.ID;
     public parameters?:Expression[];
     constructor (parameters?: Expression[])
     {
         super();
         if([parameters]){
             this.parameters=parameters;
         }
     }
 
     public asInterface():IParameterList{
        let json_parameters=[];
        if(this.parameters){
            for(let parameter of this.parameters){
                json_parameters.push(parameter.asInterface());
            }
        }
         const json: IParameterList = {
             ...super.asInterface(),
             parameters:json_parameters,
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