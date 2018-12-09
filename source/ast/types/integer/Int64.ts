import { Integer } from './Integer';

export class Int64 extends Integer
{
	constructor (name: string)
	{
		super (name, 64, true);
	}
}