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

export class SymbolTable
{
	[name: string]: Symbol;
}

let globalSymbolTable = new SymbolTable ();

export function RESET ()
{
	globalSymbolTable = new SymbolTable ();
}

export function SYM (name: string, type: SymbolType, redefine: boolean = false): void
{
	if (redefine || globalSymbolTable[name] === undefined)
	{
		globalSymbolTable[name] = new Symbol (name, type);
	}
}

export function SYM_TYPE (name: string): SymbolType
{
	if (globalSymbolTable[name]) return globalSymbolTable[name].type;
	else return SymbolType.UNDEFINED;
}