# easycompiler

A *by the book* compiler framework written in TypeScript.

Its main purpose is to be used in teaching compiler and compiler optimization. While LLVM is a very powerfull framework,
due to its complexity, it is not best suited in education. The purpose of easycompiler is to provide educators and students with a 
powerful tool.

## Frontend
The main parser generator that is used for the examples is [Jison](https://github.com/GerHobbelt/jison) (the version maintained by @GerHobbelt).
As the examples arte already compiled, there is no need to install Jison to run easycompiler.

## Optimizer
Once the AST API is stable, more information will follow.

## Backend
This is not yet available.

# Roadmap
* Frontend
  * Jison Parser API
  * Stable API for ParseTree
  * Table API for ParseTree walking
  * Examples
	* QBasic (without graphics)
	* Pascal
	* C99
* Optimizer
  * Stable API for AST
  * Stable API for AST walking
  * Examples
    * Constant Folding
    * CFG Output
* Backend
  * Target a standard *three address code*
  * Target an SSA *three address code*
  * Target asm.js
  * Target WebAssembly
