%{
/*
 * grammar.y
 *
 * Pascal grammar in Yacc format, based originally on BNF given
 * in "Standard Pascal -- User Reference Manual", by Doug Cooper.
 * This in turn is the BNF given by the ANSI and ISO Pascal standards,
 * and so, is PUBLIC DOMAIN. The grammar is for ISO Level 0 Pascal.
 * The grammar has been massaged somewhat to make it LALR, and added
 * the following extensions.
 *
 * constant expressions
 * otherwise statement in a case
 * productions to correctly match else's with if's
 * beginnings of a separate compilation facility
 */

const R = require ('@parsetree/nodes').R;
const TR = require ('@parsetree/nodes').TR;
const RR = require ('@parsetree/nodes').RR;
const RTR = require ('@parsetree/nodes').RTR;
const T = require ('@parsetree/nodes').T;
const TT = require ('@parsetree/nodes').TT;

%}

%token AND ARRAY ASSIGNMENT CASE CHARACTER_STRING COLON COMMA CONST DIGSEQ
%token DIV DO DOT DOTDOT DOWNTO ELSE END EQUAL EXTERNAL FOR FORWARD FUNCTION
%token GE GOTO GT IDENTIFIER IF IN LABEL LBRAC LE LPAREN LT MINUS MOD NIL NOT
%token NOTEQUAL OF OR OTHERWISE PACKED PBEGIN PFILE PLUS PROCEDURE PROGRAM RBRAC
%token REALNUMBER RECORD REPEAT RPAREN SEMICOLON SET SLASH STAR STARSTAR THEN
%token TO TYPE UNTIL UPARROW VAR WHILE WITH

%%
file: 
	program { $$ = R ('file', $1); }
	| module { $$ = R ('file', $1); }
 ;

program:
	program_heading semicolon block DOT { $$ = R ('program', $1, $2, $3, TT ('DOT', $4)); }
 ;

program_heading:
	PROGRAM identifier { $$ = R ('program_heading', TT ('PROGRAM', $1), $2); }
	| PROGRAM identifier LPAREN identifier_list RPAREN { $$ = R ('program_heading', TT ('PROGRAM', $1), $2, TT ('LPAREN', $3), $4, TT ('RPAREN', $5)); }
 ;

identifier_list:
	identifier_list comma identifier { $$ = RR ('identifier_list', $1, $2, $3); }
	| identifier { $$ = RR ('identifier_list', $1); }
 ;

block:
	label_declaration_part
	constant_definition_part
	type_definition_part
	variable_declaration_part
	procedure_and_function_declaration_part
	statement_part { $$ = R ('block', $1, $2, $3, $4, $5, $6); }
 ;

module:
	constant_definition_part
	type_definition_part
	variable_declaration_part
	procedure_and_function_declaration_part { $$ = R ('module', $1, $2, $3, $4); }
;

label_declaration_part:
	LABEL label_list semicolon { $$ = R ('label_declaration_part', TT ('LABEL', $1), $2); }
 | { $$ = R ('label_declaration_part'); }
 ;

label_list:
	label_list comma label { $$ = RR ('label_list', $1, $2, $3); }
 	| label { $$ = RR ('label_list', $1); }
 ;

label:
	DIGSEQ { $$ = RR ('label', T ('DIGSEQ', $1)); }
 ;

constant_definition_part:
	CONST constant_list { $$ = R ('constant_definition_part', TT ('CONST', $1), $2); }
	| { $$ = R ('constant_definition_part'); }
 ;

constant_list:
	constant_list constant_definition { $$ = RR ('constant_list', $1, $2); }
 | constant_definition { $$ = RR ('constant_list', $1); }
 ;

constant_definition:
	identifier EQUAL cexpression semicolon { $$ = R ('constant_definition', $1, TT ('EQUAL', $2), $3, $4); }
 ;

/*constant:
cexpression ;  /* good stuff! */

