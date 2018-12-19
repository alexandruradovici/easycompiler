import { NodeTag, Tags } from '@easycompiler/util/Tags';

export enum SymbolType
{
	UNDEFINED,

	// C language
	IDENTIFIER,
	TYPEDEF_NAME,
	ENUMERATION_CONSTANT,

	// Other
	OTHER
}

export class Symbol implements Tags
{

	public readonly tags: NodeTag = {};

	constructor (public name: string, public type: SymbolType)
	{

	}
}

export class SymbolStorage
{
	[name: string]: Symbol;
}

export class SymbolTable
{
	private symbols: SymbolStorage = new SymbolStorage ();

	set (name: string, type: SymbolType, redefine: boolean = false): void
	{
		if (redefine || this.symbols[name] === undefined)
		{
			this.symbols[name] = new Symbol (name, type);
		}
	}
	
	SYM (name: string, type: SymbolType, redefine: boolean = false): void
	{
		this.set (name, type, redefine);
	}

	get (name: string): Symbol | undefined
	{
		return this.symbols[name];
	}

	type (name: string): SymbolType
	{
		if (this.symbols[name]) return this.symbols[name].type;
		else return SymbolType.UNDEFINED;
	}

	SYM_TYPE (name: string): SymbolType
	{
		return this.type (name);
	}

	flush (): void
	{
		this.symbols = new SymbolStorage ();
	}
}


