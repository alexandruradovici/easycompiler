import { Integer } from './Integer';

export class Uint8 extends Integer
{
	constructor (name: string)
	{
		super (name, 8, false);
	}
}