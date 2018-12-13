import { i32, u32, i64, u64, f32, f64 } from '@easycompiler/util/types';

export type NodeTagValue = string | i32 | u32 | f32 | f64 | boolean;

export class NodeTag
{
	[label:string]:NodeTagValue 
}

export interface Tags
{
	readonly tags: NodeTag;
}