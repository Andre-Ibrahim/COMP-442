variableIdNest2
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x0
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2n
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2n(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1.0 into lit1
               addi r1, r0, 1.0
               sw lit1(r0), r1
                addi r1, r0, 0
               jl r11, x1
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               lw r1, x1return(r0)
               sw temp1(r0), r1
               sub r1, r1, r1
% assigning temp1 to variableIdNest2x
               lw r1, temp1(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               jl r11, x0
               lw r1, x1return(r0)
               sw temp2(r0), r1
               sub r1, r1, r1
% assigning temp2 to variableIdNest2x
               lw r1, temp2(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               sub r1, r1, r1
%storing 1.0 into lit2
               addi r1, r0, 1.0
               sw lit2(r0), r1
                addi r1, r0, 0
               jl r11, x1
               lw r1, x1return(r0)
               sw temp3(r0), r1
               sub r1, r1, r1
% assigning temp3 to variableIdNest2x
               lw r1, temp3(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit3
               addi r1, r0, 1
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 9 into lit4
               addi r1, r0, 9
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit3 with lit4
               lw r1, lit3(r0)
               lw r2, lit4(r0)
               mul r3, r1, r2
               sw temp4(r0), r3
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
% generating offset
               sw temp5(r0), r0
               lw r1, variableIdNest2x(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
% getting variable at an offset
               lw r1, temp5(r0)
               lw r2, variableIdNest2x(r1)
               sw temp6(r0), r2
               sub r1, r1, r1
% assigning temp6 to variableIdNest2x
               lw r1, temp6(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
% generating offset
               sw temp7(r0), r0
               lw r1, variableIdNest2x(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp7(r0)
               add r1, r4, r3
               sw temp7(r0), r1
% getting variable at an offset
               lw r1, temp7(r0)
               lw r2, variableIdNest2x(r1)
               sw temp8(r0), r2
               sub r1, r1, r1
% assigning temp8 to variableIdNest2x
               lw r1, temp8(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
% generating offset
               sw temp9(r0), r0
               lw r1, variableIdNest2x(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp9(r0)
               add r1, r4, r3
               sw temp9(r0), r1
               lw r1, variableIdNest2x(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp9(r0)
               add r1, r4, r3
               sw temp9(r0), r1
% getting variable at an offset
               lw r1, temp9(r0)
               lw r2, variableIdNest2x(r1)
               sw temp10(r0), r2
               sub r1, r1, r1
% assigning temp10 to variableIdNest2x
               lw r1, temp10(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
% generating offset
               sw temp11(r0), r0
               lw r1, variableIdNest2x(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp11(r0)
               add r1, r4, r3
               sw temp11(r0), r1
               lw r1, variableIdNest2x(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp11(r0)
               add r1, r4, r3
               sw temp11(r0), r1
% getting variable at an offset
               lw r1, temp11(r0)
               lw r2, variableIdNest2x(r1)
               sw temp12(r0), r2
               sub r1, r1, r1
% assigning temp12 to variableIdNest2x
               lw r1, temp12(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               lw r1, x1return(r0)
               sw temp13(r0), r1
               sub r1, r1, r1
% assigning temp13 to variableIdNest2x
               lw r1, temp13(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               lw r1, x1return(r0)
               sw temp14(r0), r1
               sub r1, r1, r1
% assigning temp14 to variableIdNest2x
               lw r1, temp14(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 10 into lit5
               addi r1, r0, 10
               sw lit5(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 9 into lit6
               addi r1, r0, 9
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit5 with lit6
               lw r1, lit5(r0)
               lw r2, lit6(r0)
               div r3, r1, r2
               sw temp15(r0), r3
% generating offset
               sw temp16(r0), r0
               lw r1, variableIdNest2a(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp16(r0)
               add r1, r4, r3
               sw temp16(r0), r1
               lw r1, variableIdNest2b(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp16(r0)
               add r1, r4, r3
               sw temp16(r0), r1
               lw r1, temp15(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp16(r0)
               add r1, r4, r3
               sw temp16(r0), r1
               lw r1, variableIdNest2c(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp16(r0)
               add r1, r4, r3
               sw temp16(r0), r1
% getting variable at an offset
               lw r1, temp16(r0)
               lw r2, variableIdNest2x(r1)
               sw temp17(r0), r2
               sub r1, r1, r1
% assigning temp17 to variableIdNest2x
               lw r1, temp17(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jr r11
% end of function

               % space for variable variableIdNest2arr
variableIdNest2res 4
               % space for variable variableIdNest2size
variableIdNest2res 4
               % space for variable variableIdNest2x
variableIdNest2res 4
               % space for variable lit1
lit1           res 8
               % space for variable temp1
temp1          res 4
               % space for variable temp2
temp2          res 4
               % space for variable lit2
lit2           res 8
               % space for variable temp3
temp3          res 4
               % space for variable lit3
lit3           res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp4
temp4          res 4
               % space for variable temp5
temp5          res 4
               % space for variable temp6
temp6          res 4
               % space for variable temp7
temp7          res 4
               % space for variable temp8
temp8          res 4
               % space for variable temp9
temp9          res 4
               % space for variable temp10
temp10         res 4
               % space for variable temp11
temp11         res 4
               % space for variable temp12
temp12         res 4
               % space for variable temp13
temp13         res 4
               % space for variable temp14
temp14         res 4
               % space for variable lit5
lit5           res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp15
temp15         res 4
               % space for variable temp16
temp16         res 4
               % space for variable temp17
temp17         res 4