cexpression:
	csimple_expression { $$ = R ('cexpression', $1); }
 	| csimple_expression relop csimple_expression { $$ = R ('cexpression', $1, $2, $3); }
 ;

csimple_expression:
	cterm { $$ = R ('csimple_expression', $1); }
 | csimple_expression addop cterm { $$ = R ('csimple_expression', $1, $2, $3); }
 ;

cterm:
	cfactor { $$ = R ('cterm', $1); }
 	| cterm mulop cfactor { $$ = R ('cterm', $1, $2, $3); }
 ;

cfactor:
	sign cfactor { $$ = R ('cfactor', $1, $2); }
 	| cexponentiation { $$ = R ('cfactor', $1); }
 ;

cexponentiation:
	cprimary { $$ = R ('cexponentiation', $1); }
 	| cprimary STARSTAR cexponentiation { $$ = R ('cexponentiation', $1, T ('STARSTAR', $2), $3); }
 ;

cprimary:
	identifier { $$ = R ('cprimary', $1); }
 	| LPAREN cexpression RPAREN { $$ = R ('cprimary', TT ('LPAREN', $1), $2, TT ('RPAREN', $3)); }
 	| unsigned_constant { $$ = R ('cprimary', $1); }
 	| NOT cprimary { $$ = R ('cprimary', T ('NOT', $1), $2); }
 ;

constant:
	non_string { $$ = R ('constant', $1); }
 	| sign non_string { $$ = R ('constant', $1, $2); }
 	| CHARACTER_STRING { $$ = R ('constant', T ('CHARACTER_STRING', $1)); }
 ;

sign:
	PLUS { $$ = R ('sign', T ('PLUS', $1)); }
	| MINUS { $$ = R ('sign', T ('MINUS', $1)); }
 ;

non_string:
	DIGSEQ { $$ = R ('non_string', T ('DIGSEQ', $1)); }
	| identifier { $$ = R ('non_string', $1); }
	| REALNUMBER { $$ = R ('non_string', T ('REALNUMBER', $1)); }
 ;

type_definition_part:
	TYPE type_definition_list { $$ = R ('type_definition_part', T ('TYPE', $1), $2); }
 	| { $$ = R ('type_definition_part'); }
 ;

type_definition_list:
	type_definition_list type_definition { $$ = RR ('type_definition_list', $1, $2); }
 | type_definition { $$ = RR ('type_definition_list', $1); }
 ;

type_definition:
	identifier EQUAL type_denoter semicolon { $$ = R ('type_definition', $1, TT ('EQUAL', $2), $3, $4); }
 ;

type_denoter:
	identifier { $$ = R ('type_denoter', $1); }
	| new_type { $$ = R ('type_denoter', $1); }
 ;

new_type:
	new_ordinal_type { $$ = R ('new_type', $1); }
 	| new_structured_type { $$ = R ('new_type', $1); }
 	| new_pointer_type { $$ = R ('new_type', $1); }
 ;

new_ordinal_type:
	enumerated_type { $$ = R ('new_ordinal_type', $1); }
 	| subrange_type { $$ = R ('new_ordinal_type', $1); }
 ;

enumerated_type:
	LPAREN identifier_list RPAREN { $$ = R ('enumerated_type', TT ('LPAREN', $1), $2, TT ('RPAREN', $3)); }
 ;

subrange_type:
	constant DOTDOT constant { $$ = R ('enumerated_type', $1, TT ('DOTDOT', $2), $3); }
 ;

new_structured_type:
	structured_type { $$ = R ('new_structured_type', $1); }
 	| PACKED structured_type { $$ = R ('new_structured_type', T ('PACKED', $1), $2); }
 ;

structured_type:
	array_type { $$ = R ('structured_type', $1); }
 	| record_type { $$ = R ('structured_type', $1); }
 	| set_type { $$ = R ('structured_type', $1); }
 	| file_type { $$ = R ('structured_type', $1); }
 ;

