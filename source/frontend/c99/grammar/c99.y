/*
 * ANSI C Yacc grammar
 * 
 * (This Yacc file is accompanied by a matching Lex file.)
 * 
 * In 1985, Jeff Lee published his Yacc grammar based on a draft version of the ANSI C standard, 
 * along with a supporting Lex specification. Tom Stockfisch reposted those files to net.sources 
 * in 1987; as mentioned in the answer to question 17.25 of the comp.lang.c FAQ, they used to 
 * be available from ftp.uu.net as usenet/net.sources/ansi.c.grammar.Z.
 * 
 * The version you see here has been updated based on the 2011 ISO C standard. 
 * (The previous version's Lex and Yacc files for ANSI C9X still exist as archived copies.)
 * 
 * This grammar assumes that translation phases 1..5 have already been completed, including 
 * preprocessing and _Pragma processing. The Lex rule for string literals will perform 
 * concatenation (translation phase 6). Transliteration of universal character names (\uHHHH 
 * or \UHHHHHHHH) must have been done by either the preprocessor or a replacement for the 
 * input() macro used by Lex (or the YY_INPUT function used by Flex) to read characters. 
 * Although comments should have been changed to space characters during translation phase 3, 
 * there are Lex rules for them anyway.
 * 
 * I want to keep this version as close to the current C Standard grammar as possible; 
 * please let me know if you discover discrepancies.
 * (There is an FAQ for this grammar that you might want to read first.)
 * 
 * jutta@pobox.com, 2012
 * 
 * Last edit: 2012-12-18 DAGwyn@aol.com
 * 
 * Note: There are two shift/reduce conflicts, correctly resolved by default:
 * 
 *   IF '(' expression ')' statement _ ELSE statement
 * 
 * and
 * 
 *   ATOMIC _ '(' type_name ')'
 * 
 * where "_" has been used to flag the points of ambiguity.
 */



%token  IDENTIFIER I_CONSTANT F_CONSTANT STRING_LITERAL FUNC_NAME SIZEOF
%token  PTR_OP INC_OP DEC_OP LEFT_OP RIGHT_OP LE_OP GE_OP EQ_OP NE_OP
%token  AND_OP OR_OP MUL_ASSIGN DIV_ASSIGN MOD_ASSIGN ADD_ASSIGN
%token  SUB_ASSIGN LEFT_ASSIGN RIGHT_ASSIGN AND_ASSIGN
%token  XOR_ASSIGN OR_ASSIGN
%token  TYPEDEF_NAME ENUMERATION_CONSTANT

%token  TYPEDEF EXTERN STATIC AUTO REGISTER INLINE
%token  CONST RESTRICT VOLATILE
%token  BOOL CHAR SHORT INT LONG SIGNED UNSIGNED FLOAT DOUBLE VOID
%token  COMPLEX IMAGINARY 
%token  STRUCT UNION ENUM ELLIPSIS

%token  CASE DEFAULT IF ELSE SWITCH WHILE DO FOR GOTO CONTINUE BREAK RETURN

%token  ALIGNAS ALIGNOF ATOMIC GENERIC NORETURN STATIC_ASSERT THREAD_LOCAL

%start module

%{


const R = require ('@parsetree/nodes').R;
const T = require ('@parsetree/nodes').T;
%}

%%

primary_expression: 
    IDENTIFIER { $$ = R ('primary_expression', $1);}
    | constant { $$ = R ('primary_expression', $1);}
    | string { $$ = R ('primary_expression', $1);}
    | '(' expression ')' { $$ = R ('primary_expression', $2);}
    | generic_selection { $$ = R ('primary_expression', $1);}
    ;

constant: 
    I_CONSTANT    { $$ = R ('constant', $1);}     /* includes character_constant */
    | F_CONSTANT  { $$ = R ('constant', $1);}
    | ENUMERATION_CONSTANT { $$ = R ('constant', $1);}  /* after it has been defined as such */
    ;

enumeration_constant:        /* before it has been defined as such */
    IDENTIFIER { $$ = R ('enumeration_constant', $1);}
    ;

