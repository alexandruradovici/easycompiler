import { Float } from './Float';
import { Precision } from './Float';

export class FloatSimple extends Float
{
	constructor (name: string)
	{
		super (name, Precision.SIMPLE);
	}
}