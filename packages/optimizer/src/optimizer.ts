import { AST } from '@easycompiler/ast';
export interface IOptimizer{
    optimize(AST :string): AST;
}

export abstract class OptimizerError extends Error {

}