string: 
    STRING_LITERAL { $$ = R ('string', T ('STRING_LITERAL', $1));}
    | FUNC_NAME { $$ = R ('string', T ('FUNC_NAME', $1));}
    ;

generic_selection: 
    GENERIC '(' assignment_expression ',' generic_assoc_list ')' { R ('generic_selection', T ('GENRIC', $1), T ($2), $3, T ($4), $5, T ($6)); }
    ;

generic_assoc_list: 
    generic_association { $$ = R ('generic_assoc_list', $1);}
    | generic_assoc_list ',' generic_association { $$ = R ('generic_assoc_list', $1, T ($2), $3); }
    ;

generic_association: 
    type_name ':' assignment_expression { $$ = R ('generic_association', $1, T ($2), $3); }
    | DEFAULT ':' assignment_expression { $$ = R ('generic_association', T ('DEFAULT', $1), T ($2), $3); }
    ;

postfix_expression: 
    primary_expression
    | postfix_expression '[' expression ']'
    | postfix_expression '(' ')'
    | postfix_expression '(' argument_expression_list ')'
    | postfix_expression '.' IDENTIFIER
    | postfix_expression PTR_OP IDENTIFIER
    | postfix_expression INC_OP
    | postfix_expression DEC_OP
    | '(' type_name ')' '{' initializer_list '}'
    | '(' type_name ')' '{' initializer_list ',' '}'
    ;

argument_expression_list: 
    assignment_expression
    | argument_expression_list ',' assignment_expression
    ;

unary_expression: 
    postfix_expression
    | INC_OP unary_expression 
    | DEC_OP unary_expression 
    | unary_operator cast_expression 
    | SIZEOF unary_expression 
    | SIZEOF '(' type_name ')'
    | ALIGNOF '(' type_name ')'
    ;

unary_operator: 
    '&' 
    | '*' { $$ = UnaryExpressionOperator.DEFERENCE; }
    | '+'
    | '-' { $$ = UnaryExpressionOperator.NEGATIVE; }
    | '~'
    | '!' { $$ = UnaryExpressionOperator.NOT; }
    ;

cast_expression: 
    unary_expression
    | '(' type_name ')' cast_expression 
    ;

multiplicative_expression: 
    cast_expression
    | multiplicative_expression '*' cast_expression
    | multiplicative_expression '/' cast_expression
    | multiplicative_expression '%' cast_expression
    ;

additive_expression: 
    multiplicative_expression
    | additive_expression '+' multiplicative_expression
    | additive_expression '-' multiplicative_expression
    ;

shift_expression: 
    additive_expression
    | shift_expression LEFT_OP additive_expression
    | shift_expression RIGHT_OP additive_expression
    ;

relational_expression: 
    shift_expression
    | relational_expression '<' shift_expression
    | relational_expression '>' shift_expression
    | relational_expression LE_OP shift_expression
    | relational_expression GE_OP shift_expression
    ;

equality_expression: 
    relational_expression
    | equality_expression EQ_OP relational_expression
    | equality_expression NE_OP relational_expression
    ;

and_expression: 
    equality_expression
    | and_expression '&' equality_expression
    ;

exclusive_or_expression: 
    and_expression
    | exclusive_or_expression '^' and_expression
    ;

inclusive_or_expression
    : exclusive_or_expression
    | inclusive_or_expression '|' exclusive_or_expression
    ;

logical_and_expression: 
    inclusive_or_expression
    | logical_and_expression AND_OP inclusive_or_expression
    ;

logical_or_expression: 
    logical_and_expression
    | logical_or_expression OR_OP logical_and_expression
    ;

conditional_expression: 
    logical_or_expression
    | logical_or_expression '?' expression ':' conditional_expression
    ;

assignment_expression: 
    conditional_expression
    | unary_expression assignment_operator assignment_expression
    ;

assignment_operator: 
    '='
    | MUL_ASSIGN
    | DIV_ASSIGN
    | MOD_ASSIGN
    | ADD_ASSIGN
    | SUB_ASSIGN
    | LEFT_ASSIGN
    | RIGHT_ASSIGN
    | AND_ASSIGN
    | XOR_ASSIGN
    | OR_ASSIGN
    ;

