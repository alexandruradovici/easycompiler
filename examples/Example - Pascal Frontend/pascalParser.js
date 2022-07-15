"use strict";
// Generated from ./pascal.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedureDeclarationContext = exports.ProcedureOrFunctionDeclarationContext = exports.ProcedureAndFunctionDeclarationPartContext = exports.VariableDeclarationContext = exports.VariableDeclarationPartContext = exports.PointerTypeContext = exports.FileTypeContext = exports.BaseTypeContext = exports.SetTypeContext = exports.VariantContext = exports.TagContext = exports.VariantPartContext = exports.RecordSectionContext = exports.FixedPartContext = exports.FieldListContext = exports.RecordTypeContext = exports.ComponentTypeContext = exports.IndexTypeContext = exports.TypeListContext = exports.ArrayTypeContext = exports.StringtypeContext = exports.UnpackedStructuredTypeContext = exports.StructuredTypeContext = exports.TypeIdentifierContext = exports.SubrangeTypeContext = exports.ScalarTypeContext = exports.SimpleTypeContext = exports.Type_Context = exports.ProcedureTypeContext = exports.FunctionTypeContext = exports.TypeDefinitionContext = exports.TypeDefinitionPartContext = exports.StringContext = exports.Bool_Context = exports.SignContext = exports.UnsignedRealContext = exports.UnsignedIntegerContext = exports.UnsignedNumberContext = exports.ConstantContext = exports.ConstantChrContext = exports.ConstantDefinitionContext = exports.ConstantDefinitionPartContext = exports.LabelContext = exports.LabelDeclarationPartContext = exports.UsesUnitsPartContext = exports.BlockContext = exports.IdentifierContext = exports.ProgramHeadingContext = exports.ProgramContext = exports.pascalParser = void 0;
exports.RecordVariableListContext = exports.WithStatementContext = exports.FinalValueContext = exports.InitialValueContext = exports.ForListContext = exports.ForStatementContext = exports.RepeatStatementContext = exports.WhileStatementContext = exports.RepetetiveStatementContext = exports.CaseListElementContext = exports.CaseStatementContext = exports.IfStatementContext = exports.ConditionalStatementContext = exports.StatementsContext = exports.CompoundStatementContext = exports.StructuredStatementContext = exports.Empty_Context = exports.EmptyStatement_Context = exports.GotoStatementContext = exports.ParameterwidthContext = exports.ActualParameterContext = exports.ProcedureStatementContext = exports.ElementContext = exports.ElementListContext = exports.Set_Context = exports.ParameterListContext = exports.FunctionDesignatorContext = exports.UnsignedConstantContext = exports.FactorContext = exports.SignedFactorContext = exports.MultiplicativeoperatorContext = exports.TermContext = exports.AdditiveoperatorContext = exports.SimpleExpressionContext = exports.RelationaloperatorContext = exports.ExpressionContext = exports.VariableContext = exports.AssignmentStatementContext = exports.SimpleStatementContext = exports.UnlabelledStatementContext = exports.StatementContext = exports.ResultTypeContext = exports.FunctionDeclarationContext = exports.ConstListContext = exports.IdentifierListContext = exports.ParameterGroupContext = exports.FormalParameterSectionContext = exports.FormalParameterListContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class pascalParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(pascalParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return pascalParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "pascal.g4"; }
    // @Override
    get ruleNames() { return pascalParser.ruleNames; }
    // @Override
    get serializedATN() { return pascalParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, pascalParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.programHeading();
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.INTERFACE) {
                    {
                        this.state = 195;
                        this.match(pascalParser.INTERFACE);
                    }
                }
                this.state = 198;
                this.block();
                this.state = 199;
                this.match(pascalParser.DOT);
                this.state = 200;
                this.match(pascalParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    programHeading() {
        let _localctx = new ProgramHeadingContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, pascalParser.RULE_programHeading);
        let _la;
        try {
            this.state = 216;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.PROGRAM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 202;
                        this.match(pascalParser.PROGRAM);
                        this.state = 203;
                        this.identifier();
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === pascalParser.LPAREN) {
                            {
                                this.state = 204;
                                this.match(pascalParser.LPAREN);
                                this.state = 205;
                                this.identifierList();
                                this.state = 206;
                                this.match(pascalParser.RPAREN);
                            }
                        }
                        this.state = 210;
                        this.match(pascalParser.SEMI);
                    }
                    break;
                case pascalParser.UNIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 212;
                        this.match(pascalParser.UNIT);
                        this.state = 213;
                        this.identifier();
                        this.state = 214;
                        this.match(pascalParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, pascalParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(pascalParser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, pascalParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (pascalParser.CONST - 8)) | (1 << (pascalParser.FUNCTION - 8)) | (1 << (pascalParser.LABEL - 8)) | (1 << (pascalParser.PROCEDURE - 8)) | (1 << (pascalParser.TYPE - 8)) | (1 << (pascalParser.VAR - 8)))) !== 0) || _la === pascalParser.USES || _la === pascalParser.IMPLEMENTATION) {
                    {
                        this.state = 227;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case pascalParser.LABEL:
                                {
                                    this.state = 220;
                                    this.labelDeclarationPart();
                                }
                                break;
                            case pascalParser.CONST:
                                {
                                    this.state = 221;
                                    this.constantDefinitionPart();
                                }
                                break;
                            case pascalParser.TYPE:
                                {
                                    this.state = 222;
                                    this.typeDefinitionPart();
                                }
                                break;
                            case pascalParser.VAR:
                                {
                                    this.state = 223;
                                    this.variableDeclarationPart();
                                }
                                break;
                            case pascalParser.FUNCTION:
                            case pascalParser.PROCEDURE:
                                {
                                    this.state = 224;
                                    this.procedureAndFunctionDeclarationPart();
                                }
                                break;
                            case pascalParser.USES:
                                {
                                    this.state = 225;
                                    this.usesUnitsPart();
                                }
                                break;
                            case pascalParser.IMPLEMENTATION:
                                {
                                    this.state = 226;
                                    this.match(pascalParser.IMPLEMENTATION);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 231;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 232;
                this.compoundStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    usesUnitsPart() {
        let _localctx = new UsesUnitsPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, pascalParser.RULE_usesUnitsPart);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(pascalParser.USES);
                this.state = 235;
                this.identifierList();
                this.state = 236;
                this.match(pascalParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    labelDeclarationPart() {
        let _localctx = new LabelDeclarationPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, pascalParser.RULE_labelDeclarationPart);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(pascalParser.LABEL);
                this.state = 239;
                this.label();
                this.state = 244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 240;
                            this.match(pascalParser.COMMA);
                            this.state = 241;
                            this.label();
                        }
                    }
                    this.state = 246;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 247;
                this.match(pascalParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    label() {
        let _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, pascalParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                this.unsignedInteger();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constantDefinitionPart() {
        let _localctx = new ConstantDefinitionPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, pascalParser.RULE_constantDefinitionPart);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.match(pascalParser.CONST);
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 252;
                            this.constantDefinition();
                            this.state = 253;
                            this.match(pascalParser.SEMI);
                        }
                    }
                    this.state = 257;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === pascalParser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constantDefinition() {
        let _localctx = new ConstantDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, pascalParser.RULE_constantDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.identifier();
                this.state = 260;
                this.match(pascalParser.EQUAL);
                this.state = 261;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constantChr() {
        let _localctx = new ConstantChrContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, pascalParser.RULE_constantChr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 263;
                this.match(pascalParser.CHR);
                this.state = 264;
                this.match(pascalParser.LPAREN);
                this.state = 265;
                this.unsignedInteger();
                this.state = 266;
                this.match(pascalParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constant() {
        let _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, pascalParser.RULE_constant);
        try {
            this.state = 278;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 268;
                        this.unsignedNumber();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 269;
                        this.sign();
                        this.state = 270;
                        this.unsignedNumber();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 272;
                        this.identifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 273;
                        this.sign();
                        this.state = 274;
                        this.identifier();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 276;
                        this.string();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 277;
                        this.constantChr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unsignedNumber() {
        let _localctx = new UnsignedNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, pascalParser.RULE_unsignedNumber);
        try {
            this.state = 282;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.NUM_INT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 280;
                        this.unsignedInteger();
                    }
                    break;
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 281;
                        this.unsignedReal();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unsignedInteger() {
        let _localctx = new UnsignedIntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, pascalParser.RULE_unsignedInteger);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                this.match(pascalParser.NUM_INT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unsignedReal() {
        let _localctx = new UnsignedRealContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, pascalParser.RULE_unsignedReal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                this.match(pascalParser.NUM_REAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sign() {
        let _localctx = new SignContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, pascalParser.RULE_sign);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.PLUS || _la === pascalParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bool_() {
        let _localctx = new Bool_Context(this._ctx, this.state);
        this.enterRule(_localctx, 30, pascalParser.RULE_bool_);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.TRUE || _la === pascalParser.FALSE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string() {
        let _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, pascalParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 292;
                this.match(pascalParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDefinitionPart() {
        let _localctx = new TypeDefinitionPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, pascalParser.RULE_typeDefinitionPart);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 294;
                this.match(pascalParser.TYPE);
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 295;
                            this.typeDefinition();
                            this.state = 296;
                            this.match(pascalParser.SEMI);
                        }
                    }
                    this.state = 300;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === pascalParser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDefinition() {
        let _localctx = new TypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, pascalParser.RULE_typeDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 302;
                this.identifier();
                this.state = 303;
                this.match(pascalParser.EQUAL);
                this.state = 307;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pascalParser.ARRAY:
                    case pascalParser.BOOLEAN:
                    case pascalParser.CHAR:
                    case pascalParser.CHR:
                    case pascalParser.FILE:
                    case pascalParser.INTEGER:
                    case pascalParser.PACKED:
                    case pascalParser.REAL:
                    case pascalParser.RECORD:
                    case pascalParser.SET:
                    case pascalParser.PLUS:
                    case pascalParser.MINUS:
                    case pascalParser.LPAREN:
                    case pascalParser.POINTER:
                    case pascalParser.STRING:
                    case pascalParser.IDENT:
                    case pascalParser.STRING_LITERAL:
                    case pascalParser.NUM_INT:
                    case pascalParser.NUM_REAL:
                        {
                            this.state = 304;
                            this.type_();
                        }
                        break;
                    case pascalParser.FUNCTION:
                        {
                            this.state = 305;
                            this.functionType();
                        }
                        break;
                    case pascalParser.PROCEDURE:
                        {
                            this.state = 306;
                            this.procedureType();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionType() {
        let _localctx = new FunctionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, pascalParser.RULE_functionType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(pascalParser.FUNCTION);
                this.state = 311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 310;
                        this.formalParameterList();
                    }
                }
                this.state = 313;
                this.match(pascalParser.COLON);
                this.state = 314;
                this.resultType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    procedureType() {
        let _localctx = new ProcedureTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, pascalParser.RULE_procedureType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 316;
                this.match(pascalParser.PROCEDURE);
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 317;
                        this.formalParameterList();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_() {
        let _localctx = new Type_Context(this._ctx, this.state);
        this.enterRule(_localctx, 42, pascalParser.RULE_type_);
        try {
            this.state = 323;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.BOOLEAN:
                case pascalParser.CHAR:
                case pascalParser.CHR:
                case pascalParser.INTEGER:
                case pascalParser.REAL:
                case pascalParser.PLUS:
                case pascalParser.MINUS:
                case pascalParser.LPAREN:
                case pascalParser.STRING:
                case pascalParser.IDENT:
                case pascalParser.STRING_LITERAL:
                case pascalParser.NUM_INT:
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 320;
                        this.simpleType();
                    }
                    break;
                case pascalParser.ARRAY:
                case pascalParser.FILE:
                case pascalParser.PACKED:
                case pascalParser.RECORD:
                case pascalParser.SET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 321;
                        this.structuredType();
                    }
                    break;
                case pascalParser.POINTER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 322;
                        this.pointerType();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleType() {
        let _localctx = new SimpleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, pascalParser.RULE_simpleType);
        try {
            this.state = 329;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 325;
                        this.scalarType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 326;
                        this.subrangeType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 327;
                        this.typeIdentifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 328;
                        this.stringtype();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    scalarType() {
        let _localctx = new ScalarTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, pascalParser.RULE_scalarType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 331;
                this.match(pascalParser.LPAREN);
                this.state = 332;
                this.identifierList();
                this.state = 333;
                this.match(pascalParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    subrangeType() {
        let _localctx = new SubrangeTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, pascalParser.RULE_subrangeType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this.constant();
                this.state = 336;
                this.match(pascalParser.DOTDOT);
                this.state = 337;
                this.constant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeIdentifier() {
        let _localctx = new TypeIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, pascalParser.RULE_typeIdentifier);
        let _la;
        try {
            this.state = 341;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 339;
                        this.identifier();
                    }
                    break;
                case pascalParser.BOOLEAN:
                case pascalParser.CHAR:
                case pascalParser.INTEGER:
                case pascalParser.REAL:
                case pascalParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 340;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.BOOLEAN) | (1 << pascalParser.CHAR) | (1 << pascalParser.INTEGER) | (1 << pascalParser.REAL))) !== 0) || _la === pascalParser.STRING)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structuredType() {
        let _localctx = new StructuredTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, pascalParser.RULE_structuredType);
        try {
            this.state = 346;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.PACKED:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 343;
                        this.match(pascalParser.PACKED);
                        this.state = 344;
                        this.unpackedStructuredType();
                    }
                    break;
                case pascalParser.ARRAY:
                case pascalParser.FILE:
                case pascalParser.RECORD:
                case pascalParser.SET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 345;
                        this.unpackedStructuredType();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unpackedStructuredType() {
        let _localctx = new UnpackedStructuredTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, pascalParser.RULE_unpackedStructuredType);
        try {
            this.state = 352;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.ARRAY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 348;
                        this.arrayType();
                    }
                    break;
                case pascalParser.RECORD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 349;
                        this.recordType();
                    }
                    break;
                case pascalParser.SET:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 350;
                        this.setType();
                    }
                    break;
                case pascalParser.FILE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 351;
                        this.fileType();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stringtype() {
        let _localctx = new StringtypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, pascalParser.RULE_stringtype);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                this.match(pascalParser.STRING);
                this.state = 355;
                this.match(pascalParser.LBRACK);
                this.state = 358;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pascalParser.IDENT:
                        {
                            this.state = 356;
                            this.identifier();
                        }
                        break;
                    case pascalParser.NUM_INT:
                    case pascalParser.NUM_REAL:
                        {
                            this.state = 357;
                            this.unsignedNumber();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 360;
                this.match(pascalParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayType() {
        let _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, pascalParser.RULE_arrayType);
        try {
            this.state = 376;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 362;
                        this.match(pascalParser.ARRAY);
                        this.state = 363;
                        this.match(pascalParser.LBRACK);
                        this.state = 364;
                        this.typeList();
                        this.state = 365;
                        this.match(pascalParser.RBRACK);
                        this.state = 366;
                        this.match(pascalParser.OF);
                        this.state = 367;
                        this.componentType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 369;
                        this.match(pascalParser.ARRAY);
                        this.state = 370;
                        this.match(pascalParser.LBRACK2);
                        this.state = 371;
                        this.typeList();
                        this.state = 372;
                        this.match(pascalParser.RBRACK2);
                        this.state = 373;
                        this.match(pascalParser.OF);
                        this.state = 374;
                        this.componentType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeList() {
        let _localctx = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, pascalParser.RULE_typeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 378;
                this.indexType();
                this.state = 383;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 379;
                            this.match(pascalParser.COMMA);
                            this.state = 380;
                            this.indexType();
                        }
                    }
                    this.state = 385;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    indexType() {
        let _localctx = new IndexTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, pascalParser.RULE_indexType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this.simpleType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentType() {
        let _localctx = new ComponentTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, pascalParser.RULE_componentType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordType() {
        let _localctx = new RecordTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, pascalParser.RULE_recordType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(pascalParser.RECORD);
                this.state = 392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.CASE || _la === pascalParser.IDENT) {
                    {
                        this.state = 391;
                        this.fieldList();
                    }
                }
                this.state = 394;
                this.match(pascalParser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fieldList() {
        let _localctx = new FieldListContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, pascalParser.RULE_fieldList);
        let _la;
        try {
            this.state = 402;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 396;
                        this.fixedPart();
                        this.state = 399;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === pascalParser.SEMI) {
                            {
                                this.state = 397;
                                this.match(pascalParser.SEMI);
                                this.state = 398;
                                this.variantPart();
                            }
                        }
                    }
                    break;
                case pascalParser.CASE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 401;
                        this.variantPart();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fixedPart() {
        let _localctx = new FixedPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, pascalParser.RULE_fixedPart);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 404;
                this.recordSection();
                this.state = 409;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 405;
                                this.match(pascalParser.SEMI);
                                this.state = 406;
                                this.recordSection();
                            }
                        }
                    }
                    this.state = 411;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordSection() {
        let _localctx = new RecordSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, pascalParser.RULE_recordSection);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this.identifierList();
                this.state = 413;
                this.match(pascalParser.COLON);
                this.state = 414;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variantPart() {
        let _localctx = new VariantPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, pascalParser.RULE_variantPart);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 416;
                this.match(pascalParser.CASE);
                this.state = 417;
                this.tag();
                this.state = 418;
                this.match(pascalParser.OF);
                this.state = 419;
                this.variant();
                this.state = 424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.SEMI) {
                    {
                        {
                            this.state = 420;
                            this.match(pascalParser.SEMI);
                            this.state = 421;
                            this.variant();
                        }
                    }
                    this.state = 426;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tag() {
        let _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, pascalParser.RULE_tag);
        try {
            this.state = 432;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
                        this.identifier();
                        this.state = 428;
                        this.match(pascalParser.COLON);
                        this.state = 429;
                        this.typeIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 431;
                        this.typeIdentifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variant() {
        let _localctx = new VariantContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, pascalParser.RULE_variant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 434;
                this.constList();
                this.state = 435;
                this.match(pascalParser.COLON);
                this.state = 436;
                this.match(pascalParser.LPAREN);
                this.state = 437;
                this.fieldList();
                this.state = 438;
                this.match(pascalParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    setType() {
        let _localctx = new SetTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, pascalParser.RULE_setType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                this.match(pascalParser.SET);
                this.state = 441;
                this.match(pascalParser.OF);
                this.state = 442;
                this.baseType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    baseType() {
        let _localctx = new BaseTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, pascalParser.RULE_baseType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 444;
                this.simpleType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fileType() {
        let _localctx = new FileTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, pascalParser.RULE_fileType);
        try {
            this.state = 450;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 446;
                        this.match(pascalParser.FILE);
                        this.state = 447;
                        this.match(pascalParser.OF);
                        this.state = 448;
                        this.type_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 449;
                        this.match(pascalParser.FILE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pointerType() {
        let _localctx = new PointerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, pascalParser.RULE_pointerType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 452;
                this.match(pascalParser.POINTER);
                this.state = 453;
                this.typeIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclarationPart() {
        let _localctx = new VariableDeclarationPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, pascalParser.RULE_variableDeclarationPart);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.match(pascalParser.VAR);
                this.state = 456;
                this.variableDeclaration();
                this.state = 461;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 457;
                                this.match(pascalParser.SEMI);
                                this.state = 458;
                                this.variableDeclaration();
                            }
                        }
                    }
                    this.state = 463;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                }
                this.state = 464;
                this.match(pascalParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclaration() {
        let _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, pascalParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 466;
                this.identifierList();
                this.state = 467;
                this.match(pascalParser.COLON);
                this.state = 468;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    procedureAndFunctionDeclarationPart() {
        let _localctx = new ProcedureAndFunctionDeclarationPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, pascalParser.RULE_procedureAndFunctionDeclarationPart);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 470;
                this.procedureOrFunctionDeclaration();
                this.state = 471;
                this.match(pascalParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    procedureOrFunctionDeclaration() {
        let _localctx = new ProcedureOrFunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, pascalParser.RULE_procedureOrFunctionDeclaration);
        try {
            this.state = 475;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.PROCEDURE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 473;
                        this.procedureDeclaration();
                    }
                    break;
                case pascalParser.FUNCTION:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 474;
                        this.functionDeclaration();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    procedureDeclaration() {
        let _localctx = new ProcedureDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, pascalParser.RULE_procedureDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 477;
                this.match(pascalParser.PROCEDURE);
                this.state = 478;
                this.identifier();
                this.state = 480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 479;
                        this.formalParameterList();
                    }
                }
                this.state = 482;
                this.match(pascalParser.SEMI);
                this.state = 483;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameterList() {
        let _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, pascalParser.RULE_formalParameterList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 485;
                this.match(pascalParser.LPAREN);
                this.state = 486;
                this.formalParameterSection();
                this.state = 491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.SEMI) {
                    {
                        {
                            this.state = 487;
                            this.match(pascalParser.SEMI);
                            this.state = 488;
                            this.formalParameterSection();
                        }
                    }
                    this.state = 493;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 494;
                this.match(pascalParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameterSection() {
        let _localctx = new FormalParameterSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, pascalParser.RULE_formalParameterSection);
        try {
            this.state = 503;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 496;
                        this.parameterGroup();
                    }
                    break;
                case pascalParser.VAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 497;
                        this.match(pascalParser.VAR);
                        this.state = 498;
                        this.parameterGroup();
                    }
                    break;
                case pascalParser.FUNCTION:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 499;
                        this.match(pascalParser.FUNCTION);
                        this.state = 500;
                        this.parameterGroup();
                    }
                    break;
                case pascalParser.PROCEDURE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 501;
                        this.match(pascalParser.PROCEDURE);
                        this.state = 502;
                        this.parameterGroup();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterGroup() {
        let _localctx = new ParameterGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, pascalParser.RULE_parameterGroup);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this.identifierList();
                this.state = 506;
                this.match(pascalParser.COLON);
                this.state = 507;
                this.typeIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifierList() {
        let _localctx = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, pascalParser.RULE_identifierList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 509;
                this.identifier();
                this.state = 514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 510;
                            this.match(pascalParser.COMMA);
                            this.state = 511;
                            this.identifier();
                        }
                    }
                    this.state = 516;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constList() {
        let _localctx = new ConstListContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, pascalParser.RULE_constList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this.constant();
                this.state = 522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 518;
                            this.match(pascalParser.COMMA);
                            this.state = 519;
                            this.constant();
                        }
                    }
                    this.state = 524;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDeclaration() {
        let _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, pascalParser.RULE_functionDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this.match(pascalParser.FUNCTION);
                this.state = 526;
                this.identifier();
                this.state = 528;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 527;
                        this.formalParameterList();
                    }
                }
                this.state = 530;
                this.match(pascalParser.COLON);
                this.state = 531;
                this.resultType();
                this.state = 532;
                this.match(pascalParser.SEMI);
                this.state = 533;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resultType() {
        let _localctx = new ResultTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, pascalParser.RULE_resultType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 535;
                this.typeIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, pascalParser.RULE_statement);
        try {
            this.state = 542;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.NUM_INT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 537;
                        this.label();
                        this.state = 538;
                        this.match(pascalParser.COLON);
                        this.state = 539;
                        this.unlabelledStatement();
                    }
                    break;
                case pascalParser.BEGIN:
                case pascalParser.CASE:
                case pascalParser.ELSE:
                case pascalParser.END:
                case pascalParser.FOR:
                case pascalParser.GOTO:
                case pascalParser.IF:
                case pascalParser.REPEAT:
                case pascalParser.UNTIL:
                case pascalParser.WHILE:
                case pascalParser.WITH:
                case pascalParser.SEMI:
                case pascalParser.AT:
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 541;
                        this.unlabelledStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unlabelledStatement() {
        let _localctx = new UnlabelledStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, pascalParser.RULE_unlabelledStatement);
        try {
            this.state = 546;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.ELSE:
                case pascalParser.END:
                case pascalParser.GOTO:
                case pascalParser.UNTIL:
                case pascalParser.SEMI:
                case pascalParser.AT:
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 544;
                        this.simpleStatement();
                    }
                    break;
                case pascalParser.BEGIN:
                case pascalParser.CASE:
                case pascalParser.FOR:
                case pascalParser.IF:
                case pascalParser.REPEAT:
                case pascalParser.WHILE:
                case pascalParser.WITH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 545;
                        this.structuredStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleStatement() {
        let _localctx = new SimpleStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, pascalParser.RULE_simpleStatement);
        try {
            this.state = 552;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 548;
                        this.assignmentStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 549;
                        this.procedureStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 550;
                        this.gotoStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 551;
                        this.emptyStatement_();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignmentStatement() {
        let _localctx = new AssignmentStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, pascalParser.RULE_assignmentStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 554;
                this.variable();
                this.state = 555;
                this.match(pascalParser.ASSIGN);
                this.state = 556;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable() {
        let _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, pascalParser.RULE_variable);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pascalParser.AT:
                        {
                            this.state = 558;
                            this.match(pascalParser.AT);
                            this.state = 559;
                            this.identifier();
                        }
                        break;
                    case pascalParser.IDENT:
                        {
                            this.state = 560;
                            this.identifier();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 590;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pascalParser.LBRACK - 57)) | (1 << (pascalParser.LBRACK2 - 57)) | (1 << (pascalParser.POINTER - 57)) | (1 << (pascalParser.DOT - 57)))) !== 0)) {
                    {
                        this.state = 588;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case pascalParser.LBRACK:
                                {
                                    this.state = 563;
                                    this.match(pascalParser.LBRACK);
                                    this.state = 564;
                                    this.expression();
                                    this.state = 569;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === pascalParser.COMMA) {
                                        {
                                            {
                                                this.state = 565;
                                                this.match(pascalParser.COMMA);
                                                this.state = 566;
                                                this.expression();
                                            }
                                        }
                                        this.state = 571;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 572;
                                    this.match(pascalParser.RBRACK);
                                }
                                break;
                            case pascalParser.LBRACK2:
                                {
                                    this.state = 574;
                                    this.match(pascalParser.LBRACK2);
                                    this.state = 575;
                                    this.expression();
                                    this.state = 580;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === pascalParser.COMMA) {
                                        {
                                            {
                                                this.state = 576;
                                                this.match(pascalParser.COMMA);
                                                this.state = 577;
                                                this.expression();
                                            }
                                        }
                                        this.state = 582;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 583;
                                    this.match(pascalParser.RBRACK2);
                                }
                                break;
                            case pascalParser.DOT:
                                {
                                    this.state = 585;
                                    this.match(pascalParser.DOT);
                                    this.state = 586;
                                    this.identifier();
                                }
                                break;
                            case pascalParser.POINTER:
                                {
                                    this.state = 587;
                                    this.match(pascalParser.POINTER);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 592;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, pascalParser.RULE_expression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 593;
                this.simpleExpression();
                this.state = 597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.IN || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0)) {
                    {
                        this.state = 594;
                        this.relationaloperator();
                        this.state = 595;
                        this.expression();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    relationaloperator() {
        let _localctx = new RelationaloperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, pascalParser.RULE_relationaloperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 599;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.IN || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleExpression() {
        let _localctx = new SimpleExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, pascalParser.RULE_simpleExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                this.term();
                this.state = 605;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0)) {
                    {
                        this.state = 602;
                        this.additiveoperator();
                        this.state = 603;
                        this.simpleExpression();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    additiveoperator() {
        let _localctx = new AdditiveoperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, pascalParser.RULE_additiveoperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                _la = this._input.LA(1);
                if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, pascalParser.RULE_term);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 609;
                this.signedFactor();
                this.state = 613;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la === pascalParser.STAR || _la === pascalParser.SLASH) {
                    {
                        this.state = 610;
                        this.multiplicativeoperator();
                        this.state = 611;
                        this.term();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiplicativeoperator() {
        let _localctx = new MultiplicativeoperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, pascalParser.RULE_multiplicativeoperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 615;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la === pascalParser.STAR || _la === pascalParser.SLASH)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    signedFactor() {
        let _localctx = new SignedFactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, pascalParser.RULE_signedFactor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.PLUS || _la === pascalParser.MINUS) {
                    {
                        this.state = 617;
                        _la = this._input.LA(1);
                        if (!(_la === pascalParser.PLUS || _la === pascalParser.MINUS)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 620;
                this.factor();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    factor() {
        let _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, pascalParser.RULE_factor);
        try {
            this.state = 633;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 622;
                        this.variable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 623;
                        this.match(pascalParser.LPAREN);
                        this.state = 624;
                        this.expression();
                        this.state = 625;
                        this.match(pascalParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 627;
                        this.functionDesignator();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 628;
                        this.unsignedConstant();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 629;
                        this.set_();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 630;
                        this.match(pascalParser.NOT);
                        this.state = 631;
                        this.factor();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 632;
                        this.bool_();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unsignedConstant() {
        let _localctx = new UnsignedConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, pascalParser.RULE_unsignedConstant);
        try {
            this.state = 639;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.NUM_INT:
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 635;
                        this.unsignedNumber();
                    }
                    break;
                case pascalParser.CHR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 636;
                        this.constantChr();
                    }
                    break;
                case pascalParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 637;
                        this.string();
                    }
                    break;
                case pascalParser.NIL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 638;
                        this.match(pascalParser.NIL);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDesignator() {
        let _localctx = new FunctionDesignatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, pascalParser.RULE_functionDesignator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 641;
                this.identifier();
                this.state = 642;
                this.match(pascalParser.LPAREN);
                this.state = 643;
                this.parameterList();
                this.state = 644;
                this.match(pascalParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterList() {
        let _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, pascalParser.RULE_parameterList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 646;
                this.actualParameter();
                this.state = 651;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 647;
                            this.match(pascalParser.COMMA);
                            this.state = 648;
                            this.actualParameter();
                        }
                    }
                    this.state = 653;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    set_() {
        let _localctx = new Set_Context(this._ctx, this.state);
        this.enterRule(_localctx, 144, pascalParser.RULE_set_);
        try {
            this.state = 662;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.LBRACK:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 654;
                        this.match(pascalParser.LBRACK);
                        this.state = 655;
                        this.elementList();
                        this.state = 656;
                        this.match(pascalParser.RBRACK);
                    }
                    break;
                case pascalParser.LBRACK2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 658;
                        this.match(pascalParser.LBRACK2);
                        this.state = 659;
                        this.elementList();
                        this.state = 660;
                        this.match(pascalParser.RBRACK2);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementList() {
        let _localctx = new ElementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, pascalParser.RULE_elementList);
        let _la;
        try {
            this.state = 673;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.CHR:
                case pascalParser.NIL:
                case pascalParser.NOT:
                case pascalParser.PLUS:
                case pascalParser.MINUS:
                case pascalParser.LPAREN:
                case pascalParser.LBRACK:
                case pascalParser.LBRACK2:
                case pascalParser.AT:
                case pascalParser.TRUE:
                case pascalParser.FALSE:
                case pascalParser.IDENT:
                case pascalParser.STRING_LITERAL:
                case pascalParser.NUM_INT:
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 664;
                        this.element();
                        this.state = 669;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === pascalParser.COMMA) {
                            {
                                {
                                    this.state = 665;
                                    this.match(pascalParser.COMMA);
                                    this.state = 666;
                                    this.element();
                                }
                            }
                            this.state = 671;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case pascalParser.RBRACK:
                case pascalParser.RBRACK2:
                    this.enterOuterAlt(_localctx, 2);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    element() {
        let _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, pascalParser.RULE_element);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 675;
                this.expression();
                this.state = 678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.DOTDOT) {
                    {
                        this.state = 676;
                        this.match(pascalParser.DOTDOT);
                        this.state = 677;
                        this.expression();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    procedureStatement() {
        let _localctx = new ProcedureStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, pascalParser.RULE_procedureStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 680;
                this.identifier();
                this.state = 685;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 681;
                        this.match(pascalParser.LPAREN);
                        this.state = 682;
                        this.parameterList();
                        this.state = 683;
                        this.match(pascalParser.RPAREN);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    actualParameter() {
        let _localctx = new ActualParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, pascalParser.RULE_actualParameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 687;
                this.expression();
                this.state = 691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COLON) {
                    {
                        {
                            this.state = 688;
                            this.parameterwidth();
                        }
                    }
                    this.state = 693;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterwidth() {
        let _localctx = new ParameterwidthContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, pascalParser.RULE_parameterwidth);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                this.match(pascalParser.COLON);
                this.state = 695;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    gotoStatement() {
        let _localctx = new GotoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, pascalParser.RULE_gotoStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 697;
                this.match(pascalParser.GOTO);
                this.state = 698;
                this.label();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    emptyStatement_() {
        let _localctx = new EmptyStatement_Context(this._ctx, this.state);
        this.enterRule(_localctx, 158, pascalParser.RULE_emptyStatement_);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    empty_() {
        let _localctx = new Empty_Context(this._ctx, this.state);
        this.enterRule(_localctx, 160, pascalParser.RULE_empty_);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structuredStatement() {
        let _localctx = new StructuredStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, pascalParser.RULE_structuredStatement);
        try {
            this.state = 708;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.BEGIN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 704;
                        this.compoundStatement();
                    }
                    break;
                case pascalParser.CASE:
                case pascalParser.IF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 705;
                        this.conditionalStatement();
                    }
                    break;
                case pascalParser.FOR:
                case pascalParser.REPEAT:
                case pascalParser.WHILE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 706;
                        this.repetetiveStatement();
                    }
                    break;
                case pascalParser.WITH:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 707;
                        this.withStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compoundStatement() {
        let _localctx = new CompoundStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, pascalParser.RULE_compoundStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 710;
                this.match(pascalParser.BEGIN);
                this.state = 711;
                this.statements();
                this.state = 712;
                this.match(pascalParser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statements() {
        let _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, pascalParser.RULE_statements);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 714;
                this.statement();
                this.state = 719;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.SEMI) {
                    {
                        {
                            this.state = 715;
                            this.match(pascalParser.SEMI);
                            this.state = 716;
                            this.statement();
                        }
                    }
                    this.state = 721;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conditionalStatement() {
        let _localctx = new ConditionalStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, pascalParser.RULE_conditionalStatement);
        try {
            this.state = 724;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 722;
                        this.ifStatement();
                    }
                    break;
                case pascalParser.CASE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 723;
                        this.caseStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifStatement() {
        let _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, pascalParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                this.match(pascalParser.IF);
                this.state = 727;
                this.expression();
                this.state = 728;
                this.match(pascalParser.THEN);
                this.state = 729;
                this.statement();
                this.state = 732;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 730;
                            this.match(pascalParser.ELSE);
                            this.state = 731;
                            this.statement();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    caseStatement() {
        let _localctx = new CaseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, pascalParser.RULE_caseStatement);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 734;
                this.match(pascalParser.CASE);
                this.state = 735;
                this.expression();
                this.state = 736;
                this.match(pascalParser.OF);
                this.state = 737;
                this.caseListElement();
                this.state = 742;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 738;
                                this.match(pascalParser.SEMI);
                                this.state = 739;
                                this.caseListElement();
                            }
                        }
                    }
                    this.state = 744;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                }
                this.state = 748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.SEMI) {
                    {
                        this.state = 745;
                        this.match(pascalParser.SEMI);
                        this.state = 746;
                        this.match(pascalParser.ELSE);
                        this.state = 747;
                        this.statements();
                    }
                }
                this.state = 750;
                this.match(pascalParser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    caseListElement() {
        let _localctx = new CaseListElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, pascalParser.RULE_caseListElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 752;
                this.constList();
                this.state = 753;
                this.match(pascalParser.COLON);
                this.state = 754;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    repetetiveStatement() {
        let _localctx = new RepetetiveStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, pascalParser.RULE_repetetiveStatement);
        try {
            this.state = 759;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.WHILE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 756;
                        this.whileStatement();
                    }
                    break;
                case pascalParser.REPEAT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 757;
                        this.repeatStatement();
                    }
                    break;
                case pascalParser.FOR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 758;
                        this.forStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whileStatement() {
        let _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, pascalParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 761;
                this.match(pascalParser.WHILE);
                this.state = 762;
                this.expression();
                this.state = 763;
                this.match(pascalParser.DO);
                this.state = 764;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    repeatStatement() {
        let _localctx = new RepeatStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, pascalParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 766;
                this.match(pascalParser.REPEAT);
                this.state = 767;
                this.statements();
                this.state = 768;
                this.match(pascalParser.UNTIL);
                this.state = 769;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forStatement() {
        let _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, pascalParser.RULE_forStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 771;
                this.match(pascalParser.FOR);
                this.state = 772;
                this.identifier();
                this.state = 773;
                this.match(pascalParser.ASSIGN);
                this.state = 774;
                this.forList();
                this.state = 775;
                this.match(pascalParser.DO);
                this.state = 776;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forList() {
        let _localctx = new ForListContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, pascalParser.RULE_forList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 778;
                this.initialValue();
                this.state = 779;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.DOWNTO || _la === pascalParser.TO)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 780;
                this.finalValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    initialValue() {
        let _localctx = new InitialValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, pascalParser.RULE_initialValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 782;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    finalValue() {
        let _localctx = new FinalValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, pascalParser.RULE_finalValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 784;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    withStatement() {
        let _localctx = new WithStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, pascalParser.RULE_withStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 786;
                this.match(pascalParser.WITH);
                this.state = 787;
                this.recordVariableList();
                this.state = 788;
                this.match(pascalParser.DO);
                this.state = 789;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordVariableList() {
        let _localctx = new RecordVariableListContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, pascalParser.RULE_recordVariableList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 791;
                this.variable();
                this.state = 796;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 792;
                            this.match(pascalParser.COMMA);
                            this.state = 793;
                            this.variable();
                        }
                    }
                    this.state = 798;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!pascalParser.__ATN) {
            pascalParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(pascalParser._serializedATN));
        }
        return pascalParser.__ATN;
    }
}
exports.pascalParser = pascalParser;
pascalParser.AND = 1;
pascalParser.ARRAY = 2;
pascalParser.BEGIN = 3;
pascalParser.BOOLEAN = 4;
pascalParser.CASE = 5;
pascalParser.CHAR = 6;
pascalParser.CHR = 7;
pascalParser.CONST = 8;
pascalParser.DIV = 9;
pascalParser.DO = 10;
pascalParser.DOWNTO = 11;
pascalParser.ELSE = 12;
pascalParser.END = 13;
pascalParser.FILE = 14;
pascalParser.FOR = 15;
pascalParser.FUNCTION = 16;
pascalParser.GOTO = 17;
pascalParser.IF = 18;
pascalParser.IN = 19;
pascalParser.INTEGER = 20;
pascalParser.LABEL = 21;
pascalParser.MOD = 22;
pascalParser.NIL = 23;
pascalParser.NOT = 24;
pascalParser.OF = 25;
pascalParser.OR = 26;
pascalParser.PACKED = 27;
pascalParser.PROCEDURE = 28;
pascalParser.PROGRAM = 29;
pascalParser.REAL = 30;
pascalParser.RECORD = 31;
pascalParser.REPEAT = 32;
pascalParser.SET = 33;
pascalParser.THEN = 34;
pascalParser.TO = 35;
pascalParser.TYPE = 36;
pascalParser.UNTIL = 37;
pascalParser.VAR = 38;
pascalParser.WHILE = 39;
pascalParser.WITH = 40;
pascalParser.PLUS = 41;
pascalParser.MINUS = 42;
pascalParser.STAR = 43;
pascalParser.SLASH = 44;
pascalParser.ASSIGN = 45;
pascalParser.COMMA = 46;
pascalParser.SEMI = 47;
pascalParser.COLON = 48;
pascalParser.EQUAL = 49;
pascalParser.NOT_EQUAL = 50;
pascalParser.LT = 51;
pascalParser.LE = 52;
pascalParser.GE = 53;
pascalParser.GT = 54;
pascalParser.LPAREN = 55;
pascalParser.RPAREN = 56;
pascalParser.LBRACK = 57;
pascalParser.LBRACK2 = 58;
pascalParser.RBRACK = 59;
pascalParser.RBRACK2 = 60;
pascalParser.POINTER = 61;
pascalParser.AT = 62;
pascalParser.DOT = 63;
pascalParser.DOTDOT = 64;
pascalParser.LCURLY = 65;
pascalParser.RCURLY = 66;
pascalParser.UNIT = 67;
pascalParser.INTERFACE = 68;
pascalParser.USES = 69;
pascalParser.STRING = 70;
pascalParser.IMPLEMENTATION = 71;
pascalParser.TRUE = 72;
pascalParser.FALSE = 73;
pascalParser.WS = 74;
pascalParser.COMMENT_1 = 75;
pascalParser.COMMENT_2 = 76;
pascalParser.IDENT = 77;
pascalParser.STRING_LITERAL = 78;
pascalParser.NUM_INT = 79;
pascalParser.NUM_REAL = 80;
pascalParser.RULE_program = 0;
pascalParser.RULE_programHeading = 1;
pascalParser.RULE_identifier = 2;
pascalParser.RULE_block = 3;
pascalParser.RULE_usesUnitsPart = 4;
pascalParser.RULE_labelDeclarationPart = 5;
pascalParser.RULE_label = 6;
pascalParser.RULE_constantDefinitionPart = 7;
pascalParser.RULE_constantDefinition = 8;
pascalParser.RULE_constantChr = 9;
pascalParser.RULE_constant = 10;
pascalParser.RULE_unsignedNumber = 11;
pascalParser.RULE_unsignedInteger = 12;
pascalParser.RULE_unsignedReal = 13;
pascalParser.RULE_sign = 14;
pascalParser.RULE_bool_ = 15;
pascalParser.RULE_string = 16;
pascalParser.RULE_typeDefinitionPart = 17;
pascalParser.RULE_typeDefinition = 18;
pascalParser.RULE_functionType = 19;
pascalParser.RULE_procedureType = 20;
pascalParser.RULE_type_ = 21;
pascalParser.RULE_simpleType = 22;
pascalParser.RULE_scalarType = 23;
pascalParser.RULE_subrangeType = 24;
pascalParser.RULE_typeIdentifier = 25;
pascalParser.RULE_structuredType = 26;
pascalParser.RULE_unpackedStructuredType = 27;
pascalParser.RULE_stringtype = 28;
pascalParser.RULE_arrayType = 29;
pascalParser.RULE_typeList = 30;
pascalParser.RULE_indexType = 31;
pascalParser.RULE_componentType = 32;
pascalParser.RULE_recordType = 33;
pascalParser.RULE_fieldList = 34;
pascalParser.RULE_fixedPart = 35;
pascalParser.RULE_recordSection = 36;
pascalParser.RULE_variantPart = 37;
pascalParser.RULE_tag = 38;
pascalParser.RULE_variant = 39;
pascalParser.RULE_setType = 40;
pascalParser.RULE_baseType = 41;
pascalParser.RULE_fileType = 42;
pascalParser.RULE_pointerType = 43;
pascalParser.RULE_variableDeclarationPart = 44;
pascalParser.RULE_variableDeclaration = 45;
pascalParser.RULE_procedureAndFunctionDeclarationPart = 46;
pascalParser.RULE_procedureOrFunctionDeclaration = 47;
pascalParser.RULE_procedureDeclaration = 48;
pascalParser.RULE_formalParameterList = 49;
pascalParser.RULE_formalParameterSection = 50;
pascalParser.RULE_parameterGroup = 51;
pascalParser.RULE_identifierList = 52;
pascalParser.RULE_constList = 53;
pascalParser.RULE_functionDeclaration = 54;
pascalParser.RULE_resultType = 55;
pascalParser.RULE_statement = 56;
pascalParser.RULE_unlabelledStatement = 57;
pascalParser.RULE_simpleStatement = 58;
pascalParser.RULE_assignmentStatement = 59;
pascalParser.RULE_variable = 60;
pascalParser.RULE_expression = 61;
pascalParser.RULE_relationaloperator = 62;
pascalParser.RULE_simpleExpression = 63;
pascalParser.RULE_additiveoperator = 64;
pascalParser.RULE_term = 65;
pascalParser.RULE_multiplicativeoperator = 66;
pascalParser.RULE_signedFactor = 67;
pascalParser.RULE_factor = 68;
pascalParser.RULE_unsignedConstant = 69;
pascalParser.RULE_functionDesignator = 70;
pascalParser.RULE_parameterList = 71;
pascalParser.RULE_set_ = 72;
pascalParser.RULE_elementList = 73;
pascalParser.RULE_element = 74;
pascalParser.RULE_procedureStatement = 75;
pascalParser.RULE_actualParameter = 76;
pascalParser.RULE_parameterwidth = 77;
pascalParser.RULE_gotoStatement = 78;
pascalParser.RULE_emptyStatement_ = 79;
pascalParser.RULE_empty_ = 80;
pascalParser.RULE_structuredStatement = 81;
pascalParser.RULE_compoundStatement = 82;
pascalParser.RULE_statements = 83;
pascalParser.RULE_conditionalStatement = 84;
pascalParser.RULE_ifStatement = 85;
pascalParser.RULE_caseStatement = 86;
pascalParser.RULE_caseListElement = 87;
pascalParser.RULE_repetetiveStatement = 88;
pascalParser.RULE_whileStatement = 89;
pascalParser.RULE_repeatStatement = 90;
pascalParser.RULE_forStatement = 91;
pascalParser.RULE_forList = 92;
pascalParser.RULE_initialValue = 93;
pascalParser.RULE_finalValue = 94;
pascalParser.RULE_withStatement = 95;
pascalParser.RULE_recordVariableList = 96;
// tslint:disable:no-trailing-whitespace
pascalParser.ruleNames = [
    "program", "programHeading", "identifier", "block", "usesUnitsPart", "labelDeclarationPart",
    "label", "constantDefinitionPart", "constantDefinition", "constantChr",
    "constant", "unsignedNumber", "unsignedInteger", "unsignedReal", "sign",
    "bool_", "string", "typeDefinitionPart", "typeDefinition", "functionType",
    "procedureType", "type_", "simpleType", "scalarType", "subrangeType",
    "typeIdentifier", "structuredType", "unpackedStructuredType", "stringtype",
    "arrayType", "typeList", "indexType", "componentType", "recordType", "fieldList",
    "fixedPart", "recordSection", "variantPart", "tag", "variant", "setType",
    "baseType", "fileType", "pointerType", "variableDeclarationPart", "variableDeclaration",
    "procedureAndFunctionDeclarationPart", "procedureOrFunctionDeclaration",
    "procedureDeclaration", "formalParameterList", "formalParameterSection",
    "parameterGroup", "identifierList", "constList", "functionDeclaration",
    "resultType", "statement", "unlabelledStatement", "simpleStatement", "assignmentStatement",
    "variable", "expression", "relationaloperator", "simpleExpression", "additiveoperator",
    "term", "multiplicativeoperator", "signedFactor", "factor", "unsignedConstant",
    "functionDesignator", "parameterList", "set_", "elementList", "element",
    "procedureStatement", "actualParameter", "parameterwidth", "gotoStatement",
    "emptyStatement_", "empty_", "structuredStatement", "compoundStatement",
    "statements", "conditionalStatement", "ifStatement", "caseStatement",
    "caseListElement", "repetetiveStatement", "whileStatement", "repeatStatement",
    "forStatement", "forList", "initialValue", "finalValue", "withStatement",
    "recordVariableList",
];
pascalParser._LITERAL_NAMES = [
    undefined, "'AND'", "'ARRAY'", "'BEGIN'", "'BOOLEAN'", "'CASE'", "'CHAR'",
    "'CHR'", "'CONST'", "'DIV'", "'DO'", "'DOWNTO'", "'ELSE'", "'END'", "'FILE'",
    "'FOR'", "'FUNCTION'", "'GOTO'", "'IF'", "'IN'", "'INTEGER'", "'LABEL'",
    "'MOD'", "'NIL'", "'NOT'", "'OF'", "'OR'", "'PACKED'", "'PROCEDURE'",
    "'PROGRAM'", "'REAL'", "'RECORD'", "'REPEAT'", "'SET'", "'THEN'", "'TO'",
    "'TYPE'", "'UNTIL'", "'VAR'", "'WHILE'", "'WITH'", "'+'", "'-'", "'*'",
    "'/'", "':='", "','", "';'", "':'", "'='", "'<>'", "'<'", "'<='", "'>='",
    "'>'", "'('", "')'", "'['", "'(.'", "']'", "'.)'", "'^'", "'@'", "'.'",
    "'..'", "'{'", "'}'", "'UNIT'", "'INTERFACE'", "'USES'", "'STRING'", "'IMPLEMENTATION'",
    "'TRUE'", "'FALSE'",
];
pascalParser._SYMBOLIC_NAMES = [
    undefined, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CHR",
    "CONST", "DIV", "DO", "DOWNTO", "ELSE", "END", "FILE", "FOR", "FUNCTION",
    "GOTO", "IF", "IN", "INTEGER", "LABEL", "MOD", "NIL", "NOT", "OF", "OR",
    "PACKED", "PROCEDURE", "PROGRAM", "REAL", "RECORD", "REPEAT", "SET", "THEN",
    "TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", "PLUS", "MINUS", "STAR",
    "SLASH", "ASSIGN", "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT",
    "LE", "GE", "GT", "LPAREN", "RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2",
    "POINTER", "AT", "DOT", "DOTDOT", "LCURLY", "RCURLY", "UNIT", "INTERFACE",
    "USES", "STRING", "IMPLEMENTATION", "TRUE", "FALSE", "WS", "COMMENT_1",
    "COMMENT_2", "IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL",
];
pascalParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(pascalParser._LITERAL_NAMES, pascalParser._SYMBOLIC_NAMES, []);
pascalParser._serializedATNSegments = 2;
pascalParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u0322\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x03\x02\x03\x02\x05\x02\xC7\n\x02\x03\x02\x03\x02\x03" +
    "\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD3" +
    "\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xDB\n\x03" +
    "\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
    "\x07\x05\xE6\n\x05\f\x05\x0E\x05\xE9\v\x05\x03\x05\x03\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xF5\n\x07" +
    "\f\x07\x0E\x07\xF8\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
    "\x03\t\x06\t\u0102\n\t\r\t\x0E\t\u0103\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x05\f\u0119\n\f\x03\r\x03\r\x05\r\u011D\n\r\x03\x0E\x03\x0E\x03" +
    "\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x06\x13\u012D\n\x13\r\x13\x0E\x13\u012E\x03\x14\x03" +
    "\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0136\n\x14\x03\x15\x03\x15\x05\x15" +
    "\u013A\n\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0141\n\x16" +
    "\x03\x17\x03\x17\x03\x17\x05\x17\u0146\n\x17\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x05\x18\u014C\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0158\n\x1B\x03\x1C\x03\x1C\x03" +
    "\x1C\x05\x1C\u015D\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0163" +
    "\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0169\n\x1E\x03\x1E\x03" +
    "\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
    "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u017B\n\x1F\x03 " +
    "\x03 \x03 \x07 \u0180\n \f \x0E \u0183\v \x03!\x03!\x03\"\x03\"\x03#\x03" +
    "#\x05#\u018B\n#\x03#\x03#\x03$\x03$\x03$\x05$\u0192\n$\x03$\x05$\u0195" +
    "\n$\x03%\x03%\x03%\x07%\u019A\n%\f%\x0E%\u019D\v%\x03&\x03&\x03&\x03&" +
    "\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01A9\n\'\f\'\x0E\'\u01AC\v" +
    "\'\x03(\x03(\x03(\x03(\x03(\x05(\u01B3\n(\x03)\x03)\x03)\x03)\x03)\x03" +
    ")\x03*\x03*\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03,\x05,\u01C5\n,\x03" +
    "-\x03-\x03-\x03.\x03.\x03.\x03.\x07.\u01CE\n.\f.\x0E.\u01D1\v.\x03.\x03" +
    ".\x03/\x03/\x03/\x03/\x030\x030\x030\x031\x031\x051\u01DE\n1\x032\x03" +
    "2\x032\x052\u01E3\n2\x032\x032\x032\x033\x033\x033\x033\x073\u01EC\n3" +
    "\f3\x0E3\u01EF\v3\x033\x033\x034\x034\x034\x034\x034\x034\x034\x054\u01FA" +
    "\n4\x035\x035\x035\x035\x036\x036\x036\x076\u0203\n6\f6\x0E6\u0206\v6" +
    "\x037\x037\x037\x077\u020B\n7\f7\x0E7\u020E\v7\x038\x038\x038\x058\u0213" +
    "\n8\x038\x038\x038\x038\x038\x039\x039\x03:\x03:\x03:\x03:\x03:\x05:\u0221" +
    "\n:\x03;\x03;\x05;\u0225\n;\x03<\x03<\x03<\x03<\x05<\u022B\n<\x03=\x03" +
    "=\x03=\x03=\x03>\x03>\x03>\x05>\u0234\n>\x03>\x03>\x03>\x03>\x07>\u023A" +
    "\n>\f>\x0E>\u023D\v>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0245\n>\f>\x0E" +
    ">\u0248\v>\x03>\x03>\x03>\x03>\x03>\x07>\u024F\n>\f>\x0E>\u0252\v>\x03" +
    "?\x03?\x03?\x03?\x05?\u0258\n?\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u0260" +
    "\nA\x03B\x03B\x03C\x03C\x03C\x03C\x05C\u0268\nC\x03D\x03D\x03E\x05E\u026D" +
    "\nE\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05" +
    "F\u027C\nF\x03G\x03G\x03G\x03G\x05G\u0282\nG\x03H\x03H\x03H\x03H\x03H" +
    "\x03I\x03I\x03I\x07I\u028C\nI\fI\x0EI\u028F\vI\x03J\x03J\x03J\x03J\x03" +
    "J\x03J\x03J\x03J\x05J\u0299\nJ\x03K\x03K\x03K\x07K\u029E\nK\fK\x0EK\u02A1" +
    "\vK\x03K\x05K\u02A4\nK\x03L\x03L\x03L\x05L\u02A9\nL\x03M\x03M\x03M\x03" +
    "M\x03M\x05M\u02B0\nM\x03N\x03N\x07N\u02B4\nN\fN\x0EN\u02B7\vN\x03O\x03" +
    "O\x03O\x03P\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03S\x03S\x05S\u02C7" +
    "\nS\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x07U\u02D0\nU\fU\x0EU\u02D3\vU" +
    "\x03V\x03V\x05V\u02D7\nV\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u02DF\nW\x03" +
    "X\x03X\x03X\x03X\x03X\x03X\x07X\u02E7\nX\fX\x0EX\u02EA\vX\x03X\x03X\x03" +
    "X\x05X\u02EF\nX\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x05Z\u02FA" +
    "\nZ\x03[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03" +
    "]\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03" +
    "a\x03a\x03a\x03a\x03b\x03b\x03b\x07b\u031D\nb\fb\x0Eb\u0320\vb\x03b\x02" +
    "\x02\x02c\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
    "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
    "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
    "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
    "\x02\t\x03\x02+,\x03\x02JK\x07\x02\x06\x06\b\b\x16\x16  HH\x04\x02\x15" +
    "\x1538\x04\x02\x1C\x1C+,\x06\x02\x03\x03\v\v\x18\x18-.\x04\x02\r\r%%\x02" +
    "\u0320\x02\xC4\x03\x02\x02\x02\x04\xDA\x03\x02\x02\x02\x06\xDC\x03\x02" +
    "\x02\x02\b\xE7\x03\x02\x02\x02\n\xEC\x03\x02\x02\x02\f\xF0\x03\x02\x02" +
    "\x02\x0E\xFB\x03\x02\x02\x02\x10\xFD\x03\x02\x02\x02\x12\u0105\x03\x02" +
    "\x02\x02\x14\u0109\x03\x02\x02\x02\x16\u0118\x03\x02\x02\x02\x18\u011C" +
    "\x03\x02\x02\x02\x1A\u011E\x03\x02\x02\x02\x1C\u0120\x03\x02\x02\x02\x1E" +
    "\u0122\x03\x02\x02\x02 \u0124\x03\x02\x02\x02\"\u0126\x03\x02\x02\x02" +
    "$\u0128\x03\x02\x02\x02&\u0130\x03\x02\x02\x02(\u0137\x03\x02\x02\x02" +
    "*\u013E\x03\x02\x02\x02,\u0145\x03\x02\x02\x02.\u014B\x03\x02\x02\x02" +
    "0\u014D\x03\x02\x02\x022\u0151\x03\x02\x02\x024\u0157\x03\x02\x02\x02" +
    "6\u015C\x03\x02\x02\x028\u0162\x03\x02\x02\x02:\u0164\x03\x02\x02\x02" +
    "<\u017A\x03\x02\x02\x02>\u017C\x03\x02\x02\x02@\u0184\x03\x02\x02\x02" +
    "B\u0186\x03\x02\x02\x02D\u0188\x03\x02\x02\x02F\u0194\x03\x02\x02\x02" +
    "H\u0196\x03\x02\x02\x02J\u019E\x03\x02\x02\x02L\u01A2\x03\x02\x02\x02" +
    "N\u01B2\x03\x02\x02\x02P\u01B4\x03\x02\x02\x02R\u01BA\x03\x02\x02\x02" +
    "T\u01BE\x03\x02\x02\x02V\u01C4\x03\x02\x02\x02X\u01C6\x03\x02\x02\x02" +
    "Z\u01C9\x03\x02\x02\x02\\\u01D4\x03\x02\x02\x02^\u01D8\x03\x02\x02\x02" +
    "`\u01DD\x03\x02\x02\x02b\u01DF\x03\x02\x02\x02d\u01E7\x03\x02\x02\x02" +
    "f\u01F9\x03\x02\x02\x02h\u01FB\x03\x02\x02\x02j\u01FF\x03\x02\x02\x02" +
    "l\u0207\x03\x02\x02\x02n\u020F\x03\x02\x02\x02p\u0219\x03\x02\x02\x02" +
    "r\u0220\x03\x02\x02\x02t\u0224\x03\x02\x02\x02v\u022A\x03\x02\x02\x02" +
    "x\u022C\x03\x02\x02\x02z\u0233\x03\x02\x02\x02|\u0253\x03\x02\x02\x02" +
    "~\u0259\x03\x02\x02\x02\x80\u025B\x03\x02\x02\x02\x82\u0261\x03\x02\x02" +
    "\x02\x84\u0263\x03\x02\x02\x02\x86\u0269\x03\x02\x02\x02\x88\u026C\x03" +
    "\x02\x02\x02\x8A\u027B\x03\x02\x02\x02\x8C\u0281\x03\x02\x02\x02\x8E\u0283" +
    "\x03\x02\x02\x02\x90\u0288\x03\x02\x02\x02\x92\u0298\x03\x02\x02\x02\x94" +
    "\u02A3\x03\x02\x02\x02\x96\u02A5\x03\x02\x02\x02\x98\u02AA\x03\x02\x02" +
    "\x02\x9A\u02B1\x03\x02\x02\x02\x9C\u02B8\x03\x02\x02\x02\x9E\u02BB\x03" +
    "\x02\x02\x02\xA0\u02BE\x03\x02\x02\x02\xA2\u02C0\x03\x02\x02\x02\xA4\u02C6" +
    "\x03\x02\x02\x02\xA6\u02C8\x03\x02\x02\x02\xA8\u02CC\x03\x02\x02\x02\xAA" +
    "\u02D6\x03\x02\x02\x02\xAC\u02D8\x03\x02\x02\x02\xAE\u02E0\x03\x02\x02" +
    "\x02\xB0\u02F2\x03\x02\x02\x02\xB2\u02F9\x03\x02\x02\x02\xB4\u02FB\x03" +
    "\x02\x02\x02\xB6\u0300\x03\x02\x02\x02\xB8\u0305\x03\x02\x02\x02\xBA\u030C" +
    "\x03\x02\x02\x02\xBC\u0310\x03\x02\x02\x02\xBE\u0312\x03\x02\x02\x02\xC0" +
    "\u0314\x03\x02\x02\x02\xC2\u0319\x03\x02\x02\x02\xC4\xC6\x05\x04\x03\x02" +
    "\xC5\xC7\x07F\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
    "\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x05\b\x05\x02\xC9\xCA\x07A\x02\x02\xCA" +
    "\xCB\x07\x02\x02\x03\xCB\x03\x03\x02\x02\x02\xCC\xCD\x07\x1F\x02\x02\xCD" +
    "\xD2\x05\x06\x04\x02\xCE\xCF\x079\x02\x02\xCF\xD0\x05j6\x02\xD0\xD1\x07" +
    ":\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xCE\x03\x02\x02\x02\xD2\xD3\x03" +
    "\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5\x071\x02\x02\xD5\xDB\x03" +
    "\x02\x02\x02\xD6\xD7\x07E\x02\x02\xD7\xD8\x05\x06\x04\x02\xD8\xD9\x07" +
    "1\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xCC\x03\x02\x02\x02\xDA\xD6\x03" +
    "\x02\x02\x02\xDB\x05\x03\x02\x02\x02\xDC\xDD\x07O\x02\x02\xDD\x07\x03" +
    "\x02\x02\x02\xDE\xE6\x05\f\x07\x02\xDF\xE6\x05\x10\t\x02\xE0\xE6\x05$" +
    "\x13\x02\xE1\xE6\x05Z.\x02\xE2\xE6\x05^0\x02\xE3\xE6\x05\n\x06\x02\xE4" +
    "\xE6\x07I\x02\x02\xE5\xDE\x03\x02\x02\x02\xE5\xDF\x03\x02\x02\x02\xE5" +
    "\xE0\x03\x02\x02\x02\xE5\xE1\x03\x02\x02\x02\xE5\xE2\x03\x02\x02\x02\xE5" +
    "\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7" +
    "\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9" +
    "\xE7\x03\x02\x02\x02\xEA\xEB\x05\xA6T\x02\xEB\t\x03\x02\x02\x02\xEC\xED" +
    "\x07G\x02\x02\xED\xEE\x05j6\x02\xEE\xEF\x071\x02\x02\xEF\v\x03\x02\x02" +
    "\x02\xF0\xF1\x07\x17\x02\x02\xF1\xF6\x05\x0E\b\x02\xF2\xF3\x070\x02\x02" +
    "\xF3\xF5\x05\x0E\b\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02" +
    "\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02\x02" +
    "\xF8\xF6\x03\x02\x02\x02\xF9\xFA\x071\x02\x02\xFA\r\x03\x02\x02\x02\xFB" +
    "\xFC\x05\x1A\x0E\x02\xFC\x0F\x03\x02\x02\x02\xFD\u0101\x07\n\x02\x02\xFE" +
    "\xFF\x05\x12\n\x02\xFF\u0100\x071\x02\x02\u0100\u0102\x03\x02\x02\x02" +
    "\u0101\xFE\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0101\x03" +
    "\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\x11\x03\x02\x02\x02\u0105" +
    "\u0106\x05\x06\x04\x02\u0106\u0107\x073\x02\x02\u0107\u0108\x05\x16\f" +
    "\x02\u0108\x13\x03\x02\x02\x02\u0109\u010A\x07\t\x02\x02\u010A\u010B\x07" +
    "9\x02\x02\u010B\u010C\x05\x1A\x0E\x02\u010C\u010D\x07:\x02\x02\u010D\x15" +
    "\x03\x02\x02\x02\u010E\u0119\x05\x18\r\x02\u010F\u0110\x05\x1E\x10\x02" +
    "\u0110\u0111\x05\x18\r\x02\u0111\u0119\x03\x02\x02\x02\u0112\u0119\x05" +
    "\x06\x04\x02\u0113\u0114\x05\x1E\x10\x02\u0114\u0115\x05\x06\x04\x02\u0115" +
    "\u0119\x03\x02\x02\x02\u0116\u0119\x05\"\x12\x02\u0117\u0119\x05\x14\v" +
    "\x02\u0118\u010E\x03\x02\x02\x02\u0118\u010F\x03\x02\x02\x02\u0118\u0112" +
    "\x03\x02\x02\x02\u0118\u0113\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02" +
    "\u0118\u0117\x03\x02\x02\x02\u0119\x17\x03\x02\x02\x02\u011A\u011D\x05" +
    "\x1A\x0E\x02\u011B\u011D\x05\x1C\x0F\x02\u011C\u011A\x03\x02\x02\x02\u011C" +
    "\u011B\x03\x02\x02\x02\u011D\x19\x03\x02\x02\x02\u011E\u011F\x07Q\x02" +
    "\x02\u011F\x1B\x03\x02\x02\x02\u0120\u0121\x07R\x02\x02\u0121\x1D\x03" +
    "\x02\x02\x02\u0122\u0123\t\x02\x02\x02\u0123\x1F\x03\x02\x02\x02\u0124" +
    "\u0125\t\x03\x02\x02\u0125!\x03\x02\x02\x02\u0126\u0127\x07P\x02\x02\u0127" +
    "#\x03\x02\x02\x02\u0128\u012C\x07&\x02\x02\u0129\u012A\x05&\x14\x02\u012A" +
    "\u012B\x071\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u0129\x03\x02\x02" +
    "\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F" +
    "\x03\x02\x02\x02\u012F%\x03\x02\x02\x02\u0130\u0131\x05\x06\x04\x02\u0131" +
    "\u0135\x073\x02\x02\u0132\u0136\x05,\x17\x02\u0133\u0136\x05(\x15\x02" +
    "\u0134\u0136\x05*\x16\x02\u0135\u0132\x03\x02\x02\x02\u0135\u0133\x03" +
    "\x02\x02\x02\u0135\u0134\x03\x02\x02\x02\u0136\'\x03\x02\x02\x02\u0137" +
    "\u0139\x07\x12\x02\x02\u0138\u013A\x05d3\x02\u0139\u0138\x03\x02\x02\x02" +
    "\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x07" +
    "2\x02\x02\u013C\u013D\x05p9\x02\u013D)\x03\x02\x02\x02\u013E\u0140\x07" +
    "\x1E\x02\x02\u013F\u0141\x05d3\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141" +
    "\x03\x02\x02\x02\u0141+\x03\x02\x02\x02\u0142\u0146\x05.\x18\x02\u0143" +
    "\u0146\x056\x1C\x02\u0144\u0146\x05X-\x02\u0145\u0142\x03\x02\x02\x02" +
    "\u0145\u0143\x03\x02\x02\x02\u0145\u0144\x03\x02\x02\x02\u0146-\x03\x02" +
    "\x02\x02\u0147\u014C\x050\x19\x02\u0148\u014C\x052\x1A\x02\u0149\u014C" +
    "\x054\x1B\x02\u014A\u014C\x05:\x1E\x02\u014B\u0147\x03\x02\x02\x02\u014B" +
    "\u0148\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014A\x03\x02" +
    "\x02\x02\u014C/\x03\x02\x02\x02\u014D\u014E\x079\x02\x02\u014E\u014F\x05" +
    "j6\x02\u014F\u0150\x07:\x02\x02\u01501\x03\x02\x02\x02\u0151\u0152\x05" +
    "\x16\f\x02\u0152\u0153\x07B\x02\x02\u0153\u0154\x05\x16\f\x02\u01543\x03" +
    "\x02\x02\x02\u0155\u0158\x05\x06\x04\x02\u0156\u0158\t\x04\x02\x02\u0157" +
    "\u0155\x03\x02\x02\x02\u0157\u0156\x03\x02\x02\x02\u01585\x03\x02\x02" +
    "\x02\u0159\u015A\x07\x1D\x02\x02\u015A\u015D\x058\x1D\x02\u015B\u015D" +
    "\x058\x1D\x02\u015C\u0159\x03\x02\x02\x02\u015C\u015B\x03\x02\x02\x02" +
    "\u015D7\x03\x02\x02\x02\u015E\u0163\x05<\x1F\x02\u015F\u0163\x05D#\x02" +
    "\u0160\u0163\x05R*\x02\u0161\u0163\x05V,\x02\u0162\u015E\x03\x02\x02\x02" +
    "\u0162\u015F\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0161\x03" +
    "\x02\x02\x02\u01639\x03\x02\x02\x02\u0164\u0165\x07H\x02\x02\u0165\u0168" +
    "\x07;\x02\x02\u0166\u0169\x05\x06\x04\x02\u0167\u0169\x05\x18\r\x02\u0168" +
    "\u0166\x03\x02\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02" +
    "\x02\x02\u016A\u016B\x07=\x02\x02\u016B;\x03\x02\x02\x02\u016C\u016D\x07" +
    "\x04\x02\x02\u016D\u016E\x07;\x02\x02\u016E\u016F\x05> \x02\u016F\u0170" +
    "\x07=\x02\x02\u0170\u0171\x07\x1B\x02\x02\u0171\u0172\x05B\"\x02\u0172" +
    "\u017B\x03\x02\x02\x02\u0173\u0174\x07\x04\x02\x02\u0174\u0175\x07<\x02" +
    "\x02\u0175\u0176\x05> \x02\u0176\u0177\x07>\x02\x02\u0177\u0178\x07\x1B" +
    "\x02\x02\u0178\u0179\x05B\"\x02\u0179\u017B\x03\x02\x02\x02\u017A\u016C" +
    "\x03\x02\x02\x02\u017A\u0173\x03\x02\x02\x02\u017B=\x03\x02\x02\x02\u017C" +
    "\u0181\x05@!\x02\u017D\u017E\x070\x02\x02\u017E\u0180\x05@!\x02\u017F" +
    "\u017D\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02" +
    "\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182?\x03\x02\x02\x02\u0183\u0181" +
    "\x03\x02\x02\x02\u0184\u0185\x05.\x18\x02\u0185A\x03\x02\x02\x02\u0186" +
    "\u0187\x05,\x17\x02\u0187C\x03\x02\x02\x02\u0188\u018A\x07!\x02\x02\u0189" +
    "\u018B\x05F$\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02" +
    "\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x07\x0F\x02\x02\u018DE\x03\x02" +
    "\x02\x02\u018E\u0191\x05H%\x02\u018F\u0190\x071\x02\x02\u0190\u0192\x05" +
    "L\'\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192" +
    "\u0195\x03\x02\x02\x02\u0193\u0195\x05L\'\x02\u0194\u018E\x03\x02\x02" +
    "\x02\u0194\u0193\x03\x02\x02\x02\u0195G\x03\x02\x02\x02\u0196\u019B\x05" +
    "J&\x02\u0197\u0198\x071\x02\x02\u0198\u019A\x05J&\x02\u0199\u0197\x03" +
    "\x02\x02\x02\u019A\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B" +
    "\u019C\x03\x02\x02\x02\u019CI\x03\x02\x02\x02\u019D\u019B\x03\x02\x02" +
    "\x02\u019E\u019F\x05j6\x02\u019F\u01A0\x072\x02\x02\u01A0\u01A1\x05,\x17" +
    "\x02\u01A1K\x03\x02\x02\x02\u01A2\u01A3\x07\x07\x02\x02\u01A3\u01A4\x05" +
    "N(\x02\u01A4\u01A5\x07\x1B\x02\x02\u01A5\u01AA\x05P)\x02\u01A6\u01A7\x07" +
    "1\x02\x02\u01A7\u01A9\x05P)\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AC" +
    "\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
    "\u01ABM\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01AE\x05\x06" +
    "\x04\x02\u01AE\u01AF\x072\x02\x02\u01AF\u01B0\x054\x1B\x02\u01B0\u01B3" +
    "\x03\x02\x02\x02\u01B1\u01B3\x054\x1B\x02\u01B2\u01AD\x03\x02\x02\x02" +
    "\u01B2\u01B1\x03\x02\x02\x02\u01B3O\x03\x02\x02\x02\u01B4\u01B5\x05l7" +
    "\x02\u01B5\u01B6\x072\x02\x02\u01B6\u01B7\x079\x02\x02\u01B7\u01B8\x05" +
    "F$\x02\u01B8\u01B9\x07:\x02\x02\u01B9Q\x03\x02\x02\x02\u01BA\u01BB\x07" +
    "#\x02\x02\u01BB\u01BC\x07\x1B\x02\x02\u01BC\u01BD\x05T+\x02\u01BDS\x03" +
    "\x02\x02\x02\u01BE\u01BF\x05.\x18\x02\u01BFU\x03\x02\x02\x02\u01C0\u01C1" +
    "\x07\x10\x02\x02\u01C1\u01C2\x07\x1B\x02\x02\u01C2\u01C5\x05,\x17\x02" +
    "\u01C3\u01C5\x07\x10\x02\x02\u01C4\u01C0\x03\x02\x02\x02\u01C4\u01C3\x03" +
    "\x02\x02\x02\u01C5W\x03\x02\x02\x02\u01C6\u01C7\x07?\x02\x02\u01C7\u01C8" +
    "\x054\x1B\x02\u01C8Y\x03\x02\x02\x02\u01C9\u01CA\x07(\x02\x02\u01CA\u01CF" +
    "\x05\\/\x02\u01CB\u01CC\x071\x02\x02\u01CC\u01CE\x05\\/\x02\u01CD\u01CB" +
    "\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02" +
    "\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01CF\x03" +
    "\x02\x02\x02\u01D2\u01D3\x071\x02\x02\u01D3[\x03\x02\x02\x02\u01D4\u01D5" +
    "\x05j6\x02\u01D5\u01D6\x072\x02\x02\u01D6\u01D7\x05,\x17\x02\u01D7]\x03" +
    "\x02\x02\x02\u01D8\u01D9\x05`1\x02\u01D9\u01DA\x071\x02\x02\u01DA_\x03" +
    "\x02\x02\x02\u01DB\u01DE\x05b2\x02\u01DC\u01DE\x05n8\x02\u01DD\u01DB\x03" +
    "\x02\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DEa\x03\x02\x02\x02\u01DF" +
    "\u01E0\x07\x1E\x02\x02\u01E0\u01E2\x05\x06\x04\x02\u01E1\u01E3\x05d3\x02" +
    "\u01E2\u01E1\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x03" +
    "\x02\x02\x02\u01E4\u01E5\x071\x02\x02\u01E5\u01E6\x05\b\x05\x02\u01E6" +
    "c\x03\x02\x02\x02\u01E7\u01E8\x079\x02\x02\u01E8\u01ED\x05f4\x02\u01E9" +
    "\u01EA\x071\x02\x02\u01EA\u01EC\x05f4\x02\u01EB\u01E9\x03\x02\x02\x02" +
    "\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03" +
    "\x02\x02\x02\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0" +
    "\u01F1\x07:\x02\x02\u01F1e\x03\x02\x02\x02\u01F2\u01FA\x05h5\x02\u01F3" +
    "\u01F4\x07(\x02\x02\u01F4\u01FA\x05h5\x02\u01F5\u01F6\x07\x12\x02\x02" +
    "\u01F6\u01FA\x05h5\x02\u01F7\u01F8\x07\x1E\x02\x02\u01F8\u01FA\x05h5\x02" +
    "\u01F9\u01F2\x03\x02\x02\x02\u01F9\u01F3\x03\x02\x02\x02\u01F9\u01F5\x03" +
    "\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FAg\x03\x02\x02\x02\u01FB" +
    "\u01FC\x05j6\x02\u01FC\u01FD\x072\x02\x02\u01FD\u01FE\x054\x1B\x02\u01FE" +
    "i\x03\x02\x02\x02\u01FF\u0204\x05\x06\x04\x02\u0200\u0201\x070\x02\x02" +
    "\u0201\u0203\x05\x06\x04\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0206\x03" +
    "\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205" +
    "k\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207\u020C\x05\x16\f\x02" +
    "\u0208\u0209\x070\x02\x02\u0209\u020B\x05\x16\f\x02\u020A\u0208\x03\x02" +
    "\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C" +
    "\u020D\x03\x02\x02\x02\u020Dm\x03\x02\x02\x02\u020E\u020C\x03\x02\x02" +
    "\x02\u020F\u0210\x07\x12\x02\x02\u0210\u0212\x05\x06\x04\x02\u0211\u0213" +
    "\x05d3\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
    "\u0214\x03\x02\x02\x02\u0214\u0215\x072\x02\x02\u0215\u0216\x05p9\x02" +
    "\u0216\u0217\x071\x02\x02\u0217\u0218\x05\b\x05\x02\u0218o\x03\x02\x02" +
    "\x02\u0219\u021A\x054\x1B\x02\u021Aq\x03\x02\x02\x02\u021B\u021C\x05\x0E" +
    "\b\x02\u021C\u021D\x072\x02\x02\u021D\u021E\x05t;\x02\u021E\u0221\x03" +
    "\x02\x02\x02\u021F\u0221\x05t;\x02\u0220\u021B\x03\x02\x02\x02\u0220\u021F" +
    "\x03\x02\x02\x02\u0221s\x03\x02\x02\x02\u0222\u0225\x05v<\x02\u0223\u0225" +
    "\x05\xA4S\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0223\x03\x02\x02\x02" +
    "\u0225u\x03\x02\x02\x02\u0226\u022B\x05x=\x02\u0227\u022B\x05\x98M\x02" +
    "\u0228\u022B\x05\x9EP\x02\u0229";
pascalParser._serializedATNSegment1 = "\u022B\x05\xA0Q\x02\u022A\u0226\x03\x02\x02\x02\u022A\u0227\x03\x02\x02" +
    "\x02\u022A\u0228\x03\x02\x02\x02\u022A\u0229\x03\x02\x02\x02\u022Bw\x03" +
    "\x02\x02\x02\u022C\u022D\x05z>\x02\u022D\u022E\x07/\x02\x02\u022E\u022F" +
    "\x05|?\x02\u022Fy\x03\x02\x02\x02\u0230\u0231\x07@\x02\x02\u0231\u0234" +
    "\x05\x06\x04\x02\u0232\u0234\x05\x06\x04\x02\u0233\u0230\x03\x02\x02\x02" +
    "\u0233\u0232\x03\x02\x02\x02\u0234\u0250\x03\x02\x02\x02\u0235\u0236\x07" +
    ";\x02\x02\u0236\u023B\x05|?\x02\u0237\u0238\x070\x02\x02\u0238\u023A\x05" +
    "|?\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239" +
    "\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02\x02\x02" +
    "\u023D\u023B\x03\x02\x02\x02\u023E\u023F\x07=\x02\x02\u023F\u024F\x03" +
    "\x02\x02\x02\u0240\u0241\x07<\x02\x02\u0241\u0246\x05|?\x02\u0242\u0243" +
    "\x070\x02\x02\u0243\u0245\x05|?\x02\u0244\u0242\x03\x02\x02\x02\u0245" +
    "\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02" +
    "\x02\x02\u0247\u0249\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249" +
    "\u024A\x07>\x02\x02\u024A\u024F\x03\x02\x02\x02\u024B\u024C\x07A\x02\x02" +
    "\u024C\u024F\x05\x06\x04\x02\u024D\u024F\x07?\x02\x02\u024E\u0235\x03" +
    "\x02\x02\x02\u024E\u0240\x03\x02\x02\x02\u024E\u024B\x03\x02\x02\x02\u024E" +
    "\u024D\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250\u024E\x03\x02" +
    "\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251{\x03\x02\x02\x02\u0252\u0250" +
    "\x03\x02\x02\x02\u0253\u0257\x05\x80A\x02\u0254\u0255\x05~@\x02\u0255" +
    "\u0256\x05|?\x02\u0256\u0258\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02" +
    "\u0257\u0258\x03\x02\x02\x02\u0258}\x03\x02\x02\x02\u0259\u025A\t\x05" +
    "\x02\x02\u025A\x7F\x03\x02\x02\x02\u025B\u025F\x05\x84C\x02\u025C\u025D" +
    "\x05\x82B\x02\u025D\u025E\x05\x80A\x02\u025E\u0260\x03\x02\x02\x02\u025F" +
    "\u025C\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\x81\x03\x02\x02" +
    "\x02\u0261\u0262\t\x06\x02\x02\u0262\x83\x03\x02\x02\x02\u0263\u0267\x05" +
    "\x88E\x02\u0264\u0265\x05\x86D\x02\u0265\u0266\x05\x84C\x02\u0266\u0268" +
    "\x03\x02\x02\x02\u0267\u0264\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02" +
    "\u0268\x85\x03\x02\x02\x02\u0269\u026A\t\x07\x02\x02\u026A\x87\x03\x02" +
    "\x02\x02\u026B\u026D\t\x02\x02\x02\u026C\u026B\x03\x02\x02\x02\u026C\u026D" +
    "\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x05\x8AF\x02" +
    "\u026F\x89\x03\x02\x02\x02\u0270\u027C\x05z>\x02\u0271\u0272\x079\x02" +
    "\x02\u0272\u0273\x05|?\x02\u0273\u0274\x07:\x02\x02\u0274\u027C\x03\x02" +
    "\x02\x02\u0275\u027C\x05\x8EH\x02\u0276\u027C\x05\x8CG\x02\u0277\u027C" +
    "\x05\x92J\x02\u0278\u0279\x07\x1A\x02\x02\u0279\u027C\x05\x8AF\x02\u027A" +
    "\u027C\x05 \x11\x02\u027B\u0270\x03\x02\x02\x02\u027B\u0271\x03\x02\x02" +
    "\x02\u027B\u0275\x03\x02\x02\x02\u027B\u0276\x03\x02\x02\x02\u027B\u0277" +
    "\x03\x02\x02\x02\u027B\u0278\x03\x02\x02\x02\u027B\u027A\x03\x02\x02\x02" +
    "\u027C\x8B\x03\x02\x02\x02\u027D\u0282\x05\x18\r\x02\u027E\u0282\x05\x14" +
    "\v\x02\u027F\u0282\x05\"\x12\x02\u0280\u0282\x07\x19\x02\x02\u0281\u027D" +
    "\x03\x02\x02\x02\u0281\u027E\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02" +
    "\u0281\u0280\x03\x02\x02\x02\u0282\x8D\x03\x02\x02\x02\u0283\u0284\x05" +
    "\x06\x04\x02\u0284\u0285\x079\x02\x02\u0285\u0286\x05\x90I\x02\u0286\u0287" +
    "\x07:\x02\x02\u0287\x8F\x03\x02\x02\x02\u0288\u028D\x05\x9AN\x02\u0289" +
    "\u028A\x070\x02\x02\u028A\u028C\x05\x9AN\x02\u028B\u0289\x03\x02\x02\x02" +
    "\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03" +
    "\x02\x02\x02\u028E\x91\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290" +
    "\u0291\x07;\x02\x02\u0291\u0292\x05\x94K\x02\u0292\u0293\x07=\x02\x02" +
    "\u0293\u0299\x03\x02\x02\x02\u0294\u0295\x07<\x02\x02\u0295\u0296\x05" +
    "\x94K\x02\u0296\u0297\x07>\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0290" +
    "\x03\x02\x02\x02\u0298\u0294\x03\x02\x02\x02\u0299\x93\x03\x02\x02\x02" +
    "\u029A\u029F\x05\x96L\x02\u029B\u029C\x070\x02\x02\u029C\u029E\x05\x96" +
    "L\x02\u029D\u029B\x03\x02\x02\x02\u029E\u02A1\x03\x02\x02\x02\u029F\u029D" +
    "\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A4\x03\x02\x02\x02" +
    "\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3\u029A\x03" +
    "\x02\x02\x02\u02A3\u02A2\x03\x02\x02\x02\u02A4\x95\x03\x02\x02\x02\u02A5" +
    "\u02A8\x05|?\x02\u02A6\u02A7\x07B\x02\x02\u02A7\u02A9\x05|?\x02\u02A8" +
    "\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\x97\x03\x02\x02" +
    "\x02\u02AA\u02AF\x05\x06\x04\x02\u02AB\u02AC\x079\x02\x02\u02AC\u02AD" +
    "\x05\x90I\x02\u02AD\u02AE\x07:\x02\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF" +
    "\u02AB\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\x99\x03\x02\x02" +
    "\x02\u02B1\u02B5\x05|?\x02\u02B2\u02B4\x05\x9CO\x02\u02B3\u02B2\x03\x02" +
    "\x02\x02\u02B4\u02B7\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5" +
    "\u02B6\x03\x02\x02\x02\u02B6\x9B\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02" +
    "\x02\u02B8\u02B9\x072\x02\x02\u02B9\u02BA\x05|?\x02\u02BA\x9D\x03\x02" +
    "\x02\x02\u02BB\u02BC\x07\x13\x02\x02\u02BC\u02BD\x05\x0E\b\x02\u02BD\x9F" +
    "\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\xA1\x03\x02\x02\x02" +
    "\u02C0\u02C1\x03\x02\x02\x02\u02C1\xA3\x03\x02\x02\x02\u02C2\u02C7\x05" +
    "\xA6T\x02\u02C3\u02C7\x05\xAAV\x02\u02C4\u02C7\x05\xB2Z\x02\u02C5\u02C7" +
    "\x05\xC0a\x02\u02C6\u02C2\x03\x02\x02\x02\u02C6\u02C3\x03\x02\x02\x02" +
    "\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7\xA5\x03" +
    "\x02\x02\x02\u02C8\u02C9\x07\x05\x02\x02\u02C9\u02CA\x05\xA8U\x02\u02CA" +
    "\u02CB\x07\x0F\x02\x02\u02CB\xA7\x03\x02\x02\x02\u02CC\u02D1\x05r:\x02" +
    "\u02CD\u02CE\x071\x02\x02\u02CE\u02D0\x05r:\x02\u02CF\u02CD\x03\x02\x02" +
    "\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2" +
    "\x03\x02\x02\x02\u02D2\xA9\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02" +
    "\u02D4\u02D7\x05\xACW\x02\u02D5\u02D7\x05\xAEX\x02\u02D6\u02D4\x03\x02" +
    "\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D7\xAB\x03\x02\x02\x02\u02D8\u02D9" +
    "\x07\x14\x02\x02\u02D9\u02DA\x05|?\x02\u02DA\u02DB\x07$\x02\x02\u02DB" +
    "\u02DE\x05r:\x02\u02DC\u02DD\x07\x0E\x02\x02\u02DD\u02DF\x05r:\x02\u02DE" +
    "\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\xAD\x03\x02\x02" +
    "\x02\u02E0\u02E1\x07\x07\x02\x02\u02E1\u02E2\x05|?\x02\u02E2\u02E3\x07" +
    "\x1B\x02\x02\u02E3\u02E8\x05\xB0Y\x02\u02E4\u02E5\x071\x02\x02\u02E5\u02E7" +
    "\x05\xB0Y\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02" +
    "\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EE\x03" +
    "\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EC\x071\x02\x02\u02EC" +
    "\u02ED\x07\x0E\x02\x02\u02ED\u02EF\x05\xA8U\x02\u02EE\u02EB\x03\x02\x02" +
    "\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F1" +
    "\x07\x0F\x02\x02\u02F1\xAF\x03\x02\x02\x02\u02F2\u02F3\x05l7\x02\u02F3" +
    "\u02F4\x072\x02\x02\u02F4\u02F5\x05r:\x02\u02F5\xB1\x03\x02\x02\x02\u02F6" +
    "\u02FA\x05\xB4[\x02\u02F7\u02FA\x05\xB6\\\x02\u02F8\u02FA\x05\xB8]\x02" +
    "\u02F9\u02F6\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02F8\x03" +
    "\x02\x02\x02\u02FA\xB3\x03\x02\x02\x02\u02FB\u02FC\x07)\x02\x02\u02FC" +
    "\u02FD\x05|?\x02\u02FD\u02FE\x07\f\x02\x02\u02FE\u02FF\x05r:\x02\u02FF" +
    "\xB5\x03\x02\x02\x02\u0300\u0301\x07\"\x02\x02\u0301\u0302\x05\xA8U\x02" +
    "\u0302\u0303\x07\'\x02\x02\u0303\u0304\x05|?\x02\u0304\xB7\x03\x02\x02" +
    "\x02\u0305\u0306\x07\x11\x02\x02\u0306\u0307\x05\x06\x04\x02\u0307\u0308" +
    "\x07/\x02\x02\u0308\u0309\x05\xBA^\x02\u0309\u030A\x07\f\x02\x02\u030A" +
    "\u030B\x05r:\x02\u030B\xB9\x03\x02\x02\x02\u030C\u030D\x05\xBC_\x02\u030D" +
    "\u030E\t\b\x02\x02\u030E\u030F\x05\xBE`\x02\u030F\xBB\x03\x02\x02\x02" +
    "\u0310\u0311\x05|?\x02\u0311\xBD\x03\x02\x02\x02\u0312\u0313\x05|?\x02" +
    "\u0313\xBF\x03\x02\x02\x02\u0314\u0315\x07*\x02\x02\u0315\u0316\x05\xC2" +
    "b\x02\u0316\u0317\x07\f\x02\x02\u0317\u0318\x05r:\x02\u0318\xC1\x03\x02" +
    "\x02\x02\u0319\u031E\x05z>\x02\u031A\u031B\x070\x02\x02\u031B\u031D\x05" +
    "z>\x02\u031C\u031A\x03\x02\x02\x02\u031D\u0320\x03\x02\x02\x02\u031E\u031C" +
    "\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\xC3\x03\x02\x02\x02" +
    "\u0320\u031E\x03\x02\x02\x02C\xC6\xD2\xDA\xE5\xE7\xF6\u0103\u0118\u011C" +
    "\u012E\u0135\u0139\u0140\u0145\u014B\u0157\u015C\u0162\u0168\u017A\u0181" +
    "\u018A\u0191\u0194\u019B\u01AA\u01B2\u01C4\u01CF\u01DD\u01E2\u01ED\u01F9" +
    "\u0204\u020C\u0212\u0220\u0224\u022A\u0233\u023B\u0246\u024E\u0250\u0257" +
    "\u025F\u0267\u026C\u027B\u0281\u028D\u0298\u029F\u02A3\u02A8\u02AF\u02B5" +
    "\u02C6\u02D1\u02D6\u02DE\u02E8\u02EE\u02F9\u031E";
pascalParser._serializedATN = Utils.join([
    pascalParser._serializedATNSegment0,
    pascalParser._serializedATNSegment1,
], "");
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    programHeading() {
        return this.getRuleContext(0, ProgramHeadingContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    DOT() { return this.getToken(pascalParser.DOT, 0); }
    EOF() { return this.getToken(pascalParser.EOF, 0); }
    INTERFACE() { return this.tryGetToken(pascalParser.INTERFACE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_program; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
class ProgramHeadingContext extends ParserRuleContext_1.ParserRuleContext {
    PROGRAM() { return this.tryGetToken(pascalParser.PROGRAM, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    SEMI() { return this.getToken(pascalParser.SEMI, 0); }
    LPAREN() { return this.tryGetToken(pascalParser.LPAREN, 0); }
    identifierList() {
        return this.tryGetRuleContext(0, IdentifierListContext);
    }
    RPAREN() { return this.tryGetToken(pascalParser.RPAREN, 0); }
    UNIT() { return this.tryGetToken(pascalParser.UNIT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_programHeading; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgramHeading) {
            listener.enterProgramHeading(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgramHeading) {
            listener.exitProgramHeading(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgramHeading) {
            return visitor.visitProgramHeading(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramHeadingContext = ProgramHeadingContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    IDENT() { return this.getToken(pascalParser.IDENT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    compoundStatement() {
        return this.getRuleContext(0, CompoundStatementContext);
    }
    labelDeclarationPart(i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelDeclarationPartContext);
        }
        else {
            return this.getRuleContext(i, LabelDeclarationPartContext);
        }
    }
    constantDefinitionPart(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDefinitionPartContext);
        }
        else {
            return this.getRuleContext(i, ConstantDefinitionPartContext);
        }
    }
    typeDefinitionPart(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDefinitionPartContext);
        }
        else {
            return this.getRuleContext(i, TypeDefinitionPartContext);
        }
    }
    variableDeclarationPart(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationPartContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationPartContext);
        }
    }
    procedureAndFunctionDeclarationPart(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProcedureAndFunctionDeclarationPartContext);
        }
        else {
            return this.getRuleContext(i, ProcedureAndFunctionDeclarationPartContext);
        }
    }
    usesUnitsPart(i) {
        if (i === undefined) {
            return this.getRuleContexts(UsesUnitsPartContext);
        }
        else {
            return this.getRuleContext(i, UsesUnitsPartContext);
        }
    }
    IMPLEMENTATION(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.IMPLEMENTATION);
        }
        else {
            return this.getToken(pascalParser.IMPLEMENTATION, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class UsesUnitsPartContext extends ParserRuleContext_1.ParserRuleContext {
    USES() { return this.getToken(pascalParser.USES, 0); }
    identifierList() {
        return this.getRuleContext(0, IdentifierListContext);
    }
    SEMI() { return this.getToken(pascalParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_usesUnitsPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterUsesUnitsPart) {
            listener.enterUsesUnitsPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUsesUnitsPart) {
            listener.exitUsesUnitsPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUsesUnitsPart) {
            return visitor.visitUsesUnitsPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UsesUnitsPartContext = UsesUnitsPartContext;
class LabelDeclarationPartContext extends ParserRuleContext_1.ParserRuleContext {
    LABEL() { return this.getToken(pascalParser.LABEL, 0); }
    label(i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    }
    SEMI() { return this.getToken(pascalParser.SEMI, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_labelDeclarationPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterLabelDeclarationPart) {
            listener.enterLabelDeclarationPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLabelDeclarationPart) {
            listener.exitLabelDeclarationPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLabelDeclarationPart) {
            return visitor.visitLabelDeclarationPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LabelDeclarationPartContext = LabelDeclarationPartContext;
class LabelContext extends ParserRuleContext_1.ParserRuleContext {
    unsignedInteger() {
        return this.getRuleContext(0, UnsignedIntegerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_label; }
    // @Override
    enterRule(listener) {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LabelContext = LabelContext;
class ConstantDefinitionPartContext extends ParserRuleContext_1.ParserRuleContext {
    CONST() { return this.getToken(pascalParser.CONST, 0); }
    constantDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ConstantDefinitionContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_constantDefinitionPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstantDefinitionPart) {
            listener.enterConstantDefinitionPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstantDefinitionPart) {
            listener.exitConstantDefinitionPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstantDefinitionPart) {
            return visitor.visitConstantDefinitionPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantDefinitionPartContext = ConstantDefinitionPartContext;
class ConstantDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    EQUAL() { return this.getToken(pascalParser.EQUAL, 0); }
    constant() {
        return this.getRuleContext(0, ConstantContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_constantDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstantDefinition) {
            listener.enterConstantDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstantDefinition) {
            listener.exitConstantDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstantDefinition) {
            return visitor.visitConstantDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantDefinitionContext = ConstantDefinitionContext;
class ConstantChrContext extends ParserRuleContext_1.ParserRuleContext {
    CHR() { return this.getToken(pascalParser.CHR, 0); }
    LPAREN() { return this.getToken(pascalParser.LPAREN, 0); }
    unsignedInteger() {
        return this.getRuleContext(0, UnsignedIntegerContext);
    }
    RPAREN() { return this.getToken(pascalParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_constantChr; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstantChr) {
            listener.enterConstantChr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstantChr) {
            listener.exitConstantChr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstantChr) {
            return visitor.visitConstantChr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantChrContext = ConstantChrContext;
class ConstantContext extends ParserRuleContext_1.ParserRuleContext {
    unsignedNumber() {
        return this.tryGetRuleContext(0, UnsignedNumberContext);
    }
    sign() {
        return this.tryGetRuleContext(0, SignContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    constantChr() {
        return this.tryGetRuleContext(0, ConstantChrContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_constant; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantContext = ConstantContext;
class UnsignedNumberContext extends ParserRuleContext_1.ParserRuleContext {
    unsignedInteger() {
        return this.tryGetRuleContext(0, UnsignedIntegerContext);
    }
    unsignedReal() {
        return this.tryGetRuleContext(0, UnsignedRealContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_unsignedNumber; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnsignedNumber) {
            listener.enterUnsignedNumber(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnsignedNumber) {
            listener.exitUnsignedNumber(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnsignedNumber) {
            return visitor.visitUnsignedNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnsignedNumberContext = UnsignedNumberContext;
class UnsignedIntegerContext extends ParserRuleContext_1.ParserRuleContext {
    NUM_INT() { return this.getToken(pascalParser.NUM_INT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_unsignedInteger; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnsignedInteger) {
            listener.enterUnsignedInteger(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnsignedInteger) {
            listener.exitUnsignedInteger(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnsignedInteger) {
            return visitor.visitUnsignedInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnsignedIntegerContext = UnsignedIntegerContext;
class UnsignedRealContext extends ParserRuleContext_1.ParserRuleContext {
    NUM_REAL() { return this.getToken(pascalParser.NUM_REAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_unsignedReal; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnsignedReal) {
            listener.enterUnsignedReal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnsignedReal) {
            listener.exitUnsignedReal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnsignedReal) {
            return visitor.visitUnsignedReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnsignedRealContext = UnsignedRealContext;
class SignContext extends ParserRuleContext_1.ParserRuleContext {
    PLUS() { return this.tryGetToken(pascalParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(pascalParser.MINUS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_sign; }
    // @Override
    enterRule(listener) {
        if (listener.enterSign) {
            listener.enterSign(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSign) {
            listener.exitSign(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSign) {
            return visitor.visitSign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SignContext = SignContext;
class Bool_Context extends ParserRuleContext_1.ParserRuleContext {
    TRUE() { return this.tryGetToken(pascalParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(pascalParser.FALSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_bool_; }
    // @Override
    enterRule(listener) {
        if (listener.enterBool_) {
            listener.enterBool_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBool_) {
            listener.exitBool_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBool_) {
            return visitor.visitBool_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Bool_Context = Bool_Context;
class StringContext extends ParserRuleContext_1.ParserRuleContext {
    STRING_LITERAL() { return this.getToken(pascalParser.STRING_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_string; }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringContext = StringContext;
class TypeDefinitionPartContext extends ParserRuleContext_1.ParserRuleContext {
    TYPE() { return this.getToken(pascalParser.TYPE, 0); }
    typeDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDefinitionContext);
        }
        else {
            return this.getRuleContext(i, TypeDefinitionContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_typeDefinitionPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDefinitionPart) {
            listener.enterTypeDefinitionPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDefinitionPart) {
            listener.exitTypeDefinitionPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDefinitionPart) {
            return visitor.visitTypeDefinitionPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDefinitionPartContext = TypeDefinitionPartContext;
class TypeDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    EQUAL() { return this.getToken(pascalParser.EQUAL, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    functionType() {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    }
    procedureType() {
        return this.tryGetRuleContext(0, ProcedureTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_typeDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDefinition) {
            listener.enterTypeDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDefinition) {
            listener.exitTypeDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDefinition) {
            return visitor.visitTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDefinitionContext = TypeDefinitionContext;
class FunctionTypeContext extends ParserRuleContext_1.ParserRuleContext {
    FUNCTION() { return this.getToken(pascalParser.FUNCTION, 0); }
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    resultType() {
        return this.getRuleContext(0, ResultTypeContext);
    }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_functionType; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionType) {
            listener.enterFunctionType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionType) {
            listener.exitFunctionType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionTypeContext = FunctionTypeContext;
class ProcedureTypeContext extends ParserRuleContext_1.ParserRuleContext {
    PROCEDURE() { return this.getToken(pascalParser.PROCEDURE, 0); }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_procedureType; }
    // @Override
    enterRule(listener) {
        if (listener.enterProcedureType) {
            listener.enterProcedureType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProcedureType) {
            listener.exitProcedureType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProcedureType) {
            return visitor.visitProcedureType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProcedureTypeContext = ProcedureTypeContext;
class Type_Context extends ParserRuleContext_1.ParserRuleContext {
    simpleType() {
        return this.tryGetRuleContext(0, SimpleTypeContext);
    }
    structuredType() {
        return this.tryGetRuleContext(0, StructuredTypeContext);
    }
    pointerType() {
        return this.tryGetRuleContext(0, PointerTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_type_; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_) {
            listener.enterType_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_) {
            listener.exitType_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Type_Context = Type_Context;
class SimpleTypeContext extends ParserRuleContext_1.ParserRuleContext {
    scalarType() {
        return this.tryGetRuleContext(0, ScalarTypeContext);
    }
    subrangeType() {
        return this.tryGetRuleContext(0, SubrangeTypeContext);
    }
    typeIdentifier() {
        return this.tryGetRuleContext(0, TypeIdentifierContext);
    }
    stringtype() {
        return this.tryGetRuleContext(0, StringtypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_simpleType; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleType) {
            listener.enterSimpleType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleType) {
            listener.exitSimpleType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleType) {
            return visitor.visitSimpleType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleTypeContext = SimpleTypeContext;
class ScalarTypeContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(pascalParser.LPAREN, 0); }
    identifierList() {
        return this.getRuleContext(0, IdentifierListContext);
    }
    RPAREN() { return this.getToken(pascalParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_scalarType; }
    // @Override
    enterRule(listener) {
        if (listener.enterScalarType) {
            listener.enterScalarType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitScalarType) {
            listener.exitScalarType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitScalarType) {
            return visitor.visitScalarType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ScalarTypeContext = ScalarTypeContext;
class SubrangeTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constant(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    }
    DOTDOT() { return this.getToken(pascalParser.DOTDOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_subrangeType; }
    // @Override
    enterRule(listener) {
        if (listener.enterSubrangeType) {
            listener.enterSubrangeType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSubrangeType) {
            listener.exitSubrangeType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubrangeType) {
            return visitor.visitSubrangeType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubrangeTypeContext = SubrangeTypeContext;
class TypeIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    CHAR() { return this.tryGetToken(pascalParser.CHAR, 0); }
    BOOLEAN() { return this.tryGetToken(pascalParser.BOOLEAN, 0); }
    INTEGER() { return this.tryGetToken(pascalParser.INTEGER, 0); }
    REAL() { return this.tryGetToken(pascalParser.REAL, 0); }
    STRING() { return this.tryGetToken(pascalParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_typeIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeIdentifier) {
            listener.enterTypeIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeIdentifier) {
            listener.exitTypeIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeIdentifier) {
            return visitor.visitTypeIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeIdentifierContext = TypeIdentifierContext;
class StructuredTypeContext extends ParserRuleContext_1.ParserRuleContext {
    PACKED() { return this.tryGetToken(pascalParser.PACKED, 0); }
    unpackedStructuredType() {
        return this.getRuleContext(0, UnpackedStructuredTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_structuredType; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructuredType) {
            listener.enterStructuredType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructuredType) {
            listener.exitStructuredType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructuredType) {
            return visitor.visitStructuredType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructuredTypeContext = StructuredTypeContext;
class UnpackedStructuredTypeContext extends ParserRuleContext_1.ParserRuleContext {
    arrayType() {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    }
    recordType() {
        return this.tryGetRuleContext(0, RecordTypeContext);
    }
    setType() {
        return this.tryGetRuleContext(0, SetTypeContext);
    }
    fileType() {
        return this.tryGetRuleContext(0, FileTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_unpackedStructuredType; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnpackedStructuredType) {
            listener.enterUnpackedStructuredType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnpackedStructuredType) {
            listener.exitUnpackedStructuredType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnpackedStructuredType) {
            return visitor.visitUnpackedStructuredType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnpackedStructuredTypeContext = UnpackedStructuredTypeContext;
class StringtypeContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(pascalParser.STRING, 0); }
    LBRACK() { return this.getToken(pascalParser.LBRACK, 0); }
    RBRACK() { return this.getToken(pascalParser.RBRACK, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    unsignedNumber() {
        return this.tryGetRuleContext(0, UnsignedNumberContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_stringtype; }
    // @Override
    enterRule(listener) {
        if (listener.enterStringtype) {
            listener.enterStringtype(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringtype) {
            listener.exitStringtype(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringtype) {
            return visitor.visitStringtype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringtypeContext = StringtypeContext;
class ArrayTypeContext extends ParserRuleContext_1.ParserRuleContext {
    ARRAY() { return this.getToken(pascalParser.ARRAY, 0); }
    LBRACK() { return this.tryGetToken(pascalParser.LBRACK, 0); }
    typeList() {
        return this.getRuleContext(0, TypeListContext);
    }
    RBRACK() { return this.tryGetToken(pascalParser.RBRACK, 0); }
    OF() { return this.getToken(pascalParser.OF, 0); }
    componentType() {
        return this.getRuleContext(0, ComponentTypeContext);
    }
    LBRACK2() { return this.tryGetToken(pascalParser.LBRACK2, 0); }
    RBRACK2() { return this.tryGetToken(pascalParser.RBRACK2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_arrayType; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayType) {
            listener.enterArrayType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayType) {
            listener.exitArrayType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayTypeContext = ArrayTypeContext;
class TypeListContext extends ParserRuleContext_1.ParserRuleContext {
    indexType(i) {
        if (i === undefined) {
            return this.getRuleContexts(IndexTypeContext);
        }
        else {
            return this.getRuleContext(i, IndexTypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_typeList; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeList) {
            listener.enterTypeList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeList) {
            listener.exitTypeList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeList) {
            return visitor.visitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeListContext = TypeListContext;
class IndexTypeContext extends ParserRuleContext_1.ParserRuleContext {
    simpleType() {
        return this.getRuleContext(0, SimpleTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_indexType; }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexType) {
            listener.enterIndexType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexType) {
            listener.exitIndexType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexType) {
            return visitor.visitIndexType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexTypeContext = IndexTypeContext;
class ComponentTypeContext extends ParserRuleContext_1.ParserRuleContext {
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_componentType; }
    // @Override
    enterRule(listener) {
        if (listener.enterComponentType) {
            listener.enterComponentType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComponentType) {
            listener.exitComponentType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentType) {
            return visitor.visitComponentType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentTypeContext = ComponentTypeContext;
class RecordTypeContext extends ParserRuleContext_1.ParserRuleContext {
    RECORD() { return this.getToken(pascalParser.RECORD, 0); }
    END() { return this.getToken(pascalParser.END, 0); }
    fieldList() {
        return this.tryGetRuleContext(0, FieldListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_recordType; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordType) {
            listener.enterRecordType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordType) {
            listener.exitRecordType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordType) {
            return visitor.visitRecordType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordTypeContext = RecordTypeContext;
class FieldListContext extends ParserRuleContext_1.ParserRuleContext {
    fixedPart() {
        return this.tryGetRuleContext(0, FixedPartContext);
    }
    SEMI() { return this.tryGetToken(pascalParser.SEMI, 0); }
    variantPart() {
        return this.tryGetRuleContext(0, VariantPartContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_fieldList; }
    // @Override
    enterRule(listener) {
        if (listener.enterFieldList) {
            listener.enterFieldList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFieldList) {
            listener.exitFieldList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFieldList) {
            return visitor.visitFieldList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FieldListContext = FieldListContext;
class FixedPartContext extends ParserRuleContext_1.ParserRuleContext {
    recordSection(i) {
        if (i === undefined) {
            return this.getRuleContexts(RecordSectionContext);
        }
        else {
            return this.getRuleContext(i, RecordSectionContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_fixedPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterFixedPart) {
            listener.enterFixedPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFixedPart) {
            listener.exitFixedPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFixedPart) {
            return visitor.visitFixedPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FixedPartContext = FixedPartContext;
class RecordSectionContext extends ParserRuleContext_1.ParserRuleContext {
    identifierList() {
        return this.getRuleContext(0, IdentifierListContext);
    }
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_recordSection; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordSection) {
            listener.enterRecordSection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordSection) {
            listener.exitRecordSection(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordSection) {
            return visitor.visitRecordSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordSectionContext = RecordSectionContext;
class VariantPartContext extends ParserRuleContext_1.ParserRuleContext {
    CASE() { return this.getToken(pascalParser.CASE, 0); }
    tag() {
        return this.getRuleContext(0, TagContext);
    }
    OF() { return this.getToken(pascalParser.OF, 0); }
    variant(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariantContext);
        }
        else {
            return this.getRuleContext(i, VariantContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_variantPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariantPart) {
            listener.enterVariantPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariantPart) {
            listener.exitVariantPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariantPart) {
            return visitor.visitVariantPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariantPartContext = VariantPartContext;
class TagContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    COLON() { return this.tryGetToken(pascalParser.COLON, 0); }
    typeIdentifier() {
        return this.getRuleContext(0, TypeIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_tag; }
    // @Override
    enterRule(listener) {
        if (listener.enterTag) {
            listener.enterTag(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTag) {
            listener.exitTag(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTag) {
            return visitor.visitTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TagContext = TagContext;
class VariantContext extends ParserRuleContext_1.ParserRuleContext {
    constList() {
        return this.getRuleContext(0, ConstListContext);
    }
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    LPAREN() { return this.getToken(pascalParser.LPAREN, 0); }
    fieldList() {
        return this.getRuleContext(0, FieldListContext);
    }
    RPAREN() { return this.getToken(pascalParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_variant; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariant) {
            listener.enterVariant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariant) {
            listener.exitVariant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariant) {
            return visitor.visitVariant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariantContext = VariantContext;
class SetTypeContext extends ParserRuleContext_1.ParserRuleContext {
    SET() { return this.getToken(pascalParser.SET, 0); }
    OF() { return this.getToken(pascalParser.OF, 0); }
    baseType() {
        return this.getRuleContext(0, BaseTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_setType; }
    // @Override
    enterRule(listener) {
        if (listener.enterSetType) {
            listener.enterSetType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSetType) {
            listener.exitSetType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSetType) {
            return visitor.visitSetType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetTypeContext = SetTypeContext;
class BaseTypeContext extends ParserRuleContext_1.ParserRuleContext {
    simpleType() {
        return this.getRuleContext(0, SimpleTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_baseType; }
    // @Override
    enterRule(listener) {
        if (listener.enterBaseType) {
            listener.enterBaseType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBaseType) {
            listener.exitBaseType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBaseType) {
            return visitor.visitBaseType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BaseTypeContext = BaseTypeContext;
class FileTypeContext extends ParserRuleContext_1.ParserRuleContext {
    FILE() { return this.getToken(pascalParser.FILE, 0); }
    OF() { return this.tryGetToken(pascalParser.OF, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_fileType; }
    // @Override
    enterRule(listener) {
        if (listener.enterFileType) {
            listener.enterFileType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFileType) {
            listener.exitFileType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFileType) {
            return visitor.visitFileType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FileTypeContext = FileTypeContext;
class PointerTypeContext extends ParserRuleContext_1.ParserRuleContext {
    POINTER() { return this.getToken(pascalParser.POINTER, 0); }
    typeIdentifier() {
        return this.getRuleContext(0, TypeIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_pointerType; }
    // @Override
    enterRule(listener) {
        if (listener.enterPointerType) {
            listener.enterPointerType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPointerType) {
            listener.exitPointerType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPointerType) {
            return visitor.visitPointerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PointerTypeContext = PointerTypeContext;
class VariableDeclarationPartContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(pascalParser.VAR, 0); }
    variableDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_variableDeclarationPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclarationPart) {
            listener.enterVariableDeclarationPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclarationPart) {
            listener.exitVariableDeclarationPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclarationPart) {
            return visitor.visitVariableDeclarationPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclarationPartContext = VariableDeclarationPartContext;
class VariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    identifierList() {
        return this.getRuleContext(0, IdentifierListContext);
    }
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_variableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclarationContext = VariableDeclarationContext;
class ProcedureAndFunctionDeclarationPartContext extends ParserRuleContext_1.ParserRuleContext {
    procedureOrFunctionDeclaration() {
        return this.getRuleContext(0, ProcedureOrFunctionDeclarationContext);
    }
    SEMI() { return this.getToken(pascalParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_procedureAndFunctionDeclarationPart; }
    // @Override
    enterRule(listener) {
        if (listener.enterProcedureAndFunctionDeclarationPart) {
            listener.enterProcedureAndFunctionDeclarationPart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProcedureAndFunctionDeclarationPart) {
            listener.exitProcedureAndFunctionDeclarationPart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProcedureAndFunctionDeclarationPart) {
            return visitor.visitProcedureAndFunctionDeclarationPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProcedureAndFunctionDeclarationPartContext = ProcedureAndFunctionDeclarationPartContext;
class ProcedureOrFunctionDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    procedureDeclaration() {
        return this.tryGetRuleContext(0, ProcedureDeclarationContext);
    }
    functionDeclaration() {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_procedureOrFunctionDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterProcedureOrFunctionDeclaration) {
            listener.enterProcedureOrFunctionDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProcedureOrFunctionDeclaration) {
            listener.exitProcedureOrFunctionDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProcedureOrFunctionDeclaration) {
            return visitor.visitProcedureOrFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProcedureOrFunctionDeclarationContext = ProcedureOrFunctionDeclarationContext;
class ProcedureDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    PROCEDURE() { return this.getToken(pascalParser.PROCEDURE, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    SEMI() { return this.getToken(pascalParser.SEMI, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_procedureDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterProcedureDeclaration) {
            listener.enterProcedureDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProcedureDeclaration) {
            listener.exitProcedureDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProcedureDeclaration) {
            return visitor.visitProcedureDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProcedureDeclarationContext = ProcedureDeclarationContext;
class FormalParameterListContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(pascalParser.LPAREN, 0); }
    formalParameterSection(i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterSectionContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterSectionContext);
        }
    }
    RPAREN() { return this.getToken(pascalParser.RPAREN, 0); }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_formalParameterList; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParameterListContext = FormalParameterListContext;
class FormalParameterSectionContext extends ParserRuleContext_1.ParserRuleContext {
    parameterGroup() {
        return this.getRuleContext(0, ParameterGroupContext);
    }
    VAR() { return this.tryGetToken(pascalParser.VAR, 0); }
    FUNCTION() { return this.tryGetToken(pascalParser.FUNCTION, 0); }
    PROCEDURE() { return this.tryGetToken(pascalParser.PROCEDURE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_formalParameterSection; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormalParameterSection) {
            listener.enterFormalParameterSection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormalParameterSection) {
            listener.exitFormalParameterSection(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameterSection) {
            return visitor.visitFormalParameterSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParameterSectionContext = FormalParameterSectionContext;
class ParameterGroupContext extends ParserRuleContext_1.ParserRuleContext {
    identifierList() {
        return this.getRuleContext(0, IdentifierListContext);
    }
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    typeIdentifier() {
        return this.getRuleContext(0, TypeIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_parameterGroup; }
    // @Override
    enterRule(listener) {
        if (listener.enterParameterGroup) {
            listener.enterParameterGroup(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParameterGroup) {
            listener.exitParameterGroup(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterGroup) {
            return visitor.visitParameterGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterGroupContext = ParameterGroupContext;
class IdentifierListContext extends ParserRuleContext_1.ParserRuleContext {
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_identifierList; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifierList) {
            listener.enterIdentifierList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifierList) {
            listener.exitIdentifierList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierListContext = IdentifierListContext;
class ConstListContext extends ParserRuleContext_1.ParserRuleContext {
    constant(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_constList; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstList) {
            listener.enterConstList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstList) {
            listener.exitConstList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstList) {
            return visitor.visitConstList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstListContext = ConstListContext;
class FunctionDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    FUNCTION() { return this.getToken(pascalParser.FUNCTION, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    resultType() {
        return this.getRuleContext(0, ResultTypeContext);
    }
    SEMI() { return this.getToken(pascalParser.SEMI, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_functionDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionDeclarationContext = FunctionDeclarationContext;
class ResultTypeContext extends ParserRuleContext_1.ParserRuleContext {
    typeIdentifier() {
        return this.getRuleContext(0, TypeIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_resultType; }
    // @Override
    enterRule(listener) {
        if (listener.enterResultType) {
            listener.enterResultType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResultType) {
            listener.exitResultType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitResultType) {
            return visitor.visitResultType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResultTypeContext = ResultTypeContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    label() {
        return this.tryGetRuleContext(0, LabelContext);
    }
    COLON() { return this.tryGetToken(pascalParser.COLON, 0); }
    unlabelledStatement() {
        return this.getRuleContext(0, UnlabelledStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class UnlabelledStatementContext extends ParserRuleContext_1.ParserRuleContext {
    simpleStatement() {
        return this.tryGetRuleContext(0, SimpleStatementContext);
    }
    structuredStatement() {
        return this.tryGetRuleContext(0, StructuredStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_unlabelledStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnlabelledStatement) {
            listener.enterUnlabelledStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnlabelledStatement) {
            listener.exitUnlabelledStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnlabelledStatement) {
            return visitor.visitUnlabelledStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnlabelledStatementContext = UnlabelledStatementContext;
class SimpleStatementContext extends ParserRuleContext_1.ParserRuleContext {
    assignmentStatement() {
        return this.tryGetRuleContext(0, AssignmentStatementContext);
    }
    procedureStatement() {
        return this.tryGetRuleContext(0, ProcedureStatementContext);
    }
    gotoStatement() {
        return this.tryGetRuleContext(0, GotoStatementContext);
    }
    emptyStatement_() {
        return this.tryGetRuleContext(0, EmptyStatement_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_simpleStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleStatement) {
            listener.enterSimpleStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleStatement) {
            listener.exitSimpleStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleStatement) {
            return visitor.visitSimpleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleStatementContext = SimpleStatementContext;
class AssignmentStatementContext extends ParserRuleContext_1.ParserRuleContext {
    variable() {
        return this.getRuleContext(0, VariableContext);
    }
    ASSIGN() { return this.getToken(pascalParser.ASSIGN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_assignmentStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignmentStatement) {
            listener.enterAssignmentStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignmentStatement) {
            listener.exitAssignmentStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentStatement) {
            return visitor.visitAssignmentStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentStatementContext = AssignmentStatementContext;
class VariableContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.tryGetToken(pascalParser.AT, 0); }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.LBRACK);
        }
        else {
            return this.getToken(pascalParser.LBRACK, i);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.RBRACK);
        }
        else {
            return this.getToken(pascalParser.RBRACK, i);
        }
    }
    LBRACK2(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.LBRACK2);
        }
        else {
            return this.getToken(pascalParser.LBRACK2, i);
        }
    }
    RBRACK2(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.RBRACK2);
        }
        else {
            return this.getToken(pascalParser.RBRACK2, i);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.DOT);
        }
        else {
            return this.getToken(pascalParser.DOT, i);
        }
    }
    POINTER(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.POINTER);
        }
        else {
            return this.getToken(pascalParser.POINTER, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_variable; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableContext = VariableContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    simpleExpression() {
        return this.getRuleContext(0, SimpleExpressionContext);
    }
    relationaloperator() {
        return this.tryGetRuleContext(0, RelationaloperatorContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class RelationaloperatorContext extends ParserRuleContext_1.ParserRuleContext {
    EQUAL() { return this.tryGetToken(pascalParser.EQUAL, 0); }
    NOT_EQUAL() { return this.tryGetToken(pascalParser.NOT_EQUAL, 0); }
    LT() { return this.tryGetToken(pascalParser.LT, 0); }
    LE() { return this.tryGetToken(pascalParser.LE, 0); }
    GE() { return this.tryGetToken(pascalParser.GE, 0); }
    GT() { return this.tryGetToken(pascalParser.GT, 0); }
    IN() { return this.tryGetToken(pascalParser.IN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_relationaloperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterRelationaloperator) {
            listener.enterRelationaloperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelationaloperator) {
            listener.exitRelationaloperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRelationaloperator) {
            return visitor.visitRelationaloperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RelationaloperatorContext = RelationaloperatorContext;
class SimpleExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    additiveoperator() {
        return this.tryGetRuleContext(0, AdditiveoperatorContext);
    }
    simpleExpression() {
        return this.tryGetRuleContext(0, SimpleExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_simpleExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleExpression) {
            listener.enterSimpleExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleExpression) {
            listener.exitSimpleExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleExpression) {
            return visitor.visitSimpleExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleExpressionContext = SimpleExpressionContext;
class AdditiveoperatorContext extends ParserRuleContext_1.ParserRuleContext {
    PLUS() { return this.tryGetToken(pascalParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(pascalParser.MINUS, 0); }
    OR() { return this.tryGetToken(pascalParser.OR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_additiveoperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditiveoperator) {
            listener.enterAdditiveoperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditiveoperator) {
            listener.exitAdditiveoperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveoperator) {
            return visitor.visitAdditiveoperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveoperatorContext = AdditiveoperatorContext;
class TermContext extends ParserRuleContext_1.ParserRuleContext {
    signedFactor() {
        return this.getRuleContext(0, SignedFactorContext);
    }
    multiplicativeoperator() {
        return this.tryGetRuleContext(0, MultiplicativeoperatorContext);
    }
    term() {
        return this.tryGetRuleContext(0, TermContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TermContext = TermContext;
class MultiplicativeoperatorContext extends ParserRuleContext_1.ParserRuleContext {
    STAR() { return this.tryGetToken(pascalParser.STAR, 0); }
    SLASH() { return this.tryGetToken(pascalParser.SLASH, 0); }
    DIV() { return this.tryGetToken(pascalParser.DIV, 0); }
    MOD() { return this.tryGetToken(pascalParser.MOD, 0); }
    AND() { return this.tryGetToken(pascalParser.AND, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_multiplicativeoperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicativeoperator) {
            listener.enterMultiplicativeoperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicativeoperator) {
            listener.exitMultiplicativeoperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeoperator) {
            return visitor.visitMultiplicativeoperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeoperatorContext = MultiplicativeoperatorContext;
class SignedFactorContext extends ParserRuleContext_1.ParserRuleContext {
    factor() {
        return this.getRuleContext(0, FactorContext);
    }
    PLUS() { return this.tryGetToken(pascalParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(pascalParser.MINUS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_signedFactor; }
    // @Override
    enterRule(listener) {
        if (listener.enterSignedFactor) {
            listener.enterSignedFactor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSignedFactor) {
            listener.exitSignedFactor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSignedFactor) {
            return visitor.visitSignedFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SignedFactorContext = SignedFactorContext;
class FactorContext extends ParserRuleContext_1.ParserRuleContext {
    variable() {
        return this.tryGetRuleContext(0, VariableContext);
    }
    LPAREN() { return this.tryGetToken(pascalParser.LPAREN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.tryGetToken(pascalParser.RPAREN, 0); }
    functionDesignator() {
        return this.tryGetRuleContext(0, FunctionDesignatorContext);
    }
    unsignedConstant() {
        return this.tryGetRuleContext(0, UnsignedConstantContext);
    }
    set_() {
        return this.tryGetRuleContext(0, Set_Context);
    }
    NOT() { return this.tryGetToken(pascalParser.NOT, 0); }
    factor() {
        return this.tryGetRuleContext(0, FactorContext);
    }
    bool_() {
        return this.tryGetRuleContext(0, Bool_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_factor; }
    // @Override
    enterRule(listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FactorContext = FactorContext;
class UnsignedConstantContext extends ParserRuleContext_1.ParserRuleContext {
    unsignedNumber() {
        return this.tryGetRuleContext(0, UnsignedNumberContext);
    }
    constantChr() {
        return this.tryGetRuleContext(0, ConstantChrContext);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    NIL() { return this.tryGetToken(pascalParser.NIL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_unsignedConstant; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnsignedConstant) {
            listener.enterUnsignedConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnsignedConstant) {
            listener.exitUnsignedConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnsignedConstant) {
            return visitor.visitUnsignedConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnsignedConstantContext = UnsignedConstantContext;
class FunctionDesignatorContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    LPAREN() { return this.getToken(pascalParser.LPAREN, 0); }
    parameterList() {
        return this.getRuleContext(0, ParameterListContext);
    }
    RPAREN() { return this.getToken(pascalParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_functionDesignator; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDesignator) {
            listener.enterFunctionDesignator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDesignator) {
            listener.exitFunctionDesignator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDesignator) {
            return visitor.visitFunctionDesignator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionDesignatorContext = FunctionDesignatorContext;
class ParameterListContext extends ParserRuleContext_1.ParserRuleContext {
    actualParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(ActualParameterContext);
        }
        else {
            return this.getRuleContext(i, ActualParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_parameterList; }
    // @Override
    enterRule(listener) {
        if (listener.enterParameterList) {
            listener.enterParameterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParameterList) {
            listener.exitParameterList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterListContext = ParameterListContext;
class Set_Context extends ParserRuleContext_1.ParserRuleContext {
    LBRACK() { return this.tryGetToken(pascalParser.LBRACK, 0); }
    elementList() {
        return this.getRuleContext(0, ElementListContext);
    }
    RBRACK() { return this.tryGetToken(pascalParser.RBRACK, 0); }
    LBRACK2() { return this.tryGetToken(pascalParser.LBRACK2, 0); }
    RBRACK2() { return this.tryGetToken(pascalParser.RBRACK2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_set_; }
    // @Override
    enterRule(listener) {
        if (listener.enterSet_) {
            listener.enterSet_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSet_) {
            listener.exitSet_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSet_) {
            return visitor.visitSet_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Set_Context = Set_Context;
class ElementListContext extends ParserRuleContext_1.ParserRuleContext {
    element(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_elementList; }
    // @Override
    enterRule(listener) {
        if (listener.enterElementList) {
            listener.enterElementList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElementList) {
            listener.exitElementList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementListContext = ElementListContext;
class ElementContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    DOTDOT() { return this.tryGetToken(pascalParser.DOTDOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_element; }
    // @Override
    enterRule(listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementContext = ElementContext;
class ProcedureStatementContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    LPAREN() { return this.tryGetToken(pascalParser.LPAREN, 0); }
    parameterList() {
        return this.tryGetRuleContext(0, ParameterListContext);
    }
    RPAREN() { return this.tryGetToken(pascalParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_procedureStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterProcedureStatement) {
            listener.enterProcedureStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProcedureStatement) {
            listener.exitProcedureStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProcedureStatement) {
            return visitor.visitProcedureStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProcedureStatementContext = ProcedureStatementContext;
class ActualParameterContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    parameterwidth(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterwidthContext);
        }
        else {
            return this.getRuleContext(i, ParameterwidthContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_actualParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterActualParameter) {
            listener.enterActualParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitActualParameter) {
            listener.exitActualParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitActualParameter) {
            return visitor.visitActualParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ActualParameterContext = ActualParameterContext;
class ParameterwidthContext extends ParserRuleContext_1.ParserRuleContext {
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_parameterwidth; }
    // @Override
    enterRule(listener) {
        if (listener.enterParameterwidth) {
            listener.enterParameterwidth(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParameterwidth) {
            listener.exitParameterwidth(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterwidth) {
            return visitor.visitParameterwidth(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterwidthContext = ParameterwidthContext;
class GotoStatementContext extends ParserRuleContext_1.ParserRuleContext {
    GOTO() { return this.getToken(pascalParser.GOTO, 0); }
    label() {
        return this.getRuleContext(0, LabelContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_gotoStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterGotoStatement) {
            listener.enterGotoStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGotoStatement) {
            listener.exitGotoStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGotoStatement) {
            return visitor.visitGotoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GotoStatementContext = GotoStatementContext;
class EmptyStatement_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_emptyStatement_; }
    // @Override
    enterRule(listener) {
        if (listener.enterEmptyStatement_) {
            listener.enterEmptyStatement_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEmptyStatement_) {
            listener.exitEmptyStatement_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEmptyStatement_) {
            return visitor.visitEmptyStatement_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EmptyStatement_Context = EmptyStatement_Context;
class Empty_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_empty_; }
    // @Override
    enterRule(listener) {
        if (listener.enterEmpty_) {
            listener.enterEmpty_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEmpty_) {
            listener.exitEmpty_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEmpty_) {
            return visitor.visitEmpty_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Empty_Context = Empty_Context;
class StructuredStatementContext extends ParserRuleContext_1.ParserRuleContext {
    compoundStatement() {
        return this.tryGetRuleContext(0, CompoundStatementContext);
    }
    conditionalStatement() {
        return this.tryGetRuleContext(0, ConditionalStatementContext);
    }
    repetetiveStatement() {
        return this.tryGetRuleContext(0, RepetetiveStatementContext);
    }
    withStatement() {
        return this.tryGetRuleContext(0, WithStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_structuredStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructuredStatement) {
            listener.enterStructuredStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructuredStatement) {
            listener.exitStructuredStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructuredStatement) {
            return visitor.visitStructuredStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructuredStatementContext = StructuredStatementContext;
class CompoundStatementContext extends ParserRuleContext_1.ParserRuleContext {
    BEGIN() { return this.getToken(pascalParser.BEGIN, 0); }
    statements() {
        return this.getRuleContext(0, StatementsContext);
    }
    END() { return this.getToken(pascalParser.END, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_compoundStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompoundStatement) {
            listener.enterCompoundStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompoundStatement) {
            listener.exitCompoundStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompoundStatement) {
            return visitor.visitCompoundStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompoundStatementContext = CompoundStatementContext;
class StatementsContext extends ParserRuleContext_1.ParserRuleContext {
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_statements; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementsContext = StatementsContext;
class ConditionalStatementContext extends ParserRuleContext_1.ParserRuleContext {
    ifStatement() {
        return this.tryGetRuleContext(0, IfStatementContext);
    }
    caseStatement() {
        return this.tryGetRuleContext(0, CaseStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_conditionalStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterConditionalStatement) {
            listener.enterConditionalStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConditionalStatement) {
            listener.exitConditionalStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditionalStatement) {
            return visitor.visitConditionalStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionalStatementContext = ConditionalStatementContext;
class IfStatementContext extends ParserRuleContext_1.ParserRuleContext {
    IF() { return this.getToken(pascalParser.IF, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    THEN() { return this.getToken(pascalParser.THEN, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    ELSE() { return this.tryGetToken(pascalParser.ELSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_ifStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfStatementContext = IfStatementContext;
class CaseStatementContext extends ParserRuleContext_1.ParserRuleContext {
    CASE() { return this.getToken(pascalParser.CASE, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    OF() { return this.getToken(pascalParser.OF, 0); }
    caseListElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseListElementContext);
        }
        else {
            return this.getRuleContext(i, CaseListElementContext);
        }
    }
    END() { return this.getToken(pascalParser.END, 0); }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    }
    ELSE() { return this.tryGetToken(pascalParser.ELSE, 0); }
    statements() {
        return this.tryGetRuleContext(0, StatementsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_caseStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseStatement) {
            listener.enterCaseStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseStatement) {
            listener.exitCaseStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseStatement) {
            return visitor.visitCaseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaseStatementContext = CaseStatementContext;
class CaseListElementContext extends ParserRuleContext_1.ParserRuleContext {
    constList() {
        return this.getRuleContext(0, ConstListContext);
    }
    COLON() { return this.getToken(pascalParser.COLON, 0); }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_caseListElement; }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseListElement) {
            listener.enterCaseListElement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseListElement) {
            listener.exitCaseListElement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseListElement) {
            return visitor.visitCaseListElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaseListElementContext = CaseListElementContext;
class RepetetiveStatementContext extends ParserRuleContext_1.ParserRuleContext {
    whileStatement() {
        return this.tryGetRuleContext(0, WhileStatementContext);
    }
    repeatStatement() {
        return this.tryGetRuleContext(0, RepeatStatementContext);
    }
    forStatement() {
        return this.tryGetRuleContext(0, ForStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_repetetiveStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterRepetetiveStatement) {
            listener.enterRepetetiveStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRepetetiveStatement) {
            listener.exitRepetetiveStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRepetetiveStatement) {
            return visitor.visitRepetetiveStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RepetetiveStatementContext = RepetetiveStatementContext;
class WhileStatementContext extends ParserRuleContext_1.ParserRuleContext {
    WHILE() { return this.getToken(pascalParser.WHILE, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    DO() { return this.getToken(pascalParser.DO, 0); }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_whileStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhileStatementContext = WhileStatementContext;
class RepeatStatementContext extends ParserRuleContext_1.ParserRuleContext {
    REPEAT() { return this.getToken(pascalParser.REPEAT, 0); }
    statements() {
        return this.getRuleContext(0, StatementsContext);
    }
    UNTIL() { return this.getToken(pascalParser.UNTIL, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_repeatStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterRepeatStatement) {
            listener.enterRepeatStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRepeatStatement) {
            listener.exitRepeatStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRepeatStatement) {
            return visitor.visitRepeatStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RepeatStatementContext = RepeatStatementContext;
class ForStatementContext extends ParserRuleContext_1.ParserRuleContext {
    FOR() { return this.getToken(pascalParser.FOR, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    ASSIGN() { return this.getToken(pascalParser.ASSIGN, 0); }
    forList() {
        return this.getRuleContext(0, ForListContext);
    }
    DO() { return this.getToken(pascalParser.DO, 0); }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_forStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForStatementContext = ForStatementContext;
class ForListContext extends ParserRuleContext_1.ParserRuleContext {
    initialValue() {
        return this.getRuleContext(0, InitialValueContext);
    }
    finalValue() {
        return this.getRuleContext(0, FinalValueContext);
    }
    TO() { return this.tryGetToken(pascalParser.TO, 0); }
    DOWNTO() { return this.tryGetToken(pascalParser.DOWNTO, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_forList; }
    // @Override
    enterRule(listener) {
        if (listener.enterForList) {
            listener.enterForList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForList) {
            listener.exitForList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForList) {
            return visitor.visitForList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForListContext = ForListContext;
class InitialValueContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_initialValue; }
    // @Override
    enterRule(listener) {
        if (listener.enterInitialValue) {
            listener.enterInitialValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInitialValue) {
            listener.exitInitialValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInitialValue) {
            return visitor.visitInitialValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InitialValueContext = InitialValueContext;
class FinalValueContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_finalValue; }
    // @Override
    enterRule(listener) {
        if (listener.enterFinalValue) {
            listener.enterFinalValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFinalValue) {
            listener.exitFinalValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFinalValue) {
            return visitor.visitFinalValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FinalValueContext = FinalValueContext;
class WithStatementContext extends ParserRuleContext_1.ParserRuleContext {
    WITH() { return this.getToken(pascalParser.WITH, 0); }
    recordVariableList() {
        return this.getRuleContext(0, RecordVariableListContext);
    }
    DO() { return this.getToken(pascalParser.DO, 0); }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_withStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterWithStatement) {
            listener.enterWithStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWithStatement) {
            listener.exitWithStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWithStatement) {
            return visitor.visitWithStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WithStatementContext = WithStatementContext;
class RecordVariableListContext extends ParserRuleContext_1.ParserRuleContext {
    variable(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableContext);
        }
        else {
            return this.getRuleContext(i, VariableContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return pascalParser.RULE_recordVariableList; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordVariableList) {
            listener.enterRecordVariableList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordVariableList) {
            listener.exitRecordVariableList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordVariableList) {
            return visitor.visitRecordVariableList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordVariableListContext = RecordVariableListContext;
