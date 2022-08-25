export interface IFrontend{
    /** 
     * Parses an input string and generates the correspoding AST
     * 
     * @param sourceCode - The source code to be transformed
     * into an AST
     * 
     * @returns the parsed AST for the `sourceCode`
     * @throws {@link FrontendError} if `sourceCode` cannot be
     * parsed
    */
    parse(sourceCode :string): JSON;
}

export abstract class FrontendError extends Error {

}
