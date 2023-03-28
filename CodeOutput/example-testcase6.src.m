% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to n
               lw r1, x(r0)
               sw n(r0), r1
               addi r1, r0, 0
%storing 1.0 into lit1
               addi r1, r0, 1.0
               sw lit1(r0), r1
                addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
%storing 1.0 into lit2
               addi r1, r0, 1.0
               sw lit2(r0), r1
                addi r1, r0, 0
% assigning lit2 to x
               lw r1, lit2(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
%storing 1 into lit3
               addi r1, r0, 1
               sw lit3(r0), r1
                addi r1, r0, 0
%storing 9 into lit4
               addi r1, r0, 9
               sw lit4(r0), r1
                addi r1, r0, 0
%multiplying lit3 with lit4
               lw r1, lit3(r0)
               lw r2, lit4(r0)
               mul r3, r1, r2
               sw temp17(r0), r3
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
%storing 10 into lit5
               addi r1, r0, 10
               sw lit5(r0), r1
                addi r1, r0, 0
%storing 9 into lit6
               addi r1, r0, 9
               sw lit6(r0), r1
                addi r1, r0, 0
%multiplying lit5 with lit6
               lw r1, lit5(r0)
               lw r2, lit6(r0)
               div r3, r1, r2
               sw temp45(r0), r3
% assigning x to x
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0

               % space for variable x
x              res 4
               % space for variable lit1
lit1           res 8
               % space for variable lit2
lit2           res 8
               % space for variable lit3
lit3           res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp17
temp17         res 4
               % space for variable lit5
lit5           res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp45
temp45         res 4
