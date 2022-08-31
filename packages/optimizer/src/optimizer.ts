import { Ast } from '@easycompiler/ast';
export interface IOptimizer{
    optimize(Ast :string): Ast
}

export abstract class OptimizerError extends Error {

}