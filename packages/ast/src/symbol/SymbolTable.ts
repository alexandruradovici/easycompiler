/**
 * @module ast/symbol
 */

/**
 * Copyright 2018 Alexandru RADOVICI
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NodeTag, Tags } from '@easycompiler/util';

export enum SymbolType
{
	UNDEFINED,

	// C language
	IDENTIFIER,
	TYPEDEF_NAME,
	ENUMERATION_CONSTANT,

	// Other
	OTHER
}

/*
The name (as a string)
 Attribute: Reserved word, Variable name, Type
name, Procedure name, Constant name
 The data type
 The block level
 Its scope (global, local, or parameter)
 Its offset from the base pointer (for local variables
and parameters only)
*/
export enum SymScope{
	GLOBAL="Global", 
	LOCAL="Local", 
	PARAM="Parameter"
}
export class SymAttributes{
	private _isReserved: boolean = false;
	private _isConst: boolean = false;
	private _scope: SymScope = SymScope.GLOBAL;
	private _tags: NodeTag = {};
	
	constructor(reserved: boolean = false, isConst: boolean = false, scope: string = "global"){
		this.isReserved=reserved;
		this.isConst=isConst;
		this.scope=scope;
	}
	
	set isReserved(reserved: boolean){
		this._isReserved=reserved;
	}
	get isReserved(): boolean{
		return this._isReserved;
	}

	set isConst(isConst: boolean){
		this._isConst=isConst;
	}
	get isConst(): boolean{
		return this._isConst;
	}

	set scope(scope: string){
		switch(scope.toLowerCase()){
			case "local": {
				this._scope=SymScope.LOCAL;
			}
			case "parameter": {
				this._scope=SymScope.PARAM;
			}
			default: {
				this._scope=SymScope.GLOBAL;
			}
		}
	}
	get scope(): string{
		return this._scope;
	}

	public hasTag (label: string): boolean
	{
		if(this._tags[label]) 
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

export class Sym //implements Tags
{
	//public readonly tags: NodeTag = {};
	public type: SymbolType=SymbolType.UNDEFINED;
	public attributes: SymAttributes = new SymAttributes();
	constructor (/*public name: string,*/ type?: string){
		if(type){
			this.setType(type);
		}
	}
	setType(type: string){
		switch(type){
			case "identifier":{
				this.type=SymbolType.IDENTIFIER;
			}
			case "typedef_name":{
				this.type=SymbolType.TYPEDEF_NAME;
			}
			case "enumeration_constant":{
				this.type=SymbolType.ENUMERATION_CONSTANT;
			}
			default: {
				this.type=SymbolType.OTHER;
			}
		}
	}
}
export class SymbolStorage
{
	[name: string]: Sym;
}

export type symbolBlock = {
	blockLevel: number,
	total: number,
	symbols: SymbolStorage,
	parent?: symbolBlock,
	blocks: SymbolList
};
export class SymbolList{
	[name: string]: symbolBlock;
}

export class SymbolTable
{
	// .. <-- lvl3(locals) <-- lvl2(globals) <-- lvl1(keywords) <-- lvl0(null)
	private blockGlobal: SymbolStorage = new SymbolStorage(); //2
	private blockKeywords: SymbolStorage = new SymbolStorage(); //1
	private symList:SymbolList=new SymbolList();

	constructor(){
		this.symList["firstBlock"]={
			blockLevel: 0,
			total: 0,
			symbols: new SymbolStorage(),
			blocks: new SymbolList(),
		}
		this.addBlockToList("firstBlock","keywords",this.blockKeywords);
		this.addBlockToList("keywords","global",this.blockGlobal);
	}

	//block functions
	addBlockToList(parentBlock: string, blockName: string, symbolStorage:SymbolStorage){
		let res= this.getBlock(parentBlock,this.symList);
		if(typeof res==="number") return -1;
		let symObjProp:symbolBlock={
			blockLevel: res.blockLevel+1,
			total: Object.keys(symbolStorage).length,
			symbols: symbolStorage,
			parent: res,
			blocks: new SymbolList(),
		}
		this.symList[parentBlock.toLowerCase()].blocks[blockName.toLowerCase()]=symObjProp;
	}

	getBlock(blockName: string, list: SymbolList): symbolBlock|number{
		if(this.symList[blockName.toLowerCase()].blockLevel==1) return this.symList["firstBlock"].blocks["keywords"];
		else if(this.symList[blockName.toLowerCase()].blockLevel==2)  return this.symList["firstBlock"].blocks["keywords"].blocks["global"];
		else{
			for(let block in list){
				if(list[block].blocks[blockName]){
					return list[block].blocks[blockName];
				}
				else{
					list=list[block].blocks;
					this.getBlock(blockName, list);
				}
			}
		}
		return -1;
	}

	//symbol search functions
	lookupByBlock (symName: string, block: symbolBlock): Sym | number
	{
		if(block.symbols[symName.toLowerCase()]){
			return block.symbols[symName.toLowerCase()];
		}
		else if(block.blockLevel==1){
			return -1;
		}
		else{
			return this.lookupByBlock(symName, (block.parent as symbolBlock));
		}
	}

	lookup(symName: string, blockName: string): Sym | number {
		let res= this.getBlock(blockName, this.symList);
		if(typeof res!=="number"){
			this.lookupByBlock(symName, res);
		}
		return -1;
	}

	//symbol functions
	addOrReplaceSymbolToStorage(blockName: string, symName: string, symType: string): number{
		let res= this.getBlock(blockName, this.symList);
		if(typeof res==="number") return -1;
		if(res.symbols[symName.toLowerCase()]){
			res.symbols[symName.toLowerCase()]=new Sym(symType);
			res.total+=1;
		}
		else{
			res.symbols[symName.toLowerCase()].setType(symType);
		}
		return 0;
	}

	setSymbolType(symName: string, symbolType: string, blockName: string){
		let res= this.lookup(symName, blockName);
		if(typeof res!=="number"){
			res.setType(symbolType);
		}
	}

	setSymbolAttributes(symName: string, blockName: string, isReserved?: boolean, isConst?: boolean, scope?: string){
		let res= this.lookup(symName, blockName);
		if(typeof res!=="number"){
			if(isConst){
				res.attributes.isConst=isConst;
			}
			if(isReserved){
				res.attributes.isReserved=isReserved;
			}
			if(scope){
				res.attributes.scope=scope;
			}
		}
	}

	toJSON():string{
		return JSON.stringify(this.symList);
	}
	
	flush (): void
	{
		this.symList = new SymbolList ();
	}
}


