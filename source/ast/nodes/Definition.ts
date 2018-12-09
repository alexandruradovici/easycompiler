import { Node, NodeID } from './Node';

export abstract class Definition extends Node
{
	protected NODE_ID: NodeID = NodeID.DEFINITION;
}