import { Integer } from './Integer';

export class Uint16 extends Integer
{
	constructor (name: string)
	{
		super (name, 16, false);
	}
}