array_type:
	ARRAY LBRAC index_list RBRAC OF component_type { $$ = R ('array_type', TT ('ARRAY', $1), TT ('LBRAC', $2), $3, TT ('RBRAC', $4), TT ('OF', $5), $6); }
 ;

index_list:
	index_list comma index_type { $$ = RR ('index_list', $1, $2, $3); }
 	| index_type { $$ = RR ('index_list', $1); }
 ;

index_type:
	ordinal_type { $$ = R ('index_type', $1); }
 ;

ordinal_type:
	new_ordinal_type { $$ = R ('ordinal_type', $1); }
 	| identifier { $$ = R ('ordinal_type', $1); }
 ;

component_type:
	type_denoter { $$ = R ('component_type', $1); }
 ;

record_type:
	RECORD record_section_list END { $$ = R ('record_type', TT ('RECORD', $1), $2, TT ('END', $3)); }
	| RECORD record_section_list semicolon variant_part END { $$ = R ('record_type', TT ('RECORD', $1), $2, $3, $4, TT ('END', $5)); }
	| RECORD variant_part END { $$ = R ('record_type', TT ('RECORD', $1), $2, TT ('END', $3)); }
 ;

record_section_list:
	record_section_list semicolon record_section { $$ = RR ('record_section_list', $1, $2, $3); }
 	| record_section { $$ = RR ('record_section_list', $1); }
 ;

record_section:
	identifier_list COLON type_denoter { $$ = R ('record_section', $1, TT ('COLON', $2), $3); }
 ;

variant_part:
	CASE variant_selector OF variant_list semicolon { $$ = R ('variant_part', TT ('CASE', $1), $2, TT ('OF', $3), $4, $5); }
 	| CASE variant_selector OF variant_list { $$ = R ('variant_part', TT ('CASE', $1), $2, TT ('OF', $3), $4); }
 	| { $$ = R ('variant_part'); }
 ;

variant_selector:
	tag_field COLON tag_type { $$ = R ('variant_selector', $1, TT ('COLON', $2), $3); }
 	| tag_type { $$ = R ('variant_selector', $1); }
 ;

variant_list:
	variant_list semicolon variant { $$ = RR ('variant_list', $1, $2, $3); }
 	| variant { $$ = RR ('variant_list', $1); }
 ;

variant:
	case_constant_list COLON LPAREN record_section_list RPAREN { $$ = R ('variant', $1, TT ('COLON', $2), TT ('LPAREN', $3), $4, TT ('RPAREN', $5)); }
 	| case_constant_list COLON LPAREN record_section_list semicolon variant_part RPAREN { $$ = R ('variant', $1, TT ('COLON', $2), TT ('LPAREN', $3), $4, $5, $6, TT ('RPAREN', $7)); }
 	| case_constant_list COLON LPAREN variant_part RPAREN { $$ = R ('variant', $1, TT ('COLON', $2), TT ('LPAREN', $3), $4, TT ('RPAREN', $5)); }
 ;

case_constant_list:
	case_constant_list comma case_constant { $$ = RR ('case_constant_list', $1, $2); }
 	| case_constant { $$ = RR ('case_constant_list', $1); }
 ;

case_constant:
	constant { $$ = R ('case_constant', $1); }
 	| constant DOTDOT constant { $$ = R ('case_constant', $1, TT ('DOTDOT', $2), $3); }
 ;

tag_field:
	identifier { $$ = R ('tag_field', $1); }
 ;

tag_type:
	identifier { $$ = R ('tag_type', $1); }
 ;

set_type:
	SET OF base_type { $$ = R ('set_type', TT ('SET', $1), TT ('OF', $2), $3); }
 ;

base_type:
	ordinal_type { $$ = R ('base_type', $1); }
 ;

file_type:
	PFILE OF component_type { $$ = R ('file_type', TT ('PFILE', $1), TT ('OF', $2), $3); }
 ;

new_pointer_type:
	UPARROW domain_type { $$ = R ('new_pointer_type', TT ('UPARROW', $1), $2); }
 ;

