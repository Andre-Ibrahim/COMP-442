               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 1 into lit1
               addi r1, r0, 1
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit2
               addi r1, r0, 1
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit3
               addi r1, r0, 5
               sw lit3(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp1(r0), r0
               lw r1, lit1(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp1(r0)
               add r1, r4, r3
               sw temp1(r0), r1
               lw r1, lit2(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp1(r0)
               add r1, r4, r3
               sw temp1(r0), r1
               sub r1, r1, r1
% assigning lit3 to main0x with offset temp1
               lw r2, temp1(r0)
               lw r1, lit3(r0)
               sw main0x(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit4
               addi r1, r0, 5
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit5
               addi r1, r0, 3
               sw lit5(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 7 into lit6
               addi r1, r0, 7
               sw lit6(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp2(r0), r0
               lw r1, lit4(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp2(r0)
               add r1, r4, r3
               sw temp2(r0), r1
               lw r1, lit5(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp2(r0)
               add r1, r4, r3
               sw temp2(r0), r1
               sub r1, r1, r1
% assigning lit6 to main0x with offset temp2
               lw r2, temp2(r0)
               lw r1, lit6(r0)
               sw main0x(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit7
               addi r1, r0, 5
               sw lit7(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit8
               addi r1, r0, 3
               sw lit8(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp3(r0), r0
               lw r1, lit7(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp3(r0)
               add r1, r4, r3
               sw temp3(r0), r1
               lw r1, lit8(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp3(r0)
               add r1, r4, r3
               sw temp3(r0), r1
% getting variable at an offset
               lw r1, temp3(r0)
               lw r2, main0x(r1)
               sw temp4(r0), r2
               sub r1, r1, r1
% assigning temp4 to main0y
               lw r1, temp4(r0)
               sw main0y(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit9
               addi r1, r0, 1
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit10
               addi r1, r0, 1
               sw lit10(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp5(r0), r0
               lw r1, lit9(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
               lw r1, lit10(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
% getting variable at an offset
               lw r1, temp5(r0)
               lw r2, main0x(r1)
               sw temp6(r0), r2
               sub r1, r1, r1
% assigning temp6 to main0z
               lw r1, temp6(r0)
               sw main0z(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying main0y with main0z
               lw r1, main0y(r0)
               lw r2, main0z(r0)
               mul r3, r1, r2
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
               hlt

               % space for variable main0x
main0x         res 800
               % space for variable main0y
main0y         res 4
               % space for variable main0z
main0z         res 4
               % space for variable lit1
lit1           res 4
               % space for variable lit2
lit2           res 4
               % space for variable lit3
lit3           res 4
               % space for variable temp1
temp1          res 4
               % space for variable lit4
lit4           res 4
               % space for variable lit5
lit5           res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp2
temp2          res 4
               % space for variable lit7
lit7           res 4
               % space for variable lit8
lit8           res 4
               % space for variable temp3
temp3          res 4
               % space for variable temp4
temp4          res 4
               % space for variable lit9
lit9           res 4
               % space for variable lit10
lit10          res 4
               % space for variable temp5
temp5          res 4
               % space for variable temp6
temp6          res 4
               % space for variable temp7
temp7          res 4
               % space for variable buf
buf            res 20

