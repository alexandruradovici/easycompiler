import { CharStreams, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { pascalLexer } from './pascalLexer';
import { ActualParameterContext, BlockContext, CompoundStatementContext, ConstantContext, ConstantDefinitionContext, EmptyStatement_Context, ExpressionContext, FactorContext, FunctionDesignatorContext, IdentifierContext, IdentifierListContext, ParameterListContext, pascalParser, ProcedureStatementContext, ProgramContext, ProgramHeadingContext, SignedFactorContext, SimpleExpressionContext, SimpleStatementContext, SimpleTypeContext, StartContext, StatementContext, StatementsContext, StringContext, TermContext, TypeDefinitionContext, TypeDefinitionPartContext, TypeIdentifierContext, TypeListContext, Type_Context, UnlabelledStatementContext, UnsignedConstantContext, VariableContext, VariableDeclarationContext, VariableDeclarationPartContext } from './pascalParser';
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { pascalVisitor } from './pascalVisitor';

import * as fs from 'fs';

import * as ast from '@easycompiler/ast';
import { IFrontend } from '@easycompiler/frontend';
import { SymbolTable } from '@easycompiler/ast';
import { ConstantDefinitionPartContext } from './pascalParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';


// class ExpressionPascal extends Ast.Expression{
//     nodeId: string;
//     constructor(nodeId: string, value?: Ast.Value, type?: Ast.Type) {
//         super(value,type);
//         this.nodeId=nodeId;
//     }
//     toJSON():string{
//         const json = JSON.parse(super.toJSON());
// 		return JSON.stringify(json);
//     }
// }
let symbolTable:SymbolTable.SymbolTable=new SymbolTable.SymbolTable();
class pascalVisitors extends AbstractParseTreeVisitor<ast.Ast> implements pascalVisitor<ast.Ast>{
    visitProgram(ctx: ProgramContext): ast.Ast{
        let program:ast.Block=new ast.Block("Program");
        program.addChild(this.visit(ctx.programHeading()));
        program.addChild(this.visit(ctx.block()));
        symbolTable.currentBlock="global";
        return program;
    }   
    visitProgramHeading(ctx: ProgramHeadingContext): ast.Ast{
        return new ast.Label((this.visit(ctx.identifier()) as ast.Identifier).name);
    }
    visitBlock(ctx: BlockContext): ast.Ast{
        let block: ast.Block= new ast.Block("Block");
        if(ctx.constantDefinitionPart()){
            for(let i=0;i<ctx.constantDefinitionPart().length;i++){
                block.addChild(this.visit(ctx.constantDefinitionPart(i)));
            }
        }
        if(ctx.typeDefinitionPart()){
            for(let i=0;i<ctx.constantDefinitionPart().length;i++){
                block.addChild(this.visit(ctx.typeDefinitionPart(i)));
            }
        }
        if(ctx.variableDeclarationPart()){
            for(let i=0;i<ctx.variableDeclarationPart().length;i++){
                block.addChild(this.visit(ctx.variableDeclarationPart(i)));
            }
        }
        if(ctx.compoundStatement()){
            block.addChild(this.visit(ctx.compoundStatement()));
        }
        return block;
    }

    visitConstantDefinitionPart(ctx: ConstantDefinitionPartContext): ast.Ast{
        let constantDefinitionParts: ast.Block= new ast.Block("ConstantDefinition");
        for(let i=0;i<ctx.constantDefinition().length;i++){
            constantDefinitionParts.addChild(this.visit(ctx.constantDefinition(i)));
        }
        return constantDefinitionParts;
    }

    visitConstantDefinition(ctx: ConstantDefinitionContext): ast.Ast{
        let constantDefinitions: ast.Block= new ast.Block("ConstantDefinition");
        constantDefinitions.addChild(this.visit(ctx.identifier()));
        constantDefinitions.addChild(this.visit(ctx.constant()));
        return constantDefinitions;
    }

    visitConstant(ctx: ConstantContext): ast.Ast{
        let constant:ast.Block=new ast.Block("constant");
        if(ctx.string()){
            constant.addChild(this.visit(ctx.string() as StringContext));
        }
        return constant;
    }

    visitTypeDefinitionPart(ctx: TypeDefinitionPartContext): ast.Ast{
        let typeDefinitionParts: ast.Block= new ast.Block("TypeDefinition");
        for(let i=0;i<ctx.typeDefinition().length;i++){
            typeDefinitionParts.addChild(this.visit(ctx.typeDefinition(i)));
        }
        return typeDefinitionParts;
    }

    visitTypeDefinition(ctx: TypeDefinitionContext): ast.Ast{
        let typeDefinition:ast.Block=new ast.Block("typeDefinition");
        if(ctx.type_()){
            typeDefinition.addChild(this.visit(ctx.type_() as Type_Context));
        }
        if(ctx.identifier()){
            typeDefinition.addChild(this.visit(ctx.identifier()));
        }
        return typeDefinition;
    }

    visitType_(ctx: Type_Context): ast.Ast{
        let typeDefinition:ast.Block=new ast.Block("type");
        if(ctx.simpleType()){
            typeDefinition.addChild(this.visit(ctx.simpleType() as SimpleTypeContext));
        }
        return typeDefinition;
    }

    visitSimpleType(ctx: SimpleTypeContext): ast.Ast{
        let typeDefinition:ast.Block=new ast.Block("simpleType");
        if(ctx.typeIdentifier()){
            typeDefinition.addChild(this.visit(ctx.typeIdentifier() as TypeIdentifierContext));
        }
        return typeDefinition;
    }

    visitTypeIdentifier(ctx: TypeIdentifierContext): ast.Ast{
        let typeDefinition:ast.Block=new ast.Block("typeIdentifier");
        if(ctx.STRING()){
            return new ast.Identifier("string",new ast.Type((ctx.STRING() as TerminalNode).text))
        }
        return typeDefinition;
    }

    visitVariableDeclarationPart(ctx: VariableDeclarationPartContext): ast.Ast{
        let variableDeclarationParts: ast.Block= new ast.Block("VariableDefinition");
        for(let i=0;i<ctx.variableDeclaration().length;i++){
            variableDeclarationParts.addChild(this.visit(ctx.variableDeclaration(i)));
        }
        return variableDeclarationParts;
    }

    visitVariableDeclaration(ctx: VariableDeclarationContext): ast.Ast{
        let variableDeclaration:ast.Block=new ast.Block("variableDeclaration");
        if(ctx.type_()){
            variableDeclaration.addChild(this.visit(ctx.type_() as Type_Context));
        }
        if(ctx.identifierList()){
            variableDeclaration.addChild(this.visit(ctx.identifierList()));
        }
        return variableDeclaration;
    }

    visitIdentifierList(ctx: IdentifierListContext): ast.Ast{
        let identifierList: ast.Block= new ast.Block("IdentifierList");
        for(let i=0;i<ctx.identifier().length;i++){
            identifierList.addChild(this.visit(ctx.identifier(i)));
        }
        return identifierList;
    }

    visitCompoundStatement(ctx: CompoundStatementContext): ast.Ast{
        let compoundStatements: ast.Block= new ast.Block("CompoundStatement");
        compoundStatements.addChild(this.visit(ctx.statements()));
        return compoundStatements;
    }
    visitStatements(ctx: StatementsContext) : ast.Ast{
        let statements:ast.Block=new ast.Block("Statements");
        for(let i=0;i<ctx.statement().length;i++){
            statements.addChild(this.visit(ctx.statement(i)));
        }
        return statements;
    }
    visitStatement(ctx: StatementContext): ast.Ast{
        let statement:ast.Block=new ast.Block("Statement");
        if(!ctx.label()){
            statement.addChild(this.visit(ctx.unlabelledStatement()));
        }
        return statement;
    }
    visitUnlabelledStatement(ctx: UnlabelledStatementContext): ast.Ast{
        let unlabelledStatement:ast.Block=new ast.Block("UnlabelledStatement");
        if(ctx.simpleStatement()){
            unlabelledStatement.addChild(this.visit(ctx.simpleStatement() as SimpleStatementContext));
        }
        return unlabelledStatement;
    }
    visitSimpleStatement(ctx: SimpleStatementContext): ast.Ast{
        let simpleStatement:ast.Block=new ast.Block("SimpleStatement");
        if(ctx.procedureStatement()){
            simpleStatement.addChild(this.visit(ctx.procedureStatement() as ProcedureStatementContext));
        }
        else if(ctx.emptyStatement_()){
            simpleStatement.addChild(this.visit(ctx.emptyStatement_() as EmptyStatement_Context));
        }
        return simpleStatement;
    }
    visitEmptyStatement_(ctx: EmptyStatement_Context) :ast.Ast{
        return new ast.Block("EmptyStatement");
    }
    visitProcedureStatement(ctx: ProcedureStatementContext): ast.Ast{
        if(ctx.parameterList()){
            return new ast.FunctionCall(this.visit(ctx.identifier()) as ast.Identifier, this.visit(ctx.parameterList() as ParameterListContext) as ast.ParameterList);
        }
        else{
            return new ast.FunctionCall(this.visit(ctx.identifier()) as ast.Identifier);
        }
    }
    visitParameterList(ctx: ParameterListContext): ast.ParameterList{
        let parameterList:ast.Expression[]=[];
        for(let i=0;i<ctx.actualParameter().length;i++){
            parameterList.push(this.visit(ctx.actualParameter(i)) as ast.Expression);
        }
        return new ast.ParameterList(parameterList);
    }
    visitActualParameter(ctx: ActualParameterContext): ast.Ast{
        let actualParameter:ast.Expression=new ast.UnaryExpression(this.visit(ctx.expression()) as ast.Expression, "none");
        return actualParameter;
    }
    visitExpression(ctx: ExpressionContext): ast.Ast{
        let expression:ast.Block=new ast.Block("Expression");
        expression.addChild(this.visit(ctx.simpleExpression()));
        return expression;
    }
    visitSimpleExpression(ctx: SimpleExpressionContext): ast.Ast{
        let simpleExpression:ast.Block=new ast.Block("SimpleExpression");
        simpleExpression.addChild(this.visit(ctx.term()));
        return simpleExpression;
    }
    visitTerm(ctx: TermContext): ast.Ast {
        let term:ast.Block=new ast.Block("Term");
        term.addChild(this.visit(ctx.signedFactor()));
        return term;
    }
    visitSignedFactor(ctx: SignedFactorContext): ast.Ast {
        let signedFactor:ast.Block=new ast.Block("SignedFactor");
        signedFactor.addChild(this.visit(ctx.factor()));
        return signedFactor;
    }
    visitFactor(ctx: FactorContext):ast.Ast{
        let factor:ast.Block=new ast.Block("Factor");
        if(ctx.unsignedConstant()){
            factor.addChild(this.visit(ctx.unsignedConstant() as UnsignedConstantContext));
        }
        if(ctx.variable()){
            factor.addChild(this.visit(ctx.variable() as VariableContext))
        }
        return factor;
    }

    visitVariable(ctx: VariableContext): ast.Ast{
        let variable: ast.Block= new ast.Block("Variable");
        for(let i=0;i<ctx.identifier().length;i++){
            variable.addChild(this.visit(ctx.identifier(i)));
        }
        return variable;
    }

    visitUnsignedConstant(ctx: UnsignedConstantContext): ast.Ast{
        let unsignedConstant:ast.Block=new ast.Block("UnsignedConstant");
        unsignedConstant.addChild(this.visit(ctx.string() as StringContext));
        return unsignedConstant;
    }
    visitString(ctx: StringContext):ast.Ast{
        
        return new ast.Value(ctx.STRING_LITERAL().text, new ast.Type(ast.TypeID.STRING));
    }
    visitIdentifier(ctx: IdentifierContext): ast.Ast{
        return new ast.Identifier(ctx.IDENT().text, new ast.Type(ast.TypeID.VOID));
    }
    protected defaultResult() {
        return new ast.Block("DefaultBlock");
    } 
}

class Frontend implements IFrontend{
    parse(input: string): ast.Ast{
        let inputStream: CodePointCharStream = CharStreams.fromString(input);
        let lexer: pascalLexer = new pascalLexer(inputStream);
        let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
        let parser: pascalParser = new pascalParser(tokenStream);
        let tree:StartContext = parser.start();
        let visitors=new pascalVisitors();
        return visitors.visit(tree);
    }
}

let input: string = fs.readFileSync('./code-pascal.txt').toString();
let pascalFrontend= new Frontend;
let output = pascalFrontend.parse(input).asInterface();
let outputST=symbolTable;
fs.writeFileSync('./output.json',JSON.stringify(output));
fs.writeFileSync('./symbol-table.json',outputST.toJSON());

