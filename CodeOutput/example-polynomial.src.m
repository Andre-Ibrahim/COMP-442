QUADRATIC0
               jr r11
% end of function
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
%adding temp3 with evaluate1c
               lw r1, temp3(r0)
               lw r2, evaluate1c(r0)
               add r3, r1, r2
               sw temp4(r0), r3
               sub r1, r1, r1
% assigning temp4 to evaluate1result
               lw r1, temp4(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               lw r1, evaluate1result(r0)
               sw evaluate1return(r0), r1
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
               sw temp5(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding temp5 with evaluate1b
               lw r1, temp5(r0)
               lw r2, evaluate1b(r0)
               add r3, r1, r2
               sw temp6(r0), r3
               sub r1, r1, r1
% assigning temp6 to evaluate1result
               lw r1, temp6(r0)
               sw evaluate1result(r0), r1
               addi r1, r0, 0
               lw r1, evaluate1result(r0)
               sw evaluate1return(r0), r1
               jr r11
% end of function
               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 2.0 into lit3
               addi r1, r0, 2.0
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1.0 into lit4
               addi r1, r0, 1.0
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 0.0 into lit5
               addi r1, r0, 0.0
               sw lit5(r0), r1
                addi r1, r0, 0
%starting while loop
gowhile1
               sub r1, r1, r1
%storing 10 into lit6
               addi r1, r0, 10
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation lit6 leq main0counter
               lw r1, main0counter(r0)
               lw r2, lit6(r0)
               cle r3, r1, r2
               sw temp7(r0), r3
               lw r1, temp7(r0)
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

                              % space for variable build3x
build3x                       res 8
                              % space for variable POLYNOMIAL0return
POLYNOMIAL0return             res 8
                              % space for variable lit1
lit1                          res 4
                              % space for variable QUADRATIC0return
QUADRATIC0return              res 8
                              % space for variable evaluate1result
evaluate1result               res 8
                              % space for variable temp1
temp1                         res 8
                              % space for variable temp2
temp2                         res 8
                              % space for variable temp3
temp3                         res 8
                              % space for variable temp4
temp4                         res 8
                              % space for variable LINEAR0return
LINEAR0return                 res 8
                              % space for variable evaluate1result
evaluate1result               res 8
                              % space for variable lit2
lit2                          res 8
                              % space for variable temp5
temp5                         res 8
                              % space for variable temp6
temp6                         res 8
                              % space for variable main0f1
main0f1                       res 144
                              % space for variable main0arraysize
main0arraysize                res 160
                              % space for variable main0objectWithObject
main0objectWithObject         res 20
                              % space for variable lit3
lit3                          res 8
                              % space for variable lit4
lit4                          res 8
                              % space for variable lit5
lit5                          res 8
                              % space for variable main0f2
main0f2                       res 104
                              % space for variable main0counter
main0counter                  res 4
                              % space for variable lit6
lit6                          res 4
                              % space for variable temp7
temp7                         res 4
                              % space for variable buf
buf                           res 20