expression: 
    assignment_expression 
    | expression ',' assignment_expression 
    ;

constant_expression: 
    conditional_expression    /* with constraints */
    ;

declaration: 
    declaration_specifiers ';' { $$ = R ('declaration', $1, T ($2));}
    | declaration_specifiers init_declarator_list ';' { $$ = R ('declaration', $1, $2, T ($3));}
    | static_assert_declaration { $$ = R ('declaration', $1);}
    ;

declaration_specifiers: 
    storage_class_specifier declaration_specifiers
    | storage_class_specifier
    | type_specifier declaration_specifiers
    | type_specifier
    | type_qualifier declaration_specifiers
    | type_qualifier
    | function_specifier declaration_specifiers
    | function_specifier
    | alignment_specifier declaration_specifiers
    | alignment_specifier
    ;

init_declarator_list: 
    init_declarator
    | init_declarator_list ',' init_declarator
    ;

init_declarator: 
    declarator '=' initializer
    | declarator
    ;

storage_class_specifier: 
    TYPEDEF   /* identifiers must be flagged as TYPEDEF_NAME */
    | EXTERN
    | STATIC
    | THREAD_LOCAL
    | AUTO
    | REGISTER
    ;

type_specifier: 
    VOID { $$ = R ('type_specifier', T ('VOID', $1));}
    | CHAR { $$ = R ('type_specifier', T ('CHAR', $1));}
    | SHORT { $$ = R ('type_specifier', T ('SHORT', $1));}
    | INT { $$ = R ('type_specifier', T ('INT', $1));}
    | LONG { $$ = R ('type_specifier', T ('LONG', $1));}
    | FLOAT { $$ = R ('type_specifier', T ('FLOAT', $1));}
    | DOUBLE { $$ = R ('type_specifier', T ('DOUBLE', $1));}
    | SIGNED { $$ = R ('type_specifier', T ('SIGNED', $1));}
    | UNSIGNED { $$ = R ('type_specifier', T ('UNSIGNED', $1));}
    | BOOL { $$ = R ('type_specifier', T ('BOOL', $1));}
    | COMPLEX { $$ = R ('type_specifier', T ('COMPLEX', $1));}
    | IMAGINARY { $$ = R ('type_specifier', T ('IMAGINARY', $1));}    /* non-mandated extension */
    | atomic_type_specifier { $$ = R ('type_specifier', $1);}
    | struct_or_union_specifier { $$ = R ('type_specifier', $1);}
    | enum_specifier { $$ = R ('type_specifier', $1);}
    | TYPEDEF_NAME { $$ = R ('type_specifier', T ('TYPEDEF_NAME', $1));}     /* after it has been defined as such */
    ;

struct_or_union_specifier: 
    struct_or_union '{' struct_declaration_list '}' { R ('struct_or_union_specifier', $1, T ($2), $3, T ($4)); }
    | struct_or_union IDENTIFIER '{' struct_declaration_list '}' { R ('struct_or_union_specifier', $1, T ('IDENTIFIER', $2), T ($3), $4, T ($5)); }
    | struct_or_union IDENTIFIER { R ('struct_or_union_specifier', $1, T ('IDENTIFIER', $2)); }
    ;

struct_or_union: 
    STRUCT { R ('struct_or_union', T ('STRUCT', $1)); }
    | UNION { R ('struct_or_union', T ('UNION', $1)); }
    ;

struct_declaration_list: 
    struct_declaration { R ('struct_declaration_list', $1); }
    | struct_declaration_list struct_declaration { R ('struct_declaration_list', $1, $2); }
    ;

struct_declaration: 
    specifier_qualifier_list ';' { R ('struct_declaration', $1, T ($2)); }  /* for anonymous struct/union */
    | specifier_qualifier_list struct_declarator_list ';' { R ('struct_declaration', $1, $2, T ($3)); }
    | static_assert_declaration { R ('struct_declaration', $1); }
    ;

