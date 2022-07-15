export interface IBackend{
    generateCode(AST: string): string;
}

export abstract class BackendError extends Error {

}
