export type ParserContextValue = string | boolean | number;

export class ParserContextFlag
{
	[name: string]:ParserContextValue;
}

export class ParserContext
{
	private constructor ()
	{

	}

	private static instance:ParserContext = ParserContext.getContext ();

	private flags:ParserContextFlag = new ParserContextFlag ();

	static getContext (): ParserContext
	{
		return this.instance;
	}

	static resetContext (): ParserContext
	{
		this.instance = new ParserContext ();
		return this.instance;
	}

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
}

export function SF (name: string, value: ParserContextValue):void
{
	ParserContext.getContext ().setFlag (name, value);
}

export function UF (name: string, value: ParserContextValue):void
{
	ParserContext.getContext ().unsetFlag (name, value);
}

export function IS (name: string): boolean
{
	return ParserContext.getContext ().isSet (name);
}

export function F (name: string): ParserContextValue
{
	return ParserContext.getContext ().flag (name);
}

export function RF ():void
{
	ParserContext.resetContext ();
}
