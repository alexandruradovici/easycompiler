/**
 * @module frontend/parsetree/context
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

export type ParserContextValue = string | boolean | number;

export class ParserContextFlag
{
	[name: string]:ParserContextValue;
}

export class ParserContext
{
	public constructor ()
	{

	}

	private flags:ParserContextFlag = new ParserContextFlag ();

	// static getContext (): ParserContext
	// {
	// 	return this.instance;
	// }

	// static resetContext (): ParserContext
	// {
	// 	this.instance = new ParserContext ();
	// 	return this.instance;
	// }

	setFlag (name: string, value:ParserContextValue  = true)
	{
		this.flags[name] = value;
	}

	unsetFlag (name: string, value:ParserContextValue  = true)
	{
		delete this.flags[name];
	}

	flag (name: string): ParserContextValue
	{
		return this.flags[name];
	}

	isSet (name: string): boolean
	{
		if (this.flags[name]) return true;
		else return false;
	}

	flush ():void
	{
		this.flags = new ParserContextFlag ();
	}

	// shorthand functions
	SF (name: string, value: ParserContextValue):void
	{
		this.setFlag (name, value);
	}

	UF (name: string, value: ParserContextValue):void
	{
		this.unsetFlag (name, value);
	}

	IS (name: string): boolean
	{
		return this.isSet (name);
	}

	F (name: string): ParserContextValue
	{
		return this.flag (name);
	}

	RF ():void
	{
		this.flush ();
	}
}
