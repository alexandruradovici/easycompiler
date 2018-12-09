import { u32 } from 'util/types';

export abstract class Type
{
	protected version:u32 = 1;
	constructor (public readonly name: string)
	{

	}

	toJSON ():any 
	{
		let json: any = {
			version: this.version
		};
		return json;
	}
}