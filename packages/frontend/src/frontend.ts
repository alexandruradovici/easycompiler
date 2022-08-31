import { Ast } from "@easycompiler/ast";

export interface IFrontend{
    /** 
     * Parses an input string and generates the correspoding Ast
     * 
     * @param sourceCode - The source code to be transformed
     * into an Ast
     * 
     * @returns the parsed Ast for the `sourceCode`
     * @throws {@link FrontendError} if `sourceCode` cannot be
     * parsed
    */
    parse(sourceCode :string): Ast;
}

export abstract class FrontendError extends Error {

}
