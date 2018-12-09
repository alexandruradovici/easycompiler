import { Integer } from './Integer';

export class Int8 extends Integer
{
	constructor (name: string)
	{
		super (name, 8, true);
	}
}