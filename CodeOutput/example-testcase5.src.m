functionBlocks2
               sub r1, r1, r1
% assigning functionBlocks2size to functionBlocks2n
               lw r1, functionBlocks2size(r0)
               sw functionBlocks2n(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit1 to functionBlocks2i
               lw r1, lit1(r0)
               sw functionBlocks2i(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile1
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation functionBlocks2n lt functionBlocks2i
               lw r1, functionBlocks2i(r0)
               lw r2, functionBlocks2n(r0)
               clt r3, r1, r2
               sw temp1(r0), r3
               lw r1, temp1(r0)
               bz r1, endwhile1
% generating offset
               sw temp2(r0), r0
               lw r1, functionBlocks2i(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp2(r0)
               add r1, r4, r3
               sw temp2(r0), r1
% getting variable at an offset
               lw r1, temp2(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp3(r0), r2
               % processing: write(temp3)
               lw r1, temp3(r0)
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
%storing 1 into lit2
               addi r1, r0, 1
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding functionBlocks2i with lit2
               lw r1, functionBlocks2i(r0)
               lw r2, lit2(r0)
               add r3, r1, r2
               sw temp4(r0), r3
               sub r1, r1, r1
% assigning temp4 to functionBlocks2i
               lw r1, temp4(r0)
               sw functionBlocks2i(r0), r1
               addi r1, r0, 0
j gowhile1
endwhile1
               addi r1,r0,buf
               sw -8(r14),r1
               jl r15,getstr
               jl r15,strint    % Convert to integer
               sw functionBlocks2n(r0),r13     % Store functionBlocks2n
%starting while loop
gowhile2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation functionBlocks2n lt functionBlocks2i
               lw r1, functionBlocks2i(r0)
               lw r2, functionBlocks2n(r0)
               clt r3, r1, r2
               sw temp5(r0), r3
               lw r1, temp5(r0)
               bz r1, endwhile2
% generating offset
               sw temp6(r0), r0
               lw r1, functionBlocks2i(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp6(r0)
               add r1, r4, r3
               sw temp6(r0), r1
% getting variable at an offset
               lw r1, temp6(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp7(r0), r2
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
j gowhile2
endwhile2
%starting while loop
gowhile3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation functionBlocks2n lt functionBlocks2i
               lw r1, functionBlocks2i(r0)
               lw r2, functionBlocks2n(r0)
               clt r3, r1, r2
               sw temp8(r0), r3
               lw r1, temp8(r0)
               bz r1, endwhile3
j gowhile3
endwhile3
               sub r1, r1, r1
%storing 1 into lit3
               addi r1, r0, 1
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding functionBlocks2j with lit3
               lw r1, functionBlocks2j(r0)
               lw r2, lit3(r0)
               add r3, r1, r2
               sw temp9(r0), r3
% generating offset
               sw temp10(r0), r0
               lw r1, temp9(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp10(r0)
               add r1, r4, r3
               sw temp10(r0), r1
% getting variable at an offset
               lw r1, temp10(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp11(r0), r2
% generating offset
               sw temp12(r0), r0
               lw r1, functionBlocks2j(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp12(r0)
               add r1, r4, r3
               sw temp12(r0), r1
% getting variable at an offset
               lw r1, temp12(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp13(r0), r2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp11 gt temp13
               lw r1, temp13(r0)
               lw r2, temp11(r0)
               cgt r3, r1, r2
               sw temp14(r0), r3
% starting if statment
                lw r1, temp14(r0)
                bz r1, else1
% generating offset
               sw temp15(r0), r0
               lw r1, functionBlocks2j(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp15(r0)
               add r1, r4, r3
               sw temp15(r0), r1
% getting variable at an offset
               lw r1, temp15(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp16(r0), r2
               sub r1, r1, r1
% assigning temp16 to functionBlocks2temp
               lw r1, temp16(r0)
               sw functionBlocks2temp(r0), r1
               addi r1, r0, 0
               j endif1
else1
endif1               sub r1, r1, r1
%storing 1 into lit4
               addi r1, r0, 1
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding functionBlocks2j with lit4
               lw r1, functionBlocks2j(r0)
               lw r2, lit4(r0)
               add r3, r1, r2
               sw temp17(r0), r3
% generating offset
               sw temp18(r0), r0
               lw r1, temp17(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp18(r0)
               add r1, r4, r3
               sw temp18(r0), r1
% getting variable at an offset
               lw r1, temp18(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp19(r0), r2
% generating offset
               sw temp20(r0), r0
               lw r1, functionBlocks2j(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp20(r0)
               add r1, r4, r3
               sw temp20(r0), r1
% getting variable at an offset
               lw r1, temp20(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp21(r0), r2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp19 gt temp21
               lw r1, temp21(r0)
               lw r2, temp19(r0)
               cgt r3, r1, r2
               sw temp22(r0), r3
% starting if statment
                lw r1, temp22(r0)
                bz r1, else2
               j endif2
else2
% generating offset
               sw temp23(r0), r0
               lw r1, functionBlocks2j(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp23(r0)
               add r1, r4, r3
               sw temp23(r0), r1
% getting variable at an offset
               lw r1, temp23(r0)
               lw r2, functionBlocks2arr(r1)
               sw temp24(r0), r2
               sub r1, r1, r1
% assigning temp24 to functionBlocks2temp
               lw r1, temp24(r0)
               sw functionBlocks2temp(r0), r1
               addi r1, r0, 0
endif2               lw r1, functionBlocks2n(r0)
               sw functionBlocks2return(r0), r1
               jr r11
% end of function

               % space for variable functionBlocks2arr
functionBlocks2res 4
               % space for variable functionBlocks2size
functionBlocks2res 4
               % space for variable functionBlocks2n
functionBlocks2res 4
               % space for variable functionBlocks2i
functionBlocks2res 4
               % space for variable lit1
lit1           res 4
               % space for variable temp1
temp1          res 4
               % space for variable temp2
temp2          res 4
               % space for variable temp3
temp3          res 4
               % space for variable buf
buf            res 20

               % space for variable lit2
lit2           res 4
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
               % space for variable lit3
lit3           res 4
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
               % space for variable temp15
temp15         res 4
               % space for variable temp16
temp16         res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp17
temp17         res 4
               % space for variable temp18
temp18         res 4
               % space for variable temp19
temp19         res 4
               % space for variable temp20
temp20         res 4
               % space for variable temp21
temp21         res 4
               % space for variable temp22
temp22         res 4
               % space for variable temp23
temp23         res 4
               % space for variable temp24
temp24         res 4
