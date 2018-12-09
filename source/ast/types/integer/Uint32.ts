import { Integer } from './Integer';

export class Uint32 extends Integer
{
	constructor (name: string)
	{
		super (name, 32, false);
	}
}