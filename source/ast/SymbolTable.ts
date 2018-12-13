import { NodeTag, Tags } from '@easycompiler/util/Tags';

export enum SymbolType
{
	IDENTIFIER = 0,
	TYPE_NAME = 1,
	ENUMERATION_CONSTANT = 2
}

export class Symbol implements Tags
{

	public readonly tags: NodeTag = {};

	constructor (public name: string, type: SymbolType)
	{

	}
}

export class SymbolTable
{
	[name: string]: SymbolTable;
}