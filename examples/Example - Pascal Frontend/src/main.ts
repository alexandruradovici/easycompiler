import { CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { pascalLexer } from './pascalLexer';
import { ActualParameterContext, BlockContext, CompoundStatementContext, EmptyStatement_Context, ExpressionContext, FactorContext, FunctionDesignatorContext, IdentifierContext, ParameterListContext, pascalParser, ProcedureStatementContext, ProgramContext, ProgramHeadingContext, SignedFactorContext, SimpleExpressionContext, SimpleStatementContext, StartContext, StatementContext, StatementsContext, StringContext, TermContext, UnlabelledStatementContext, UnsignedConstantContext } from './pascalParser';
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { pascalVisitor } from './pascalVisitor';

import * as fs from 'fs';

import * as AST from '@easycompiler/ast/dist';
import { IFrontend } from '@easycompiler/frontend/dist';


class ExpressionPascal extends AST.Expression{
    constructor(value?: AST.Value, type?: AST.Type) {
        super(value,type);
    }
    toJSON():string{
        const json = JSON.parse(super.toJSON());
		return JSON.stringify(json);
    }
}

class pascalVisitors extends AbstractParseTreeVisitor<AST.AST> implements pascalVisitor<AST.AST>{
    visitProgram(ctx: ProgramContext): AST.AST{
        let program:AST.Block=new AST.Block("Program");
        program.addChild(this.visit(ctx.programHeading()));
        program.addChild(this.visit(ctx.block()));
        return program;
    }   
    visitProgramHeading(ctx: ProgramHeadingContext): AST.AST{
        return new AST.Label((this.visit(ctx.identifier()) as AST.Identifier).name);
    }
    visitBlock(ctx: BlockContext): AST.AST{
        let block: AST.Block= new AST.Block("Block");
        block.addChild(this.visit(ctx.compoundStatement()));
        return block;
    }
    visitCompoundStatement(ctx: CompoundStatementContext): AST.AST{
        let compoundStatements: AST.Block= new AST.Block("CompoundStatement");
        compoundStatements.addChild(this.visit(ctx.statements()));
        return compoundStatements;
    }
    visitStatements(ctx: StatementsContext) : AST.AST{
        let statements:AST.Block=new AST.Block("Statements");
        for(let i=0;i<ctx.statement().length;i++){
            statements.addChild(this.visit(ctx.statement(i)));
        }
        return statements;
    }
    visitStatement(ctx: StatementContext): AST.AST{
        let statement:AST.Block=new AST.Block("Statement");
        if(!ctx.label()){
            statement.addChild(this.visit(ctx.unlabelledStatement()));
        }
        return statement;
    }
    visitUnlabelledStatement(ctx: UnlabelledStatementContext): AST.AST{
        let unlabelledStatement:AST.Block=new AST.Block("UnlabelledStatement");
        if(ctx.simpleStatement()){
            unlabelledStatement.addChild(this.visit(ctx.simpleStatement() as SimpleStatementContext));
        }
        return unlabelledStatement;
    }
    visitSimpleStatement(ctx: SimpleStatementContext): AST.AST{
        let simpleStatement:AST.Block=new AST.Block("SimpleStatement");
        if(ctx.procedureStatement()){
            simpleStatement.addChild(this.visit(ctx.procedureStatement() as ProcedureStatementContext));
        }
        else if(ctx.emptyStatement_()){
            simpleStatement.addChild(this.visit(ctx.emptyStatement_() as EmptyStatement_Context));
        }
        return simpleStatement;
    }
    visitEmptyStatement_(ctx: EmptyStatement_Context) :AST.AST{
        return new AST.Block("EmptyStatement");
    }
    visitProcedureStatement(ctx: ProcedureStatementContext): AST.AST{
        if(ctx.parameterList()){
            return new AST.FunctionCall(this.visit(ctx.identifier()) as AST.Identifier, this.visit(ctx.parameterList() as ParameterListContext) as AST.Block);
        }
        else{
            return new AST.FunctionCall(new ExpressionPascal(this.visit(ctx.identifier()) as AST.Value), new AST.Block("EmptyParameters"));
        }
    }
    visitParameterList(ctx: ParameterListContext): AST.AST{
        console.log("paramlist");
        let parameterList:AST.Block=new AST.Block("ParameterList");
        for(let i=0;i<ctx.actualParameter().length;i++){
            parameterList.addChild(this.visit(ctx.actualParameter(i)));
        }
        return parameterList;
    }
    visitActualParameter(ctx: ActualParameterContext): AST.AST{
        console.log("actparam");
        let actualParameter:AST.Block=new AST.Block("Parameter");
        actualParameter.addChild(this.visit(ctx.expression()));
        return actualParameter;
    }
    visitExpression(ctx: ExpressionContext): AST.AST{
        console.log("expr");

        let expression:AST.Block=new AST.Block("Expression");
        expression.addChild(this.visit(ctx.simpleExpression()));
        return expression;
    }
    visitSimpleExpression(ctx: SimpleExpressionContext): AST.AST{
        console.log("simpexpr");

        let simpleExpression:AST.Block=new AST.Block("SimpleExpression");
        simpleExpression.addChild(this.visit(ctx.term()));
        return simpleExpression;
    }
    visitTerm(ctx: TermContext): AST.AST {
        console.log("term");

        let term:AST.Block=new AST.Block("Term");
        term.addChild(this.visit(ctx.signedFactor()));
        return term;
    }
    visitSignedFactor(ctx: SignedFactorContext): AST.AST {
        console.log("sgfact");

        let signedFactor:AST.Block=new AST.Block("SignedFactor");
        signedFactor.addChild(this.visit(ctx.factor()));
        return signedFactor;
    }
    visitFactor(ctx: FactorContext):AST.AST{
        console.log("fact");

        let signedFactor:AST.Block=new AST.Block("SignedFactor");
        signedFactor.addChild(this.visit(ctx.unsignedConstant() as UnsignedConstantContext));
        return signedFactor;
    }
    visitUnsignedConstant(ctx: UnsignedConstantContext): AST.AST{
        console.log("usgcost");

        let unsignedConstant:AST.Block=new AST.Block("UnsignedConstant");
        unsignedConstant.addChild(this.visit(ctx.string() as StringContext));
        return unsignedConstant;
    }
    visitString(ctx: StringContext):AST.AST{
        console.log("str");

        return new AST.Value(ctx.STRING_LITERAL().text, new AST.Type("string"));
    }
    visitIdentifier(ctx: IdentifierContext): AST.AST{
        console.log("ident");

        return new AST.Identifier(ctx.IDENT().text, new AST.Type("void"));
    }
    protected defaultResult() {
        return new AST.Block("DefaultBlock");
    } 
}

class Frontend implements IFrontend{
    parse(input: string): string{
        let inputStream: CodePointCharStream = CharStreams.fromString(input);
        let lexer: pascalLexer = new pascalLexer(inputStream);
        let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
        let parser: pascalParser = new pascalParser(tokenStream);
        let tree:StartContext = parser.start();
        console.log(tree);
        let visitors=new pascalVisitors();
        return JSON.stringify((visitors.visit(tree).parseJSON()), null, 4);
        //return "";
    }
}

let input: string = fs.readFileSync('./code-pascal.txt').toString();
let pascalFrontend= new Frontend;
//console.log(input);
console.log(pascalFrontend.parse(input));