specifier_qualifier_list: 
    type_specifier specifier_qualifier_list { R ('specifier_qualifier_list', $1, $2); }
    | type_specifier { R ('specifier_qualifier_list', $1); }
    | type_qualifier specifier_qualifier_list { R ('specifier_qualifier_list', $1, $2); }
    | type_qualifier { R ('specifier_qualifier_list', $1); }
    ;

struct_declarator_list: 
    struct_declarator { R ('struct_declarator_list', $1); }
    | struct_declarator_list ',' struct_declarator { R ('struct_declarator_list', $1, T ($2), $3); }
    ;

struct_declarator: 
    ':' constant_expression { R ('struct_declarator', T ($1), $2); }
    | declarator ':' constant_expression { R ('struct_declarator', $1, T ($2), $3); }
    | declarator { R ('struct_declarator', $1); }
    ;

enum_specifier: 
    ENUM '{' enumerator_list '}' { R ('enum_specifier', T ('ENUM', $1), T ($2), $3, T ($4)); }
    | ENUM '{' enumerator_list ',' '}' { R ('enum_specifier', T ('ENUM', $1), T ($2), $3, T ($4), T ($5)); }
    | ENUM IDENTIFIER '{' enumerator_list '}' { R ('enum_specifier', T ('ENUM', $1), T ('IDENTIFIER', $2), T ($3), $4, T ($5)); }
    | ENUM IDENTIFIER '{' enumerator_list ',' '}' { R ('enum_specifier', T ('ENUM', $1), T ('IDENTIFIER', $2), T ($3), $4, T ($5), T ($6)); }
    | ENUM IDENTIFIER { R ('enum_specifier', T ('ENUM', $1), T ('IDENTIFIER', $2)); }
    ;

enumerator_list: 
    enumerator { R ('enumerator_list', $1); }
    | enumerator_list ',' enumerator { R ('enumerator_list', $1, T ($2), $3); }
    ;

enumerator:  /* identifiers must be flagged as ENUMERATION_CONSTANT */
    enumeration_constant '=' constant_expression { R ('enumerator', $1, T ($2), $3); }
    | enumeration_constant { R ('enumerator', $1); }
    ;

atomic_type_specifier: 
    ATOMIC '(' type_name ')' { R ('atomic_type_specifier', T ('ATOMIC', $1), T ($2), $3, T ($4)); }
    ;

type_qualifier: 
    CONST { R ('type_qualifier', T ('CONST', $1)); }
    | RESTRICT { R ('type_qualifier', T ('RESTRICT', $1)); }
    | VOLATILE { R ('type_qualifier', T ('VOLATILE', $1)); }
    | ATOMIC { R ('type_qualifier', T ('ATOMIC', $1)); }
    ;

function_specifier: 
    INLINE { R ('function_specifier', T ('INLINE', $1)); }
    | NORETURN { R ('function_specifier', T ('NORETURN', $1)); }
    ;

alignment_specifier: 
    ALIGNAS '(' type_name ')' { R ('alignment_specifier', T ('ALIGNAS', $1), T ($2), $3, T ($4)); }
    | ALIGNAS '(' constant_expression ')' { R ('alignment_specifier', T ('ALIGNAS', $1), T ($2), $3, T ($4)); }
    ;

declarator: 
    pointer direct_declarator { $$ = R ('declarator', $1, $2);}
    | direct_declarator { $$ = R ('declarator', $1);}
    ;

