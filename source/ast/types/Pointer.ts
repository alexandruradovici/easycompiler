import { Type } from './Type';

export class Pointer extends Type
{
	constructor (name: string, public readonly pointerType: Type)
	{
		super (name);
	}
}