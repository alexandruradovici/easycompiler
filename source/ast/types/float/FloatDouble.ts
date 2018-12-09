import { Float } from './Float';
import { Precision } from './Float';

export class FloatDouble extends Float
{
	constructor (name: string)
	{
		super (name, Precision.DOUBLE);
	}
}