direct_declarator: 
    IDENTIFIER { $$ = R ('direct_declarator', T ('IDENTIFIER', $1));}
    | '(' declarator ')' { $$ = R ('direct_declarator', T ($1), $2, T ($3));}
    | direct_declarator '[' ']' { $$ = R ('direct_declarator', $1, T ($2), T($3));}
    | direct_declarator '[' '*' ']' { $$ = R ('direct_declarator', $1, T ($2), T($3), T($4));}
    | direct_declarator '[' STATIC type_qualifier_list assignment_expression ']' { $$ = R ('direct_declarator', $1, T ($2), T('STATIC', $3), $4, $5, T($6));}
    | direct_declarator '[' STATIC assignment_expression ']' { $$ = R ('direct_declarator', T ($1), T('STATIC', $2), $3, T($5));}
    | direct_declarator '[' type_qualifier_list '*' ']' { $$ = R ('direct_declarator', $1, T ($2), $3, $4, T ($5));}
    | direct_declarator '[' type_qualifier_list STATIC assignment_expression ']' { $$ = R ('direct_declarator', $1, T ($2), $3, T ('STATIC', $4), T($5), T($6));}
    | direct_declarator '[' type_qualifier_list assignment_expression ']' { $$ = R ('direct_declarator', $1, T ($2), $3, $4, T($5));}
    | direct_declarator '[' type_qualifier_list ']' { $$ = R ('direct_declarator', $1, T ($2), $3, T($4));}
    | direct_declarator '[' assignment_expression ']' { $$ = R ('direct_declarator', $1, T ($2), $3, T($4));}
    | direct_declarator '(' parameter_type_list ')' { $$ = R ('direct_declarator', $1, T ($2), $3, T($4));}
    | direct_declarator '(' ')' { $$ = R ('direct_declarator', $1, T ($2), T($3));}
    | direct_declarator '(' identifier_list ')' { $$ = R ('direct_declarator', $1, T ($2), $3, T($4));}
    ;

pointer: 
    '*' type_qualifier_list pointer { $$ = R ('pointer', T ($1), $2, $3);}
    | '*' type_qualifier_list { $$ = R ('pointer', T ($1), $2);}
    | '*' pointer { $$ = R ('pointer', T1 ($1), $2);}
    | '*' { $$ = R ('pointer', T ($1));}
    ;

type_qualifier_list: 
    type_qualifier { $$ = R ('type_qualifier_list', $1);}
    | type_qualifier_list type_qualifier { $$ = R ('type_qualifier_list', $1, $2);}
    ;


parameter_type_list: 
    parameter_list ',' ELLIPSIS { $$ = R ('parameter_type_list', $1, T($2), T('ELLIPSIS', $3));}
    | parameter_list { $$ = R ('parameter_type_list', $1);}
    ;

parameter_list: 
    parameter_declaration { $$ = R ('parameter_list', $1);}
    | parameter_list ',' parameter_declaration { $$ = R ('parameter_list', $1, T($2), $3);}
    ;

parameter_declaration: 
    declaration_specifiers declarator { $$ = R ('parameter_declaration', $1, $2);}
    | declaration_specifiers abstract_declarator { $$ = R ('parameter_declaration', $1, $2);}
    | declaration_specifiers { $$ = R ('parameter_declaration', $1);}
    ;

identifier_list: 
    IDENTIFIER { $$ = R ('identifier_list', T ('IDENTIFIER', $1));}
    | identifier_list ',' IDENTIFIER { $$ = R ('identifier_list', $1, T ($2), T ('IDENTIFIER', $3));}
    ;

type_name: 
    specifier_qualifier_list abstract_declarator { $$ = R ('type_name', $1, $2);}
    | specifier_qualifier_list { $$ = R ('type_name', $1);}
    ;

abstract_declarator: 
    pointer direct_abstract_declarator { $$ = R ('abstract_declarator', $1, $2);}
    | pointer { $$ = R ('abstract_declarator', $1);}
    | direct_abstract_declarator { $$ = R ('abstract_declarator', $1);}
    ;

