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
               sub r1, r1, r1
%storing 1 into lit2
               addi r1, r0, 1
               sw lit2(r0), r1
                addi r1, r0, 0
               jl r11, d1
               sub r1, r1, r1
%storing 2 into lit3
               addi r1, r0, 2
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit3 to main0y
               lw r1, lit3(r0)
               sw main0y(r0), r1
               addi r1, r0, 0
               hlt
x0
               jr r11
% end of function

                              % space for variable main0x
main0x                        res 8
                              % space for variable main0y
main0y                        res 4
                              % space for variable lit1
lit1                          res 4
                              % space for variable lit2
lit2                          res 4
                              % space for variable lit3
lit3                          res 4
                              % space for variable x0return
x0return                      res 4
                              % space for variable x0recover
x0recover                     res 4
