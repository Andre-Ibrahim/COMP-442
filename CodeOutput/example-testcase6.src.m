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
               sub r1, r1, r1
% assigning x1return to variableIdNest2x
               lw r1, x1return(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               jl r11, x0
               sub r1, r1, r1
% assigning x1return to variableIdNest2x
               lw r1, x1return(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               sub r1, r1, r1
%storing 1.0 into lit2
               addi r1, r0, 1.0
               sw lit2(r0), r1
                addi r1, r0, 0
               jl r11, x1
               sub r1, r1, r1
% assigning x1return to variableIdNest2x
               lw r1, x1return(r0)
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
               sw temp1(r0), r3
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
               jl r11, x1
               sub r1, r1, r1
% assigning x1return to variableIdNest2x
               lw r1, x1return(r0)
               sw variableIdNest2x(r0), r1
               addi r1, r0, 0
               jl r11, x1
               sub r1, r1, r1
% assigning x1return to variableIdNest2x
               lw r1, x1return(r0)
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
               sw temp2(r0), r3
               sub r1, r1, r1
% assigning variableIdNest2x to variableIdNest2x
               lw r1, variableIdNest2x(r0)
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
               % space for variable lit2
lit2           res 8
               % space for variable lit3
lit3           res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp1
temp1          res 4
               % space for variable lit5
lit5           res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp2
temp2          res 4