domain_type:
	identifier { $$ = R ('domain_type', $1); }
 ;

variable_declaration_part:
	VAR variable_declaration_list semicolon { $$ = R ('variable_declaration_part', TT ('VAR', $1), $2, $3); }
 	| { $$ = R ('variable_declaration_part'); }
 ;

variable_declaration_list:
	variable_declaration_list semicolon variable_declaration { $$ = RR ('variable_declaration_list', $1, $2, $3); }
	| variable_declaration { $$ = RR ('variable_declaration_list', $1); }
 ;

variable_declaration:
	identifier_list COLON type_denoter { $$ = RR ('variable_declaration', $1, TT ('COLON', $2), $3); }
 ;

procedure_and_function_declaration_part :
  proc_or_func_declaration_list semicolon
 |
 ;

proc_or_func_declaration_list :
   proc_or_func_declaration_list semicolon proc_or_func_declaration
 | proc_or_func_declaration
 ;

proc_or_func_declaration:
procedure_declaration
 | function_declaration
 ;

procedure_declaration:
procedure_heading semicolon directive
 | procedure_heading semicolon procedure_block
 ;

procedure_heading:
procedure_identification
 | procedure_identification formal_parameter_list
 ;

directive:
FORWARD
 | EXTERNAL
 ;

formal_parameter_list:
LPAREN formal_parameter_section_list RPAREN ;

formal_parameter_section_list:
formal_parameter_section_list semicolon formal_parameter_section
 | formal_parameter_section
 ;

formal_parameter_section:
value_parameter_specification
 | variable_parameter_specification
 | procedural_parameter_specification
 | functional_parameter_specification
 ;

value_parameter_specification:
identifier_list COLON identifier
 ;

variable_parameter_specification:
VAR identifier_list COLON identifier
 ;

procedural_parameter_specification:
procedure_heading ;

functional_parameter_specification:
function_heading ;

procedure_identification:
PROCEDURE identifier ;

procedure_block:
block ;

function_declaration:
function_heading semicolon directive
 | function_identification semicolon function_block
 | function_heading semicolon function_block
 ;

function_heading:
FUNCTION identifier COLON result_type
 | FUNCTION identifier formal_parameter_list COLON result_type
 ;

result_type:
identifier ;

function_identification:
FUNCTION identifier ;

function_block:
block ;

statement_part:
	compound_statement { $$ = R ('statement_part', $1); }
;

compound_statement:
	PBEGIN statement_sequence END { $$ = TR ('compound_statement', TT ('PBEGIN', $1), $2, TT ('PEND', $3)); }
;

statement_sequence:
	statement_sequence semicolon statement { $$ = RR ('statement_sequence', $1, $2, $3); }
 	| statement { $$ = RR ('statement_sequence', $1); }
 ;

statement:
	open_statement { $$ = R ('statement', $1); }
 	| closed_statement { $$ = R ('statement', $1); }
 ;

open_statement:
label COLON non_labeled_open_statement
 | non_labeled_open_statement
 ;

closed_statement:
label COLON non_labeled_closed_statement
 | non_labeled_closed_statement
 ;

non_labeled_closed_statement:
assignment_statement
 | procedure_statement
 | goto_statement
 | compound_statement
 | case_statement
 | repeat_statement
 | closed_with_statement
 | closed_if_statement
 | closed_while_statement
 | closed_for_statement
 |
 ;

non_labeled_open_statement:
open_with_statement
 | open_if_statement
 | open_while_statement
 | open_for_statement
 ;

repeat_statement:
REPEAT statement_sequence UNTIL boolean_expression
 ;

open_while_statement:
WHILE boolean_expression DO open_statement
 ;

closed_while_statement:
WHILE boolean_expression DO closed_statement
 ;

open_for_statement:
FOR control_variable ASSIGNMENT initial_value direction
   final_value DO open_statement
 ;

