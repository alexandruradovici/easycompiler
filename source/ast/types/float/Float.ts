import { Type } from '../Type';

export enum Precision {
	SIMPLE = 0,
	DOUBLE = 1
};

export class Float extends Type
{
	constructor (name: string, public readonly precision: Precision)
	{
		super (name);	
	}
}