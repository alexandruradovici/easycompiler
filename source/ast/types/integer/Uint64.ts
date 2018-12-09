import { Integer } from './Integer';

export class Uint64 extends Integer
{
	constructor (name: string)
	{
		super (name, 64, false);
	}
}