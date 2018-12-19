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
