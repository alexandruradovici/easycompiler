// Generated from c:\Users\Alexa\Documents\GitHub\easycompiler-1\examples\Example - Pascal Frontend\pascal.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class pascalLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CHR", "CONST", "DIV", 
			"DO", "DOWNTO", "ELSE", "END", "FILE", "FOR", "FUNCTION", "GOTO", "IF", 
			"IN", "INTEGER", "LABEL", "MOD", "NIL", "NOT", "OF", "OR", "PACKED", 
			"PROCEDURE", "PROGRAM", "REAL", "RECORD", "REPEAT", "SET", "THEN", "TO", 
			"TYPE", "UNTIL", "VAR", "WHILE", "WITH", "PLUS", "MINUS", "STAR", "SLASH", 
			"ASSIGN", "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT", "LE", 
			"GE", "GT", "LPAREN", "RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2", 
			"POINTER", "AT", "DOT", "DOTDOT", "LCURLY", "RCURLY", "UNIT", "INTERFACE", 
			"USES", "STRING", "IMPLEMENTATION", "TRUE", "FALSE", "WS", "COMMENT_1", 
			"COMMENT_2", "IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL", "EXPONENT"
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


	public pascalLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "pascal.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2R\u0237\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\3\2\3\2\3\2"+
		"\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27"+
		"\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\33"+
		"\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37"+
		"\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3!\3\"\3\""+
		"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3\'"+
		"\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-"+
		"\3.\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\3\63\3\64\3\64"+
		"\3\65\3\65\3\65\3\66\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3;\3"+
		"<\3<\3=\3=\3=\3>\3>\3?\3?\3@\3@\3A\3A\3A\3B\3B\3C\3C\3D\3D\3D\3D\3D\3"+
		"E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3F\3F\3F\3F\3F\3G\3G\3G\3G\3G\3G\3G\3H\3"+
		"H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3I\3I\3I\3I\3I\3J\3J\3J\3J\3"+
		"J\3J\3K\3K\3K\3K\3L\3L\3L\3L\7L\u01f0\nL\fL\16L\u01f3\13L\3L\3L\3L\3L"+
		"\3L\3M\3M\7M\u01fc\nM\fM\16M\u01ff\13M\3M\3M\3M\3M\3N\3N\7N\u0207\nN\f"+
		"N\16N\u020a\13N\3O\3O\3O\3O\7O\u0210\nO\fO\16O\u0213\13O\3O\3O\3P\6P\u0218"+
		"\nP\rP\16P\u0219\3Q\6Q\u021d\nQ\rQ\16Q\u021e\3Q\3Q\6Q\u0223\nQ\rQ\16Q"+
		"\u0224\3Q\5Q\u0228\nQ\5Q\u022a\nQ\3Q\5Q\u022d\nQ\3R\3R\5R\u0231\nR\3R"+
		"\6R\u0234\nR\rR\16R\u0235\4\u01f1\u01fd\2S\3\3\5\4\7\5\t\6\13\7\r\b\17"+
		"\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+"+
		"\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+"+
		"U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081"+
		"B\u0083C\u0085D\u0087E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093K\u0095"+
		"L\u0097M\u0099N\u009bO\u009dP\u009fQ\u00a1R\u00a3\2\3\2\6\5\2\13\f\17"+
		"\17\"\"\5\2\62;C\\aa\3\2))\4\2--//\2\u0242\2\3\3\2\2\2\2\5\3\2\2\2\2\7"+
		"\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2"+
		"\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2"+
		"\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2"+
		"\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2"+
		"\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2"+
		"\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M"+
		"\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2"+
		"\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2"+
		"\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s"+
		"\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177"+
		"\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2"+
		"\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091"+
		"\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2"+
		"\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\3\u00a5"+
		"\3\2\2\2\5\u00a9\3\2\2\2\7\u00af\3\2\2\2\t\u00b5\3\2\2\2\13\u00bd\3\2"+
		"\2\2\r\u00c2\3\2\2\2\17\u00c7\3\2\2\2\21\u00cb\3\2\2\2\23\u00d1\3\2\2"+
		"\2\25\u00d5\3\2\2\2\27\u00d8\3\2\2\2\31\u00df\3\2\2\2\33\u00e4\3\2\2\2"+
		"\35\u00e8\3\2\2\2\37\u00ed\3\2\2\2!\u00f1\3\2\2\2#\u00fa\3\2\2\2%\u00ff"+
		"\3\2\2\2\'\u0102\3\2\2\2)\u0105\3\2\2\2+\u010d\3\2\2\2-\u0113\3\2\2\2"+
		"/\u0117\3\2\2\2\61\u011b\3\2\2\2\63\u011f\3\2\2\2\65\u0122\3\2\2\2\67"+
		"\u0125\3\2\2\29\u012c\3\2\2\2;\u0136\3\2\2\2=\u013e\3\2\2\2?\u0143\3\2"+
		"\2\2A\u014a\3\2\2\2C\u0151\3\2\2\2E\u0155\3\2\2\2G\u015a\3\2\2\2I\u015d"+
		"\3\2\2\2K\u0162\3\2\2\2M\u0168\3\2\2\2O\u016c\3\2\2\2Q\u0172\3\2\2\2S"+
		"\u0177\3\2\2\2U\u0179\3\2\2\2W\u017b\3\2\2\2Y\u017d\3\2\2\2[\u017f\3\2"+
		"\2\2]\u0182\3\2\2\2_\u0184\3\2\2\2a\u0186\3\2\2\2c\u0188\3\2\2\2e\u018a"+
		"\3\2\2\2g\u018d\3\2\2\2i\u018f\3\2\2\2k\u0192\3\2\2\2m\u0195\3\2\2\2o"+
		"\u0197\3\2\2\2q\u0199\3\2\2\2s\u019b\3\2\2\2u\u019d\3\2\2\2w\u01a0\3\2"+
		"\2\2y\u01a2\3\2\2\2{\u01a5\3\2\2\2}\u01a7\3\2\2\2\177\u01a9\3\2\2\2\u0081"+
		"\u01ab\3\2\2\2\u0083\u01ae\3\2\2\2\u0085\u01b0\3\2\2\2\u0087\u01b2\3\2"+
		"\2\2\u0089\u01b7\3\2\2\2\u008b\u01c1\3\2\2\2\u008d\u01c6\3\2\2\2\u008f"+
		"\u01cd\3\2\2\2\u0091\u01dc\3\2\2\2\u0093\u01e1\3\2\2\2\u0095\u01e7\3\2"+
		"\2\2\u0097\u01eb\3\2\2\2\u0099\u01f9\3\2\2\2\u009b\u0204\3\2\2\2\u009d"+
		"\u020b\3\2\2\2\u009f\u0217\3\2\2\2\u00a1\u021c\3\2\2\2\u00a3\u022e\3\2"+
		"\2\2\u00a5\u00a6\7C\2\2\u00a6\u00a7\7P\2\2\u00a7\u00a8\7F\2\2\u00a8\4"+
		"\3\2\2\2\u00a9\u00aa\7C\2\2\u00aa\u00ab\7T\2\2\u00ab\u00ac\7T\2\2\u00ac"+
		"\u00ad\7C\2\2\u00ad\u00ae\7[\2\2\u00ae\6\3\2\2\2\u00af\u00b0\7D\2\2\u00b0"+
		"\u00b1\7G\2\2\u00b1\u00b2\7I\2\2\u00b2\u00b3\7K\2\2\u00b3\u00b4\7P\2\2"+
		"\u00b4\b\3\2\2\2\u00b5\u00b6\7D\2\2\u00b6\u00b7\7Q\2\2\u00b7\u00b8\7Q"+
		"\2\2\u00b8\u00b9\7N\2\2\u00b9\u00ba\7G\2\2\u00ba\u00bb\7C\2\2\u00bb\u00bc"+
		"\7P\2\2\u00bc\n\3\2\2\2\u00bd\u00be\7E\2\2\u00be\u00bf\7C\2\2\u00bf\u00c0"+
		"\7U\2\2\u00c0\u00c1\7G\2\2\u00c1\f\3\2\2\2\u00c2\u00c3\7E\2\2\u00c3\u00c4"+
		"\7J\2\2\u00c4\u00c5\7C\2\2\u00c5\u00c6\7T\2\2\u00c6\16\3\2\2\2\u00c7\u00c8"+
		"\7E\2\2\u00c8\u00c9\7J\2\2\u00c9\u00ca\7T\2\2\u00ca\20\3\2\2\2\u00cb\u00cc"+
		"\7E\2\2\u00cc\u00cd\7Q\2\2\u00cd\u00ce\7P\2\2\u00ce\u00cf\7U\2\2\u00cf"+
		"\u00d0\7V\2\2\u00d0\22\3\2\2\2\u00d1\u00d2\7F\2\2\u00d2\u00d3\7K\2\2\u00d3"+
		"\u00d4\7X\2\2\u00d4\24\3\2\2\2\u00d5\u00d6\7F\2\2\u00d6\u00d7\7Q\2\2\u00d7"+
		"\26\3\2\2\2\u00d8\u00d9\7F\2\2\u00d9\u00da\7Q\2\2\u00da\u00db\7Y\2\2\u00db"+
		"\u00dc\7P\2\2\u00dc\u00dd\7V\2\2\u00dd\u00de\7Q\2\2\u00de\30\3\2\2\2\u00df"+
		"\u00e0\7G\2\2\u00e0\u00e1\7N\2\2\u00e1\u00e2\7U\2\2\u00e2\u00e3\7G\2\2"+
		"\u00e3\32\3\2\2\2\u00e4\u00e5\7G\2\2\u00e5\u00e6\7P\2\2\u00e6\u00e7\7"+
		"F\2\2\u00e7\34\3\2\2\2\u00e8\u00e9\7H\2\2\u00e9\u00ea\7K\2\2\u00ea\u00eb"+
		"\7N\2\2\u00eb\u00ec\7G\2\2\u00ec\36\3\2\2\2\u00ed\u00ee\7H\2\2\u00ee\u00ef"+
		"\7Q\2\2\u00ef\u00f0\7T\2\2\u00f0 \3\2\2\2\u00f1\u00f2\7H\2\2\u00f2\u00f3"+
		"\7W\2\2\u00f3\u00f4\7P\2\2\u00f4\u00f5\7E\2\2\u00f5\u00f6\7V\2\2\u00f6"+
		"\u00f7\7K\2\2\u00f7\u00f8\7Q\2\2\u00f8\u00f9\7P\2\2\u00f9\"\3\2\2\2\u00fa"+
		"\u00fb\7I\2\2\u00fb\u00fc\7Q\2\2\u00fc\u00fd\7V\2\2\u00fd\u00fe\7Q\2\2"+
		"\u00fe$\3\2\2\2\u00ff\u0100\7K\2\2\u0100\u0101\7H\2\2\u0101&\3\2\2\2\u0102"+
		"\u0103\7K\2\2\u0103\u0104\7P\2\2\u0104(\3\2\2\2\u0105\u0106\7K\2\2\u0106"+
		"\u0107\7P\2\2\u0107\u0108\7V\2\2\u0108\u0109\7G\2\2\u0109\u010a\7I\2\2"+
		"\u010a\u010b\7G\2\2\u010b\u010c\7T\2\2\u010c*\3\2\2\2\u010d\u010e\7N\2"+
		"\2\u010e\u010f\7C\2\2\u010f\u0110\7D\2\2\u0110\u0111\7G\2\2\u0111\u0112"+
		"\7N\2\2\u0112,\3\2\2\2\u0113\u0114\7O\2\2\u0114\u0115\7Q\2\2\u0115\u0116"+
		"\7F\2\2\u0116.\3\2\2\2\u0117\u0118\7P\2\2\u0118\u0119\7K\2\2\u0119\u011a"+
		"\7N\2\2\u011a\60\3\2\2\2\u011b\u011c\7P\2\2\u011c\u011d\7Q\2\2\u011d\u011e"+
		"\7V\2\2\u011e\62\3\2\2\2\u011f\u0120\7Q\2\2\u0120\u0121\7H\2\2\u0121\64"+
		"\3\2\2\2\u0122\u0123\7Q\2\2\u0123\u0124\7T\2\2\u0124\66\3\2\2\2\u0125"+
		"\u0126\7R\2\2\u0126\u0127\7C\2\2\u0127\u0128\7E\2\2\u0128\u0129\7M\2\2"+
		"\u0129\u012a\7G\2\2\u012a\u012b\7F\2\2\u012b8\3\2\2\2\u012c\u012d\7R\2"+
		"\2\u012d\u012e\7T\2\2\u012e\u012f\7Q\2\2\u012f\u0130\7E\2\2\u0130\u0131"+
		"\7G\2\2\u0131\u0132\7F\2\2\u0132\u0133\7W\2\2\u0133\u0134\7T\2\2\u0134"+
		"\u0135\7G\2\2\u0135:\3\2\2\2\u0136\u0137\7R\2\2\u0137\u0138\7T\2\2\u0138"+
		"\u0139\7Q\2\2\u0139\u013a\7I\2\2\u013a\u013b\7T\2\2\u013b\u013c\7C\2\2"+
		"\u013c\u013d\7O\2\2\u013d<\3\2\2\2\u013e\u013f\7T\2\2\u013f\u0140\7G\2"+
		"\2\u0140\u0141\7C\2\2\u0141\u0142\7N\2\2\u0142>\3\2\2\2\u0143\u0144\7"+
		"T\2\2\u0144\u0145\7G\2\2\u0145\u0146\7E\2\2\u0146\u0147\7Q\2\2\u0147\u0148"+
		"\7T\2\2\u0148\u0149\7F\2\2\u0149@\3\2\2\2\u014a\u014b\7T\2\2\u014b\u014c"+
		"\7G\2\2\u014c\u014d\7R\2\2\u014d\u014e\7G\2\2\u014e\u014f\7C\2\2\u014f"+
		"\u0150\7V\2\2\u0150B\3\2\2\2\u0151\u0152\7U\2\2\u0152\u0153\7G\2\2\u0153"+
		"\u0154\7V\2\2\u0154D\3\2\2\2\u0155\u0156\7V\2\2\u0156\u0157\7J\2\2\u0157"+
		"\u0158\7G\2\2\u0158\u0159\7P\2\2\u0159F\3\2\2\2\u015a\u015b\7V\2\2\u015b"+
		"\u015c\7Q\2\2\u015cH\3\2\2\2\u015d\u015e\7V\2\2\u015e\u015f\7[\2\2\u015f"+
		"\u0160\7R\2\2\u0160\u0161\7G\2\2\u0161J\3\2\2\2\u0162\u0163\7W\2\2\u0163"+
		"\u0164\7P\2\2\u0164\u0165\7V\2\2\u0165\u0166\7K\2\2\u0166\u0167\7N\2\2"+
		"\u0167L\3\2\2\2\u0168\u0169\7X\2\2\u0169\u016a\7C\2\2\u016a\u016b\7T\2"+
		"\2\u016bN\3\2\2\2\u016c\u016d\7Y\2\2\u016d\u016e\7J\2\2\u016e\u016f\7"+
		"K\2\2\u016f\u0170\7N\2\2\u0170\u0171\7G\2\2\u0171P\3\2\2\2\u0172\u0173"+
		"\7Y\2\2\u0173\u0174\7K\2\2\u0174\u0175\7V\2\2\u0175\u0176\7J\2\2\u0176"+
		"R\3\2\2\2\u0177\u0178\7-\2\2\u0178T\3\2\2\2\u0179\u017a\7/\2\2\u017aV"+
		"\3\2\2\2\u017b\u017c\7,\2\2\u017cX\3\2\2\2\u017d\u017e\7\61\2\2\u017e"+
		"Z\3\2\2\2\u017f\u0180\7<\2\2\u0180\u0181\7?\2\2\u0181\\\3\2\2\2\u0182"+
		"\u0183\7.\2\2\u0183^\3\2\2\2\u0184\u0185\7=\2\2\u0185`\3\2\2\2\u0186\u0187"+
		"\7<\2\2\u0187b\3\2\2\2\u0188\u0189\7?\2\2\u0189d\3\2\2\2\u018a\u018b\7"+
		">\2\2\u018b\u018c\7@\2\2\u018cf\3\2\2\2\u018d\u018e\7>\2\2\u018eh\3\2"+
		"\2\2\u018f\u0190\7>\2\2\u0190\u0191\7?\2\2\u0191j\3\2\2\2\u0192\u0193"+
		"\7@\2\2\u0193\u0194\7?\2\2\u0194l\3\2\2\2\u0195\u0196\7@\2\2\u0196n\3"+
		"\2\2\2\u0197\u0198\7*\2\2\u0198p\3\2\2\2\u0199\u019a\7+\2\2\u019ar\3\2"+
		"\2\2\u019b\u019c\7]\2\2\u019ct\3\2\2\2\u019d\u019e\7*\2\2\u019e\u019f"+
		"\7\60\2\2\u019fv\3\2\2\2\u01a0\u01a1\7_\2\2\u01a1x\3\2\2\2\u01a2\u01a3"+
		"\7\60\2\2\u01a3\u01a4\7+\2\2\u01a4z\3\2\2\2\u01a5\u01a6\7`\2\2\u01a6|"+
		"\3\2\2\2\u01a7\u01a8\7B\2\2\u01a8~\3\2\2\2\u01a9\u01aa\7\60\2\2\u01aa"+
		"\u0080\3\2\2\2\u01ab\u01ac\7\60\2\2\u01ac\u01ad\7\60\2\2\u01ad\u0082\3"+
		"\2\2\2\u01ae\u01af\7}\2\2\u01af\u0084\3\2\2\2\u01b0\u01b1\7\177\2\2\u01b1"+
		"\u0086\3\2\2\2\u01b2\u01b3\7W\2\2\u01b3\u01b4\7P\2\2\u01b4\u01b5\7K\2"+
		"\2\u01b5\u01b6\7V\2\2\u01b6\u0088\3\2\2\2\u01b7\u01b8\7K\2\2\u01b8\u01b9"+
		"\7P\2\2\u01b9\u01ba\7V\2\2\u01ba\u01bb\7G\2\2\u01bb\u01bc\7T\2\2\u01bc"+
		"\u01bd\7H\2\2\u01bd\u01be\7C\2\2\u01be\u01bf\7E\2\2\u01bf\u01c0\7G\2\2"+
		"\u01c0\u008a\3\2\2\2\u01c1\u01c2\7W\2\2\u01c2\u01c3\7U\2\2\u01c3\u01c4"+
		"\7G\2\2\u01c4\u01c5\7U\2\2\u01c5\u008c\3\2\2\2\u01c6\u01c7\7U\2\2\u01c7"+
		"\u01c8\7V\2\2\u01c8\u01c9\7T\2\2\u01c9\u01ca\7K\2\2\u01ca\u01cb\7P\2\2"+
		"\u01cb\u01cc\7I\2\2\u01cc\u008e\3\2\2\2\u01cd\u01ce\7K\2\2\u01ce\u01cf"+
		"\7O\2\2\u01cf\u01d0\7R\2\2\u01d0\u01d1\7N\2\2\u01d1\u01d2\7G\2\2\u01d2"+
		"\u01d3\7O\2\2\u01d3\u01d4\7G\2\2\u01d4\u01d5\7P\2\2\u01d5\u01d6\7V\2\2"+
		"\u01d6\u01d7\7C\2\2\u01d7\u01d8\7V\2\2\u01d8\u01d9\7K\2\2\u01d9\u01da"+
		"\7Q\2\2\u01da\u01db\7P\2\2\u01db\u0090\3\2\2\2\u01dc\u01dd\7V\2\2\u01dd"+
		"\u01de\7T\2\2\u01de\u01df\7W\2\2\u01df\u01e0\7G\2\2\u01e0\u0092\3\2\2"+
		"\2\u01e1\u01e2\7H\2\2\u01e2\u01e3\7C\2\2\u01e3\u01e4\7N\2\2\u01e4\u01e5"+
		"\7U\2\2\u01e5\u01e6\7G\2\2\u01e6\u0094\3\2\2\2\u01e7\u01e8\t\2\2\2\u01e8"+
		"\u01e9\3\2\2\2\u01e9\u01ea\bK\2\2\u01ea\u0096\3\2\2\2\u01eb\u01ec\7*\2"+
		"\2\u01ec\u01ed\7,\2\2\u01ed\u01f1\3\2\2\2\u01ee\u01f0\13\2\2\2\u01ef\u01ee"+
		"\3\2\2\2\u01f0\u01f3\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f1\u01ef\3\2\2\2\u01f2"+
		"\u01f4\3\2\2\2\u01f3\u01f1\3\2\2\2\u01f4\u01f5\7,\2\2\u01f5\u01f6\7+\2"+
		"\2\u01f6\u01f7\3\2\2\2\u01f7\u01f8\bL\2\2\u01f8\u0098\3\2\2\2\u01f9\u01fd"+
		"\7}\2\2\u01fa\u01fc\13\2\2\2\u01fb\u01fa\3\2\2\2\u01fc\u01ff\3\2\2\2\u01fd"+
		"\u01fe\3\2\2\2\u01fd\u01fb\3\2\2\2\u01fe\u0200\3\2\2\2\u01ff\u01fd\3\2"+
		"\2\2\u0200\u0201\7\177\2\2\u0201\u0202\3\2\2\2\u0202\u0203\bM\2\2\u0203"+
		"\u009a\3\2\2\2\u0204\u0208\4C\\\2\u0205\u0207\t\3\2\2\u0206\u0205\3\2"+
		"\2\2\u0207\u020a\3\2\2\2\u0208\u0206\3\2\2\2\u0208\u0209\3\2\2\2\u0209"+
		"\u009c\3\2\2\2\u020a\u0208\3\2\2\2\u020b\u0211\7)\2\2\u020c\u020d\7)\2"+
		"\2\u020d\u0210\7)\2\2\u020e\u0210\n\4\2\2\u020f\u020c\3\2\2\2\u020f\u020e"+
		"\3\2\2\2\u0210\u0213\3\2\2\2\u0211\u020f\3\2\2\2\u0211\u0212\3\2\2\2\u0212"+
		"\u0214\3\2\2\2\u0213\u0211\3\2\2\2\u0214\u0215\7)\2\2\u0215\u009e\3\2"+
		"\2\2\u0216\u0218\4\62;\2\u0217\u0216\3\2\2\2\u0218\u0219\3\2\2\2\u0219"+
		"\u0217\3\2\2\2\u0219\u021a\3\2\2\2\u021a\u00a0\3\2\2\2\u021b\u021d\4\62"+
		";\2\u021c\u021b\3\2\2\2\u021d\u021e\3\2\2\2\u021e\u021c\3\2\2\2\u021e"+
		"\u021f\3\2\2\2\u021f\u022c\3\2\2\2\u0220\u0222\7\60\2\2\u0221\u0223\4"+
		"\62;\2\u0222\u0221\3\2\2\2\u0223\u0224\3\2\2\2\u0224\u0222\3\2\2\2\u0224"+
		"\u0225\3\2\2\2\u0225\u0227\3\2\2\2\u0226\u0228\5\u00a3R\2\u0227\u0226"+
		"\3\2\2\2\u0227\u0228\3\2\2\2\u0228\u022a\3\2\2\2\u0229\u0220\3\2\2\2\u0229"+
		"\u022a\3\2\2\2\u022a\u022d\3\2\2\2\u022b\u022d\5\u00a3R\2\u022c\u0229"+
		"\3\2\2\2\u022c\u022b\3\2\2\2\u022d\u00a2\3\2\2\2\u022e\u0230\7G\2\2\u022f"+
		"\u0231\t\5\2\2\u0230\u022f\3\2\2\2\u0230\u0231\3\2\2\2\u0231\u0233\3\2"+
		"\2\2\u0232\u0234\4\62;\2\u0233\u0232\3\2\2\2\u0234\u0235\3\2\2\2\u0235"+
		"\u0233\3\2\2\2\u0235\u0236\3\2\2\2\u0236\u00a4\3\2\2\2\20\2\u01f1\u01fd"+
		"\u0208\u020f\u0211\u0219\u021e\u0224\u0227\u0229\u022c\u0230\u0235\3\b"+
		"\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}