direct_abstract_declarator: 
    '(' abstract_declarator ')' { $$ = R ('direct_abstract_declarator', T ($1), $2, T ($3));}
    | '[' ']' { $$ = R ('direct_abstract_declarator', T ($1), T ($2));}
    | '[' '*' ']' { $$ = R ('direct_abstract_declarator', T ($1), T ($2), T ($3));}
    | '[' STATIC type_qualifier_list assignment_expression ']' { $$ = R ('direct_abstract_declarator', T ($1), T ('STATIC', $2), $3, $4, T ($5));}
    | '[' STATIC assignment_expression ']' { $$ = R ('direct_abstract_declarator', T ($1), T ('STATIC', $2), $3, T ($4));}
    | '[' type_qualifier_list STATIC assignment_expression ']' { $$ = R ('direct_abstract_declarator', T ($1), $2, T ('STATIC', $3), $4, T ($5));}
    | '[' type_qualifier_list assignment_expression ']' { $$ = R ('direct_abstract_declarator', T ($1), $2, $3, T ($4));}
    | '[' type_qualifier_list ']' { $$ = R ('direct_abstract_declarator', T ($1), $2, T ($3));}
    | '[' assignment_expression ']' { $$ = R ('direct_abstract_declarator', T ($1), $2, T ($3));}
    | direct_abstract_declarator '[' ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), T ($3));}
    | direct_abstract_declarator '[' '*' ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), T ($3), T ($4));}
    | direct_abstract_declarator '[' STATIC type_qualifier_list assignment_expression ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), T ('STATIC', $3), $4, $5, T ($6));}
    | direct_abstract_declarator '[' STATIC assignment_expression ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), T ('STATIC', $3), $4, T ($5));}
    | direct_abstract_declarator '[' type_qualifier_list assignment_expression ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), T ('STATIC', $3), $4, T ($5));}
    | direct_abstract_declarator '[' type_qualifier_list STATIC assignment_expression ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), $3, $ ('STATIC', $4), $5, T ($6));}
    | direct_abstract_declarator '[' type_qualifier_list ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), $3, T ($4));}
    | direct_abstract_declarator '[' assignment_expression ']' { $$ = R ('direct_abstract_declarator', $1, T ($2), $3, T ($4));}
    | '(' ')' { $$ = R ('direct_abstract_declarator', T ($1), T ($2));}
    | '(' parameter_type_list ')' { $$ = R ('direct_abstract_declarator', T ($1), $2, T ($3));}
    | direct_abstract_declarator '(' ')' { $$ = R ('direct_abstract_declarator', $1, T ($2), T ($3));}
    | direct_abstract_declarator '(' parameter_type_list ')' { $$ = R ('direct_abstract_declarator', $1, T ($2), $3, T ($4));}
    ;

initializer: 
    '{' initializer_list '}' { $$ = R ('initializer', T ($1), $2, T ($3));}
    | '{' initializer_list ',' '}' { $$ = R ('initializer', T ($1), $2, T ($3), T ($4));}
    | assignment_expression { $$ = R ('initializer', $1);}
    ;

initializer_list: 
    designation initializer { $$ = R ('initializer_list', $1, $2);}
    | initializer { $$ = R ('initializer_list', $1);}
    | initializer_list ',' designation initializer { $$ = R ('initializer_list', $1, T ($2), $3); }
    | initializer_list ',' initializer { $$ = R ('initializer_list', $1, T ($2), $3); }
    ;

designation: 
    designator_list '=' { $$ = R ('designation', $1, T ($2)); }
    ;

designator_list: 
    designator { $$ = R ('designator_list', $1); }
    | designator_list designator { $$ = R ('designator_list', $1, $2); } 
    ;

designator: 
    '[' constant_expression ']' { $$ = R ('designator', T ($1), $2, T ($3)); }
    | '.' IDENTIFIER { $$ = R ('designator', T ($1), T ('IDENTIFIER', $2)); }
    ;

static_assert_declaration: 
    STATIC_ASSERT '(' constant_expression ',' STRING_LITERAL ')' ';' { $$ = R ('static_assert_declaration', T ('STATIC_ASSERT', $1), T ($2), $3, T ($4), T ('STRING_LITERAL', $5), T ($6), T ($7)); }
    ;

statement: 
    labeled_statement { $$ = R ('statement', $1); }
    | compound_statement { $$ = R ('statement', $1); }
    | expression_statement { $$ = R ('statement', $1); }
    | selection_statement { $$ = R ('statement', $1); }
    | iteration_statement { $$ = R ('statement', $1); }
    | jump_statement { $$ = R ('statement', $1); }
    ;

labeled_statement: 
    IDENTIFIER ':' statement { $$ = R ('labeled_statement', T ('IDENTIFIER', $1), T ($2), $3); }
    | CASE constant_expression ':' statement { $$ = R ('labeled_statement', T ('CASE', $1), $2, T ($3), $4); }
    | DEFAULT ':' statement { $$ = R ('labeled_statement', T ('DEFAULT', $1), T ($2), $3); }
    ;

