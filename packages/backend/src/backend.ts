export interface IBackend{
    generateCode(Ast: string): string;
}

export abstract class BackendError extends Error {

}
