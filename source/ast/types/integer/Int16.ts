import { Integer } from './Integer';

export class Int16 extends Integer
{
	constructor (name: string)
	{
		super (name, 16, true);
	}
}