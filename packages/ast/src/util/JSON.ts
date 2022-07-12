import { Precision } from '../types';
import { Expression } from '../nodes';
import { NodeID } from './Node';
import { NodeTagValue } from './Tags';
import { u32 } from './types'; 
import { TypeID } from '../types/Type';

export interface iJSON {
    version: u32,
    node?: NodeID,
    tags?: {
        [key: string]: NodeTagValue,
    }
    left?: iJSON, //BinaryExpression
    right?: iJSON, //BinaryExpression
    operator?: string, //UnaryExpression, BinaryExpression
    expression?: iJSON, //UnaryExpression, ArrayElement, Branch, Return
    index?: Expression, //ArrayElement
    children?: iJSON[], //Block
    thenBlock?: iJSON, //Branch
    elseBlock?: iJSON, //Branch
    value?: string|number, //Constant
    type?: iJSON, //Expression, Identifier, Return, TypeDefinition, VariableDefinition, Array, Bool, Pointer
    fn?: iJSON, //FunctionCall
    args?: iJSON[], //FunctionCall
    name?: string, //FunctionDefinition, Identifier, Jump, Label, Module, StructElement, TypeDefinition, VariableDefinition
    parameters?: iJSON[], //FunctionDefinition
    block?: iJSON, //FunctionDefinition, Module
    returnType?: iJSON, //FunctionDefinition
    jumpType?: string, //Loop
    header?: iJSON, //Loop
    body?: iJSON, //Loop
    end?: iJSON, //Loop
    id?: NodeID, //Module
    struct?: iJSON, //StrictElement
    target?: iJSON, //TypeCast
    precision?: Precision, //Float
    bits?: number, //Integer
    signed?: boolean, //Integer
    size?: number, //Array
    elements?: iJSON[], //Array, Struct
    typeID?: TypeID, //Type
}