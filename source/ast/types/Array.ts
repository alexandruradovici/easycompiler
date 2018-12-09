import { Type } from './Type';
import { u32 } from 'util/types';

export class Array extends Type
{
	constructor (name: string, public readonly type: Type, public readonly size: u32)
	{
		super (name);
	}

	toJSON ():any 
	{
		let json = super.toJSON ();
		json.name = this.name;
		json.type = this.type.toJSON ();
		json.size = this.size;
		return json;
	}
}