funcCallsParameters1
               sub r1, r1, r1
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit1 to funcCallsParameters1i
               lw r1, lit1(r0)
               sw funcCallsParameters1i(r0), r1
               addi r1, r0, 0
               jl r11, funcCall1
               jl r11, funcCall2
               jl r11, funcCall6
               sub r1, r1, r1
%storing 0 into lit2
               addi r1, r0, 0
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1.0 into lit3
               addi r1, r0, 1.0
               sw lit3(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp1(r0), r0
               lw r1, funcCallsParameters1i(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp1(r0)
               add r1, r4, r3
               sw temp1(r0), r1
% getting variable at an offset
               lw r1, temp1(r0)
               lw r2, funcCallsParameters1arr(r1)
               sw temp2(r0), r2
               jl r11, funcCall6
               sub r1, r1, r1
%storing 0 into lit4
               addi r1, r0, 0
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1.0 into lit5
               addi r1, r0, 1.0
               sw lit5(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp3(r0), r0
               lw r1, funcCallsParameters1i(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp3(r0)
               add r1, r4, r3
               sw temp3(r0), r1
% getting variable at an offset
               lw r1, temp3(r0)
               lw r2, funcCallsParameters1arr(r1)
               sw temp4(r0), r2
               sub r1, r1, r1
%storing 1 into lit6
               addi r1, r0, 1
               sw lit6(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp5(r0), r0
               lw r1, lit6(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
               lw r1, funcCallsParameters1i(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
% getting variable at an offset
               lw r1, temp5(r0)
               lw r2, funcCallsParameters1arr(r1)
               sw temp6(r0), r2
               jl r11, funcCall6
               jl r11, funcCall3
               lw r1, funcCall3return(r0)
               sw temp7(r0), r1
               jl r11, funcCall2
               sub r1, r1, r1
%storing 77 into lit7
               addi r1, r0, 77
               sw lit7(r0), r1
                addi r1, r0, 0
               jl r11, funcCall1
               lw r1, funcCall1return(r0)
               sw temp8(r0), r1
               sub r1, r1, r1
% assigning temp8 to funcCallsParameters1i
               lw r1, temp8(r0)
               sw funcCallsParameters1i(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit8
               addi r1, r0, 1
               sw lit8(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding funcCallsParameters1i with lit8
               lw r1, funcCallsParameters1i(r0)
               lw r2, lit8(r0)
               add r3, r1, r2
               sw temp9(r0), r3
               jl r11, i0
% generating offset
               sw temp10(r0), r0
               lw r1, funcCallsParameters1i(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp10(r0)
               add r1, r4, r3
               sw temp10(r0), r1
% getting variable at an offset
               lw r1, temp10(r0)
               lw r2, funcCallsParameters1arr(r1)
               sw temp11(r0), r2
               jl r11, funcCall2
               sub r1, r1, r1
%storing 1 into lit9
               addi r1, r0, 1
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding funcCallsParameters1i with lit9
               lw r1, funcCallsParameters1i(r0)
               lw r2, lit9(r0)
               add r3, r1, r2
               sw temp12(r0), r3
               jl r11, funcCall1
               lw r1, funcCallsParameters1i(r0)
               sw funcCallsParameters1return(r0), r1
               jr r11
% end of function

                              % space for variable funcCallsParameters1x
funcCallsParameters1x         res 4
                              % space for variable funcCallsParameters1return
funcCallsParameters1return    res 4
                              % space for variable funcCallsParameters1i
funcCallsParameters1i         res 4
                              % space for variable lit1
lit1                          res 4
                              % space for variable lit2
lit2                          res 4
                              % space for variable lit3
lit3                          res 8
                              % space for variable temp1
temp1                         res 4
                              % space for variable temp2
temp2                         res 4
                              % space for variable lit4
lit4                          res 4
                              % space for variable lit5
lit5                          res 8
                              % space for variable temp3
temp3                         res 4
                              % space for variable temp4
temp4                         res 4
                              % space for variable lit6
lit6                          res 4
                              % space for variable temp5
temp5                         res 4
                              % space for variable temp6
temp6                         res 4
                              % space for variable temp7
temp7                         res 4
                              % space for variable lit7
lit7                          res 4
                              % space for variable temp8
temp8                         res 4
                              % space for variable lit8
lit8                          res 4
                              % space for variable temp9
temp9                         res 4
                              % space for variable temp10
temp10                        res 4
                              % space for variable temp11
temp11                        res 4
                              % space for variable lit9
lit9                          res 4
                              % space for variable temp12
temp12                        res 4
