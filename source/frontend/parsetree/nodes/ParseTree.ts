import { Node } from '@easycompiler/util/Node';

export abstract class ParseTree extends Node
{
	flattenTree (): ParseTree
	{
		return this;
	}
	abstract clone ():  ParseTree;
	abstract flatten (): ParseTree | undefined;
}