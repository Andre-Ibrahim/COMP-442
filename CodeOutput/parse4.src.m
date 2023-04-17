expressionsTest0
               sub r1, r1, r1
% assigning expressionsTest0i to expressionsTest0x
               lw r1, expressionsTest0i(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit1
               addi r1, r0, 2
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding expressionsTest0x with lit1
               lw r1, expressionsTest0x(r0)
               lw r2, lit1(r0)
               add r3, r1, r2
               sw temp1(r0), r3
               sub r1, r1, r1
% assigning temp1 to expressionsTest0x
               lw r1, temp1(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit2
               addi r1, r0, 2
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding expressionsTest0x with lit2
               lw r1, expressionsTest0x(r0)
               lw r2, lit2(r0)
               sub r3, r1, r2
               sw temp2(r0), r3
               sub r1, r1, r1
% assigning temp2 to expressionsTest0x
               lw r1, temp2(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 10 into lit3
               addi r1, r0, 10
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying expressionsTest0x with lit3
               lw r1, expressionsTest0x(r0)
               lw r2, lit3(r0)
               mul r3, r1, r2
               sw temp3(r0), r3
               sub r1, r1, r1
% assigning temp3 to expressionsTest0x
               lw r1, temp3(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 10 into lit4
               addi r1, r0, 10
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying expressionsTest0x with lit4
               lw r1, expressionsTest0x(r0)
               lw r2, lit4(r0)
               div r3, r1, r2
               sw temp4(r0), r3
               sub r1, r1, r1
% assigning temp4 to expressionsTest0x
               lw r1, temp4(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit5
               addi r1, r0, 5
               sw lit5(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation expressionsTest0x gt lit5
               lw r1, lit5(r0)
               lw r2, expressionsTest0x(r0)
               cgt r3, r1, r2
               sw temp5(r0), r3
               sub r1, r1, r1
% assigning temp5 to expressionsTest0x
               lw r1, temp5(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit6
               addi r1, r0, 5
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation expressionsTest0x lt lit6
               lw r1, lit6(r0)
               lw r2, expressionsTest0x(r0)
               clt r3, r1, r2
               sw temp6(r0), r3
               sub r1, r1, r1
% assigning temp6 to expressionsTest0x
               lw r1, temp6(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit7
               addi r1, r0, 5
               sw lit7(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation expressionsTest0x geq lit7
               lw r1, lit7(r0)
               lw r2, expressionsTest0x(r0)
               cge r3, r1, r2
               sw temp7(r0), r3
               sub r1, r1, r1
% assigning temp7 to expressionsTest0x
               lw r1, temp7(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit8
               addi r1, r0, 5
               sw lit8(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation expressionsTest0x leq lit8
               lw r1, lit8(r0)
               lw r2, expressionsTest0x(r0)
               cle r3, r1, r2
               sw temp8(r0), r3
               sub r1, r1, r1
% assigning temp8 to expressionsTest0x
               lw r1, temp8(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit9
               addi r1, r0, 5
               sw lit9(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation expressionsTest0x noteq lit9
               lw r1, lit9(r0)
               lw r2, expressionsTest0x(r0)
               ceq r3, r1, r2
               sw temp9(r0), r3
               sub r1, r1, r1
% assigning temp9 to expressionsTest0x
               lw r1, temp9(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit10
               addi r1, r0, 5
               sw lit10(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 10 into lit11
               addi r1, r0, 10
               sw lit11(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit10 with lit11
               lw r1, lit10(r0)
               lw r2, lit11(r0)
               mul r3, r1, r2
               sw temp10(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding expressionsTest0x with temp10
               lw r1, expressionsTest0x(r0)
               lw r2, temp10(r0)
               add r3, r1, r2
               sw temp11(r0), r3
               sub r1, r1, r1
% assigning temp11 to expressionsTest0x
               lw r1, temp11(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit12
               addi r1, r0, 5
               sw lit12(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 10 into lit13
               addi r1, r0, 10
               sw lit13(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit12 with lit13
               lw r1, lit12(r0)
               lw r2, lit13(r0)
               mul r3, r1, r2
               sw temp12(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding expressionsTest0x with temp12
               lw r1, expressionsTest0x(r0)
               lw r2, temp12(r0)
               sub r3, r1, r2
               sw temp13(r0), r3
               sub r1, r1, r1
% assigning temp13 to expressionsTest0x
               lw r1, temp13(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 10 into lit14
               addi r1, r0, 10
               sw lit14(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit15
               addi r1, r0, 5
               sw lit15(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit14 with lit15
               lw r1, lit14(r0)
               lw r2, lit15(r0)
               div r3, r1, r2
               sw temp14(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying expressionsTest0x with temp14
               lw r1, expressionsTest0x(r0)
               lw r2, temp14(r0)
               mul r3, r1, r2
               sw temp15(r0), r3
               sub r1, r1, r1
% assigning temp15 to expressionsTest0x
               lw r1, temp15(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 6 into lit16
               addi r1, r0, 6
               sw lit16(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 44 into lit17
               addi r1, r0, 44
               sw lit17(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit16 with lit17
               lw r1, lit16(r0)
               lw r2, lit17(r0)
               div r3, r1, r2
               sw temp16(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying expressionsTest0x with temp16
               lw r1, expressionsTest0x(r0)
               lw r2, temp16(r0)
               mul r3, r1, r2
               sw temp17(r0), r3
               sub r1, r1, r1
%storing 9 into lit18
               addi r1, r0, 9
               sw lit18(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp17 gt lit18
               lw r1, lit18(r0)
               lw r2, temp17(r0)
               cgt r3, r1, r2
               sw temp18(r0), r3
               sub r1, r1, r1
% assigning temp18 to expressionsTest0x
               lw r1, temp18(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 6 into lit19
               addi r1, r0, 6
               sw lit19(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 44 into lit20
               addi r1, r0, 44
               sw lit20(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit19 with lit20
               lw r1, lit19(r0)
               lw r2, lit20(r0)
               div r3, r1, r2
               sw temp19(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying expressionsTest0x with temp19
               lw r1, expressionsTest0x(r0)
               lw r2, temp19(r0)
               mul r3, r1, r2
               sw temp20(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation temp20 gt expressionsTest0i
               lw r1, expressionsTest0i(r0)
               lw r2, temp20(r0)
               cgt r3, r1, r2
               sw temp21(r0), r3
               sub r1, r1, r1
% assigning temp21 to expressionsTest0x
               lw r1, temp21(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 10 into lit21
               addi r1, r0, 10
               sw lit21(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding expressionsTest0x with lit21
               lw r1, expressionsTest0x(r0)
               lw r2, lit21(r0)
               add r3, r1, r2
               sw temp22(r0), r3
               sub r1, r1, r1
%storing 8 into lit22
               addi r1, r0, 8
               sw lit22(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying temp22 with lit22
               lw r1, temp22(r0)
               lw r2, lit22(r0)
               mul r3, r1, r2
               sw temp23(r0), r3
               sub r1, r1, r1
% assigning temp23 to expressionsTest0x
               lw r1, temp23(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 8 into lit23
               addi r1, r0, 8
               sw lit23(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit23 with expressionsTest0i
               lw r1, lit23(r0)
               lw r2, expressionsTest0i(r0)
               mul r3, r1, r2
               sw temp24(r0), r3
               sub r1, r1, r1
%storing 9 into lit24
               addi r1, r0, 9
               sw lit24(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying temp24 with lit24
               lw r1, temp24(r0)
               lw r2, lit24(r0)
               div r3, r1, r2
               sw temp25(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding expressionsTest0x with temp25
               lw r1, expressionsTest0x(r0)
               lw r2, temp25(r0)
               add r3, r1, r2
               sw temp26(r0), r3
               sub r1, r1, r1
% assigning temp26 to expressionsTest0x
               lw r1, temp26(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
% assigning  to expressionsTest0x
               lw r1, (r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 19 into lit25
               addi r1, r0, 19
               sw lit25(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding  with 
               lw r1, (r0)
               lw r2, (r0)
               add r3, r1, r2
               sw temp27(r0), r3
               sub r1, r1, r1
% assigning temp27 to expressionsTest0z
               lw r1, temp27(r0)
               sw expressionsTest0z(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit26
               addi r1, r0, 2
               sw lit26(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding lit26 with 
               lw r1, lit26(r0)
               lw r2, (r0)
               sub r3, r1, r2
               sw temp28(r0), r3
               sub r1, r1, r1
% assigning temp28 to expressionsTest0x
               lw r1, temp28(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit27
               addi r1, r0, 2
               sw lit27(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying  with 
               lw r1, (r0)
               lw r2, (r0)
               mul r3, r1, r2
               sw temp29(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding lit27 with temp29
               lw r1, lit27(r0)
               lw r2, temp29(r0)
               sub r3, r1, r2
               sw temp30(r0), r3
               sub r1, r1, r1
% assigning temp30 to expressionsTest0x
               lw r1, temp30(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 17 into lit28
               addi r1, r0, 17
               sw lit28(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit28 with 
               lw r1, lit28(r0)
               lw r2, (r0)
               mul r3, r1, r2
               sw temp31(r0), r3
               sub r1, r1, r1
% assigning temp31 to expressionsTest0x
               lw r1, temp31(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 10.99 into lit29
               addi r1, r0, 10.99
               sw lit29(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 0.99 into lit30
               addi r1, r0, 0.99
               sw lit30(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit29 with lit30
               lw r1, lit29(r0)
               lw r2, lit30(r0)
               mul r3, r1, r2
               sw temp32(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding temp32 with expressionsTest0i
               lw r1, temp32(r0)
               lw r2, expressionsTest0i(r0)
               add r3, r1, r2
               sw temp33(r0), r3
               sub r1, r1, r1
% assigning temp33 to expressionsTest0x
               lw r1, temp33(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 8 into lit31
               addi r1, r0, 8
               sw lit31(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation  gt expressionsTest0i
               lw r1, expressionsTest0i(r0)
               lw r2, (r0)
               cgt r3, r1, r2
               sw temp34(r0), r3
               sub r1, r1, r1
% assigning temp34 to expressionsTest0x
               lw r1, temp34(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 7 into lit32
               addi r1, r0, 7
               sw lit32(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit33
               addi r1, r0, 0
               sw lit33(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying lit33 with expressionsTest0i
               lw r1, lit33(r0)
               lw r2, expressionsTest0i(r0)
               mul r3, r1, r2
               sw temp35(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation lit32 gt temp35
               lw r1, temp35(r0)
               lw r2, lit32(r0)
               cgt r3, r1, r2
               sw temp36(r0), r3
               sub r1, r1, r1
% assigning temp36 to expressionsTest0x
               lw r1, temp36(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 7 into lit34
               addi r1, r0, 7
               sw lit34(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit35
               addi r1, r0, 0
               sw lit35(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding lit35 with expressionsTest0i
               lw r1, lit35(r0)
               lw r2, expressionsTest0i(r0)
               add r3, r1, r2
               sw temp37(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation lit34 gt temp37
               lw r1, temp37(r0)
               lw r2, lit34(r0)
               cgt r3, r1, r2
               sw temp38(r0), r3
               sub r1, r1, r1
% assigning temp38 to expressionsTest0x
               lw r1, temp38(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 9 into lit36
               addi r1, r0, 9
               sw lit36(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp39(r0), r0
               lw r1, lit36(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp39(r0)
               add r1, r4, r3
               sw temp39(r0), r1
% getting variable at an offset
               lw r1, temp39(r0)
               lw r2, expressionsTest0x(r1)
               sw temp40(r0), r2
               sub r1, r1, r1
%storing 9 into lit37
               addi r1, r0, 9
               sw lit37(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying temp40 with lit37
               lw r1, temp40(r0)
               lw r2, lit37(r0)
               mul r3, r1, r2
               sw temp41(r0), r3
               sub r1, r1, r1
%storing 2 into lit38
               addi r1, r0, 2
               sw lit38(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying expressionsTest0i with lit38
               lw r1, expressionsTest0i(r0)
               lw r2, lit38(r0)
               mul r3, r1, r2
               sw temp42(r0), r3
% generating offset
               sw temp43(r0), r0
               lw r1, temp42(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp43(r0)
               add r1, r4, r3
               sw temp43(r0), r1
% getting variable at an offset
               lw r1, temp43(r0)
               lw r2, expressionsTest0x(r1)
               sw temp44(r0), r2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding temp41 with temp44
               lw r1, temp41(r0)
               lw r2, temp44(r0)
               add r3, r1, r2
               sw temp45(r0), r3
               sub r1, r1, r1
% assigning temp45 to expressionsTest0x
               lw r1, temp45(r0)
               sw expressionsTest0x(r0), r1
               addi r1, r0, 0
               jr r11
% end of function

               % space for variable expressionsTest0n
expressionsTestres 4
               % space for variable expressionsTest0i
expressionsTestres 4
               % space for variable lit1
lit1           res 4
               % space for variable temp1
temp1          res 4
               % space for variable lit2
lit2           res 4
               % space for variable temp2
temp2          res 4
               % space for variable lit3
lit3           res 4
               % space for variable temp3
temp3          res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp4
temp4          res 4
               % space for variable lit5
lit5           res 4
               % space for variable temp5
temp5          res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp6
temp6          res 4
               % space for variable lit7
lit7           res 4
               % space for variable temp7
temp7          res 4
               % space for variable lit8
lit8           res 4
               % space for variable temp8
temp8          res 4
               % space for variable lit9
lit9           res 4
               % space for variable temp9
temp9          res 4
               % space for variable lit10
lit10          res 4
               % space for variable lit11
lit11          res 4
               % space for variable temp10
temp10         res 4
               % space for variable temp11
temp11         res 4
               % space for variable lit12
lit12          res 4
               % space for variable lit13
lit13          res 4
               % space for variable temp12
temp12         res 4
               % space for variable temp13
temp13         res 4
               % space for variable lit14
lit14          res 4
               % space for variable lit15
lit15          res 4
               % space for variable temp14
temp14         res 4
               % space for variable temp15
temp15         res 4
               % space for variable lit16
lit16          res 4
               % space for variable lit17
lit17          res 4
               % space for variable temp16
temp16         res 4
               % space for variable temp17
temp17         res 4
               % space for variable lit18
lit18          res 4
               % space for variable temp18
temp18         res 4
               % space for variable lit19
lit19          res 4
               % space for variable lit20
lit20          res 4
               % space for variable temp19
temp19         res 4
               % space for variable temp20
temp20         res 4
               % space for variable temp21
temp21         res 4
               % space for variable lit21
lit21          res 4
               % space for variable temp22
temp22         res 4
               % space for variable lit22
lit22          res 4
               % space for variable temp23
temp23         res 4
               % space for variable lit23
lit23          res 4
               % space for variable temp24
temp24         res 4
               % space for variable lit24
lit24          res 4
               % space for variable temp25
temp25         res 4
               % space for variable temp26
temp26         res 4
               % space for variable lit25
lit25          res 4
               % space for variable temp27
temp27         res 4
               % space for variable lit26
lit26          res 4
               % space for variable temp28
temp28         res 4
               % space for variable lit27
lit27          res 4
               % space for variable temp29
temp29         res 4
               % space for variable temp30
temp30         res 4
               % space for variable lit28
lit28          res 4
               % space for variable temp31
temp31         res 4
               % space for variable lit29
lit29          res 8
               % space for variable lit30
lit30          res 8
               % space for variable temp32
temp32         res 8
               % space for variable temp33
temp33         res 8
               % space for variable lit31
lit31          res 4
               % space for variable temp34
temp34         res 4
               % space for variable lit32
lit32          res 4
               % space for variable lit33
lit33          res 4
               % space for variable temp35
temp35         res 4
               % space for variable temp36
temp36         res 4
               % space for variable lit34
lit34          res 4
               % space for variable lit35
lit35          res 4
               % space for variable temp37
temp37         res 4
               % space for variable temp38
temp38         res 4
               % space for variable lit36
lit36          res 4
               % space for variable temp39
temp39         res 4
               % space for variable temp40
temp40         res 4
               % space for variable lit37
lit37          res 4
               % space for variable temp41
temp41         res 4
               % space for variable lit38
lit38          res 4
               % space for variable temp42
temp42         res 4
               % space for variable temp43
temp43         res 4
               % space for variable temp44
temp44         res 4
               % space for variable temp45
temp45         res 4
