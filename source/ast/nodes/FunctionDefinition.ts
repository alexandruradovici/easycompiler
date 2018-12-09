import { Node, ParentNode, NodeID } from './Node';
import { i32 } from 'util/types';
import { Type } from 'ast/types';
import { Block } from './Block';
import { Definition } from './Definition';
import { Expression } from './Expression';
import { VariableDefinition } from './VariableDefinition';
import { u32 } from 'util/types';
import { ASTError } from 'ast/errors';

export class FunctionDefinition extends Definition implements ParentNode
{
	protected NODE_ID: NodeID = NodeID.FUNCTION_DEFINITION;

	constructor (public name: string, private _parameters:VariableDefinition[], private _block:Block, public returnType: Type)
	{
		super ();
		for (let parameter of _parameters)
		{
			parameter.parent = this;
		}
		_block.parent = this;
	}

	get parameters (): VariableDefinition[]
	{
		return this._parameters;
	}

	get block (): Block
	{
		return this._block;
	}

	set block (newBlock: Block)
	{
		newBlock.parent = this;
		let oldBlock = this._block;
		this._block = newBlock;
		oldBlock.removeFromParent ();
	}

	_removeChild (variableDefinition: Node | u32): void
	{
		if (variableDefinition === this._block)
		{
			throw new ASTError ('You can not remove the block from the function definition');
		}
		else
		{
			let pos; 
			if (variableDefinition instanceof VariableDefinition)
			{
				pos = this.getParameterPosition (variableDefinition);
			}
			else
			if (variableDefinition instanceof Node)
			{
				// this is not a child here
				pos = -1;
			}
			else
			{
				pos = variableDefinition;
			}
			if (pos >= 0)
			{
				this._parameters.splice (pos, 1);
			}
		}
	}

	getParameterPosition (variableDefinition: VariableDefinition): i32
	{
		for (let pos in this._parameters)
		{
			if (this._parameters[pos] === variableDefinition) return parseInt (pos);
		}
		return -1;
	}

	toJSON ():any 
	{
		let json = super.toJSON ();
		json.name = this.name;
		json.parameters = [];
		for (let index in this._parameters)
		{
			json.parameters.push (this._parameters[index].toJSON());
		}
		json.block = this._block.toJSON ();
		json.returnType = this.returnType.toJSON ();
		return json;
	}
}