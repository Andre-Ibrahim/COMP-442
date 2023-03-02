START -> REPTSTART0  .  

APARAMS -> EXPR REPTAPARAMS1   . 
APARAMS ->  .  

APARAMSTAIL -> comma EXPR   . 

ADDOP -> plus   . 
ADDOP -> minus   . 
ADDOP -> or   . 

ARITHEXPR -> TERM SEMANTICEPSILON RIGHTRECARITHEXPR SEMANTICARITHEXPR  . 
SEMANTICARITHEXPR ->  .

ARRAYSIZE -> lsqbr ARRAYSIZE2  . 
ARRAYSIZE2 -> intlit SEMANTICINTLIT rsqbr  . 
ARRAYSIZE2 -> rsqbr  . 
SEMANTICINTLIT ->   .

ASSIGNOP -> equal   . 

CLASSDECL -> class id OPTCLASSDECL2 lcurbr REPTCLASSDECL4 rcurbr semi   . 

CLASSDECLORFUNCDEF -> CLASSDECL   . 
CLASSDECLORFUNCDEF -> FUNCDEF   . 

EXPR -> ARITHEXPR SEMANTICEPSILON EXPR2 SEMANTICEXPR . 

EXPR2 -> RELOP SEMANTICTOKEN SEMANTICEPSILON ARITHEXPR   . 
EXPR2 ->  . 
SEMANTICEXPR ->  .

FPARAMS -> id colon TYPE REPTFPARAMS3 REPTFPARAMS4   . 
FPARAMS ->  . 

FPARAMSTAIL -> comma id colon TYPE REPTFPARAMSTAIL4   . 

FACTOR -> FUNCTIONCALLORVARIABLE   . 
FACTOR -> intlit SEMANTICTOKEN SEMANTICFACTORINT   . 
FACTOR -> floatlit SEMANTICTOKEN   . 
FACTOR -> lpar ARITHEXPR rpar   . 
FACTOR -> not SEMANTICTOKEN FACTOR   . 
FACTOR -> SIGN SEMANTICTOKEN FACTOR   . 
SEMANTICTOKEN ->  .
SEMANTICFACTORINT ->  .

FUNCBODY -> lcurbr REPTFUNCBODY1 rcurbr   . 

FUNCDEF -> FUNCHEAD FUNCBODY  . 

FUNCHEAD -> function id FUNCHEAD3  . 

FUNCHEAD2 -> id lpar FPARAMS rpar arrow RETURNTYPE   . 
FUNCHEAD2 -> constructor lpar FPARAMS rpar   . 

FUNCHEAD3 -> sr FUNCHEAD2  . 
FUNCHEAD3 -> lpar FPARAMS rpar arrow RETURNTYPE   . 

ASSIGNSTAT -> VARIABLE ASSIGNOP EXPR   . 

FUNCTIONCALL -> id FUNCALL3  . 
FUNCALL3 -> lpar APARAMS rpar  . 
FUNCALL3 -> FUNCALL2  . 
FUNCALL2 -> dot id FUNCALL4  . 
FUNCALL4 -> INDICE FUNCALL2  . 
FUNCALL4 -> lpar APARAMS rpar FUNCALL5  . 
FUNCALL5 -> FUNCALL2  . 
FUNCALL5 ->  . 

VARIABLE -> id VARIABLE3  . 
VARIABLE3 -> INDICE  . 
VARIABLE3 -> VARIABLE2  . 
VARIABLE3 ->  . 
VARIABLE2 -> dot id VARIABLE4  . 
VARIABLE4 -> lpar APARAMS rpar VARIABLE2  . 
VARIABLE4 -> INDICE VARIABLE5  . 
VARIABLE5 -> VARIABLE2  . 
VARIABLE5 ->  . 

FUNCTIONCALLORVARIABLE -> id FUNCTIONCALLORVARIABLE1  . 
FUNCTIONCALLORVARIABLE1 -> INDICELOOP  FUNCTIONCALLORVARIABLE2  . 
FUNCTIONCALLORVARIABLE1 -> lpar APARAMS rpar FUNCTIONCALLORVARIABLE2  . 
FUNCTIONCALLORVARIABLE2 -> dot id FUNCTIONCALLORVARIABLE3  . 
FUNCTIONCALLORVARIABLE2 ->  . 
FUNCTIONCALLORVARIABLE3 -> INDICELOOP FUNCTIONCALLORVARIABLE2  . 
FUNCTIONCALLORVARIABLE3 -> lpar APARAMS rpar FUNCTIONCALLORVARIABLE2  . 

IDNEST1 -> dot id IDNEST2  . 
IDNEST2 -> lsqbr ARITHEXPR rsqbr IDNEST2  . 
IDNEST2 -> lpar APARAMS rpar  . 
IDNEST2 ->  . 

INDICE -> lsqbr ARITHEXPR rsqbr   . 

LOCALVARDECL -> localvar id SEMANTICID colon TYPE SEMANTICTYPE LOCALVARDECL2  . 
LOCALVARDECL2 -> SEMANTICEPSILON REPTLOCALVARDECL4 SEMANTICARRAYSIZE SEMANTICVARDECL semi   . 
LOCALVARDECL2 -> lpar APARAMS rpar semi   . 
SEMANTICID ->   .
SEMANTICTYPE ->   .
SEMANTICEPSILON ->   . 
SEMANTICARRAYSIZE ->   .
SEMANTICVARDECL ->   .

