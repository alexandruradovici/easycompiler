/**
 * @module util
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

import { i32, u32, i64, u64, f32, f64 } from './types';

export type NodeTagValue = string | i32 | u32 | f32 | f64 | boolean;

export class NodeTag
{
	[label:string]:NodeTagValue 
}

export interface Tags
{
	readonly tags: NodeTag;
}