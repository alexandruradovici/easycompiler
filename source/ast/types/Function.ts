import { Type } from './Type';

export class Function extends Type
{
	constructor (name: string = '__function')
	{
		super (name);
	}
}