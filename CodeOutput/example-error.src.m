POLYNOMIAL0
               sub r1, r1, r1
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
               lw r1, lit1(r0)
               sw evaluate1return(r0), r1
               jr r11
% end of function
LINEAR0
               sub r1, r1, r1
% assigning error to build2new_function
               lw r1, error(r0)
               sw build2new_function(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning error to build2new_function
               lw r1, error(r0)
               sw build2new_function(r0), r1
               addi r1, r0, 0
               lw r1, build2new_function(r0)
               sw build2return(r0), r1
               jr r11
% end of function
LINEAR0
               sub r1, r1, r1
%storing 0.0 into lit2
               addi r1, r0, 0.0
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit2 to evaluate1result
               lw r1, lit2(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying evaluate1a with evaluate1x
               lw r1, evaluate1a(r0)
               lw r2, evaluate1x(r0)
               mul r3, r1, r2
               sw temp1(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding temp1 with evaluate1b
               lw r1, temp1(r0)
               lw r2, evaluate1b(r0)
               add r3, r1, r2
               sw temp2(r0), r3
               sub r1, r1, r1
% assigning temp2 to evaluate1result
               lw r1, temp2(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               lw r1, evaluate1result(r0)
               sw evaluate1return(r0), r1
               jr r11
% end of function
QUADRATIC0
               sub r1, r1, r1
% assigning evaluate1a to evaluate1result
               lw r1, evaluate1a(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying evaluate1result with evaluate1x
               lw r1, evaluate1result(r0)
               lw r2, evaluate1x(r0)
               mul r3, r1, r2
               sw temp3(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding temp3 with evaluate1b
               lw r1, temp3(r0)
               lw r2, evaluate1b(r0)
               add r3, r1, r2
               sw temp4(r0), r3
               sub r1, r1, r1
% assigning temp4 to evaluate1result
               lw r1, temp4(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying evaluate1result with evaluate1x
               lw r1, evaluate1result(r0)
               lw r2, evaluate1x(r0)
               mul r3, r1, r2
               sw temp5(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding temp5 with evaluate1c
               lw r1, temp5(r0)
               lw r2, evaluate1c(r0)
               add r3, r1, r2
               sw temp6(r0), r3
               sub r1, r1, r1
% assigning temp6 to evaluate1result
               lw r1, temp6(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning evaluate1self to evaluate1result
               lw r1, evaluate1self(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning evaluate1a to evaluate1result
               lw r1, evaluate1a(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               lw r1, evaluate1result(r0)
               sw evaluate1return(r0), r1
               jr r11
% end of function
QUADRATIC0
               sub r1, r1, r1
%storing 3 into lit3
               addi r1, r0, 3
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying build3B with lit3
               lw r1, build3B(r0)
               lw r2, lit3(r0)
               mul r3, r1, r2
               sw temp7(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding build3A with temp7
               lw r1, build3A(r0)
               lw r2, temp7(r0)
               add r3, r1, r2
               sw temp8(r0), r3
               sub r1, r1, r1
% assigning error to build3new_function
               lw r1, error(r0)
               sw build3new_function(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning error to build3new_function
               lw r1, error(r0)
               sw build3new_function(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit4
               addi r1, r0, 1
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning error to build3new_function
               lw r1, error(r0)
               sw build3new_function(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit5
               addi r1, r0, 1
               sw lit5(r0), r1
                addi r1, r0, 0
               lw r1, lit5(r0)
               sw build3return(r0), r1
               jr r11
% end of function
QUADRATIC0
               sub r1, r1, r1
% assigning error to error0new_function
               lw r1, error(r0)
               sw error0new_function(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning error to error0new_function
               lw r1, error(r0)
               sw error0new_function(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning error to error0new_function
               lw r1, error(r0)
               sw error0new_function(r0), r1
               addi r1, r0, 0
               lw r1, error0new_function(r0)
               sw undefined0return(r0), r1
               jr r11
% end of function
f1
               jr r11
% end of function
f1
               jr r11
% end of function
f2
               jr r11
% end of function
f31
               jr r11
% end of function
               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 2 into lit6
               addi r1, r0, 2
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3.5 into lit7
               addi r1, r0, 3.5
               sw lit7(r0), r1
                addi r1, r0, 0
               jl r11, build2
               sub r1, r1, r1
% assigning main0f1 to main0f1
               lw r1, main0f1(r0)
               sw main0f1(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2.0 into lit8
               addi r1, r0, 2.0
               sw lit8(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1.0 into lit9
               addi r1, r0, 1.0
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 0.0 into lit10
               addi r1, r0, 0.0
               sw lit10(r0), r1
                addi r1, r0, 0
               jl r11, build3
               sub r1, r1, r1
% assigning main0f2 to main0f2
               lw r1, main0f2(r0)
               sw main0f2(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit11
               addi r1, r0, 1
               sw lit11(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning error to main0c
               lw r1, error(r0)
               sw main0c(r0), r1
               addi r1, r0, 0
               jl r11, f0
               sub r1, r1, r1
% assigning main0c to main0counter
               lw r1, main0c(r0)
               sw main0counter(r0), r1
               addi r1, r0, 0
               jl r11, undefined0
               sub r1, r1, r1
% assigning main0e to main0counter
               lw r1, main0e(r0)
               sw main0counter(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit12
               addi r1, r0, 1
               sw lit12(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit13
               addi r1, r0, 1
               sw lit13(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit14
               addi r1, r0, 1
               sw lit14(r0), r1
                addi r1, r0, 0
               lw r1, lit12(r0)
               sw f2i(r0), r1
               lw r1, lit13(r0)
               sw f2j(r0), r1
               jl r11, f3
               sub r1, r1, r1
%storing 1.2 into lit15
               addi r1, r0, 1.2
               sw lit15(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit16
               addi r1, r0, 1
               sw lit16(r0), r1
                addi r1, r0, 0
               lw r1, lit15(r0)
               sw f2i(r0), r1
               lw r1, lit16(r0)
               sw f2j(r0), r1
               jl r11, f2
               sub r1, r1, r1
%storing 2 into lit17
               addi r1, r0, 2
               sw lit17(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit18
               addi r1, r0, 1
               sw lit18(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp9(r0), r0
               lw r1, lit17(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp9(r0)
               add r1, r4, r3
               sw temp9(r0), r1
               sub r1, r1, r1
% assigning lit18 to main0i with offset temp9
               lw r2, temp9(r0)
               lw r1, lit18(r0)
               sw main0i(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit19
               addi r1, r0, 2
               sw lit19(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1.3 into lit20
               addi r1, r0, 1.3
               sw lit20(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit21
               addi r1, r0, 2
               sw lit21(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp10(r0), r0
               lw r1, lit19(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp10(r0)
               add r1, r4, r3
               sw temp10(r0), r1
               lw r1, lit20(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp10(r0)
               add r1, r4, r3
               sw temp10(r0), r1
               sub r1, r1, r1
% assigning lit21 to main0i with offset temp10
               lw r2, temp10(r0)
               lw r1, lit21(r0)
               sw main0i(r2), r1
               addi r1, r0, 0
               lw r1, main0j(r0)
               sw f31p1(r0), r1
               jl r11, f31
               sub r1, r1, r1
%storing 1 into lit22
               addi r1, r0, 1
               sw lit22(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning error to main0counter
               lw r1, error(r0)
               sw main0counter(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning main0self to main0counter
               lw r1, main0self(r0)
               sw main0counter(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile1
               sub r1, r1, r1
%storing 10 into lit23
               addi r1, r0, 10
               sw lit23(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation lit23 leq main0counter
               lw r1, main0counter(r0)
               lw r2, lit23(r0)
               cle r3, r1, r2
               sw temp11(r0), r3
               lw r1, temp11(r0)
               bz r1, endwhile1
               % processing: write(main0counter)
               lw r1, main0counter(r0)
               % put value on stack
               sw -8(r14), r1
               % Link buffer to stack
               addi r1,r0, buf
               sw -12(r14), r1
               % convert int to string for output
               jl r15, intstr
               sw -8 (r14), r13
               % output to console
               jl r15, putstr
               sub r6, r6, r6
               addi r6, r6, 10
               putc r6
               jl r11, evaluate1
               % processing: write(main0f1)
               lw r1, main0f1(r0)
               % put value on stack
               sw -8(r14), r1
               % Link buffer to stack
               addi r1,r0, buf
               sw -12(r14), r1
               % convert int to string for output
               jl r15, intstr
               sw -8 (r14), r13
               % output to console
               jl r15, putstr
               sub r6, r6, r6
               addi r6, r6, 10
               putc r6
               jl r11, evaluate1
               % processing: write(main0f2)
               lw r1, main0f2(r0)
               % put value on stack
               sw -8(r14), r1
               % Link buffer to stack
               addi r1,r0, buf
               sw -12(r14), r1
               % convert int to string for output
               jl r15, intstr
               sw -8 (r14), r13
               % output to console
               jl r15, putstr
               sub r6, r6, r6
               addi r6, r6, 10
               putc r6
j gowhile1
endwhile1
               hlt

               % space for variable POLYNOMIAL0return
POLYNOMIAL0retures 8
               % space for variable lit1
lit1           res 4
               % space for variable build2new_function
build2new_functres 0
               % space for variable LINEAR0return
LINEAR0return  res 8
               % space for variable evaluate1result
evaluate1resultres 8
               % space for variable lit2
lit2           res 8
               % space for variable temp1
temp1          res 8
               % space for variable temp2
temp2          res 8
               % space for variable QUADRATIC0return
QUADRATIC0returres 8
               % space for variable evaluate1result
evaluate1resultres 8
               % space for variable temp3
temp3          res 8
               % space for variable temp4
temp4          res 8
               % space for variable temp5
temp5          res 8
               % space for variable temp6
temp6          res 8
               % space for variable build3new_function
build3new_functres 0
               % space for variable lit3
lit3           res 4
               % space for variable temp7
temp7          res 8
               % space for variable temp8
temp8          res 8
               % space for variable lit4
lit4           res 4
               % space for variable lit5
lit5           res 4
               % space for variable QUADRATIC0return
QUADRATIC0returres 4
               % space for variable f1i
f1i            res 4
               % space for variable f1i
f1i            res 4
               % space for variable f2i
f2i            res 4
               % space for variable f2j
f2j            res 4
               % space for variable f2return
f2return       res 4
               % space for variable f31p1
f31p1          res 4
               % space for variable f31return
f31return      res 4
               % space for variable main0a
main0a         res 0
               % space for variable main0c
main0c         res 4
               % space for variable main0f1
main0f1        res 148
               % space for variable main0f2
main0f2        res 228
               % space for variable main0counter
main0counter   res 4
               % space for variable main0counter
main0counter   res 8
               % space for variable main0counter
main0counter   res 4
               % space for variable main0counter
main0counter   res 8
               % space for variable main0i
main0i         res 24
               % space for variable main0j
main0j         res 24
               % space for variable lit6
lit6           res 4
               % space for variable lit7
lit7           res 8
               % space for variable lit8
lit8           res 8
               % space for variable lit9
lit9           res 8
               % space for variable lit10
lit10          res 8
               % space for variable lit11
lit11          res 4
               % space for variable lit12
lit12          res 4
               % space for variable lit13
lit13          res 4
               % space for variable lit14
lit14          res 4
               % space for variable lit15
lit15          res 8
               % space for variable lit16
lit16          res 4
               % space for variable lit17
lit17          res 4
               % space for variable lit18
lit18          res 4
               % space for variable temp9
temp9          res 4
               % space for variable lit19
lit19          res 4
               % space for variable lit20
lit20          res 8
               % space for variable lit21
lit21          res 4
               % space for variable temp10
temp10         res 4
               % space for variable lit22
lit22          res 4
               % space for variable lit23
lit23          res 4
               % space for variable temp11
temp11         res 4
               % space for variable buf
buf            res 20

