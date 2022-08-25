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

import { IType, Type, TypeID } from './Type';

interface iFunction extends IType{
	name: string,
	functionType: Type|string,
	parameterTypes: Type[]|string[],
}
export class Function extends Type implements iFunction
{
	protected readonly TYPE_ID: TypeID = TypeID.FUNCTION;
	public name: string;
	public functionType: Type;
	public parameterTypes: Type[];
	constructor (name: string, functionType: Type, parameterTypes: Type[])
	{
		super (TypeID.FUNCTION);
		this.name=name;
		this.functionType=functionType;
		this.parameterTypes=parameterTypes;
	}
	public addParameterType(parameterType: Type){
		this.parameterTypes.push(parameterType);
	}
	public toJSON(): string {
		let json_parameterTypes=[];
		for(const parameterType of this.parameterTypes){
			json_parameterTypes.push(parameterType.toJSON())
		}
        const json: iFunction = {
			name: this.name,
			functionType: this.functionType.toJSON(),
			parameterTypes: json_parameterTypes,
			typeID: super.type
		};
        return JSON.stringify(json);
    }
}