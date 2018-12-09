import { Integer } from './Integer';

export class Int32 extends Integer
{
	constructor (name: string)
	{
		super (name, 32, true);
	}
}