closed_for_statement:
FOR control_variable ASSIGNMENT initial_value direction
   final_value DO closed_statement
 ;

open_with_statement:
WITH record_variable_list DO open_statement
 ;

closed_with_statement:
WITH record_variable_list DO closed_statement
 ;

open_if_statement:
IF boolean_expression THEN statement
 | IF boolean_expression THEN closed_statement ELSE open_statement
 ;

closed_if_statement:
IF boolean_expression THEN closed_statement
   ELSE closed_statement
 ;

assignment_statement:
variable_access ASSIGNMENT expression
 ;

variable_access:
identifier
 | indexed_variable
 | field_designator
 | variable_access UPARROW
 ;

indexed_variable:
variable_access LBRAC index_expression_list RBRAC
 ;

index_expression_list:
index_expression_list comma index_expression
 | index_expression
 ;

index_expression:
expression ;

field_designator:
variable_access DOT identifier
 ;

procedure_statement:
identifier params
 | identifier
 ;

params:
LPAREN actual_parameter_list RPAREN ;

actual_parameter_list:
actual_parameter_list comma actual_parameter
 | actual_parameter
 ;

/*
 * this forces you to check all this to be sure that only write and
 * writeln use the 2nd and 3rd forms, you really can't do it easily in
 * the grammar, especially since write and writeln aren't reserved
 */
actual_parameter:
expression
 | expression COLON expression
 | expression COLON expression COLON expression
 ;

goto_statement:
GOTO label
 ;

case_statement:
CASE case_index OF case_list_element_list END
 | CASE case_index OF case_list_element_list SEMICOLON END
 | CASE case_index OF case_list_element_list semicolon
   otherwisepart statement END
 | CASE case_index OF case_list_element_list semicolon
   otherwisepart statement SEMICOLON END
 ;

case_index:
expression ;

case_list_element_list:
case_list_element_list semicolon case_list_element
 | case_list_element
 ;

case_list_element:
case_constant_list COLON statement
 ;

otherwisepart:
OTHERWISE
 | OTHERWISE COLON
 ;

control_variable:
identifier ;

initial_value:
expression ;

direction:
TO
 | DOWNTO
 ;

final_value:
expression ;

record_variable_list:
record_variable_list comma variable_access
 | variable_access
 ;

boolean_expression:
expression ;

expression:
simple_expression
 | simple_expression relop simple_expression
 ;

simple_expression:
term
 | simple_expression addop term
 ;

term:
factor
 | term mulop factor
 ;

factor:
sign factor
 | exponentiation
 ;

exponentiation:
primary
 | primary STARSTAR exponentiation
 ;

primary:
variable_access
 | unsigned_constant
 | function_designator
 | set_constructor
 | LPAREN expression RPAREN
 | NOT primary
 ;

unsigned_constant:
unsigned_number
 | CHARACTER_STRING
 | NIL
 ;

unsigned_number:
unsigned_integer | unsigned_real ;

unsigned_integer:
DIGSEQ
 ;

unsigned_real:
REALNUMBER
 ;

/* functions with no params will be handled by plain identifier */
function_designator:
identifier params
 ;

set_constructor:
LBRAC member_designator_list RBRAC
 | LBRAC RBRAC
 ;

member_designator_list:
member_designator_list comma member_designator
 | member_designator
 ;

member_designator:
member_designator DOTDOT expression
 | expression
 ;

addop: PLUS
 | MINUS
 | OR
 ;

mulop:
STAR
 | SLASH
 | DIV
 | MOD
 | AND
 ;

relop:
EQUAL
 | NOTEQUAL
 | LT
 | GT
 | LE
 | GE
 | IN
 ;

identifier:
	IDENTIFIER { $$ = TR ('identifier', T ('IDENTIFIER', $1)); }
 ;

semicolon:
	SEMICOLON { $$ = TR ('semicolon', T ('SEMICOLON', $1)); }
 ;

comma:
	COMMA { $$ = TR ('comma', T ('COMMA', $1)); }
 ;