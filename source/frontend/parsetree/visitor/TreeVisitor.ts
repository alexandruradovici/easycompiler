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

import { ParseTree, Rule } from "@parsetree/nodes";
import { Module, Block, AST } from "@easycompiler/ast/nodes";
import { i32 } from "@easycompiler/util/types";

export type TreeVisitorFunction = (rule:Rule) => AST | undefined;


class Signature
{
	constructor (public readonly format: string, public readonly fn: TreeVisitorFunction)
	{

	}
}

class TreeVisitorSignature
{
	private signatures:Signature[] = [];

	constructor (private defaultFn: TreeVisitorFunction)
	{

	}

	addSignature (signatureFormat: string, fn: TreeVisitorFunction)
	{
		let normalizedSignatureFormat = this._normalizeSignature (signatureFormat);
		let pos = this.findSignaturePosition (normalizedSignatureFormat);
		let signature = new Signature (normalizedSignatureFormat, fn);
		if (pos >= 0) this.signatures[pos] = signature;
		else this.signatures.push (signature);

	}

	findSignaturePosition (normalizedSignatureFormat: string): i32
	{
		let pos = -1;
		for (let signature of this.signatures)
		{
			pos++;
			if (signature.format === normalizedSignatureFormat) return pos;
		}
		return -1;
	}

	searchFunction (normalizedSignatureFormat: string): TreeVisitorFunction
	{
		for (let signature of this.signatures)
		{
			if (normalizedSignatureFormat.indexOf (signature.format)===0) return signature.fn;
		}
		return this.defaultFn;
	}

	_normalizeSignature (signatureFormat: string)
	{
		let s = signatureFormat.split (/\s+/);
		return s.join (' ');
	}
}

class RuleFunction 
{
	[ruleName:string]:TreeVisitorSignature;
}

export class TreeVisitor
{
	private rules:RuleFunction = new RuleFunction ();

	constructor (public readonly parseTree: ParseTree)
	{
		
	}

	printSignatures (): void
	{
		this._printSignatures (<Rule>this.parseTree);
	}

	_printSignatures (rule: Rule): void
	{
		console.log (rule.signature());
		for (let element of rule.children)
		{
			if (element instanceof Rule)
			{
				this._printSignatures (element);
			}
		}
	}

	rule (ruleName: string, f: TreeVisitorFunction): void
	{
		this.rules[ruleName] = new TreeVisitorSignature (f);
	}

	ruleFormat (ruleName: string, signatureFormat: string, f: TreeVisitorFunction): void
	{
		if (this.rules[ruleName])
		{
			this.rules[ruleName].addSignature (signatureFormat, f);
		}
	}

	// TODO should be more abstract?
	walk (): Module
	{
		return new Module ('module', new Block ());
	}
}