compound_statement: 
    '{' '}' { $$ = R ('compound_statement', T ($1), T ($2)); }
    | '{'  block_item_list '}' { $$ = R ('compound_statement', T ($1), $2, T ($3)); }
    ;

block_item_list: 
    block_item { $$ = R ('block_item_list', $1); }
    | block_item_list block_item { $$ = R ('block_item_list', $1, $2); }
    ;

block_item: 
    declaration { $$ = R ('block_item', $1); }
    | statement { $$ = R ('block_item', $1); }
    ;

expression_statement: 
    ';' { $$ = R ('expression_statement', T ($1)); }
    | expression ';' { $$ = R ('expression_statement', $1, T ($2)); }
    ;

selection_statement:
    IF '(' expression ')' statement ELSE statement { $$ = R ('selection_statement', T ('IF', $1), T ($2), $3, T ($4), $5, T ('ELSE', $6), $7); }
    | IF '(' expression ')' statement { $$ = R ('selection_statement', T ('IF', $1), T ($2), $3, T ($4), $5); }
    | SWITCH '(' expression ')' statement { $$ = R ('selection_statement', T ('SWITCH', $1), T ($2), $3, T ($4), $5); }
    ;

iteration_statement: 
    WHILE '(' expression ')' statement { $$ = R ('iteration_statement', T ('WHILE', $1), T ($2), $3, T ($4), $5); }
    | DO statement WHILE '(' expression ')' ';' { $$ = R ('iteration_statement', T ('DO', $1), $2, T ('WHILE', $3), T ($4), $5, T ($6)); }
    | FOR '(' expression_statement expression_statement ')' statement { $$ = R ('iteration_statement', T ('FOR', $1), T ($2), $3, $4, T ($5), $6); }
    | FOR '(' expression_statement expression_statement expression ')' statement { $$ = R ('iteration_statement', T ('FOR', $1), T ($2), $3, $4, $5, T ($6), $7); }
    | FOR '(' declaration expression_statement ')' statement { $$ = R ('iteration_statement', T ('FOR', $1), T ($2), $3, $4, T ($5), $6); }
    | FOR '(' declaration expression_statement expression ')' statement { $$ = R ('iteration_statement', T ('FOR', $1), T ($2), $3, $4, $5, T ($6), $7); }
    ;

jump_statement: 
    GOTO IDENTIFIER ';' { $$ = R ('jump_statement', T ('GOTO', $1), T ('IDENTIFIER', $2), T ($3)); }
    | CONTINUE ';' { $$ = R ('jump_statement', T ('CONTINUE', $1), T ($2)); }
    | BREAK ';' { $$ = R ('jump_statement', T ('BREAK', $1), T ($2)); }
    | RETURN ';' { $$ = R ('jump_statement', T ('RETURN', $1), T ($2)); }
    | RETURN expression ';' { $$ = R ('jump_statement', T ('RETURN', $1), $2, T ($3)); }
    ;

module: translation_unit {
                                $$ = R ('module', $1);
                        };

translation_unit: 
    external_declaration { $$ = R ('translation_unit', $1);}
    | translation_unit external_declaration { $$ = R ('translation_unit', $1, $2);}
    ;

external_declaration: 
    function_definition { $$ = R ('external_declaration', $1);}
    | declaration { $$ = R ('external_declaration', $1);}
    ;

function_definition: 
    declaration_specifiers declarator declaration_list compound_statement { $$ = R ('function_definition', $1, $2, $3, $4);}
    | declaration_specifiers declarator compound_statement { $$ = R ('function_definition', $1, $2, $3);}
    ;

declaration_list: 
    declaration { $$ = R ('declaration_list', $1);}
    | declaration_list declaration { $$ = R ('declaration_list', $1, $2);}
    ;

%%


// #include <stdio.h>
// 
// void yyerror(const char *s)
// {
//     fflush(stdout);
//     fprintf(stderr, "*** %s\n", s);
// }
// 
