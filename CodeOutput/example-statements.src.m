               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 1 into lit1
               addi r1, r0, 1
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit2
               addi r1, r0, 2
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit3
               addi r1, r0, 3
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit2 with lit3
               lw r1, lit2(r0)
               lw r2, lit3(r0)
               mul r3, r1, r2
               sw temp1(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding lit1 with temp1
               lw r1, lit1(r0)
               lw r2, temp1(r0)
               add r3, r1, r2
               sw temp2(r0), r3
               sub r1, r1, r1
% assigning temp2 to main0y
               lw r1, temp2(r0)
               sw main0y(r0), r1
               addi r1, r0, 0
               addi r1,r0,buf
               sw -8(r14),r1
               jl r15,getstr
               jl r15,strint    % Convert to integer
               sw main0x(r0),r13     % Store main0x
               sub r1, r1, r1
%storing 10 into lit4
               addi r1, r0, 10
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0y with lit4
               lw r1, main0y(r0)
               lw r2, lit4(r0)
               add r3, r1, r2
               sw temp3(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp3 gt main0x
               lw r1, main0x(r0)
               lw r2, temp3(r0)
               cgt r3, r1, r2
               sw temp4(r0), r3
% starting if statment
                lw r1, temp4(r0)
                bz r1, else1
               sub r1, r1, r1
%storing 10 into lit5
               addi r1, r0, 10
               sw lit5(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0x with lit5
               lw r1, main0x(r0)
               lw r2, lit5(r0)
               add r3, r1, r2
               sw temp5(r0), r3
               % processing: write(temp5)
               lw r1, temp5(r0)
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
               sub r1, r1, r1
%storing 2 into lit6
               addi r1, r0, 2
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation lit6 gt main0x
               lw r1, main0x(r0)
               lw r2, lit6(r0)
               cgt r3, r1, r2
               sw temp6(r0), r3
% starting if statment
                lw r1, temp6(r0)
                bz r1, else2
               sub r1, r1, r1
%storing 9999 into lit7
               addi r1, r0, 9999
               sw lit7(r0), r1
                addi r1, r0, 0
               % processing: write(lit7)
               lw r1, lit7(r0)
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
               j endif2
else2
               sub r1, r1, r1
%storing 3 into lit8
               addi r1, r0, 3
               sw lit8(r0), r1
                addi r1, r0, 0
               % processing: write(lit8)
               lw r1, lit8(r0)
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
endif2               j endif1
else1
               sub r1, r1, r1
%storing 1 into lit9
               addi r1, r0, 1
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0x with lit9
               lw r1, main0x(r0)
               lw r2, lit9(r0)
               add r3, r1, r2
               sw temp7(r0), r3
               % processing: write(temp7)
               lw r1, temp7(r0)
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
endif1               sub r1, r1, r1
%storing 0 into lit10
               addi r1, r0, 0
               sw lit10(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit10 to main0z
               lw r1, lit10(r0)
               sw main0z(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile1
               sub r1, r1, r1
%storing 10 into lit11
               addi r1, r0, 10
               sw lit11(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation lit11 leq main0z
               lw r1, main0z(r0)
               lw r2, lit11(r0)
               cle r3, r1, r2
               sw temp8(r0), r3
               lw r1, temp8(r0)
               bz r1, endwhile1
               % processing: write(main0z)
               lw r1, main0z(r0)
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
               sub r1, r1, r1
%storing 1 into lit12
               addi r1, r0, 1
               sw lit12(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0z with lit12
               lw r1, main0z(r0)
               lw r2, lit12(r0)
               add r3, r1, r2
               sw temp9(r0), r3
               sub r1, r1, r1
% assigning temp9 to main0z
               lw r1, temp9(r0)
               sw main0z(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 88 into lit13
               addi r1, r0, 88
               sw lit13(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit13 to main0p
               lw r1, lit13(r0)
               sw main0p(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile2
               sub r1, r1, r1
%storing 89 into lit14
               addi r1, r0, 89
               sw lit14(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation lit14 leq main0p
               lw r1, main0p(r0)
               lw r2, lit14(r0)
               cle r3, r1, r2
               sw temp10(r0), r3
               lw r1, temp10(r0)
               bz r1, endwhile2
               % processing: write(main0p)
               lw r1, main0p(r0)
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
               sub r1, r1, r1
%storing 1 into lit15
               addi r1, r0, 1
               sw lit15(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0p with lit15
               lw r1, main0p(r0)
               lw r2, lit15(r0)
               add r3, r1, r2
               sw temp11(r0), r3
               sub r1, r1, r1
% assigning temp11 to main0p
               lw r1, temp11(r0)
               sw main0p(r0), r1
               addi r1, r0, 0
j gowhile2
endwhile2
j gowhile1
endwhile1
               hlt

                              % space for variable main0x
main0x                        res 4
                              % space for variable main0y
main0y                        res 4
                              % space for variable main0z
main0z                        res 4
                              % space for variable main0p
main0p                        res 4
                              % space for variable lit1
lit1                          res 4
                              % space for variable lit2
lit2                          res 4
                              % space for variable lit3
lit3                          res 4
                              % space for variable temp1
temp1                         res 4
                              % space for variable temp2
temp2                         res 4
                              % space for variable lit4
lit4                          res 4
                              % space for variable temp3
temp3                         res 4
                              % space for variable temp4
temp4                         res 4
                              % space for variable lit5
lit5                          res 4
                              % space for variable temp5
temp5                         res 4
                              % space for variable buf
buf                           res 20

                              % space for variable lit6
lit6                          res 4
                              % space for variable temp6
temp6                         res 4
                              % space for variable lit7
lit7                          res 4
                              % space for variable lit8
lit8                          res 4
                              % space for variable lit9
lit9                          res 4
                              % space for variable temp7
temp7                         res 4
                              % space for variable lit10
lit10                         res 4
                              % space for variable lit11
lit11                         res 4
                              % space for variable temp8
temp8                         res 4
                              % space for variable lit12
lit12                         res 4
                              % space for variable temp9
temp9                         res 4
                              % space for variable lit13
lit13                         res 4
                              % space for variable lit14
lit14                         res 4
                              % space for variable temp10
temp10                        res 4
                              % space for variable lit15
lit15                         res 4
                              % space for variable temp11
temp11                        res 4
