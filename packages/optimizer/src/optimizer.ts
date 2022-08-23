//import { AST } from '@easycompiler/ast';
export interface IOptimizer{
    optimize(AST :string): string;
}

export abstract class OptimizerError extends Error {

}