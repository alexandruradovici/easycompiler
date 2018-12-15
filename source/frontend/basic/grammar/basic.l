/*
! -----------------------------------------------------------------------
! BASIC '64 
!
! Beginner's All-purpose Symbolic Instruction Code 
!
!    "It is practically impossible to teach good programming style to students 
!     that have had prior exposure to BASIC; as potential programmers they are 
!     mentally mutilated beyond hope of regeneration." 
!
!     - Edsger W. Dijkstra 
!
! BASIC is one of the oldest programming language and one of the most popular. 
! It was developed in 1964 by John G. Kemeny and Thomas E. Kurtz to teach 
! students the basics of programming concepts. At the advent of the microcomputer,
! BASIC was implemented on numerous platforms such as the Commodore, Atari, 
! Apple II, Altair, IBM PC computers. Over time, BASIC evolved into GW-BASIC, 
! QBasic, Visual Basic, and recently Visual Basic .NET.
!
! In practically all programming languages, the reserved word/symbol that denotes
! a comment is treated as a form of whitespace - having no effect in the manner in
! which the program runs. Once such type of comment is used to indicate the remainder
! of the line is to be ignored. These can be added to the end of any line without
! changing the meaning of the program. In C++, it is the '//' symbol;
! in BASIC '64 it is 'REM'.
!
! However, in the BASIC programming language, the line comment is treated like a 
! statement. For instance, if 'REM' was a normal line comment:
!
!    10  PRINT "Hello World" REM Common first program
!
! would be a valid statement. However, in BASIC, this is illegal. In the example 
! above, the comment must be added as an additional statement.
!
!    10  PRINT "Hello World" : REM Common first program
!
! As a result, the Line Comment terminal that is used in the GOLD Parser cannot be
! used here. In the grammar below, a 'Remark' terminal was created that accepts all 
! series of printable characters starting with the characters "REM ". In some 
! implementations of BASIC, any string starting with "REM" is a comment statement.
! Examples include "REMARK", "REMARKABLE" and "REMODEL". This grammar requires the space.
!
! This grammar does not include the editor statements such as NEW, SAVE, LOAD, etc...
!
! Note: This is an ad hoc version of the language. If there are any flaws, please 
! e-mail GOLDParser@DevinCook.com and I will update the grammar. Most likely I have
! included features not available in BASIC '64.
! -----------------------------------------------------------------------


"Name"    = 'BASIC (Beginners All-purpose Symbolic Instruction Code)'
"Author"  = 'John G. Kemeny and Thomas E. Kurtz' 
"Version" = '1964 - Original - before Microsoft enhanced the language for the IBM PC.'
"About"   = 'BASIC is one of most common and popular teaching languages ever created. '
*/

%options easy_keyword_rules

Letter		[A-Za-z]
Printable	 [\s-\~]
digit	[0-9]

StringChars  [\s!#-\~]
CR			 \r
WS            \s+ 

Whitespace      \s+

%%

"INPUT" { return 'INPUT'; }
"OUTPUT" { return 'OUTPUT'; }
"CLOSE" { return 'CLOSE'; }
"DATA"	{ return 'DATA'; } 
"DIM"	{ return 'DIM'; } 
"END"	{ return 'END'; }          
"FOR"	{ return 'FOR'; } 
"FOR"	{ return 'FOR'; } 
"GOTO"	{ return 'GOTO'; } 
"GOSUB"	{ return 'GOSUB'; } 
"IF"	{ return 'IF'; } 
"INPUT"	{ return 'INPUT'; } 
"INPUT"	{ return 'INPUT'; } 
"LET"	{ return 'LET'; } 
"NEXT"	{ return 'NEXT'; } 
"OPEN"	{ return 'OPEN'; } 
"POKE"	{ return 'POKE'; } 
"PRINT"	{ return 'PRINT'; } 
"PRINT"	{ return 'PRINT'; } 
"READ"	{ return 'READ'; } 
"RETURN"	{ return 'RETURN'; }
"RESTORE"	{ return 'RESTORE'; }
"RUN"	{ return 'RUN'; }
"STOP"	{ return 'STOP'; }
"SYS"	{ return 'SYS'; } 
"WAIT"	{ return 'WAIT'; } 
"AND"	{ return 'AND'; }


"="	{ return '='; }

{Letter}+[\$\%]?  { return 'ID'; }
"REM"\s{Printable}*	{ return 'Remark'; }
"\""{StringChars}*"\""	{ return 'String'; }
{digit}+ 	{ return 'Integer'; }    
{digit}+\.{digit}+	{ return 'Real'; } 
\n\r?           { return 'NewLine'; }         

{WS}+                   { /* whitespace separates tokens */ }
.                       { /* discard bad characters */ }



	
