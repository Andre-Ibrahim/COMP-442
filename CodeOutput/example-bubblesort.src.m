bubbleSort2
               sub r1, r1, r1
% assigning bubbleSort2size to bubbleSort2n
               lw r1, bubbleSort2size(r0)
               sw bubbleSort2n(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit1 to bubbleSort2i
               lw r1, lit1(r0)
               sw bubbleSort2i(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit2
               addi r1, r0, 0
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit2 to bubbleSort2j
               lw r1, lit2(r0)
               sw bubbleSort2j(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit3
               addi r1, r0, 0
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit3 to bubbleSort2temp
               lw r1, lit3(r0)
               sw bubbleSort2temp(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile1
               sub r1, r1, r1
%storing 1 into lit4
               addi r1, r0, 1
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2n with lit4
               lw r1, bubbleSort2n(r0)
               lw r2, lit4(r0)
               sub r3, r1, r2
               sw temp1(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp1 lt bubbleSort2i
               lw r1, bubbleSort2i(r0)
               lw r2, temp1(r0)
               clt r3, r1, r2
               sw temp2(r0), r3
               lw r1, temp2(r0)
               bz r1, endwhile1
%starting while loop
gowhile2
               sub r1, r1, r1
%storing 1 into lit5
               addi r1, r0, 1
               sw lit5(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2i with lit5
               lw r1, bubbleSort2i(r0)
               lw r2, lit5(r0)
               sub r3, r1, r2
               sw temp3(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2n with temp3
               lw r1, bubbleSort2n(r0)
               lw r2, temp3(r0)
               sub r3, r1, r2
               sw temp4(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp4 lt bubbleSort2j
               lw r1, bubbleSort2j(r0)
               lw r2, temp4(r0)
               clt r3, r1, r2
               sw temp5(r0), r3
               lw r1, temp5(r0)
               bz r1, endwhile2
               sub r1, r1, r1
%storing 1 into lit6
               addi r1, r0, 1
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2j with lit6
               lw r1, bubbleSort2j(r0)
               lw r2, lit6(r0)
               add r3, r1, r2
               sw temp6(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation bubbleSort2arr gt bubbleSort2arr
               lw r1, bubbleSort2arr(r0)
               lw r2, bubbleSort2arr(r0)
               cgt r3, r1, r2
               sw temp7(r0), r3
% starting if statment
                lw r1, temp7(r0)
                bz r1, else1
               sub r1, r1, r1
% assigning bubbleSort2arr to bubbleSort2temp
               lw r1, bubbleSort2arr(r0)
               sw bubbleSort2temp(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit7
               addi r1, r0, 1
               sw lit7(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2j with lit7
               lw r1, bubbleSort2j(r0)
               lw r2, lit7(r0)
               add r3, r1, r2
               sw temp8(r0), r3
               sub r1, r1, r1
% assigning bubbleSort2arr to bubbleSort2arr
               lw r1, bubbleSort2arr(r0)
               sw bubbleSort2arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit8
               addi r1, r0, 1
               sw lit8(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2j with lit8
               lw r1, bubbleSort2j(r0)
               lw r2, lit8(r0)
               add r3, r1, r2
               sw temp9(r0), r3
               sub r1, r1, r1
% assigning bubbleSort2temp to bubbleSort2arr
               lw r1, bubbleSort2temp(r0)
               sw bubbleSort2arr(r0), r1
               addi r1, r0, 0
               j endif1
else1endif1               sub r1, r1, r1
%storing 1 into lit9
               addi r1, r0, 1
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2j with lit9
               lw r1, bubbleSort2j(r0)
               lw r2, lit9(r0)
               add r3, r1, r2
               sw temp10(r0), r3
               sub r1, r1, r1
% assigning temp10 to bubbleSort2j
               lw r1, temp10(r0)
               sw bubbleSort2j(r0), r1
               addi r1, r0, 0
j gowhile2
endwhile2
               sub r1, r1, r1
%storing 1 into lit10
               addi r1, r0, 1
               sw lit10(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding bubbleSort2i with lit10
               lw r1, bubbleSort2i(r0)
               lw r2, lit10(r0)
               add r3, r1, r2
               sw temp11(r0), r3
               sub r1, r1, r1
% assigning temp11 to bubbleSort2i
               lw r1, temp11(r0)
               sw bubbleSort2i(r0), r1
               addi r1, r0, 0
j gowhile1
endwhile1
               jr r11
% end of function
printArray2
               sub r1, r1, r1
% assigning printArray2size to printArray2n
               lw r1, printArray2size(r0)
               sw printArray2n(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit11
               addi r1, r0, 0
               sw lit11(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit11 to printArray2i
               lw r1, lit11(r0)
               sw printArray2i(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation printArray2n lt printArray2i
               lw r1, printArray2i(r0)
               lw r2, printArray2n(r0)
               clt r3, r1, r2
               sw temp12(r0), r3
               lw r1, temp12(r0)
               bz r1, endwhile3
               % processing: write(printArray2arr)
               lw r1, printArray2arr(r0)
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
%adding printArray2i with lit12
               lw r1, printArray2i(r0)
               lw r2, lit12(r0)
               add r3, r1, r2
               sw temp13(r0), r3
               sub r1, r1, r1
% assigning temp13 to printArray2i
               lw r1, temp13(r0)
               sw printArray2i(r0), r1
               addi r1, r0, 0
j gowhile3
endwhile3
               jr r11
% end of function
               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 0 into lit13
               addi r1, r0, 0
               sw lit13(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 64 into lit14
               addi r1, r0, 64
               sw lit14(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit14 to main0arr
               lw r1, lit14(r0)
               sw main0arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit15
               addi r1, r0, 1
               sw lit15(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 34 into lit16
               addi r1, r0, 34
               sw lit16(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit16 to main0arr
               lw r1, lit16(r0)
               sw main0arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit17
               addi r1, r0, 2
               sw lit17(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 25 into lit18
               addi r1, r0, 25
               sw lit18(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit18 to main0arr
               lw r1, lit18(r0)
               sw main0arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit19
               addi r1, r0, 3
               sw lit19(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 12 into lit20
               addi r1, r0, 12
               sw lit20(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit20 to main0arr
               lw r1, lit20(r0)
               sw main0arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 4 into lit21
               addi r1, r0, 4
               sw lit21(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 22 into lit22
               addi r1, r0, 22
               sw lit22(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit22 to main0arr
               lw r1, lit22(r0)
               sw main0arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit23
               addi r1, r0, 5
               sw lit23(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 11 into lit24
               addi r1, r0, 11
               sw lit24(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit24 to main0arr
               lw r1, lit24(r0)
               sw main0arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 6 into lit25
               addi r1, r0, 6
               sw lit25(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 90 into lit26
               addi r1, r0, 90
               sw lit26(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning temp101 to main0arr
               lw r1, temp101(r0)
               sw main0arr(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 7 into lit27
               addi r1, r0, 7
               sw lit27(r0), r1
                addi r1, r0, 0
               jl r11, printarray2
               sub r1, r1, r1
%storing 7 into lit28
               addi r1, r0, 7
               sw lit28(r0), r1
                addi r1, r0, 0
               lw r1, main0arr(r0)
               sw bubbleSort2arr(r0), r1
               lw r1, lit28(r0)
               sw bubbleSort2size(r0), r1
               jl r11, bubbleSort2
               sub r1, r1, r1
%storing 7 into lit29
               addi r1, r0, 7
               sw lit29(r0), r1
                addi r1, r0, 0
               jl r11, printarray2
               hlt

               % space for variable bubbleSort2arr
bubbleSort2arr res 4
               % space for variable bubbleSort2size
bubbleSort2sizeres 4
               % space for variable bubbleSort2n
bubbleSort2n   res 4
               % space for variable bubbleSort2i
bubbleSort2i   res 4
               % space for variable bubbleSort2j
bubbleSort2j   res 4
               % space for variable bubbleSort2temp
bubbleSort2tempres 4
               % space for variable lit1
lit1           res 4
               % space for variable lit2
lit2           res 4
               % space for variable lit3
lit3           res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp1
temp1          res 4
               % space for variable temp2
temp2          res 4
               % space for variable lit5
lit5           res 4
               % space for variable temp3
temp3          res 4
               % space for variable temp4
temp4          res 4
               % space for variable temp5
temp5          res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp6
temp6          res 4
               % space for variable temp7
temp7          res 4
               % space for variable lit7
lit7           res 4
               % space for variable temp8
temp8          res 4
               % space for variable lit8
lit8           res 4
               % space for variable temp9
temp9          res 4
               % space for variable lit9
lit9           res 4
               % space for variable temp10
temp10         res 4
               % space for variable lit10
lit10          res 4
               % space for variable temp11
temp11         res 4
               % space for variable printArray2arr
printArray2arr res 4
               % space for variable printArray2size
printArray2sizeres 4
               % space for variable printArray2n
printArray2n   res 4
               % space for variable printArray2i
printArray2i   res 4
               % space for variable lit11
lit11          res 4
               % space for variable temp12
temp12         res 4
               % space for variable buf
buf            res 20

               % space for variable lit12
lit12          res 4
               % space for variable temp13
temp13         res 4
               % space for variable main0arr
main0arr       res 28
               % space for variable lit13
lit13          res 4
               % space for variable lit14
lit14          res 4
               % space for variable lit15
lit15          res 4
               % space for variable lit16
lit16          res 4
               % space for variable lit17
lit17          res 4
               % space for variable lit18
lit18          res 4
               % space for variable lit19
lit19          res 4
               % space for variable lit20
lit20          res 4
               % space for variable lit21
lit21          res 4
               % space for variable lit22
lit22          res 4
               % space for variable lit23
lit23          res 4
               % space for variable lit24
lit24          res 4
               % space for variable lit25
lit25          res 4
               % space for variable lit26
lit26          res 4
               % space for variable lit27
lit27          res 4
               % space for variable lit28
lit28          res 4
               % space for variable lit29
lit29          res 4
