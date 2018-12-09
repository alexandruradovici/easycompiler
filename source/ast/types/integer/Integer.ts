import { Type } from '../Type';
import { u32 } from 'util/types';

export class Integer extends Type
{
	constructor (name: string, public readonly bits: u32, public readonly signed: boolean)
	{
		super (name);	
	}
}