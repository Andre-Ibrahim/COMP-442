               sub r1, r1, r1
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit1 to i
               lw r1, lit1(r0)
               sw i(r0), r1
               addi r1, r0, 0
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
               sub r1, r1, r1
%storing 1 into lit6
               addi r1, r0, 1
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 77 into lit7
               addi r1, r0, 77
               sw lit7(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning funcCall to i
               lw r1, funcCall(r0)
               sw i(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit8
               addi r1, r0, 1
               sw lit8(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding i with lit8
               lw r1, i(r0)
               lw r2, lit8(r0)
               add r3, r1, r2
               sw temp1(r0), r3
               sub r1, r1, r1
%storing 1 into lit9
               addi r1, r0, 1
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding i with lit9
               lw r1, i(r0)
               lw r2, lit9(r0)
               add r3, r1, r2
               sw temp2(r0), r3

               % space for variable i
i              res 4
               % space for variable lit1
lit1           res 4
               % space for variable lit2
lit2           res 4
               % space for variable lit3
lit3           res 8
               % space for variable lit4
lit4           res 4
               % space for variable lit5
lit5           res 8
               % space for variable lit6
lit6           res 4
               % space for variable lit7
lit7           res 4
               % space for variable lit8
lit8           res 4
               % space for variable temp1
temp1          res 4
               % space for variable lit9
lit9           res 4
               % space for variable temp2
temp2          res 4
