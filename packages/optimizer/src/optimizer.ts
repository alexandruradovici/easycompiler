export interface IOptimizer{
    optimizer(AST :string): string;
}

export abstract class OptimizerError extends Error {

}