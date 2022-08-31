// Generated from c:\Users\Alexa\Documents\GitHub\easycompiler-1\examples\Example - Pascal Symbol Table\pascal.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class pascalParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AND=1, ARRAY=2, BEGIN=3, BOOLEAN=4, CASE=5, CHAR=6, CHR=7, CONST=8, DIV=9, 
		DO=10, DOWNTO=11, ELSE=12, END=13, FILE=14, FOR=15, FUNCTION=16, GOTO=17, 
		IF=18, IN=19, INTEGER=20, LABEL=21, MOD=22, NIL=23, NOT=24, OF=25, OR=26, 
		PACKED=27, PROCEDURE=28, PROGRAM=29, REAL=30, RECORD=31, REPEAT=32, SET=33, 
		THEN=34, TO=35, TYPE=36, UNTIL=37, VAR=38, WHILE=39, WITH=40, PLUS=41, 
		MINUS=42, STAR=43, SLASH=44, ASSIGN=45, COMMA=46, SEMI=47, COLON=48, EQUAL=49, 
		NOT_EQUAL=50, LT=51, LE=52, GE=53, GT=54, LPAREN=55, RPAREN=56, LBRACK=57, 
		LBRACK2=58, RBRACK=59, RBRACK2=60, POINTER=61, AT=62, DOT=63, DOTDOT=64, 
		LCURLY=65, RCURLY=66, UNIT=67, INTERFACE=68, USES=69, STRING=70, IMPLEMENTATION=71, 
		TRUE=72, FALSE=73, WS=74, COMMENT_1=75, COMMENT_2=76, IDENT=77, STRING_LITERAL=78, 
		NUM_INT=79, NUM_REAL=80;
	public static final int
		RULE_start = 0, RULE_program = 1, RULE_programHeading = 2, RULE_identifier = 3, 
		RULE_block = 4, RULE_usesUnitsPart = 5, RULE_labelDeclarationPart = 6, 
		RULE_label = 7, RULE_constantDefinitionPart = 8, RULE_constantDefinition = 9, 
		RULE_constantChr = 10, RULE_constant = 11, RULE_unsignedNumber = 12, RULE_unsignedInteger = 13, 
		RULE_unsignedReal = 14, RULE_sign = 15, RULE_bool_ = 16, RULE_string = 17, 
		RULE_typeDefinitionPart = 18, RULE_typeDefinition = 19, RULE_functionType = 20, 
		RULE_procedureType = 21, RULE_type_ = 22, RULE_simpleType = 23, RULE_scalarType = 24, 
		RULE_subrangeType = 25, RULE_typeIdentifier = 26, RULE_structuredType = 27, 
		RULE_unpackedStructuredType = 28, RULE_stringtype = 29, RULE_arrayType = 30, 
		RULE_typeList = 31, RULE_indexType = 32, RULE_componentType = 33, RULE_recordType = 34, 
		RULE_fieldList = 35, RULE_fixedPart = 36, RULE_recordSection = 37, RULE_variantPart = 38, 
		RULE_tag = 39, RULE_variant = 40, RULE_setType = 41, RULE_baseType = 42, 
		RULE_fileType = 43, RULE_pointerType = 44, RULE_variableDeclarationPart = 45, 
		RULE_variableDeclaration = 46, RULE_procedureAndFunctionDeclarationPart = 47, 
		RULE_procedureOrFunctionDeclaration = 48, RULE_procedureDeclaration = 49, 
		RULE_formalParameterList = 50, RULE_formalParameterSection = 51, RULE_parameterGroup = 52, 
		RULE_identifierList = 53, RULE_constList = 54, RULE_functionDeclaration = 55, 
		RULE_resultType = 56, RULE_statement = 57, RULE_unlabelledStatement = 58, 
		RULE_simpleStatement = 59, RULE_assignmentStatement = 60, RULE_variable = 61, 
		RULE_expression = 62, RULE_relationaloperator = 63, RULE_simpleExpression = 64, 
		RULE_additiveoperator = 65, RULE_term = 66, RULE_multiplicativeoperator = 67, 
		RULE_signedFactor = 68, RULE_factor = 69, RULE_unsignedConstant = 70, 
		RULE_functionDesignator = 71, RULE_parameterList = 72, RULE_set_ = 73, 
		RULE_elementList = 74, RULE_element = 75, RULE_procedureStatement = 76, 
		RULE_actualParameter = 77, RULE_parameterwidth = 78, RULE_gotoStatement = 79, 
		RULE_emptyStatement_ = 80, RULE_empty_ = 81, RULE_structuredStatement = 82, 
		RULE_compoundStatement = 83, RULE_statements = 84, RULE_conditionalStatement = 85, 
		RULE_ifStatement = 86, RULE_caseStatement = 87, RULE_caseListElement = 88, 
		RULE_repetetiveStatement = 89, RULE_whileStatement = 90, RULE_repeatStatement = 91, 
		RULE_forStatement = 92, RULE_forList = 93, RULE_initialValue = 94, RULE_finalValue = 95, 
		RULE_withStatement = 96, RULE_recordVariableList = 97;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "program", "programHeading", "identifier", "block", "usesUnitsPart", 
			"labelDeclarationPart", "label", "constantDefinitionPart", "constantDefinition", 
			"constantChr", "constant", "unsignedNumber", "unsignedInteger", "unsignedReal", 
			"sign", "bool_", "string", "typeDefinitionPart", "typeDefinition", "functionType", 
			"procedureType", "type_", "simpleType", "scalarType", "subrangeType", 
			"typeIdentifier", "structuredType", "unpackedStructuredType", "stringtype", 
			"arrayType", "typeList", "indexType", "componentType", "recordType", 
			"fieldList", "fixedPart", "recordSection", "variantPart", "tag", "variant", 
			"setType", "baseType", "fileType", "pointerType", "variableDeclarationPart", 
			"variableDeclaration", "procedureAndFunctionDeclarationPart", "procedureOrFunctionDeclaration", 
			"procedureDeclaration", "formalParameterList", "formalParameterSection", 
			"parameterGroup", "identifierList", "constList", "functionDeclaration", 
			"resultType", "statement", "unlabelledStatement", "simpleStatement", 
			"assignmentStatement", "variable", "expression", "relationaloperator", 
			"simpleExpression", "additiveoperator", "term", "multiplicativeoperator", 
			"signedFactor", "factor", "unsignedConstant", "functionDesignator", "parameterList", 
			"set_", "elementList", "element", "procedureStatement", "actualParameter", 
			"parameterwidth", "gotoStatement", "emptyStatement_", "empty_", "structuredStatement", 
			"compoundStatement", "statements", "conditionalStatement", "ifStatement", 
			"caseStatement", "caseListElement", "repetetiveStatement", "whileStatement", 
			"repeatStatement", "forStatement", "forList", "initialValue", "finalValue", 
			"withStatement", "recordVariableList"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'AND'", "'ARRAY'", "'BEGIN'", "'BOOLEAN'", "'CASE'", "'CHAR'", 
			"'CHR'", "'CONST'", "'DIV'", "'DO'", "'DOWNTO'", "'ELSE'", "'END'", "'FILE'", 
			"'FOR'", "'FUNCTION'", "'GOTO'", "'IF'", "'IN'", "'INTEGER'", "'LABEL'", 
			"'MOD'", "'NIL'", "'NOT'", "'OF'", "'OR'", "'PACKED'", "'PROCEDURE'", 
			"'PROGRAM'", "'REAL'", "'RECORD'", "'REPEAT'", "'SET'", "'THEN'", "'TO'", 
			"'TYPE'", "'UNTIL'", "'VAR'", "'WHILE'", "'WITH'", "'+'", "'-'", "'*'", 
			"'/'", "':='", "','", "';'", "':'", "'='", "'<>'", "'<'", "'<='", "'>='", 
			"'>'", "'('", "')'", "'['", "'(.'", "']'", "'.)'", "'^'", "'@'", "'.'", 
			"'..'", "'{'", "'}'", "'UNIT'", "'INTERFACE'", "'USES'", "'STRING'", 
			"'IMPLEMENTATION'", "'TRUE'", "'FALSE'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CHR", "CONST", 
			"DIV", "DO", "DOWNTO", "ELSE", "END", "FILE", "FOR", "FUNCTION", "GOTO", 
			"IF", "IN", "INTEGER", "LABEL", "MOD", "NIL", "NOT", "OF", "OR", "PACKED", 
			"PROCEDURE", "PROGRAM", "REAL", "RECORD", "REPEAT", "SET", "THEN", "TO", 
			"TYPE", "UNTIL", "VAR", "WHILE", "WITH", "PLUS", "MINUS", "STAR", "SLASH", 
			"ASSIGN", "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT", "LE", 
			"GE", "GT", "LPAREN", "RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", 
			"POINTER", "AT", "DOT", "DOTDOT", "LCURLY", "RCURLY", "UNIT", "INTERFACE", 
			"USES", "STRING", "IMPLEMENTATION", "TRUE", "FALSE", "WS", "COMMENT_1", 
			"COMMENT_2", "IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "pascal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public pascalParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public ProgramContext program() {
			return getRuleContext(ProgramContext.class,0);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			program();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgramContext extends ParserRuleContext {
		public ProgramHeadingContext programHeading() {
			return getRuleContext(ProgramHeadingContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode DOT() { return getToken(pascalParser.DOT, 0); }
		public TerminalNode EOF() { return getToken(pascalParser.EOF, 0); }
		public TerminalNode INTERFACE() { return getToken(pascalParser.INTERFACE, 0); }
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			programHeading();
			setState(200);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INTERFACE) {
				{
				setState(199);
				match(INTERFACE);
				}
			}

			setState(202);
			block();
			setState(203);
			match(DOT);
			setState(204);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgramHeadingContext extends ParserRuleContext {
		public TerminalNode PROGRAM() { return getToken(pascalParser.PROGRAM, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public TerminalNode UNIT() { return getToken(pascalParser.UNIT, 0); }
		public ProgramHeadingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programHeading; }
	}

	public final ProgramHeadingContext programHeading() throws RecognitionException {
		ProgramHeadingContext _localctx = new ProgramHeadingContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_programHeading);
		int _la;
		try {
			setState(220);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PROGRAM:
				enterOuterAlt(_localctx, 1);
				{
				setState(206);
				match(PROGRAM);
				setState(207);
				identifier();
				setState(212);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LPAREN) {
					{
					setState(208);
					match(LPAREN);
					setState(209);
					identifierList();
					setState(210);
					match(RPAREN);
					}
				}

				setState(214);
				match(SEMI);
				}
				break;
			case UNIT:
				enterOuterAlt(_localctx, 2);
				{
				setState(216);
				match(UNIT);
				setState(217);
				identifier();
				setState(218);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(pascalParser.IDENT, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public List<LabelDeclarationPartContext> labelDeclarationPart() {
			return getRuleContexts(LabelDeclarationPartContext.class);
		}
		public LabelDeclarationPartContext labelDeclarationPart(int i) {
			return getRuleContext(LabelDeclarationPartContext.class,i);
		}
		public List<ConstantDefinitionPartContext> constantDefinitionPart() {
			return getRuleContexts(ConstantDefinitionPartContext.class);
		}
		public ConstantDefinitionPartContext constantDefinitionPart(int i) {
			return getRuleContext(ConstantDefinitionPartContext.class,i);
		}
		public List<TypeDefinitionPartContext> typeDefinitionPart() {
			return getRuleContexts(TypeDefinitionPartContext.class);
		}
		public TypeDefinitionPartContext typeDefinitionPart(int i) {
			return getRuleContext(TypeDefinitionPartContext.class,i);
		}
		public List<VariableDeclarationPartContext> variableDeclarationPart() {
			return getRuleContexts(VariableDeclarationPartContext.class);
		}
		public VariableDeclarationPartContext variableDeclarationPart(int i) {
			return getRuleContext(VariableDeclarationPartContext.class,i);
		}
		public List<ProcedureAndFunctionDeclarationPartContext> procedureAndFunctionDeclarationPart() {
			return getRuleContexts(ProcedureAndFunctionDeclarationPartContext.class);
		}
		public ProcedureAndFunctionDeclarationPartContext procedureAndFunctionDeclarationPart(int i) {
			return getRuleContext(ProcedureAndFunctionDeclarationPartContext.class,i);
		}
		public List<UsesUnitsPartContext> usesUnitsPart() {
			return getRuleContexts(UsesUnitsPartContext.class);
		}
		public UsesUnitsPartContext usesUnitsPart(int i) {
			return getRuleContext(UsesUnitsPartContext.class,i);
		}
		public List<TerminalNode> IMPLEMENTATION() { return getTokens(pascalParser.IMPLEMENTATION); }
		public TerminalNode IMPLEMENTATION(int i) {
			return getToken(pascalParser.IMPLEMENTATION, i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (CONST - 8)) | (1L << (FUNCTION - 8)) | (1L << (LABEL - 8)) | (1L << (PROCEDURE - 8)) | (1L << (TYPE - 8)) | (1L << (VAR - 8)) | (1L << (USES - 8)) | (1L << (IMPLEMENTATION - 8)))) != 0)) {
				{
				setState(231);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LABEL:
					{
					setState(224);
					labelDeclarationPart();
					}
					break;
				case CONST:
					{
					setState(225);
					constantDefinitionPart();
					}
					break;
				case TYPE:
					{
					setState(226);
					typeDefinitionPart();
					}
					break;
				case VAR:
					{
					setState(227);
					variableDeclarationPart();
					}
					break;
				case FUNCTION:
				case PROCEDURE:
					{
					setState(228);
					procedureAndFunctionDeclarationPart();
					}
					break;
				case USES:
					{
					setState(229);
					usesUnitsPart();
					}
					break;
				case IMPLEMENTATION:
					{
					setState(230);
					match(IMPLEMENTATION);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(235);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(236);
			compoundStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsesUnitsPartContext extends ParserRuleContext {
		public TerminalNode USES() { return getToken(pascalParser.USES, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public UsesUnitsPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usesUnitsPart; }
	}

	public final UsesUnitsPartContext usesUnitsPart() throws RecognitionException {
		UsesUnitsPartContext _localctx = new UsesUnitsPartContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_usesUnitsPart);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(USES);
			setState(239);
			identifierList();
			setState(240);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabelDeclarationPartContext extends ParserRuleContext {
		public TerminalNode LABEL() { return getToken(pascalParser.LABEL, 0); }
		public List<LabelContext> label() {
			return getRuleContexts(LabelContext.class);
		}
		public LabelContext label(int i) {
			return getRuleContext(LabelContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public LabelDeclarationPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labelDeclarationPart; }
	}

	public final LabelDeclarationPartContext labelDeclarationPart() throws RecognitionException {
		LabelDeclarationPartContext _localctx = new LabelDeclarationPartContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_labelDeclarationPart);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(LABEL);
			setState(243);
			label();
			setState(248);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(244);
				match(COMMA);
				setState(245);
				label();
				}
				}
				setState(250);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(251);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabelContext extends ParserRuleContext {
		public UnsignedIntegerContext unsignedInteger() {
			return getRuleContext(UnsignedIntegerContext.class,0);
		}
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			unsignedInteger();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantDefinitionPartContext extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(pascalParser.CONST, 0); }
		public List<ConstantDefinitionContext> constantDefinition() {
			return getRuleContexts(ConstantDefinitionContext.class);
		}
		public ConstantDefinitionContext constantDefinition(int i) {
			return getRuleContext(ConstantDefinitionContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public ConstantDefinitionPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDefinitionPart; }
	}

	public final ConstantDefinitionPartContext constantDefinitionPart() throws RecognitionException {
		ConstantDefinitionPartContext _localctx = new ConstantDefinitionPartContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_constantDefinitionPart);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			match(CONST);
			setState(259); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(256);
				constantDefinition();
				setState(257);
				match(SEMI);
				}
				}
				setState(261); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==IDENT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(pascalParser.EQUAL, 0); }
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public ConstantDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDefinition; }
	}

	public final ConstantDefinitionContext constantDefinition() throws RecognitionException {
		ConstantDefinitionContext _localctx = new ConstantDefinitionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_constantDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(263);
			identifier();
			setState(264);
			match(EQUAL);
			setState(265);
			constant();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantChrContext extends ParserRuleContext {
		public TerminalNode CHR() { return getToken(pascalParser.CHR, 0); }
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public UnsignedIntegerContext unsignedInteger() {
			return getRuleContext(UnsignedIntegerContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public ConstantChrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantChr; }
	}

	public final ConstantChrContext constantChr() throws RecognitionException {
		ConstantChrContext _localctx = new ConstantChrContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_constantChr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			match(CHR);
			setState(268);
			match(LPAREN);
			setState(269);
			unsignedInteger();
			setState(270);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantContext extends ParserRuleContext {
		public UnsignedNumberContext unsignedNumber() {
			return getRuleContext(UnsignedNumberContext.class,0);
		}
		public SignContext sign() {
			return getRuleContext(SignContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public ConstantChrContext constantChr() {
			return getRuleContext(ConstantChrContext.class,0);
		}
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_constant);
		try {
			setState(282);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(272);
				unsignedNumber();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(273);
				sign();
				setState(274);
				unsignedNumber();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(276);
				identifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(277);
				sign();
				setState(278);
				identifier();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(280);
				string();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(281);
				constantChr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnsignedNumberContext extends ParserRuleContext {
		public UnsignedIntegerContext unsignedInteger() {
			return getRuleContext(UnsignedIntegerContext.class,0);
		}
		public UnsignedRealContext unsignedReal() {
			return getRuleContext(UnsignedRealContext.class,0);
		}
		public UnsignedNumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unsignedNumber; }
	}

	public final UnsignedNumberContext unsignedNumber() throws RecognitionException {
		UnsignedNumberContext _localctx = new UnsignedNumberContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_unsignedNumber);
		try {
			setState(286);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUM_INT:
				enterOuterAlt(_localctx, 1);
				{
				setState(284);
				unsignedInteger();
				}
				break;
			case NUM_REAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(285);
				unsignedReal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnsignedIntegerContext extends ParserRuleContext {
		public TerminalNode NUM_INT() { return getToken(pascalParser.NUM_INT, 0); }
		public UnsignedIntegerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unsignedInteger; }
	}

	public final UnsignedIntegerContext unsignedInteger() throws RecognitionException {
		UnsignedIntegerContext _localctx = new UnsignedIntegerContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_unsignedInteger);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(NUM_INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnsignedRealContext extends ParserRuleContext {
		public TerminalNode NUM_REAL() { return getToken(pascalParser.NUM_REAL, 0); }
		public UnsignedRealContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unsignedReal; }
	}

	public final UnsignedRealContext unsignedReal() throws RecognitionException {
		UnsignedRealContext _localctx = new UnsignedRealContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_unsignedReal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			match(NUM_REAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SignContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(pascalParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(pascalParser.MINUS, 0); }
		public SignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sign; }
	}

	public final SignContext sign() throws RecognitionException {
		SignContext _localctx = new SignContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_sign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			_la = _input.LA(1);
			if ( !(_la==PLUS || _la==MINUS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bool_Context extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(pascalParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(pascalParser.FALSE, 0); }
		public Bool_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool_; }
	}

	public final Bool_Context bool_() throws RecognitionException {
		Bool_Context _localctx = new Bool_Context(_ctx, getState());
		enterRule(_localctx, 32, RULE_bool_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(pascalParser.STRING_LITERAL, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDefinitionPartContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(pascalParser.TYPE, 0); }
		public List<TypeDefinitionContext> typeDefinition() {
			return getRuleContexts(TypeDefinitionContext.class);
		}
		public TypeDefinitionContext typeDefinition(int i) {
			return getRuleContext(TypeDefinitionContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public TypeDefinitionPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDefinitionPart; }
	}

	public final TypeDefinitionPartContext typeDefinitionPart() throws RecognitionException {
		TypeDefinitionPartContext _localctx = new TypeDefinitionPartContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_typeDefinitionPart);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			match(TYPE);
			setState(302); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(299);
				typeDefinition();
				setState(300);
				match(SEMI);
				}
				}
				setState(304); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==IDENT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDefinitionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(pascalParser.EQUAL, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public FunctionTypeContext functionType() {
			return getRuleContext(FunctionTypeContext.class,0);
		}
		public ProcedureTypeContext procedureType() {
			return getRuleContext(ProcedureTypeContext.class,0);
		}
		public TypeDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDefinition; }
	}

	public final TypeDefinitionContext typeDefinition() throws RecognitionException {
		TypeDefinitionContext _localctx = new TypeDefinitionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_typeDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			identifier();
			setState(307);
			match(EQUAL);
			setState(311);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARRAY:
			case BOOLEAN:
			case CHAR:
			case CHR:
			case FILE:
			case INTEGER:
			case PACKED:
			case REAL:
			case RECORD:
			case SET:
			case PLUS:
			case MINUS:
			case LPAREN:
			case POINTER:
			case STRING:
			case IDENT:
			case STRING_LITERAL:
			case NUM_INT:
			case NUM_REAL:
				{
				setState(308);
				type_();
				}
				break;
			case FUNCTION:
				{
				setState(309);
				functionType();
				}
				break;
			case PROCEDURE:
				{
				setState(310);
				procedureType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionTypeContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(pascalParser.FUNCTION, 0); }
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public ResultTypeContext resultType() {
			return getRuleContext(ResultTypeContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionType; }
	}

	public final FunctionTypeContext functionType() throws RecognitionException {
		FunctionTypeContext _localctx = new FunctionTypeContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_functionType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			match(FUNCTION);
			setState(315);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(314);
				formalParameterList();
				}
			}

			setState(317);
			match(COLON);
			setState(318);
			resultType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureTypeContext extends ParserRuleContext {
		public TerminalNode PROCEDURE() { return getToken(pascalParser.PROCEDURE, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public ProcedureTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureType; }
	}

	public final ProcedureTypeContext procedureType() throws RecognitionException {
		ProcedureTypeContext _localctx = new ProcedureTypeContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_procedureType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(PROCEDURE);
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(321);
				formalParameterList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_Context extends ParserRuleContext {
		public SimpleTypeContext simpleType() {
			return getRuleContext(SimpleTypeContext.class,0);
		}
		public StructuredTypeContext structuredType() {
			return getRuleContext(StructuredTypeContext.class,0);
		}
		public PointerTypeContext pointerType() {
			return getRuleContext(PointerTypeContext.class,0);
		}
		public Type_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_; }
	}

	public final Type_Context type_() throws RecognitionException {
		Type_Context _localctx = new Type_Context(_ctx, getState());
		enterRule(_localctx, 44, RULE_type_);
		try {
			setState(327);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case CHAR:
			case CHR:
			case INTEGER:
			case REAL:
			case PLUS:
			case MINUS:
			case LPAREN:
			case STRING:
			case IDENT:
			case STRING_LITERAL:
			case NUM_INT:
			case NUM_REAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(324);
				simpleType();
				}
				break;
			case ARRAY:
			case FILE:
			case PACKED:
			case RECORD:
			case SET:
				enterOuterAlt(_localctx, 2);
				{
				setState(325);
				structuredType();
				}
				break;
			case POINTER:
				enterOuterAlt(_localctx, 3);
				{
				setState(326);
				pointerType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpleTypeContext extends ParserRuleContext {
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public SubrangeTypeContext subrangeType() {
			return getRuleContext(SubrangeTypeContext.class,0);
		}
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public StringtypeContext stringtype() {
			return getRuleContext(StringtypeContext.class,0);
		}
		public SimpleTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleType; }
	}

	public final SimpleTypeContext simpleType() throws RecognitionException {
		SimpleTypeContext _localctx = new SimpleTypeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_simpleType);
		try {
			setState(333);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(329);
				scalarType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(330);
				subrangeType();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(331);
				typeIdentifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(332);
				stringtype();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScalarTypeContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public ScalarTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scalarType; }
	}

	public final ScalarTypeContext scalarType() throws RecognitionException {
		ScalarTypeContext _localctx = new ScalarTypeContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_scalarType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(LPAREN);
			setState(336);
			identifierList();
			setState(337);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubrangeTypeContext extends ParserRuleContext {
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public TerminalNode DOTDOT() { return getToken(pascalParser.DOTDOT, 0); }
		public SubrangeTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subrangeType; }
	}

	public final SubrangeTypeContext subrangeType() throws RecognitionException {
		SubrangeTypeContext _localctx = new SubrangeTypeContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_subrangeType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			constant();
			setState(340);
			match(DOTDOT);
			setState(341);
			constant();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode CHAR() { return getToken(pascalParser.CHAR, 0); }
		public TerminalNode BOOLEAN() { return getToken(pascalParser.BOOLEAN, 0); }
		public TerminalNode INTEGER() { return getToken(pascalParser.INTEGER, 0); }
		public TerminalNode REAL() { return getToken(pascalParser.REAL, 0); }
		public TerminalNode STRING() { return getToken(pascalParser.STRING, 0); }
		public TypeIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeIdentifier; }
	}

	public final TypeIdentifierContext typeIdentifier() throws RecognitionException {
		TypeIdentifierContext _localctx = new TypeIdentifierContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_typeIdentifier);
		int _la;
		try {
			setState(345);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(343);
				identifier();
				}
				break;
			case BOOLEAN:
			case CHAR:
			case INTEGER:
			case REAL:
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(344);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEAN) | (1L << CHAR) | (1L << INTEGER) | (1L << REAL))) != 0) || _la==STRING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructuredTypeContext extends ParserRuleContext {
		public TerminalNode PACKED() { return getToken(pascalParser.PACKED, 0); }
		public UnpackedStructuredTypeContext unpackedStructuredType() {
			return getRuleContext(UnpackedStructuredTypeContext.class,0);
		}
		public StructuredTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structuredType; }
	}

	public final StructuredTypeContext structuredType() throws RecognitionException {
		StructuredTypeContext _localctx = new StructuredTypeContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_structuredType);
		try {
			setState(350);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PACKED:
				enterOuterAlt(_localctx, 1);
				{
				setState(347);
				match(PACKED);
				setState(348);
				unpackedStructuredType();
				}
				break;
			case ARRAY:
			case FILE:
			case RECORD:
			case SET:
				enterOuterAlt(_localctx, 2);
				{
				setState(349);
				unpackedStructuredType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnpackedStructuredTypeContext extends ParserRuleContext {
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public RecordTypeContext recordType() {
			return getRuleContext(RecordTypeContext.class,0);
		}
		public SetTypeContext setType() {
			return getRuleContext(SetTypeContext.class,0);
		}
		public FileTypeContext fileType() {
			return getRuleContext(FileTypeContext.class,0);
		}
		public UnpackedStructuredTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unpackedStructuredType; }
	}

	public final UnpackedStructuredTypeContext unpackedStructuredType() throws RecognitionException {
		UnpackedStructuredTypeContext _localctx = new UnpackedStructuredTypeContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_unpackedStructuredType);
		try {
			setState(356);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARRAY:
				enterOuterAlt(_localctx, 1);
				{
				setState(352);
				arrayType();
				}
				break;
			case RECORD:
				enterOuterAlt(_localctx, 2);
				{
				setState(353);
				recordType();
				}
				break;
			case SET:
				enterOuterAlt(_localctx, 3);
				{
				setState(354);
				setType();
				}
				break;
			case FILE:
				enterOuterAlt(_localctx, 4);
				{
				setState(355);
				fileType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringtypeContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(pascalParser.STRING, 0); }
		public TerminalNode LBRACK() { return getToken(pascalParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(pascalParser.RBRACK, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public UnsignedNumberContext unsignedNumber() {
			return getRuleContext(UnsignedNumberContext.class,0);
		}
		public StringtypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringtype; }
	}

	public final StringtypeContext stringtype() throws RecognitionException {
		StringtypeContext _localctx = new StringtypeContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_stringtype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			match(STRING);
			setState(359);
			match(LBRACK);
			setState(362);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				{
				setState(360);
				identifier();
				}
				break;
			case NUM_INT:
			case NUM_REAL:
				{
				setState(361);
				unsignedNumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(364);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayTypeContext extends ParserRuleContext {
		public TerminalNode ARRAY() { return getToken(pascalParser.ARRAY, 0); }
		public TerminalNode LBRACK() { return getToken(pascalParser.LBRACK, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(pascalParser.RBRACK, 0); }
		public TerminalNode OF() { return getToken(pascalParser.OF, 0); }
		public ComponentTypeContext componentType() {
			return getRuleContext(ComponentTypeContext.class,0);
		}
		public TerminalNode LBRACK2() { return getToken(pascalParser.LBRACK2, 0); }
		public TerminalNode RBRACK2() { return getToken(pascalParser.RBRACK2, 0); }
		public ArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayType; }
	}

	public final ArrayTypeContext arrayType() throws RecognitionException {
		ArrayTypeContext _localctx = new ArrayTypeContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_arrayType);
		try {
			setState(380);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(366);
				match(ARRAY);
				setState(367);
				match(LBRACK);
				setState(368);
				typeList();
				setState(369);
				match(RBRACK);
				setState(370);
				match(OF);
				setState(371);
				componentType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(373);
				match(ARRAY);
				setState(374);
				match(LBRACK2);
				setState(375);
				typeList();
				setState(376);
				match(RBRACK2);
				setState(377);
				match(OF);
				setState(378);
				componentType();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeListContext extends ParserRuleContext {
		public List<IndexTypeContext> indexType() {
			return getRuleContexts(IndexTypeContext.class);
		}
		public IndexTypeContext indexType(int i) {
			return getRuleContext(IndexTypeContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public TypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeList; }
	}

	public final TypeListContext typeList() throws RecognitionException {
		TypeListContext _localctx = new TypeListContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_typeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(382);
			indexType();
			setState(387);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(383);
				match(COMMA);
				setState(384);
				indexType();
				}
				}
				setState(389);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexTypeContext extends ParserRuleContext {
		public SimpleTypeContext simpleType() {
			return getRuleContext(SimpleTypeContext.class,0);
		}
		public IndexTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexType; }
	}

	public final IndexTypeContext indexType() throws RecognitionException {
		IndexTypeContext _localctx = new IndexTypeContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_indexType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			simpleType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentTypeContext extends ParserRuleContext {
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public ComponentTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentType; }
	}

	public final ComponentTypeContext componentType() throws RecognitionException {
		ComponentTypeContext _localctx = new ComponentTypeContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_componentType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RecordTypeContext extends ParserRuleContext {
		public TerminalNode RECORD() { return getToken(pascalParser.RECORD, 0); }
		public TerminalNode END() { return getToken(pascalParser.END, 0); }
		public FieldListContext fieldList() {
			return getRuleContext(FieldListContext.class,0);
		}
		public RecordTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_recordType; }
	}

	public final RecordTypeContext recordType() throws RecognitionException {
		RecordTypeContext _localctx = new RecordTypeContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_recordType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394);
			match(RECORD);
			setState(396);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CASE || _la==IDENT) {
				{
				setState(395);
				fieldList();
				}
			}

			setState(398);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldListContext extends ParserRuleContext {
		public FixedPartContext fixedPart() {
			return getRuleContext(FixedPartContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public VariantPartContext variantPart() {
			return getRuleContext(VariantPartContext.class,0);
		}
		public FieldListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldList; }
	}

	public final FieldListContext fieldList() throws RecognitionException {
		FieldListContext _localctx = new FieldListContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_fieldList);
		int _la;
		try {
			setState(406);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(400);
				fixedPart();
				setState(403);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI) {
					{
					setState(401);
					match(SEMI);
					setState(402);
					variantPart();
					}
				}

				}
				break;
			case CASE:
				enterOuterAlt(_localctx, 2);
				{
				setState(405);
				variantPart();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FixedPartContext extends ParserRuleContext {
		public List<RecordSectionContext> recordSection() {
			return getRuleContexts(RecordSectionContext.class);
		}
		public RecordSectionContext recordSection(int i) {
			return getRuleContext(RecordSectionContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public FixedPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fixedPart; }
	}

	public final FixedPartContext fixedPart() throws RecognitionException {
		FixedPartContext _localctx = new FixedPartContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_fixedPart);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			recordSection();
			setState(413);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(409);
					match(SEMI);
					setState(410);
					recordSection();
					}
					} 
				}
				setState(415);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RecordSectionContext extends ParserRuleContext {
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public RecordSectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_recordSection; }
	}

	public final RecordSectionContext recordSection() throws RecognitionException {
		RecordSectionContext _localctx = new RecordSectionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_recordSection);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
			identifierList();
			setState(417);
			match(COLON);
			setState(418);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariantPartContext extends ParserRuleContext {
		public TerminalNode CASE() { return getToken(pascalParser.CASE, 0); }
		public TagContext tag() {
			return getRuleContext(TagContext.class,0);
		}
		public TerminalNode OF() { return getToken(pascalParser.OF, 0); }
		public List<VariantContext> variant() {
			return getRuleContexts(VariantContext.class);
		}
		public VariantContext variant(int i) {
			return getRuleContext(VariantContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public VariantPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variantPart; }
	}

	public final VariantPartContext variantPart() throws RecognitionException {
		VariantPartContext _localctx = new VariantPartContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_variantPart);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(420);
			match(CASE);
			setState(421);
			tag();
			setState(422);
			match(OF);
			setState(423);
			variant();
			setState(428);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEMI) {
				{
				{
				setState(424);
				match(SEMI);
				setState(425);
				variant();
				}
				}
				setState(430);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public TagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tag; }
	}

	public final TagContext tag() throws RecognitionException {
		TagContext _localctx = new TagContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_tag);
		try {
			setState(436);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(431);
				identifier();
				setState(432);
				match(COLON);
				setState(433);
				typeIdentifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(435);
				typeIdentifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariantContext extends ParserRuleContext {
		public ConstListContext constList() {
			return getRuleContext(ConstListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public FieldListContext fieldList() {
			return getRuleContext(FieldListContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public VariantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant; }
	}

	public final VariantContext variant() throws RecognitionException {
		VariantContext _localctx = new VariantContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_variant);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
			constList();
			setState(439);
			match(COLON);
			setState(440);
			match(LPAREN);
			setState(441);
			fieldList();
			setState(442);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetTypeContext extends ParserRuleContext {
		public TerminalNode SET() { return getToken(pascalParser.SET, 0); }
		public TerminalNode OF() { return getToken(pascalParser.OF, 0); }
		public BaseTypeContext baseType() {
			return getRuleContext(BaseTypeContext.class,0);
		}
		public SetTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setType; }
	}

	public final SetTypeContext setType() throws RecognitionException {
		SetTypeContext _localctx = new SetTypeContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_setType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			match(SET);
			setState(445);
			match(OF);
			setState(446);
			baseType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BaseTypeContext extends ParserRuleContext {
		public SimpleTypeContext simpleType() {
			return getRuleContext(SimpleTypeContext.class,0);
		}
		public BaseTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseType; }
	}

	public final BaseTypeContext baseType() throws RecognitionException {
		BaseTypeContext _localctx = new BaseTypeContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_baseType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(448);
			simpleType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FileTypeContext extends ParserRuleContext {
		public TerminalNode FILE() { return getToken(pascalParser.FILE, 0); }
		public TerminalNode OF() { return getToken(pascalParser.OF, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public FileTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fileType; }
	}

	public final FileTypeContext fileType() throws RecognitionException {
		FileTypeContext _localctx = new FileTypeContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_fileType);
		try {
			setState(454);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(450);
				match(FILE);
				setState(451);
				match(OF);
				setState(452);
				type_();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(453);
				match(FILE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PointerTypeContext extends ParserRuleContext {
		public TerminalNode POINTER() { return getToken(pascalParser.POINTER, 0); }
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public PointerTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pointerType; }
	}

	public final PointerTypeContext pointerType() throws RecognitionException {
		PointerTypeContext _localctx = new PointerTypeContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_pointerType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(456);
			match(POINTER);
			setState(457);
			typeIdentifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationPartContext extends ParserRuleContext {
		public TerminalNode VAR() { return getToken(pascalParser.VAR, 0); }
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public VariableDeclarationPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationPart; }
	}

	public final VariableDeclarationPartContext variableDeclarationPart() throws RecognitionException {
		VariableDeclarationPartContext _localctx = new VariableDeclarationPartContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_variableDeclarationPart);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(459);
			match(VAR);
			setState(460);
			variableDeclaration();
			setState(465);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(461);
					match(SEMI);
					setState(462);
					variableDeclaration();
					}
					} 
				}
				setState(467);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			}
			setState(468);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			identifierList();
			setState(471);
			match(COLON);
			setState(472);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureAndFunctionDeclarationPartContext extends ParserRuleContext {
		public ProcedureOrFunctionDeclarationContext procedureOrFunctionDeclaration() {
			return getRuleContext(ProcedureOrFunctionDeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public ProcedureAndFunctionDeclarationPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureAndFunctionDeclarationPart; }
	}

	public final ProcedureAndFunctionDeclarationPartContext procedureAndFunctionDeclarationPart() throws RecognitionException {
		ProcedureAndFunctionDeclarationPartContext _localctx = new ProcedureAndFunctionDeclarationPartContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_procedureAndFunctionDeclarationPart);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(474);
			procedureOrFunctionDeclaration();
			setState(475);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureOrFunctionDeclarationContext extends ParserRuleContext {
		public ProcedureDeclarationContext procedureDeclaration() {
			return getRuleContext(ProcedureDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ProcedureOrFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureOrFunctionDeclaration; }
	}

	public final ProcedureOrFunctionDeclarationContext procedureOrFunctionDeclaration() throws RecognitionException {
		ProcedureOrFunctionDeclarationContext _localctx = new ProcedureOrFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_procedureOrFunctionDeclaration);
		try {
			setState(479);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PROCEDURE:
				enterOuterAlt(_localctx, 1);
				{
				setState(477);
				procedureDeclaration();
				}
				break;
			case FUNCTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(478);
				functionDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureDeclarationContext extends ParserRuleContext {
		public TerminalNode PROCEDURE() { return getToken(pascalParser.PROCEDURE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public ProcedureDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureDeclaration; }
	}

	public final ProcedureDeclarationContext procedureDeclaration() throws RecognitionException {
		ProcedureDeclarationContext _localctx = new ProcedureDeclarationContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_procedureDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			match(PROCEDURE);
			setState(482);
			identifier();
			setState(484);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(483);
				formalParameterList();
				}
			}

			setState(486);
			match(SEMI);
			setState(487);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public List<FormalParameterSectionContext> formalParameterSection() {
			return getRuleContexts(FormalParameterSectionContext.class);
		}
		public FormalParameterSectionContext formalParameterSection(int i) {
			return getRuleContext(FormalParameterSectionContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(489);
			match(LPAREN);
			setState(490);
			formalParameterSection();
			setState(495);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEMI) {
				{
				{
				setState(491);
				match(SEMI);
				setState(492);
				formalParameterSection();
				}
				}
				setState(497);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(498);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterSectionContext extends ParserRuleContext {
		public ParameterGroupContext parameterGroup() {
			return getRuleContext(ParameterGroupContext.class,0);
		}
		public TerminalNode VAR() { return getToken(pascalParser.VAR, 0); }
		public TerminalNode FUNCTION() { return getToken(pascalParser.FUNCTION, 0); }
		public TerminalNode PROCEDURE() { return getToken(pascalParser.PROCEDURE, 0); }
		public FormalParameterSectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterSection; }
	}

	public final FormalParameterSectionContext formalParameterSection() throws RecognitionException {
		FormalParameterSectionContext _localctx = new FormalParameterSectionContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_formalParameterSection);
		try {
			setState(507);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(500);
				parameterGroup();
				}
				break;
			case VAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(501);
				match(VAR);
				setState(502);
				parameterGroup();
				}
				break;
			case FUNCTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(503);
				match(FUNCTION);
				setState(504);
				parameterGroup();
				}
				break;
			case PROCEDURE:
				enterOuterAlt(_localctx, 4);
				{
				setState(505);
				match(PROCEDURE);
				setState(506);
				parameterGroup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterGroupContext extends ParserRuleContext {
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public ParameterGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterGroup; }
	}

	public final ParameterGroupContext parameterGroup() throws RecognitionException {
		ParameterGroupContext _localctx = new ParameterGroupContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_parameterGroup);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
			identifierList();
			setState(510);
			match(COLON);
			setState(511);
			typeIdentifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierListContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_identifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			identifier();
			setState(518);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(514);
				match(COMMA);
				setState(515);
				identifier();
				}
				}
				setState(520);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstListContext extends ParserRuleContext {
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public ConstListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constList; }
	}

	public final ConstListContext constList() throws RecognitionException {
		ConstListContext _localctx = new ConstListContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_constList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
			constant();
			setState(526);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(522);
				match(COMMA);
				setState(523);
				constant();
				}
				}
				setState(528);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(pascalParser.FUNCTION, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public ResultTypeContext resultType() {
			return getRuleContext(ResultTypeContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(pascalParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(529);
			match(FUNCTION);
			setState(530);
			identifier();
			setState(532);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(531);
				formalParameterList();
				}
			}

			setState(534);
			match(COLON);
			setState(535);
			resultType();
			setState(536);
			match(SEMI);
			setState(537);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResultTypeContext extends ParserRuleContext {
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public ResultTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resultType; }
	}

	public final ResultTypeContext resultType() throws RecognitionException {
		ResultTypeContext _localctx = new ResultTypeContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_resultType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			typeIdentifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public UnlabelledStatementContext unlabelledStatement() {
			return getRuleContext(UnlabelledStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_statement);
		try {
			setState(546);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUM_INT:
				enterOuterAlt(_localctx, 1);
				{
				setState(541);
				label();
				setState(542);
				match(COLON);
				setState(543);
				unlabelledStatement();
				}
				break;
			case BEGIN:
			case CASE:
			case ELSE:
			case END:
			case FOR:
			case GOTO:
			case IF:
			case REPEAT:
			case UNTIL:
			case WHILE:
			case WITH:
			case SEMI:
			case AT:
			case IDENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(545);
				unlabelledStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnlabelledStatementContext extends ParserRuleContext {
		public SimpleStatementContext simpleStatement() {
			return getRuleContext(SimpleStatementContext.class,0);
		}
		public StructuredStatementContext structuredStatement() {
			return getRuleContext(StructuredStatementContext.class,0);
		}
		public UnlabelledStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unlabelledStatement; }
	}

	public final UnlabelledStatementContext unlabelledStatement() throws RecognitionException {
		UnlabelledStatementContext _localctx = new UnlabelledStatementContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_unlabelledStatement);
		try {
			setState(550);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ELSE:
			case END:
			case GOTO:
			case UNTIL:
			case SEMI:
			case AT:
			case IDENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(548);
				simpleStatement();
				}
				break;
			case BEGIN:
			case CASE:
			case FOR:
			case IF:
			case REPEAT:
			case WHILE:
			case WITH:
				enterOuterAlt(_localctx, 2);
				{
				setState(549);
				structuredStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpleStatementContext extends ParserRuleContext {
		public AssignmentStatementContext assignmentStatement() {
			return getRuleContext(AssignmentStatementContext.class,0);
		}
		public ProcedureStatementContext procedureStatement() {
			return getRuleContext(ProcedureStatementContext.class,0);
		}
		public GotoStatementContext gotoStatement() {
			return getRuleContext(GotoStatementContext.class,0);
		}
		public EmptyStatement_Context emptyStatement_() {
			return getRuleContext(EmptyStatement_Context.class,0);
		}
		public SimpleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleStatement; }
	}

	public final SimpleStatementContext simpleStatement() throws RecognitionException {
		SimpleStatementContext _localctx = new SimpleStatementContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_simpleStatement);
		try {
			setState(556);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(552);
				assignmentStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(553);
				procedureStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(554);
				gotoStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(555);
				emptyStatement_();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentStatementContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(pascalParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentStatement; }
	}

	public final AssignmentStatementContext assignmentStatement() throws RecognitionException {
		AssignmentStatementContext _localctx = new AssignmentStatementContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_assignmentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
			variable();
			setState(559);
			match(ASSIGN);
			setState(560);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(pascalParser.AT, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> LBRACK() { return getTokens(pascalParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(pascalParser.LBRACK, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(pascalParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(pascalParser.RBRACK, i);
		}
		public List<TerminalNode> LBRACK2() { return getTokens(pascalParser.LBRACK2); }
		public TerminalNode LBRACK2(int i) {
			return getToken(pascalParser.LBRACK2, i);
		}
		public List<TerminalNode> RBRACK2() { return getTokens(pascalParser.RBRACK2); }
		public TerminalNode RBRACK2(int i) {
			return getToken(pascalParser.RBRACK2, i);
		}
		public List<TerminalNode> DOT() { return getTokens(pascalParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(pascalParser.DOT, i);
		}
		public List<TerminalNode> POINTER() { return getTokens(pascalParser.POINTER); }
		public TerminalNode POINTER(int i) {
			return getToken(pascalParser.POINTER, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_variable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(565);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AT:
				{
				setState(562);
				match(AT);
				setState(563);
				identifier();
				}
				break;
			case IDENT:
				{
				setState(564);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(594);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LBRACK) | (1L << LBRACK2) | (1L << POINTER) | (1L << DOT))) != 0)) {
				{
				setState(592);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LBRACK:
					{
					setState(567);
					match(LBRACK);
					setState(568);
					expression();
					setState(573);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(569);
						match(COMMA);
						setState(570);
						expression();
						}
						}
						setState(575);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(576);
					match(RBRACK);
					}
					break;
				case LBRACK2:
					{
					setState(578);
					match(LBRACK2);
					setState(579);
					expression();
					setState(584);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(580);
						match(COMMA);
						setState(581);
						expression();
						}
						}
						setState(586);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(587);
					match(RBRACK2);
					}
					break;
				case DOT:
					{
					setState(589);
					match(DOT);
					setState(590);
					identifier();
					}
					break;
				case POINTER:
					{
					setState(591);
					match(POINTER);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(596);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public SimpleExpressionContext simpleExpression() {
			return getRuleContext(SimpleExpressionContext.class,0);
		}
		public RelationaloperatorContext relationaloperator() {
			return getRuleContext(RelationaloperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(597);
			simpleExpression();
			setState(601);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IN) | (1L << EQUAL) | (1L << NOT_EQUAL) | (1L << LT) | (1L << LE) | (1L << GE) | (1L << GT))) != 0)) {
				{
				setState(598);
				relationaloperator();
				setState(599);
				expression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationaloperatorContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(pascalParser.EQUAL, 0); }
		public TerminalNode NOT_EQUAL() { return getToken(pascalParser.NOT_EQUAL, 0); }
		public TerminalNode LT() { return getToken(pascalParser.LT, 0); }
		public TerminalNode LE() { return getToken(pascalParser.LE, 0); }
		public TerminalNode GE() { return getToken(pascalParser.GE, 0); }
		public TerminalNode GT() { return getToken(pascalParser.GT, 0); }
		public TerminalNode IN() { return getToken(pascalParser.IN, 0); }
		public RelationaloperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationaloperator; }
	}

	public final RelationaloperatorContext relationaloperator() throws RecognitionException {
		RelationaloperatorContext _localctx = new RelationaloperatorContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_relationaloperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(603);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IN) | (1L << EQUAL) | (1L << NOT_EQUAL) | (1L << LT) | (1L << LE) | (1L << GE) | (1L << GT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpleExpressionContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public AdditiveoperatorContext additiveoperator() {
			return getRuleContext(AdditiveoperatorContext.class,0);
		}
		public SimpleExpressionContext simpleExpression() {
			return getRuleContext(SimpleExpressionContext.class,0);
		}
		public SimpleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleExpression; }
	}

	public final SimpleExpressionContext simpleExpression() throws RecognitionException {
		SimpleExpressionContext _localctx = new SimpleExpressionContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_simpleExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(605);
			term();
			setState(609);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OR) | (1L << PLUS) | (1L << MINUS))) != 0)) {
				{
				setState(606);
				additiveoperator();
				setState(607);
				simpleExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AdditiveoperatorContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(pascalParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(pascalParser.MINUS, 0); }
		public TerminalNode OR() { return getToken(pascalParser.OR, 0); }
		public AdditiveoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additiveoperator; }
	}

	public final AdditiveoperatorContext additiveoperator() throws RecognitionException {
		AdditiveoperatorContext _localctx = new AdditiveoperatorContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_additiveoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(611);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OR) | (1L << PLUS) | (1L << MINUS))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public SignedFactorContext signedFactor() {
			return getRuleContext(SignedFactorContext.class,0);
		}
		public MultiplicativeoperatorContext multiplicativeoperator() {
			return getRuleContext(MultiplicativeoperatorContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(613);
			signedFactor();
			setState(617);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AND) | (1L << DIV) | (1L << MOD) | (1L << STAR) | (1L << SLASH))) != 0)) {
				{
				setState(614);
				multiplicativeoperator();
				setState(615);
				term();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultiplicativeoperatorContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(pascalParser.STAR, 0); }
		public TerminalNode SLASH() { return getToken(pascalParser.SLASH, 0); }
		public TerminalNode DIV() { return getToken(pascalParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(pascalParser.MOD, 0); }
		public TerminalNode AND() { return getToken(pascalParser.AND, 0); }
		public MultiplicativeoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicativeoperator; }
	}

	public final MultiplicativeoperatorContext multiplicativeoperator() throws RecognitionException {
		MultiplicativeoperatorContext _localctx = new MultiplicativeoperatorContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_multiplicativeoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(619);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AND) | (1L << DIV) | (1L << MOD) | (1L << STAR) | (1L << SLASH))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SignedFactorContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(pascalParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(pascalParser.MINUS, 0); }
		public SignedFactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_signedFactor; }
	}

	public final SignedFactorContext signedFactor() throws RecognitionException {
		SignedFactorContext _localctx = new SignedFactorContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_signedFactor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(622);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLUS || _la==MINUS) {
				{
				setState(621);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(624);
			factor();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FactorContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public FunctionDesignatorContext functionDesignator() {
			return getRuleContext(FunctionDesignatorContext.class,0);
		}
		public UnsignedConstantContext unsignedConstant() {
			return getRuleContext(UnsignedConstantContext.class,0);
		}
		public Set_Context set_() {
			return getRuleContext(Set_Context.class,0);
		}
		public TerminalNode NOT() { return getToken(pascalParser.NOT, 0); }
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public Bool_Context bool_() {
			return getRuleContext(Bool_Context.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_factor);
		try {
			setState(637);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(626);
				variable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(627);
				match(LPAREN);
				setState(628);
				expression();
				setState(629);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(631);
				functionDesignator();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(632);
				unsignedConstant();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(633);
				set_();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(634);
				match(NOT);
				setState(635);
				factor();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(636);
				bool_();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnsignedConstantContext extends ParserRuleContext {
		public UnsignedNumberContext unsignedNumber() {
			return getRuleContext(UnsignedNumberContext.class,0);
		}
		public ConstantChrContext constantChr() {
			return getRuleContext(ConstantChrContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode NIL() { return getToken(pascalParser.NIL, 0); }
		public UnsignedConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unsignedConstant; }
	}

	public final UnsignedConstantContext unsignedConstant() throws RecognitionException {
		UnsignedConstantContext _localctx = new UnsignedConstantContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_unsignedConstant);
		try {
			setState(643);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUM_INT:
			case NUM_REAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(639);
				unsignedNumber();
				}
				break;
			case CHR:
				enterOuterAlt(_localctx, 2);
				{
				setState(640);
				constantChr();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(641);
				string();
				}
				break;
			case NIL:
				enterOuterAlt(_localctx, 4);
				{
				setState(642);
				match(NIL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDesignatorContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public FunctionDesignatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDesignator; }
	}

	public final FunctionDesignatorContext functionDesignator() throws RecognitionException {
		FunctionDesignatorContext _localctx = new FunctionDesignatorContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_functionDesignator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(645);
			identifier();
			setState(646);
			match(LPAREN);
			setState(647);
			parameterList();
			setState(648);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterListContext extends ParserRuleContext {
		public List<ActualParameterContext> actualParameter() {
			return getRuleContexts(ActualParameterContext.class);
		}
		public ActualParameterContext actualParameter(int i) {
			return getRuleContext(ActualParameterContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(650);
			actualParameter();
			setState(655);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(651);
				match(COMMA);
				setState(652);
				actualParameter();
				}
				}
				setState(657);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Set_Context extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(pascalParser.LBRACK, 0); }
		public ElementListContext elementList() {
			return getRuleContext(ElementListContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(pascalParser.RBRACK, 0); }
		public TerminalNode LBRACK2() { return getToken(pascalParser.LBRACK2, 0); }
		public TerminalNode RBRACK2() { return getToken(pascalParser.RBRACK2, 0); }
		public Set_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set_; }
	}

	public final Set_Context set_() throws RecognitionException {
		Set_Context _localctx = new Set_Context(_ctx, getState());
		enterRule(_localctx, 146, RULE_set_);
		try {
			setState(666);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACK:
				enterOuterAlt(_localctx, 1);
				{
				setState(658);
				match(LBRACK);
				setState(659);
				elementList();
				setState(660);
				match(RBRACK);
				}
				break;
			case LBRACK2:
				enterOuterAlt(_localctx, 2);
				{
				setState(662);
				match(LBRACK2);
				setState(663);
				elementList();
				setState(664);
				match(RBRACK2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementListContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public ElementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementList; }
	}

	public final ElementListContext elementList() throws RecognitionException {
		ElementListContext _localctx = new ElementListContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_elementList);
		int _la;
		try {
			setState(677);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CHR:
			case NIL:
			case NOT:
			case PLUS:
			case MINUS:
			case LPAREN:
			case LBRACK:
			case LBRACK2:
			case AT:
			case TRUE:
			case FALSE:
			case IDENT:
			case STRING_LITERAL:
			case NUM_INT:
			case NUM_REAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(668);
				element();
				setState(673);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(669);
					match(COMMA);
					setState(670);
					element();
					}
					}
					setState(675);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case RBRACK:
			case RBRACK2:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DOTDOT() { return getToken(pascalParser.DOTDOT, 0); }
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_element);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(679);
			expression();
			setState(682);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOTDOT) {
				{
				setState(680);
				match(DOTDOT);
				setState(681);
				expression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureStatementContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(pascalParser.LPAREN, 0); }
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(pascalParser.RPAREN, 0); }
		public ProcedureStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureStatement; }
	}

	public final ProcedureStatementContext procedureStatement() throws RecognitionException {
		ProcedureStatementContext _localctx = new ProcedureStatementContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_procedureStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(684);
			identifier();
			setState(689);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(685);
				match(LPAREN);
				setState(686);
				parameterList();
				setState(687);
				match(RPAREN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ActualParameterContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<ParameterwidthContext> parameterwidth() {
			return getRuleContexts(ParameterwidthContext.class);
		}
		public ParameterwidthContext parameterwidth(int i) {
			return getRuleContext(ParameterwidthContext.class,i);
		}
		public ActualParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actualParameter; }
	}

	public final ActualParameterContext actualParameter() throws RecognitionException {
		ActualParameterContext _localctx = new ActualParameterContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_actualParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(691);
			expression();
			setState(695);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COLON) {
				{
				{
				setState(692);
				parameterwidth();
				}
				}
				setState(697);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterwidthContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParameterwidthContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterwidth; }
	}

	public final ParameterwidthContext parameterwidth() throws RecognitionException {
		ParameterwidthContext _localctx = new ParameterwidthContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_parameterwidth);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(698);
			match(COLON);
			setState(699);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GotoStatementContext extends ParserRuleContext {
		public TerminalNode GOTO() { return getToken(pascalParser.GOTO, 0); }
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public GotoStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gotoStatement; }
	}

	public final GotoStatementContext gotoStatement() throws RecognitionException {
		GotoStatementContext _localctx = new GotoStatementContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_gotoStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(701);
			match(GOTO);
			setState(702);
			label();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatement_Context extends ParserRuleContext {
		public EmptyStatement_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement_; }
	}

	public final EmptyStatement_Context emptyStatement_() throws RecognitionException {
		EmptyStatement_Context _localctx = new EmptyStatement_Context(_ctx, getState());
		enterRule(_localctx, 160, RULE_emptyStatement_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Empty_Context extends ParserRuleContext {
		public Empty_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_empty_; }
	}

	public final Empty_Context empty_() throws RecognitionException {
		Empty_Context _localctx = new Empty_Context(_ctx, getState());
		enterRule(_localctx, 162, RULE_empty_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructuredStatementContext extends ParserRuleContext {
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public ConditionalStatementContext conditionalStatement() {
			return getRuleContext(ConditionalStatementContext.class,0);
		}
		public RepetetiveStatementContext repetetiveStatement() {
			return getRuleContext(RepetetiveStatementContext.class,0);
		}
		public WithStatementContext withStatement() {
			return getRuleContext(WithStatementContext.class,0);
		}
		public StructuredStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structuredStatement; }
	}

	public final StructuredStatementContext structuredStatement() throws RecognitionException {
		StructuredStatementContext _localctx = new StructuredStatementContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_structuredStatement);
		try {
			setState(712);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BEGIN:
				enterOuterAlt(_localctx, 1);
				{
				setState(708);
				compoundStatement();
				}
				break;
			case CASE:
			case IF:
				enterOuterAlt(_localctx, 2);
				{
				setState(709);
				conditionalStatement();
				}
				break;
			case FOR:
			case REPEAT:
			case WHILE:
				enterOuterAlt(_localctx, 3);
				{
				setState(710);
				repetetiveStatement();
				}
				break;
			case WITH:
				enterOuterAlt(_localctx, 4);
				{
				setState(711);
				withStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompoundStatementContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(pascalParser.BEGIN, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TerminalNode END() { return getToken(pascalParser.END, 0); }
		public CompoundStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundStatement; }
	}

	public final CompoundStatementContext compoundStatement() throws RecognitionException {
		CompoundStatementContext _localctx = new CompoundStatementContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_compoundStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(714);
			match(BEGIN);
			setState(715);
			statements();
			setState(716);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementsContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public StatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statements; }
	}

	public final StatementsContext statements() throws RecognitionException {
		StatementsContext _localctx = new StatementsContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_statements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(718);
			statement();
			setState(723);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEMI) {
				{
				{
				setState(719);
				match(SEMI);
				setState(720);
				statement();
				}
				}
				setState(725);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionalStatementContext extends ParserRuleContext {
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public CaseStatementContext caseStatement() {
			return getRuleContext(CaseStatementContext.class,0);
		}
		public ConditionalStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalStatement; }
	}

	public final ConditionalStatementContext conditionalStatement() throws RecognitionException {
		ConditionalStatementContext _localctx = new ConditionalStatementContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_conditionalStatement);
		try {
			setState(728);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(726);
				ifStatement();
				}
				break;
			case CASE:
				enterOuterAlt(_localctx, 2);
				{
				setState(727);
				caseStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(pascalParser.IF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(pascalParser.THEN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(pascalParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(730);
			match(IF);
			setState(731);
			expression();
			setState(732);
			match(THEN);
			setState(733);
			statement();
			setState(736);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				{
				setState(734);
				match(ELSE);
				setState(735);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseStatementContext extends ParserRuleContext {
		public TerminalNode CASE() { return getToken(pascalParser.CASE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode OF() { return getToken(pascalParser.OF, 0); }
		public List<CaseListElementContext> caseListElement() {
			return getRuleContexts(CaseListElementContext.class);
		}
		public CaseListElementContext caseListElement(int i) {
			return getRuleContext(CaseListElementContext.class,i);
		}
		public TerminalNode END() { return getToken(pascalParser.END, 0); }
		public List<TerminalNode> SEMI() { return getTokens(pascalParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(pascalParser.SEMI, i);
		}
		public TerminalNode ELSE() { return getToken(pascalParser.ELSE, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public CaseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseStatement; }
	}

	public final CaseStatementContext caseStatement() throws RecognitionException {
		CaseStatementContext _localctx = new CaseStatementContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_caseStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(738);
			match(CASE);
			setState(739);
			expression();
			setState(740);
			match(OF);
			setState(741);
			caseListElement();
			setState(746);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,61,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(742);
					match(SEMI);
					setState(743);
					caseListElement();
					}
					} 
				}
				setState(748);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,61,_ctx);
			}
			setState(752);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(749);
				match(SEMI);
				setState(750);
				match(ELSE);
				setState(751);
				statements();
				}
			}

			setState(754);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseListElementContext extends ParserRuleContext {
		public ConstListContext constList() {
			return getRuleContext(ConstListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(pascalParser.COLON, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public CaseListElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseListElement; }
	}

	public final CaseListElementContext caseListElement() throws RecognitionException {
		CaseListElementContext _localctx = new CaseListElementContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_caseListElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(756);
			constList();
			setState(757);
			match(COLON);
			setState(758);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RepetetiveStatementContext extends ParserRuleContext {
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public RepeatStatementContext repeatStatement() {
			return getRuleContext(RepeatStatementContext.class,0);
		}
		public ForStatementContext forStatement() {
			return getRuleContext(ForStatementContext.class,0);
		}
		public RepetetiveStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repetetiveStatement; }
	}

	public final RepetetiveStatementContext repetetiveStatement() throws RecognitionException {
		RepetetiveStatementContext _localctx = new RepetetiveStatementContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_repetetiveStatement);
		try {
			setState(763);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				enterOuterAlt(_localctx, 1);
				{
				setState(760);
				whileStatement();
				}
				break;
			case REPEAT:
				enterOuterAlt(_localctx, 2);
				{
				setState(761);
				repeatStatement();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 3);
				{
				setState(762);
				forStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(pascalParser.WHILE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode DO() { return getToken(pascalParser.DO, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(765);
			match(WHILE);
			setState(766);
			expression();
			setState(767);
			match(DO);
			setState(768);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RepeatStatementContext extends ParserRuleContext {
		public TerminalNode REPEAT() { return getToken(pascalParser.REPEAT, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TerminalNode UNTIL() { return getToken(pascalParser.UNTIL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RepeatStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repeatStatement; }
	}

	public final RepeatStatementContext repeatStatement() throws RecognitionException {
		RepeatStatementContext _localctx = new RepeatStatementContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_repeatStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(770);
			match(REPEAT);
			setState(771);
			statements();
			setState(772);
			match(UNTIL);
			setState(773);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForStatementContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(pascalParser.FOR, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(pascalParser.ASSIGN, 0); }
		public ForListContext forList() {
			return getRuleContext(ForListContext.class,0);
		}
		public TerminalNode DO() { return getToken(pascalParser.DO, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(775);
			match(FOR);
			setState(776);
			identifier();
			setState(777);
			match(ASSIGN);
			setState(778);
			forList();
			setState(779);
			match(DO);
			setState(780);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForListContext extends ParserRuleContext {
		public InitialValueContext initialValue() {
			return getRuleContext(InitialValueContext.class,0);
		}
		public FinalValueContext finalValue() {
			return getRuleContext(FinalValueContext.class,0);
		}
		public TerminalNode TO() { return getToken(pascalParser.TO, 0); }
		public TerminalNode DOWNTO() { return getToken(pascalParser.DOWNTO, 0); }
		public ForListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forList; }
	}

	public final ForListContext forList() throws RecognitionException {
		ForListContext _localctx = new ForListContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_forList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(782);
			initialValue();
			setState(783);
			_la = _input.LA(1);
			if ( !(_la==DOWNTO || _la==TO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(784);
			finalValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitialValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public InitialValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initialValue; }
	}

	public final InitialValueContext initialValue() throws RecognitionException {
		InitialValueContext _localctx = new InitialValueContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_initialValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(786);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FinalValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FinalValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finalValue; }
	}

	public final FinalValueContext finalValue() throws RecognitionException {
		FinalValueContext _localctx = new FinalValueContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_finalValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(788);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithStatementContext extends ParserRuleContext {
		public TerminalNode WITH() { return getToken(pascalParser.WITH, 0); }
		public RecordVariableListContext recordVariableList() {
			return getRuleContext(RecordVariableListContext.class,0);
		}
		public TerminalNode DO() { return getToken(pascalParser.DO, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WithStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withStatement; }
	}

	public final WithStatementContext withStatement() throws RecognitionException {
		WithStatementContext _localctx = new WithStatementContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_withStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(790);
			match(WITH);
			setState(791);
			recordVariableList();
			setState(792);
			match(DO);
			setState(793);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RecordVariableListContext extends ParserRuleContext {
		public List<VariableContext> variable() {
			return getRuleContexts(VariableContext.class);
		}
		public VariableContext variable(int i) {
			return getRuleContext(VariableContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(pascalParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(pascalParser.COMMA, i);
		}
		public RecordVariableListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_recordVariableList; }
	}

	public final RecordVariableListContext recordVariableList() throws RecognitionException {
		RecordVariableListContext _localctx = new RecordVariableListContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_recordVariableList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(795);
			variable();
			setState(800);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(796);
				match(COMMA);
				setState(797);
				variable();
				}
				}
				setState(802);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3R\u0326\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\3\2\3\2\3\3\3\3\5\3\u00cb\n\3\3\3\3\3\3\3\3\3\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\5\4\u00d7\n\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u00df"+
		"\n\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\7\6\u00ea\n\6\f\6\16\6\u00ed"+
		"\13\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\7\b\u00f9\n\b\f\b\16\b\u00fc"+
		"\13\b\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\n\6\n\u0106\n\n\r\n\16\n\u0107\3\13"+
		"\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\5\r\u011d\n\r\3\16\3\16\5\16\u0121\n\16\3\17\3\17\3\20\3\20\3\21"+
		"\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\24\3\24\6\24\u0131\n\24\r\24\16"+
		"\24\u0132\3\25\3\25\3\25\3\25\3\25\5\25\u013a\n\25\3\26\3\26\5\26\u013e"+
		"\n\26\3\26\3\26\3\26\3\27\3\27\5\27\u0145\n\27\3\30\3\30\3\30\5\30\u014a"+
		"\n\30\3\31\3\31\3\31\3\31\5\31\u0150\n\31\3\32\3\32\3\32\3\32\3\33\3\33"+
		"\3\33\3\33\3\34\3\34\5\34\u015c\n\34\3\35\3\35\3\35\5\35\u0161\n\35\3"+
		"\36\3\36\3\36\3\36\5\36\u0167\n\36\3\37\3\37\3\37\3\37\5\37\u016d\n\37"+
		"\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \5 \u017f\n \3!\3"+
		"!\3!\7!\u0184\n!\f!\16!\u0187\13!\3\"\3\"\3#\3#\3$\3$\5$\u018f\n$\3$\3"+
		"$\3%\3%\3%\5%\u0196\n%\3%\5%\u0199\n%\3&\3&\3&\7&\u019e\n&\f&\16&\u01a1"+
		"\13&\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\7(\u01ad\n(\f(\16(\u01b0\13(\3"+
		")\3)\3)\3)\3)\5)\u01b7\n)\3*\3*\3*\3*\3*\3*\3+\3+\3+\3+\3,\3,\3-\3-\3"+
		"-\3-\5-\u01c9\n-\3.\3.\3.\3/\3/\3/\3/\7/\u01d2\n/\f/\16/\u01d5\13/\3/"+
		"\3/\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\62\3\62\5\62\u01e2\n\62\3\63"+
		"\3\63\3\63\5\63\u01e7\n\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\7\64\u01f0"+
		"\n\64\f\64\16\64\u01f3\13\64\3\64\3\64\3\65\3\65\3\65\3\65\3\65\3\65\3"+
		"\65\5\65\u01fe\n\65\3\66\3\66\3\66\3\66\3\67\3\67\3\67\7\67\u0207\n\67"+
		"\f\67\16\67\u020a\13\67\38\38\38\78\u020f\n8\f8\168\u0212\138\39\39\3"+
		"9\59\u0217\n9\39\39\39\39\39\3:\3:\3;\3;\3;\3;\3;\5;\u0225\n;\3<\3<\5"+
		"<\u0229\n<\3=\3=\3=\3=\5=\u022f\n=\3>\3>\3>\3>\3?\3?\3?\5?\u0238\n?\3"+
		"?\3?\3?\3?\7?\u023e\n?\f?\16?\u0241\13?\3?\3?\3?\3?\3?\3?\7?\u0249\n?"+
		"\f?\16?\u024c\13?\3?\3?\3?\3?\3?\7?\u0253\n?\f?\16?\u0256\13?\3@\3@\3"+
		"@\3@\5@\u025c\n@\3A\3A\3B\3B\3B\3B\5B\u0264\nB\3C\3C\3D\3D\3D\3D\5D\u026c"+
		"\nD\3E\3E\3F\5F\u0271\nF\3F\3F\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\5G\u0280"+
		"\nG\3H\3H\3H\3H\5H\u0286\nH\3I\3I\3I\3I\3I\3J\3J\3J\7J\u0290\nJ\fJ\16"+
		"J\u0293\13J\3K\3K\3K\3K\3K\3K\3K\3K\5K\u029d\nK\3L\3L\3L\7L\u02a2\nL\f"+
		"L\16L\u02a5\13L\3L\5L\u02a8\nL\3M\3M\3M\5M\u02ad\nM\3N\3N\3N\3N\3N\5N"+
		"\u02b4\nN\3O\3O\7O\u02b8\nO\fO\16O\u02bb\13O\3P\3P\3P\3Q\3Q\3Q\3R\3R\3"+
		"S\3S\3T\3T\3T\3T\5T\u02cb\nT\3U\3U\3U\3U\3V\3V\3V\7V\u02d4\nV\fV\16V\u02d7"+
		"\13V\3W\3W\5W\u02db\nW\3X\3X\3X\3X\3X\3X\5X\u02e3\nX\3Y\3Y\3Y\3Y\3Y\3"+
		"Y\7Y\u02eb\nY\fY\16Y\u02ee\13Y\3Y\3Y\3Y\5Y\u02f3\nY\3Y\3Y\3Z\3Z\3Z\3Z"+
		"\3[\3[\3[\5[\u02fe\n[\3\\\3\\\3\\\3\\\3\\\3]\3]\3]\3]\3]\3^\3^\3^\3^\3"+
		"^\3^\3^\3_\3_\3_\3_\3`\3`\3a\3a\3b\3b\3b\3b\3b\3c\3c\3c\7c\u0321\nc\f"+
		"c\16c\u0324\13c\3c\2\2d\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*"+
		",.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084"+
		"\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c"+
		"\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4"+
		"\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\2\t\3\2+,\3\2JK\7\2\6"+
		"\6\b\b\26\26  HH\4\2\25\25\638\4\2\34\34+,\6\2\3\3\13\13\30\30-.\4\2\r"+
		"\r%%\2\u0323\2\u00c6\3\2\2\2\4\u00c8\3\2\2\2\6\u00de\3\2\2\2\b\u00e0\3"+
		"\2\2\2\n\u00eb\3\2\2\2\f\u00f0\3\2\2\2\16\u00f4\3\2\2\2\20\u00ff\3\2\2"+
		"\2\22\u0101\3\2\2\2\24\u0109\3\2\2\2\26\u010d\3\2\2\2\30\u011c\3\2\2\2"+
		"\32\u0120\3\2\2\2\34\u0122\3\2\2\2\36\u0124\3\2\2\2 \u0126\3\2\2\2\"\u0128"+
		"\3\2\2\2$\u012a\3\2\2\2&\u012c\3\2\2\2(\u0134\3\2\2\2*\u013b\3\2\2\2,"+
		"\u0142\3\2\2\2.\u0149\3\2\2\2\60\u014f\3\2\2\2\62\u0151\3\2\2\2\64\u0155"+
		"\3\2\2\2\66\u015b\3\2\2\28\u0160\3\2\2\2:\u0166\3\2\2\2<\u0168\3\2\2\2"+
		">\u017e\3\2\2\2@\u0180\3\2\2\2B\u0188\3\2\2\2D\u018a\3\2\2\2F\u018c\3"+
		"\2\2\2H\u0198\3\2\2\2J\u019a\3\2\2\2L\u01a2\3\2\2\2N\u01a6\3\2\2\2P\u01b6"+
		"\3\2\2\2R\u01b8\3\2\2\2T\u01be\3\2\2\2V\u01c2\3\2\2\2X\u01c8\3\2\2\2Z"+
		"\u01ca\3\2\2\2\\\u01cd\3\2\2\2^\u01d8\3\2\2\2`\u01dc\3\2\2\2b\u01e1\3"+
		"\2\2\2d\u01e3\3\2\2\2f\u01eb\3\2\2\2h\u01fd\3\2\2\2j\u01ff\3\2\2\2l\u0203"+
		"\3\2\2\2n\u020b\3\2\2\2p\u0213\3\2\2\2r\u021d\3\2\2\2t\u0224\3\2\2\2v"+
		"\u0228\3\2\2\2x\u022e\3\2\2\2z\u0230\3\2\2\2|\u0237\3\2\2\2~\u0257\3\2"+
		"\2\2\u0080\u025d\3\2\2\2\u0082\u025f\3\2\2\2\u0084\u0265\3\2\2\2\u0086"+
		"\u0267\3\2\2\2\u0088\u026d\3\2\2\2\u008a\u0270\3\2\2\2\u008c\u027f\3\2"+
		"\2\2\u008e\u0285\3\2\2\2\u0090\u0287\3\2\2\2\u0092\u028c\3\2\2\2\u0094"+
		"\u029c\3\2\2\2\u0096\u02a7\3\2\2\2\u0098\u02a9\3\2\2\2\u009a\u02ae\3\2"+
		"\2\2\u009c\u02b5\3\2\2\2\u009e\u02bc\3\2\2\2\u00a0\u02bf\3\2\2\2\u00a2"+
		"\u02c2\3\2\2\2\u00a4\u02c4\3\2\2\2\u00a6\u02ca\3\2\2\2\u00a8\u02cc\3\2"+
		"\2\2\u00aa\u02d0\3\2\2\2\u00ac\u02da\3\2\2\2\u00ae\u02dc\3\2\2\2\u00b0"+
		"\u02e4\3\2\2\2\u00b2\u02f6\3\2\2\2\u00b4\u02fd\3\2\2\2\u00b6\u02ff\3\2"+
		"\2\2\u00b8\u0304\3\2\2\2\u00ba\u0309\3\2\2\2\u00bc\u0310\3\2\2\2\u00be"+
		"\u0314\3\2\2\2\u00c0\u0316\3\2\2\2\u00c2\u0318\3\2\2\2\u00c4\u031d\3\2"+
		"\2\2\u00c6\u00c7\5\4\3\2\u00c7\3\3\2\2\2\u00c8\u00ca\5\6\4\2\u00c9\u00cb"+
		"\7F\2\2\u00ca\u00c9\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc"+
		"\u00cd\5\n\6\2\u00cd\u00ce\7A\2\2\u00ce\u00cf\7\2\2\3\u00cf\5\3\2\2\2"+
		"\u00d0\u00d1\7\37\2\2\u00d1\u00d6\5\b\5\2\u00d2\u00d3\79\2\2\u00d3\u00d4"+
		"\5l\67\2\u00d4\u00d5\7:\2\2\u00d5\u00d7\3\2\2\2\u00d6\u00d2\3\2\2\2\u00d6"+
		"\u00d7\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00d9\7\61\2\2\u00d9\u00df\3"+
		"\2\2\2\u00da\u00db\7E\2\2\u00db\u00dc\5\b\5\2\u00dc\u00dd\7\61\2\2\u00dd"+
		"\u00df\3\2\2\2\u00de\u00d0\3\2\2\2\u00de\u00da\3\2\2\2\u00df\7\3\2\2\2"+
		"\u00e0\u00e1\7O\2\2\u00e1\t\3\2\2\2\u00e2\u00ea\5\16\b\2\u00e3\u00ea\5"+
		"\22\n\2\u00e4\u00ea\5&\24\2\u00e5\u00ea\5\\/\2\u00e6\u00ea\5`\61\2\u00e7"+
		"\u00ea\5\f\7\2\u00e8\u00ea\7I\2\2\u00e9\u00e2\3\2\2\2\u00e9\u00e3\3\2"+
		"\2\2\u00e9\u00e4\3\2\2\2\u00e9\u00e5\3\2\2\2\u00e9\u00e6\3\2\2\2\u00e9"+
		"\u00e7\3\2\2\2\u00e9\u00e8\3\2\2\2\u00ea\u00ed\3\2\2\2\u00eb\u00e9\3\2"+
		"\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00ee\3\2\2\2\u00ed\u00eb\3\2\2\2\u00ee"+
		"\u00ef\5\u00a8U\2\u00ef\13\3\2\2\2\u00f0\u00f1\7G\2\2\u00f1\u00f2\5l\67"+
		"\2\u00f2\u00f3\7\61\2\2\u00f3\r\3\2\2\2\u00f4\u00f5\7\27\2\2\u00f5\u00fa"+
		"\5\20\t\2\u00f6\u00f7\7\60\2\2\u00f7\u00f9\5\20\t\2\u00f8\u00f6\3\2\2"+
		"\2\u00f9\u00fc\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fd"+
		"\3\2\2\2\u00fc\u00fa\3\2\2\2\u00fd\u00fe\7\61\2\2\u00fe\17\3\2\2\2\u00ff"+
		"\u0100\5\34\17\2\u0100\21\3\2\2\2\u0101\u0105\7\n\2\2\u0102\u0103\5\24"+
		"\13\2\u0103\u0104\7\61\2\2\u0104\u0106\3\2\2\2\u0105\u0102\3\2\2\2\u0106"+
		"\u0107\3\2\2\2\u0107\u0105\3\2\2\2\u0107\u0108\3\2\2\2\u0108\23\3\2\2"+
		"\2\u0109\u010a\5\b\5\2\u010a\u010b\7\63\2\2\u010b\u010c\5\30\r\2\u010c"+
		"\25\3\2\2\2\u010d\u010e\7\t\2\2\u010e\u010f\79\2\2\u010f\u0110\5\34\17"+
		"\2\u0110\u0111\7:\2\2\u0111\27\3\2\2\2\u0112\u011d\5\32\16\2\u0113\u0114"+
		"\5 \21\2\u0114\u0115\5\32\16\2\u0115\u011d\3\2\2\2\u0116\u011d\5\b\5\2"+
		"\u0117\u0118\5 \21\2\u0118\u0119\5\b\5\2\u0119\u011d\3\2\2\2\u011a\u011d"+
		"\5$\23\2\u011b\u011d\5\26\f\2\u011c\u0112\3\2\2\2\u011c\u0113\3\2\2\2"+
		"\u011c\u0116\3\2\2\2\u011c\u0117\3\2\2\2\u011c\u011a\3\2\2\2\u011c\u011b"+
		"\3\2\2\2\u011d\31\3\2\2\2\u011e\u0121\5\34\17\2\u011f\u0121\5\36\20\2"+
		"\u0120\u011e\3\2\2\2\u0120\u011f\3\2\2\2\u0121\33\3\2\2\2\u0122\u0123"+
		"\7Q\2\2\u0123\35\3\2\2\2\u0124\u0125\7R\2\2\u0125\37\3\2\2\2\u0126\u0127"+
		"\t\2\2\2\u0127!\3\2\2\2\u0128\u0129\t\3\2\2\u0129#\3\2\2\2\u012a\u012b"+
		"\7P\2\2\u012b%\3\2\2\2\u012c\u0130\7&\2\2\u012d\u012e\5(\25\2\u012e\u012f"+
		"\7\61\2\2\u012f\u0131\3\2\2\2\u0130\u012d\3\2\2\2\u0131\u0132\3\2\2\2"+
		"\u0132\u0130\3\2\2\2\u0132\u0133\3\2\2\2\u0133\'\3\2\2\2\u0134\u0135\5"+
		"\b\5\2\u0135\u0139\7\63\2\2\u0136\u013a\5.\30\2\u0137\u013a\5*\26\2\u0138"+
		"\u013a\5,\27\2\u0139\u0136\3\2\2\2\u0139\u0137\3\2\2\2\u0139\u0138\3\2"+
		"\2\2\u013a)\3\2\2\2\u013b\u013d\7\22\2\2\u013c\u013e\5f\64\2\u013d\u013c"+
		"\3\2\2\2\u013d\u013e\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0140\7\62\2\2"+
		"\u0140\u0141\5r:\2\u0141+\3\2\2\2\u0142\u0144\7\36\2\2\u0143\u0145\5f"+
		"\64\2\u0144\u0143\3\2\2\2\u0144\u0145\3\2\2\2\u0145-\3\2\2\2\u0146\u014a"+
		"\5\60\31\2\u0147\u014a\58\35\2\u0148\u014a\5Z.\2\u0149\u0146\3\2\2\2\u0149"+
		"\u0147\3\2\2\2\u0149\u0148\3\2\2\2\u014a/\3\2\2\2\u014b\u0150\5\62\32"+
		"\2\u014c\u0150\5\64\33\2\u014d\u0150\5\66\34\2\u014e\u0150\5<\37\2\u014f"+
		"\u014b\3\2\2\2\u014f\u014c\3\2\2\2\u014f\u014d\3\2\2\2\u014f\u014e\3\2"+
		"\2\2\u0150\61\3\2\2\2\u0151\u0152\79\2\2\u0152\u0153\5l\67\2\u0153\u0154"+
		"\7:\2\2\u0154\63\3\2\2\2\u0155\u0156\5\30\r\2\u0156\u0157\7B\2\2\u0157"+
		"\u0158\5\30\r\2\u0158\65\3\2\2\2\u0159\u015c\5\b\5\2\u015a\u015c\t\4\2"+
		"\2\u015b\u0159\3\2\2\2\u015b\u015a\3\2\2\2\u015c\67\3\2\2\2\u015d\u015e"+
		"\7\35\2\2\u015e\u0161\5:\36\2\u015f\u0161\5:\36\2\u0160\u015d\3\2\2\2"+
		"\u0160\u015f\3\2\2\2\u01619\3\2\2\2\u0162\u0167\5> \2\u0163\u0167\5F$"+
		"\2\u0164\u0167\5T+\2\u0165\u0167\5X-\2\u0166\u0162\3\2\2\2\u0166\u0163"+
		"\3\2\2\2\u0166\u0164\3\2\2\2\u0166\u0165\3\2\2\2\u0167;\3\2\2\2\u0168"+
		"\u0169\7H\2\2\u0169\u016c\7;\2\2\u016a\u016d\5\b\5\2\u016b\u016d\5\32"+
		"\16\2\u016c\u016a\3\2\2\2\u016c\u016b\3\2\2\2\u016d\u016e\3\2\2\2\u016e"+
		"\u016f\7=\2\2\u016f=\3\2\2\2\u0170\u0171\7\4\2\2\u0171\u0172\7;\2\2\u0172"+
		"\u0173\5@!\2\u0173\u0174\7=\2\2\u0174\u0175\7\33\2\2\u0175\u0176\5D#\2"+
		"\u0176\u017f\3\2\2\2\u0177\u0178\7\4\2\2\u0178\u0179\7<\2\2\u0179\u017a"+
		"\5@!\2\u017a\u017b\7>\2\2\u017b\u017c\7\33\2\2\u017c\u017d\5D#\2\u017d"+
		"\u017f\3\2\2\2\u017e\u0170\3\2\2\2\u017e\u0177\3\2\2\2\u017f?\3\2\2\2"+
		"\u0180\u0185\5B\"\2\u0181\u0182\7\60\2\2\u0182\u0184\5B\"\2\u0183\u0181"+
		"\3\2\2\2\u0184\u0187\3\2\2\2\u0185\u0183\3\2\2\2\u0185\u0186\3\2\2\2\u0186"+
		"A\3\2\2\2\u0187\u0185\3\2\2\2\u0188\u0189\5\60\31\2\u0189C\3\2\2\2\u018a"+
		"\u018b\5.\30\2\u018bE\3\2\2\2\u018c\u018e\7!\2\2\u018d\u018f\5H%\2\u018e"+
		"\u018d\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u0190\3\2\2\2\u0190\u0191\7\17"+
		"\2\2\u0191G\3\2\2\2\u0192\u0195\5J&\2\u0193\u0194\7\61\2\2\u0194\u0196"+
		"\5N(\2\u0195\u0193\3\2\2\2\u0195\u0196\3\2\2\2\u0196\u0199\3\2\2\2\u0197"+
		"\u0199\5N(\2\u0198\u0192\3\2\2\2\u0198\u0197\3\2\2\2\u0199I\3\2\2\2\u019a"+
		"\u019f\5L\'\2\u019b\u019c\7\61\2\2\u019c\u019e\5L\'\2\u019d\u019b\3\2"+
		"\2\2\u019e\u01a1\3\2\2\2\u019f\u019d\3\2\2\2\u019f\u01a0\3\2\2\2\u01a0"+
		"K\3\2\2\2\u01a1\u019f\3\2\2\2\u01a2\u01a3\5l\67\2\u01a3\u01a4\7\62\2\2"+
		"\u01a4\u01a5\5.\30\2\u01a5M\3\2\2\2\u01a6\u01a7\7\7\2\2\u01a7\u01a8\5"+
		"P)\2\u01a8\u01a9\7\33\2\2\u01a9\u01ae\5R*\2\u01aa\u01ab\7\61\2\2\u01ab"+
		"\u01ad\5R*\2\u01ac\u01aa\3\2\2\2\u01ad\u01b0\3\2\2\2\u01ae\u01ac\3\2\2"+
		"\2\u01ae\u01af\3\2\2\2\u01afO\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b1\u01b2"+
		"\5\b\5\2\u01b2\u01b3\7\62\2\2\u01b3\u01b4\5\66\34\2\u01b4\u01b7\3\2\2"+
		"\2\u01b5\u01b7\5\66\34\2\u01b6\u01b1\3\2\2\2\u01b6\u01b5\3\2\2\2\u01b7"+
		"Q\3\2\2\2\u01b8\u01b9\5n8\2\u01b9\u01ba\7\62\2\2\u01ba\u01bb\79\2\2\u01bb"+
		"\u01bc\5H%\2\u01bc\u01bd\7:\2\2\u01bdS\3\2\2\2\u01be\u01bf\7#\2\2\u01bf"+
		"\u01c0\7\33\2\2\u01c0\u01c1\5V,\2\u01c1U\3\2\2\2\u01c2\u01c3\5\60\31\2"+
		"\u01c3W\3\2\2\2\u01c4\u01c5\7\20\2\2\u01c5\u01c6\7\33\2\2\u01c6\u01c9"+
		"\5.\30\2\u01c7\u01c9\7\20\2\2\u01c8\u01c4\3\2\2\2\u01c8\u01c7\3\2\2\2"+
		"\u01c9Y\3\2\2\2\u01ca\u01cb\7?\2\2\u01cb\u01cc\5\66\34\2\u01cc[\3\2\2"+
		"\2\u01cd\u01ce\7(\2\2\u01ce\u01d3\5^\60\2\u01cf\u01d0\7\61\2\2\u01d0\u01d2"+
		"\5^\60\2\u01d1\u01cf\3\2\2\2\u01d2\u01d5\3\2\2\2\u01d3\u01d1\3\2\2\2\u01d3"+
		"\u01d4\3\2\2\2\u01d4\u01d6\3\2\2\2\u01d5\u01d3\3\2\2\2\u01d6\u01d7\7\61"+
		"\2\2\u01d7]\3\2\2\2\u01d8\u01d9\5l\67\2\u01d9\u01da\7\62\2\2\u01da\u01db"+
		"\5.\30\2\u01db_\3\2\2\2\u01dc\u01dd\5b\62\2\u01dd\u01de\7\61\2\2\u01de"+
		"a\3\2\2\2\u01df\u01e2\5d\63\2\u01e0\u01e2\5p9\2\u01e1\u01df\3\2\2\2\u01e1"+
		"\u01e0\3\2\2\2\u01e2c\3\2\2\2\u01e3\u01e4\7\36\2\2\u01e4\u01e6\5\b\5\2"+
		"\u01e5\u01e7\5f\64\2\u01e6\u01e5\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7\u01e8"+
		"\3\2\2\2\u01e8\u01e9\7\61\2\2\u01e9\u01ea\5\n\6\2\u01eae\3\2\2\2\u01eb"+
		"\u01ec\79\2\2\u01ec\u01f1\5h\65\2\u01ed\u01ee\7\61\2\2\u01ee\u01f0\5h"+
		"\65\2\u01ef\u01ed\3\2\2\2\u01f0\u01f3\3\2\2\2\u01f1\u01ef\3\2\2\2\u01f1"+
		"\u01f2\3\2\2\2\u01f2\u01f4\3\2\2\2\u01f3\u01f1\3\2\2\2\u01f4\u01f5\7:"+
		"\2\2\u01f5g\3\2\2\2\u01f6\u01fe\5j\66\2\u01f7\u01f8\7(\2\2\u01f8\u01fe"+
		"\5j\66\2\u01f9\u01fa\7\22\2\2\u01fa\u01fe\5j\66\2\u01fb\u01fc\7\36\2\2"+
		"\u01fc\u01fe\5j\66\2\u01fd\u01f6\3\2\2\2\u01fd\u01f7\3\2\2\2\u01fd\u01f9"+
		"\3\2\2\2\u01fd\u01fb\3\2\2\2\u01fei\3\2\2\2\u01ff\u0200\5l\67\2\u0200"+
		"\u0201\7\62\2\2\u0201\u0202\5\66\34\2\u0202k\3\2\2\2\u0203\u0208\5\b\5"+
		"\2\u0204\u0205\7\60\2\2\u0205\u0207\5\b\5\2\u0206\u0204\3\2\2\2\u0207"+
		"\u020a\3\2\2\2\u0208\u0206\3\2\2\2\u0208\u0209\3\2\2\2\u0209m\3\2\2\2"+
		"\u020a\u0208\3\2\2\2\u020b\u0210\5\30\r\2\u020c\u020d\7\60\2\2\u020d\u020f"+
		"\5\30\r\2\u020e\u020c\3\2\2\2\u020f\u0212\3\2\2\2\u0210\u020e\3\2\2\2"+
		"\u0210\u0211\3\2\2\2\u0211o\3\2\2\2\u0212\u0210\3\2\2\2\u0213\u0214\7"+
		"\22\2\2\u0214\u0216\5\b\5\2\u0215\u0217\5f\64\2\u0216\u0215\3\2\2\2\u0216"+
		"\u0217\3\2\2\2\u0217\u0218\3\2\2\2\u0218\u0219\7\62\2\2\u0219\u021a\5"+
		"r:\2\u021a\u021b\7\61\2\2\u021b\u021c\5\n\6\2\u021cq\3\2\2\2\u021d\u021e"+
		"\5\66\34\2\u021es\3\2\2\2\u021f\u0220\5\20\t\2\u0220\u0221\7\62\2\2\u0221"+
		"\u0222\5v<\2\u0222\u0225\3\2\2\2\u0223\u0225\5v<\2\u0224\u021f\3\2\2\2"+
		"\u0224\u0223\3\2\2\2\u0225u\3\2\2\2\u0226\u0229\5x=\2\u0227\u0229\5\u00a6"+
		"T\2\u0228\u0226\3\2\2\2\u0228\u0227\3\2\2\2\u0229w\3\2\2\2\u022a\u022f"+
		"\5z>\2\u022b\u022f\5\u009aN\2\u022c\u022f\5\u00a0Q\2\u022d\u022f\5\u00a2"+
		"R\2\u022e\u022a\3\2\2\2\u022e\u022b\3\2\2\2\u022e\u022c\3\2\2\2\u022e"+
		"\u022d\3\2\2\2\u022fy\3\2\2\2\u0230\u0231\5|?\2\u0231\u0232\7/\2\2\u0232"+
		"\u0233\5~@\2\u0233{\3\2\2\2\u0234\u0235\7@\2\2\u0235\u0238\5\b\5\2\u0236"+
		"\u0238\5\b\5\2\u0237\u0234\3\2\2\2\u0237\u0236\3\2\2\2\u0238\u0254\3\2"+
		"\2\2\u0239\u023a\7;\2\2\u023a\u023f\5~@\2\u023b\u023c\7\60\2\2\u023c\u023e"+
		"\5~@\2\u023d\u023b\3\2\2\2\u023e\u0241\3\2\2\2\u023f\u023d\3\2\2\2\u023f"+
		"\u0240\3\2\2\2\u0240\u0242\3\2\2\2\u0241\u023f\3\2\2\2\u0242\u0243\7="+
		"\2\2\u0243\u0253\3\2\2\2\u0244\u0245\7<\2\2\u0245\u024a\5~@\2\u0246\u0247"+
		"\7\60\2\2\u0247\u0249\5~@\2\u0248\u0246\3\2\2\2\u0249\u024c\3\2\2\2\u024a"+
		"\u0248\3\2\2\2\u024a\u024b\3\2\2\2\u024b\u024d\3\2\2\2\u024c\u024a\3\2"+
		"\2\2\u024d\u024e\7>\2\2\u024e\u0253\3\2\2\2\u024f\u0250\7A\2\2\u0250\u0253"+
		"\5\b\5\2\u0251\u0253\7?\2\2\u0252\u0239\3\2\2\2\u0252\u0244\3\2\2\2\u0252"+
		"\u024f\3\2\2\2\u0252\u0251\3\2\2\2\u0253\u0256\3\2\2\2\u0254\u0252\3\2"+
		"\2\2\u0254\u0255\3\2\2\2\u0255}\3\2\2\2\u0256\u0254\3\2\2\2\u0257\u025b"+
		"\5\u0082B\2\u0258\u0259\5\u0080A\2\u0259\u025a\5~@\2\u025a\u025c\3\2\2"+
		"\2\u025b\u0258\3\2\2\2\u025b\u025c\3\2\2\2\u025c\177\3\2\2\2\u025d\u025e"+
		"\t\5\2\2\u025e\u0081\3\2\2\2\u025f\u0263\5\u0086D\2\u0260\u0261\5\u0084"+
		"C\2\u0261\u0262\5\u0082B\2\u0262\u0264\3\2\2\2\u0263\u0260\3\2\2\2\u0263"+
		"\u0264\3\2\2\2\u0264\u0083\3\2\2\2\u0265\u0266\t\6\2\2\u0266\u0085\3\2"+
		"\2\2\u0267\u026b\5\u008aF\2\u0268\u0269\5\u0088E\2\u0269\u026a\5\u0086"+
		"D\2\u026a\u026c\3\2\2\2\u026b\u0268\3\2\2\2\u026b\u026c\3\2\2\2\u026c"+
		"\u0087\3\2\2\2\u026d\u026e\t\7\2\2\u026e\u0089\3\2\2\2\u026f\u0271\t\2"+
		"\2\2\u0270\u026f\3\2\2\2\u0270\u0271\3\2\2\2\u0271\u0272\3\2\2\2\u0272"+
		"\u0273\5\u008cG\2\u0273\u008b\3\2\2\2\u0274\u0280\5|?\2\u0275\u0276\7"+
		"9\2\2\u0276\u0277\5~@\2\u0277\u0278\7:\2\2\u0278\u0280\3\2\2\2\u0279\u0280"+
		"\5\u0090I\2\u027a\u0280\5\u008eH\2\u027b\u0280\5\u0094K\2\u027c\u027d"+
		"\7\32\2\2\u027d\u0280\5\u008cG\2\u027e\u0280\5\"\22\2\u027f\u0274\3\2"+
		"\2\2\u027f\u0275\3\2\2\2\u027f\u0279\3\2\2\2\u027f\u027a\3\2\2\2\u027f"+
		"\u027b\3\2\2\2\u027f\u027c\3\2\2\2\u027f\u027e\3\2\2\2\u0280\u008d\3\2"+
		"\2\2\u0281\u0286\5\32\16\2\u0282\u0286\5\26\f\2\u0283\u0286\5$\23\2\u0284"+
		"\u0286\7\31\2\2\u0285\u0281\3\2\2\2\u0285\u0282\3\2\2\2\u0285\u0283\3"+
		"\2\2\2\u0285\u0284\3\2\2\2\u0286\u008f\3\2\2\2\u0287\u0288\5\b\5\2\u0288"+
		"\u0289\79\2\2\u0289\u028a\5\u0092J\2\u028a\u028b\7:\2\2\u028b\u0091\3"+
		"\2\2\2\u028c\u0291\5\u009cO\2\u028d\u028e\7\60\2\2\u028e\u0290\5\u009c"+
		"O\2\u028f\u028d\3\2\2\2\u0290\u0293\3\2\2\2\u0291\u028f\3\2\2\2\u0291"+
		"\u0292\3\2\2\2\u0292\u0093\3\2\2\2\u0293\u0291\3\2\2\2\u0294\u0295\7;"+
		"\2\2\u0295\u0296\5\u0096L\2\u0296\u0297\7=\2\2\u0297\u029d\3\2\2\2\u0298"+
		"\u0299\7<\2\2\u0299\u029a\5\u0096L\2\u029a\u029b\7>\2\2\u029b\u029d\3"+
		"\2\2\2\u029c\u0294\3\2\2\2\u029c\u0298\3\2\2\2\u029d\u0095\3\2\2\2\u029e"+
		"\u02a3\5\u0098M\2\u029f\u02a0\7\60\2\2\u02a0\u02a2\5\u0098M\2\u02a1\u029f"+
		"\3\2\2\2\u02a2\u02a5\3\2\2\2\u02a3\u02a1\3\2\2\2\u02a3\u02a4\3\2\2\2\u02a4"+
		"\u02a8\3\2\2\2\u02a5\u02a3\3\2\2\2\u02a6\u02a8\3\2\2\2\u02a7\u029e\3\2"+
		"\2\2\u02a7\u02a6\3\2\2\2\u02a8\u0097\3\2\2\2\u02a9\u02ac\5~@\2\u02aa\u02ab"+
		"\7B\2\2\u02ab\u02ad\5~@\2\u02ac\u02aa\3\2\2\2\u02ac\u02ad\3\2\2\2\u02ad"+
		"\u0099\3\2\2\2\u02ae\u02b3\5\b\5\2\u02af\u02b0\79\2\2\u02b0\u02b1\5\u0092"+
		"J\2\u02b1\u02b2\7:\2\2\u02b2\u02b4\3\2\2\2\u02b3\u02af\3\2\2\2\u02b3\u02b4"+
		"\3\2\2\2\u02b4\u009b\3\2\2\2\u02b5\u02b9\5~@\2\u02b6\u02b8\5\u009eP\2"+
		"\u02b7\u02b6\3\2\2\2\u02b8\u02bb\3\2\2\2\u02b9\u02b7\3\2\2\2\u02b9\u02ba"+
		"\3\2\2\2\u02ba\u009d\3\2\2\2\u02bb\u02b9\3\2\2\2\u02bc\u02bd\7\62\2\2"+
		"\u02bd\u02be\5~@\2\u02be\u009f\3\2\2\2\u02bf\u02c0\7\23\2\2\u02c0\u02c1"+
		"\5\20\t\2\u02c1\u00a1\3\2\2\2\u02c2\u02c3\3\2\2\2\u02c3\u00a3\3\2\2\2"+
		"\u02c4\u02c5\3\2\2\2\u02c5\u00a5\3\2\2\2\u02c6\u02cb\5\u00a8U\2\u02c7"+
		"\u02cb\5\u00acW\2\u02c8\u02cb\5\u00b4[\2\u02c9\u02cb\5\u00c2b\2\u02ca"+
		"\u02c6\3\2\2\2\u02ca\u02c7\3\2\2\2\u02ca\u02c8\3\2\2\2\u02ca\u02c9\3\2"+
		"\2\2\u02cb\u00a7\3\2\2\2\u02cc\u02cd\7\5\2\2\u02cd\u02ce\5\u00aaV\2\u02ce"+
		"\u02cf\7\17\2\2\u02cf\u00a9\3\2\2\2\u02d0\u02d5\5t;\2\u02d1\u02d2\7\61"+
		"\2\2\u02d2\u02d4\5t;\2\u02d3\u02d1\3\2\2\2\u02d4\u02d7\3\2\2\2\u02d5\u02d3"+
		"\3\2\2\2\u02d5\u02d6\3\2\2\2\u02d6\u00ab\3\2\2\2\u02d7\u02d5\3\2\2\2\u02d8"+
		"\u02db\5\u00aeX\2\u02d9\u02db\5\u00b0Y\2\u02da\u02d8\3\2\2\2\u02da\u02d9"+
		"\3\2\2\2\u02db\u00ad\3\2\2\2\u02dc\u02dd\7\24\2\2\u02dd\u02de\5~@\2\u02de"+
		"\u02df\7$\2\2\u02df\u02e2\5t;\2\u02e0\u02e1\7\16\2\2\u02e1\u02e3\5t;\2"+
		"\u02e2\u02e0\3\2\2\2\u02e2\u02e3\3\2\2\2\u02e3\u00af\3\2\2\2\u02e4\u02e5"+
		"\7\7\2\2\u02e5\u02e6\5~@\2\u02e6\u02e7\7\33\2\2\u02e7\u02ec\5\u00b2Z\2"+
		"\u02e8\u02e9\7\61\2\2\u02e9\u02eb\5\u00b2Z\2\u02ea\u02e8\3\2\2\2\u02eb"+
		"\u02ee\3\2\2\2\u02ec\u02ea\3\2\2\2\u02ec\u02ed\3\2\2\2\u02ed\u02f2\3\2"+
		"\2\2\u02ee\u02ec\3\2\2\2\u02ef\u02f0\7\61\2\2\u02f0\u02f1\7\16\2\2\u02f1"+
		"\u02f3\5\u00aaV\2\u02f2\u02ef\3\2\2\2\u02f2\u02f3\3\2\2\2\u02f3\u02f4"+
		"\3\2\2\2\u02f4\u02f5\7\17\2\2\u02f5\u00b1\3\2\2\2\u02f6\u02f7\5n8\2\u02f7"+
		"\u02f8\7\62\2\2\u02f8\u02f9\5t;\2\u02f9\u00b3\3\2\2\2\u02fa\u02fe\5\u00b6"+
		"\\\2\u02fb\u02fe\5\u00b8]\2\u02fc\u02fe\5\u00ba^\2\u02fd\u02fa\3\2\2\2"+
		"\u02fd\u02fb\3\2\2\2\u02fd\u02fc\3\2\2\2\u02fe\u00b5\3\2\2\2\u02ff\u0300"+
		"\7)\2\2\u0300\u0301\5~@\2\u0301\u0302\7\f\2\2\u0302\u0303\5t;\2\u0303"+
		"\u00b7\3\2\2\2\u0304\u0305\7\"\2\2\u0305\u0306\5\u00aaV\2\u0306\u0307"+
		"\7\'\2\2\u0307\u0308\5~@\2\u0308\u00b9\3\2\2\2\u0309\u030a\7\21\2\2\u030a"+
		"\u030b\5\b\5\2\u030b\u030c\7/\2\2\u030c\u030d\5\u00bc_\2\u030d\u030e\7"+
		"\f\2\2\u030e\u030f\5t;\2\u030f\u00bb\3\2\2\2\u0310\u0311\5\u00be`\2\u0311"+
		"\u0312\t\b\2\2\u0312\u0313\5\u00c0a\2\u0313\u00bd\3\2\2\2\u0314\u0315"+
		"\5~@\2\u0315\u00bf\3\2\2\2\u0316\u0317\5~@\2\u0317\u00c1\3\2\2\2\u0318"+
		"\u0319\7*\2\2\u0319\u031a\5\u00c4c\2\u031a\u031b\7\f\2\2\u031b\u031c\5"+
		"t;\2\u031c\u00c3\3\2\2\2\u031d\u0322\5|?\2\u031e\u031f\7\60\2\2\u031f"+
		"\u0321\5|?\2\u0320\u031e\3\2\2\2\u0321\u0324\3\2\2\2\u0322\u0320\3\2\2"+
		"\2\u0322\u0323\3\2\2\2\u0323\u00c5\3\2\2\2\u0324\u0322\3\2\2\2C\u00ca"+
		"\u00d6\u00de\u00e9\u00eb\u00fa\u0107\u011c\u0120\u0132\u0139\u013d\u0144"+
		"\u0149\u014f\u015b\u0160\u0166\u016c\u017e\u0185\u018e\u0195\u0198\u019f"+
		"\u01ae\u01b6\u01c8\u01d3\u01e1\u01e6\u01f1\u01fd\u0208\u0210\u0216\u0224"+
		"\u0228\u022e\u0237\u023f\u024a\u0252\u0254\u025b\u0263\u026b\u0270\u027f"+
		"\u0285\u0291\u029c\u02a3\u02a7\u02ac\u02b3\u02b9\u02ca\u02d5\u02da\u02e2"+
		"\u02ec\u02f2\u02fd\u0322";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}