LOCALVARDECLORSTMT -> LOCALVARDECL   . 
LOCALVARDECLORSTMT -> STATEMENT   . 

MEMBERDECL -> MEMBERFUNCDECL   . 
MEMBERDECL -> MEMBERVARDECL   . 

MEMBERFUNCDECL -> function id colon lpar FPARAMS rpar arrow RETURNTYPE semi   . 
MEMBERFUNCDECL -> constructor colon lpar FPARAMS rpar semi   . 

MEMBERVARDECL -> attribute id colon TYPE REPTMEMBERVARDECL4 semi   . 

MULTOP -> mult   . 
MULTOP -> div   . 
MULTOP -> and   . 

OPTCLASSDECL2 -> isa id REPTOPTCLASSDECL22   . 
OPTCLASSDECL2 ->  .  

RELEXPR -> ARITHEXPR RELOP ARITHEXPR   . 

RELOP -> eq   . 
RELOP -> neq   . 
RELOP -> lt   . 
RELOP -> gt   . 
RELOP -> leq   . 
RELOP -> geq   . 

REPTSTART0 -> CLASSDECLORFUNCDEF REPTSTART0   . 
REPTSTART0 ->  .  

REPTAPARAMS1 -> APARAMSTAIL REPTAPARAMS1   . 
REPTAPARAMS1 ->  .  

REPTCLASSDECL4 -> VISIBILITY MEMBERDECL REPTCLASSDECL4   . 
REPTCLASSDECL4 ->  .  

REPTFPARAMS3 -> ARRAYSIZE REPTFPARAMS3   . 
REPTFPARAMS3 ->  .  

REPTFPARAMS4 -> FPARAMSTAIL REPTFPARAMS4   . 
REPTFPARAMS4 ->  .  

REPTFPARAMSTAIL4 -> ARRAYSIZE REPTFPARAMSTAIL4   . 
REPTFPARAMSTAIL4 ->  .  

REPTFUNCBODY1 -> LOCALVARDECLORSTMT REPTFUNCBODY1   . 
REPTFUNCBODY1 ->  . 

REPTLOCALVARDECL4 -> ARRAYSIZE REPTLOCALVARDECL4   . 
REPTLOCALVARDECL4 ->  .  

REPTMEMBERVARDECL4 -> ARRAYSIZE REPTMEMBERVARDECL4   . 
REPTMEMBERVARDECL4 ->  .  

REPTOPTCLASSDECL22 -> comma id REPTOPTCLASSDECL22   . 
REPTOPTCLASSDECL22 ->  .  

REPTSTATBLOCK1 -> STATEMENT REPTSTATBLOCK1   . 
REPTSTATBLOCK1 ->  .  

RETURNTYPE -> TYPE   . 
RETURNTYPE -> void   . 

RIGHTRECARITHEXPR ->  .  
RIGHTRECARITHEXPR -> ADDOP SEMANTICTOKEN TERM RIGHTRECARITHEXPR   . 

RIGHTRECTERM ->  .  
RIGHTRECTERM -> MULTOP SEMANTICTOKEN SEMANTICEPSILON FACTOR RIGHTRECTERM   . 

SIGN -> plus   . 
SIGN -> minus   . 

STATBLOCK -> lcurbr REPTSTATBLOCK1 rcurbr   . 
STATBLOCK -> STATEMENT   . 
STATBLOCK ->  .  

STATEMENT -> FUNCTIONCALLORASIGNSTAT semi   . 
STATEMENT -> if lpar RELEXPR rpar then STATBLOCK else STATBLOCK semi   . 
STATEMENT -> while lpar RELEXPR rpar STATBLOCK semi   . 
STATEMENT -> read lpar VARIABLE rpar semi   . 
STATEMENT -> write lpar EXPR rpar semi   . 
STATEMENT -> return lpar EXPR rpar SEMANTICRETURNSTAT semi  . 
SEMANTICRETURNSTAT ->  .

FUNCTIONCALLORASIGNSTAT -> id ISFUNCTIONCALLORVARIABLE  .

ISFUNCTIONCALLORVARIABLE -> lpar APARAMS rpar AFTERFUNCTIONCALL  .
ISFUNCTIONCALLORVARIABLE -> INDICELOOP AFTERVARIABLE  .

AFTERFUNCTIONCALL -> dot id MIDDLESTATE  .
AFTERVARIABLE -> dot id MIDDLESTATE  .

MIDDLESTATE -> INDICELOOP AFTERVARIABLE  . 
MIDDLESTATE -> lpar APARAMS rpar AFTERFUNCTIONCALL  . 

AFTERVARIABLE -> ENDASSIGN  . 
AFTERFUNCTIONCALL ->  . 

INDICELOOP -> INDICE INDICELOOP  . 
INDICELOOP ->  . 
ENDASSIGN -> ASSIGNOP EXPR  . 

TERM -> SEMANTICEPSILON FACTOR RIGHTRECTERM SEMANTICTERM   . 
SEMANTICTERM ->   .

TYPE -> integer   . 
TYPE -> float   . 
TYPE -> id   . 

VISIBILITY -> public   . 
VISIBILITY -> private   . 
VISIBILITY ->  .  
