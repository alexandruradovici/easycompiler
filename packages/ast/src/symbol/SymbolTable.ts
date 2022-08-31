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
	toJSON(): string {
		let json={
			type: this.type
		}
		return JSON.parse(JSON.stringify(json));
	}
}


export class SymbolStorage
{
	storage: { [name: string]: Sym; }={};
	toJSON():string{
		let json={
			storage: this.storage
		}
		return JSON.parse(JSON.stringify(json));
	}
}
export class symbolBlock {
	public blockLevel: number;
	private total: number=0;
	public symbols: SymbolStorage=new SymbolStorage();
	public parent?: symbolBlock;
	public blocks: SymbolList=new SymbolList();

	constructor(blockLevel: number, parent?:symbolBlock){
		this.blockLevel=blockLevel;
		if(parent) this.parent=parent;
	}
	setTotal(){
		this.total=Object.keys(this.symbols).length;
	}
	toJSON():JSON{
		let json:{
			blocklevel: number,
			total: number,
			symbols: {
				[key: string]: string
			},
			blocks: {
				[key: string]: JSON
			},
		}={
			blocklevel: 0,
			total: 0,
			symbols: {},
			blocks: {}
		};

		json.blocklevel=this.blockLevel;
		json.total=this.total;
		for(const key in Object.keys(this.symbols.storage)){
			json.symbols[key]=this.symbols.storage[key].toJSON();
			
		}
		for(const key of Object.keys(this.blocks.list)){
			json.blocks[key]=this.blocks.list[key].toJSON();
			
		}
		return JSON.parse(JSON.stringify(json));
	}
};

export class SymbolList{
	list: { [name: string]: symbolBlock; }={}; 
	toJSON():string{
		let json:{ [key: string]: JSON}={};
			for(const key of Object.keys(this.list)){
				//console.log("Key: "+key,this.list[key]);
				if(this.list[key]){
					json[key]=this.list[key].toJSON();
					//console.log("keys: ", json[key]);
				}
			}
		return JSON.stringify(json);
	}
}

export class SymbolTable
{
	// .. <-- lvl3(locals) <-- lvl2(globals) <-- lvl1(keywords) <-- lvl0(null)
	private symList:SymbolList=new SymbolList();
	public currentBlock:String;

	constructor(){
		this.symList.list["firstblock"]=new symbolBlock(0);
		this.addBlockToList("firstblock","keywords");
		console.log("addBlock :", this.addBlockToList("keywords","global"));
		this.currentBlock="global";
	}

	//block functions
	addBlockToList(parentBlock: string, blockName: string): number{
		let blockNameLC=blockName.toLowerCase();
		let res= this.getBlock(parentBlock);
		if(typeof res==="number") return -1;
		let newBlock:symbolBlock=new symbolBlock(res.blockLevel+1,res);
		if(newBlock.parent){
			newBlock.parent.blocks.list[blockNameLC]=newBlock;
		}
		res.blocks.list[blockNameLC]=newBlock;
		return 0;
		//console.log("Block added:", res.blocks.list[blockNameLC]);
	}

	getBlock(blockName:string): symbolBlock|number{
		let list=this.symList;
		let blockNameLC=blockName.toLowerCase();
		return this.getBlockWithList(blockNameLC, list);
	}

	getBlockWithList(blockName: string, list: SymbolList): symbolBlock|number{
		if(list.list[blockName]){
			console.log("Block name: ",blockName);
			console.log("Level: ", list.list[blockName].blockLevel);
			if(list.list[blockName].blockLevel==0) return this.symList.list["firstblock"];
			else if(list.list[blockName].blockLevel==1)  return this.symList.list["firstblock"].blocks.list["keywords"];
			else if(list.list[blockName].blockLevel==2)  return this.symList.list["firstblock"].blocks.list["keywords"].blocks.list["global"];	
		}
		else{
			for(const block of Object.keys(list.list)){
				console.log("Else Block name: ", blockName);
				if(list.list[block].blocks.list[blockName]){
					console.log("Else parent name of "+blockName+": ", block);
					return list.list[block].blocks.list[blockName];
				}
				else{
					list=list.list[block].blocks;
					this.getBlockWithList(blockName, list);
				}
				
			}
		}
		return -1;
	}

	//symbol search functions
	lookupByBlock (symName: string, block: symbolBlock): Sym | number
	{
		let symNameLC=symName.toLowerCase();
		if(block.symbols.storage[symNameLC]){
			return block.symbols.storage[symNameLC];
		}
		else if(block.blockLevel==1){
			return -1;
		}
		else{
			return this.lookupByBlock(symNameLC, (block.parent as symbolBlock));
		}
	}

	lookup(symName: string, blockName: string): Sym | number {
		let symNameLC=symName.toLowerCase();
		let res= this.getBlock(blockName);
		if(typeof res!=="number"){
			this.lookupByBlock(symNameLC, res);
		}
		return -1;
	}

	//symbol functions
	addOrReplaceSymbolToStorage(blockName: string, symName: string, symType: string): number{
		let symNameLC=symName.toLowerCase();
		let res= this.getBlock(blockName);
		if(typeof res==="number") return -1;
		if(res.symbols.storage[symNameLC]){
			res.symbols.storage[symNameLC]=new Sym(symType);
			res.setTotal();
		}
		else{
			res.symbols.storage[symName].setType(symType);
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
		return this.symList.toJSON();
	}
		
	flush (): void
	{
		this.symList = new SymbolList ();
	}
}


