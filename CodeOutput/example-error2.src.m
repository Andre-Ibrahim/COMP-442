               entry
               addi r14, r0, topaddr
               hlt
               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 1 into lit1
               addi r1, r0, 1
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit1 to main0x
               lw r1, lit1(r0)
               sw main0x(r0), r1
               addi r1, r0, 0
               hlt

               % space for variable main0x
main0x         res 8
               % space for variable lit1
lit1           res 4
