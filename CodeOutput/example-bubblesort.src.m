               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 64 into lit2
               addi r1, r0, 64
               sw lit2(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp1(r0), r0
               lw r1, lit1(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp1(r0)
               add r1, r4, r3
               sw temp1(r0), r1
               sub r1, r1, r1
% assigning lit2 to main0arr with offset temp1
               lw r2, temp1(r0)
               lw r1, lit2(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit3
               addi r1, r0, 1
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 34 into lit4
               addi r1, r0, 34
               sw lit4(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp2(r0), r0
               lw r1, lit3(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp2(r0)
               add r1, r4, r3
               sw temp2(r0), r1
               sub r1, r1, r1
% assigning lit4 to main0arr with offset temp2
               lw r2, temp2(r0)
               lw r1, lit4(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit5
               addi r1, r0, 2
               sw lit5(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 25 into lit6
               addi r1, r0, 25
               sw lit6(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp3(r0), r0
               lw r1, lit5(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp3(r0)
               add r1, r4, r3
               sw temp3(r0), r1
               sub r1, r1, r1
% assigning lit6 to main0arr with offset temp3
               lw r2, temp3(r0)
               lw r1, lit6(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit7
               addi r1, r0, 3
               sw lit7(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 12 into lit8
               addi r1, r0, 12
               sw lit8(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp4(r0), r0
               lw r1, lit7(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp4(r0)
               add r1, r4, r3
               sw temp4(r0), r1
               sub r1, r1, r1
% assigning lit8 to main0arr with offset temp4
               lw r2, temp4(r0)
               lw r1, lit8(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 4 into lit9
               addi r1, r0, 4
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 22 into lit10
               addi r1, r0, 22
               sw lit10(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp5(r0), r0
               lw r1, lit9(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
               sub r1, r1, r1
% assigning lit10 to main0arr with offset temp5
               lw r2, temp5(r0)
               lw r1, lit10(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit11
               addi r1, r0, 5
               sw lit11(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 11 into lit12
               addi r1, r0, 11
               sw lit12(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp6(r0), r0
               lw r1, lit11(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp6(r0)
               add r1, r4, r3
               sw temp6(r0), r1
               sub r1, r1, r1
% assigning lit12 to main0arr with offset temp6
               lw r2, temp6(r0)
               lw r1, lit12(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 6 into lit13
               addi r1, r0, 6
               sw lit13(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 90 into lit14
               addi r1, r0, 90
               sw lit14(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp7(r0), r0
               lw r1, lit13(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp7(r0)
               add r1, r4, r3
               sw temp7(r0), r1
               sub r1, r1, r1
% assigning lit14 to main0arr with offset temp7
               lw r2, temp7(r0)
               lw r1, lit14(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 7 into lit15
               addi r1, r0, 7
               sw lit15(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit15 to main0b
               lw r1, lit15(r0)
               sw main0b(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit16
               addi r1, r0, 0
               sw lit16(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit16 to main0d
               lw r1, lit16(r0)
               sw main0d(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile1
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation main0b lt main0d
               lw r1, main0d(r0)
               lw r2, main0b(r0)
               clt r3, r1, r2
               sw temp8(r0), r3
               lw r1, temp8(r0)
               bz r1, endwhile1
% generating offset
               sw temp9(r0), r0
               lw r1, main0d(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp9(r0)
               add r1, r4, r3
               sw temp9(r0), r1
% getting variable at an offset
               lw r1, temp9(r0)
               lw r2, main0arr(r1)
               sw temp10(r0), r2
               % processing: write(temp10)
               lw r1, temp10(r0)
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
%storing 1 into lit17
               addi r1, r0, 1
               sw lit17(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0d with lit17
               lw r1, main0d(r0)
               lw r2, lit17(r0)
               add r3, r1, r2
               sw temp11(r0), r3
               sub r1, r1, r1
% assigning temp11 to main0d
               lw r1, temp11(r0)
               sw main0d(r0), r1
               addi r1, r0, 0
j gowhile1
endwhile1
               sub r1, r1, r1
%storing 7 into lit18
               addi r1, r0, 7
               sw lit18(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit18 to main0n
               lw r1, lit18(r0)
               sw main0n(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit19
               addi r1, r0, 0
               sw lit19(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit19 to main0i
               lw r1, lit19(r0)
               sw main0i(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit20
               addi r1, r0, 0
               sw lit20(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit20 to main0k
               lw r1, lit20(r0)
               sw main0k(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit21
               addi r1, r0, 0
               sw lit21(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit21 to main0temp
               lw r1, lit21(r0)
               sw main0temp(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile2
               sub r1, r1, r1
%storing 1 into lit22
               addi r1, r0, 1
               sw lit22(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0n with lit22
               lw r1, main0n(r0)
               lw r2, lit22(r0)
               sub r3, r1, r2
               sw temp12(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp12 lt main0i
               lw r1, main0i(r0)
               lw r2, temp12(r0)
               clt r3, r1, r2
               sw temp13(r0), r3
               lw r1, temp13(r0)
               bz r1, endwhile2
%starting while loop
gowhile3
               sub r1, r1, r1
%storing 1 into lit23
               addi r1, r0, 1
               sw lit23(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0i with lit23
               lw r1, main0i(r0)
               lw r2, lit23(r0)
               add r3, r1, r2
               sw temp14(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0n with temp14
               lw r1, main0n(r0)
               lw r2, temp14(r0)
               sub r3, r1, r2
               sw temp15(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp15 lt main0k
               lw r1, main0k(r0)
               lw r2, temp15(r0)
               clt r3, r1, r2
               sw temp16(r0), r3
               lw r1, temp16(r0)
               bz r1, endwhile3
               sub r1, r1, r1
%storing 1 into lit24
               addi r1, r0, 1
               sw lit24(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0k with lit24
               lw r1, main0k(r0)
               lw r2, lit24(r0)
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
               lw r2, main0arr(r1)
               sw temp19(r0), r2
% generating offset
               sw temp20(r0), r0
               lw r1, main0k(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp20(r0)
               add r1, r4, r3
               sw temp20(r0), r1
% getting variable at an offset
               lw r1, temp20(r0)
               lw r2, main0arr(r1)
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
                bz r1, else1
% generating offset
               sw temp23(r0), r0
               lw r1, main0k(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp23(r0)
               add r1, r4, r3
               sw temp23(r0), r1
% getting variable at an offset
               lw r1, temp23(r0)
               lw r2, main0arr(r1)
               sw temp24(r0), r2
               sub r1, r1, r1
% assigning temp24 to main0temp
               lw r1, temp24(r0)
               sw main0temp(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit25
               addi r1, r0, 1
               sw lit25(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0k with lit25
               lw r1, main0k(r0)
               lw r2, lit25(r0)
               add r3, r1, r2
               sw temp25(r0), r3
% generating offset
               sw temp26(r0), r0
               lw r1, temp25(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp26(r0)
               add r1, r4, r3
               sw temp26(r0), r1
% getting variable at an offset
               lw r1, temp26(r0)
               lw r2, main0arr(r1)
               sw temp27(r0), r2
% generating offset
               sw temp28(r0), r0
               lw r1, main0k(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp28(r0)
               add r1, r4, r3
               sw temp28(r0), r1
               sub r1, r1, r1
% assigning temp27 to main0arr with offset temp28
               lw r2, temp28(r0)
               lw r1, temp27(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit26
               addi r1, r0, 1
               sw lit26(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0k with lit26
               lw r1, main0k(r0)
               lw r2, lit26(r0)
               add r3, r1, r2
               sw temp29(r0), r3
% generating offset
               sw temp30(r0), r0
               lw r1, temp29(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp30(r0)
               add r1, r4, r3
               sw temp30(r0), r1
               sub r1, r1, r1
% assigning main0temp to main0arr with offset temp30
               lw r2, temp30(r0)
               lw r1, main0temp(r0)
               sw main0arr(r2), r1
               addi r1, r0, 0
               j endif1
else1
endif1               sub r1, r1, r1
%storing 1 into lit27
               addi r1, r0, 1
               sw lit27(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0k with lit27
               lw r1, main0k(r0)
               lw r2, lit27(r0)
               add r3, r1, r2
               sw temp31(r0), r3
               sub r1, r1, r1
% assigning temp31 to main0k
               lw r1, temp31(r0)
               sw main0k(r0), r1
               addi r1, r0, 0
j gowhile3
endwhile3
               sub r1, r1, r1
%storing 1 into lit28
               addi r1, r0, 1
               sw lit28(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0i with lit28
               lw r1, main0i(r0)
               lw r2, lit28(r0)
               add r3, r1, r2
               sw temp32(r0), r3
               sub r1, r1, r1
% assigning temp32 to main0i
               lw r1, temp32(r0)
               sw main0i(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit29
               addi r1, r0, 0
               sw lit29(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit29 to main0k
               lw r1, lit29(r0)
               sw main0k(r0), r1
               addi r1, r0, 0
j gowhile2
endwhile2
               sub r1, r1, r1
%storing 10000 into lit30
               addi r1, r0, 10000
               sw lit30(r0), r1
                addi r1, r0, 0
               % processing: write(lit30)
               lw r1, lit30(r0)
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
%storing 7 into lit31
               addi r1, r0, 7
               sw lit31(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit31 to main0w
               lw r1, lit31(r0)
               sw main0w(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit32
               addi r1, r0, 0
               sw lit32(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit32 to main0e
               lw r1, lit32(r0)
               sw main0e(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile4
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation main0w lt main0e
               lw r1, main0e(r0)
               lw r2, main0w(r0)
               clt r3, r1, r2
               sw temp33(r0), r3
               lw r1, temp33(r0)
               bz r1, endwhile4
% generating offset
               sw temp34(r0), r0
               lw r1, main0e(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp34(r0)
               add r1, r4, r3
               sw temp34(r0), r1
% getting variable at an offset
               lw r1, temp34(r0)
               lw r2, main0arr(r1)
               sw temp35(r0), r2
               % processing: write(temp35)
               lw r1, temp35(r0)
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
%storing 1 into lit33
               addi r1, r0, 1
               sw lit33(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0e with lit33
               lw r1, main0e(r0)
               lw r2, lit33(r0)
               add r3, r1, r2
               sw temp36(r0), r3
               sub r1, r1, r1
% assigning temp36 to main0e
               lw r1, temp36(r0)
               sw main0e(r0), r1
               addi r1, r0, 0
j gowhile4
endwhile4
               hlt

               % space for variable main0arr
main0arr       res 28
               % space for variable lit1
lit1           res 4
               % space for variable lit2
lit2           res 4
               % space for variable temp1
temp1          res 4
               % space for variable lit3
lit3           res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp2
temp2          res 4
               % space for variable lit5
lit5           res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp3
temp3          res 4
               % space for variable lit7
lit7           res 4
               % space for variable lit8
lit8           res 4
               % space for variable temp4
temp4          res 4
               % space for variable lit9
lit9           res 4
               % space for variable lit10
lit10          res 4
               % space for variable temp5
temp5          res 4
               % space for variable lit11
lit11          res 4
               % space for variable lit12
lit12          res 4
               % space for variable temp6
temp6          res 4
               % space for variable lit13
lit13          res 4
               % space for variable lit14
lit14          res 4
               % space for variable temp7
temp7          res 4
               % space for variable main0b
main0b         res 4
               % space for variable main0d
main0d         res 4
               % space for variable lit15
lit15          res 4
               % space for variable lit16
lit16          res 4
               % space for variable temp8
temp8          res 4
               % space for variable temp9
temp9          res 4
               % space for variable temp10
temp10         res 4
               % space for variable buf
buf            res 20

               % space for variable lit17
lit17          res 4
               % space for variable temp11
temp11         res 4
               % space for variable main0n
main0n         res 4
               % space for variable main0i
main0i         res 4
               % space for variable main0k
main0k         res 4
               % space for variable main0temp
main0temp      res 4
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
               % space for variable temp12
temp12         res 4
               % space for variable temp13
temp13         res 4
               % space for variable lit23
lit23          res 4
               % space for variable temp14
temp14         res 4
               % space for variable temp15
temp15         res 4
               % space for variable temp16
temp16         res 4
               % space for variable lit24
lit24          res 4
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
               % space for variable lit25
lit25          res 4
               % space for variable temp25
temp25         res 4
               % space for variable temp26
temp26         res 4
               % space for variable temp27
temp27         res 4
               % space for variable temp28
temp28         res 4
               % space for variable lit26
lit26          res 4
               % space for variable temp29
temp29         res 4
               % space for variable temp30
temp30         res 4
               % space for variable lit27
lit27          res 4
               % space for variable temp31
temp31         res 4
               % space for variable lit28
lit28          res 4
               % space for variable temp32
temp32         res 4
               % space for variable lit29
lit29          res 4
               % space for variable lit30
lit30          res 4
               % space for variable main0w
main0w         res 4
               % space for variable main0e
main0e         res 4
               % space for variable lit31
lit31          res 4
               % space for variable lit32
lit32          res 4
               % space for variable temp33
temp33         res 4
               % space for variable temp34
temp34         res 4
               % space for variable temp35
temp35         res 4
               % space for variable lit33
lit33          res 4
               % space for variable temp36
temp36         res 4
