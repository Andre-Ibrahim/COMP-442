               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 1 into lit1
               addi r1, r0, 1
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit1 to main0number
               lw r1, lit1(r0)
               sw main0number(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit2
               addi r1, r0, 5
               sw lit2(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp1(r0), r0
               lw r1, main0number(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp1(r0)
               add r1, r4, r3
               sw temp1(r0), r1
               lw r1, main0number(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp1(r0)
               add r1, r4, r3
               sw temp1(r0), r1
               sub r1, r1, r1
% assigning lit2 to main0x with offset temp1
               lw r2, temp1(r0)
               lw r1, lit2(r0)
               sw main0x(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit3
               addi r1, r0, 5
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit4
               addi r1, r0, 2
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0number with lit4
               lw r1, main0number(r0)
               lw r2, lit4(r0)
               add r3, r1, r2
               sw temp2(r0), r3
               sub r1, r1, r1
%storing 7 into lit5
               addi r1, r0, 7
               sw lit5(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp3(r0), r0
               lw r1, lit3(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp3(r0)
               add r1, r4, r3
               sw temp3(r0), r1
               lw r1, temp2(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp3(r0)
               add r1, r4, r3
               sw temp3(r0), r1
               sub r1, r1, r1
% assigning lit5 to main0x with offset temp3
               lw r2, temp3(r0)
               lw r1, lit5(r0)
               sw main0x(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit6
               addi r1, r0, 1
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit7
               addi r1, r0, 1
               sw lit7(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit8
               addi r1, r0, 1
               sw lit8(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit9
               addi r1, r0, 2
               sw lit9(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp4(r0), r0
               lw r1, lit6(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp4(r0)
               add r1, r4, r3
               sw temp4(r0), r1
               lw r1, lit7(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp4(r0)
               add r1, r4, r3
               sw temp4(r0), r1
               lw r1, lit8(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp4(r0)
               add r1, r4, r3
               sw temp4(r0), r1
               sub r1, r1, r1
% assigning lit9 to main0p with offset temp4
               lw r2, temp4(r0)
               lw r1, lit9(r0)
               sw main0p(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit10
               addi r1, r0, 1
               sw lit10(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit11
               addi r1, r0, 3
               sw lit11(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit12
               addi r1, r0, 3
               sw lit12(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 7 into lit13
               addi r1, r0, 7
               sw lit13(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp5(r0), r0
               lw r1, lit10(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
               lw r1, lit11(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
               lw r1, lit12(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp5(r0)
               add r1, r4, r3
               sw temp5(r0), r1
               sub r1, r1, r1
% assigning lit13 to main0p with offset temp5
               lw r2, temp5(r0)
               lw r1, lit13(r0)
               sw main0p(r2), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 5 into lit14
               addi r1, r0, 5
               sw lit14(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 2 into lit15
               addi r1, r0, 2
               sw lit15(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding main0number with lit15
               lw r1, main0number(r0)
               lw r2, lit15(r0)
               add r3, r1, r2
               sw temp6(r0), r3
% generating offset
               sw temp7(r0), r0
               lw r1, lit14(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp7(r0)
               add r1, r4, r3
               sw temp7(r0), r1
               lw r1, temp6(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp7(r0)
               add r1, r4, r3
               sw temp7(r0), r1
% getting variable at an offset
               lw r1, temp7(r0)
               lw r2, main0x(r1)
               sw temp8(r0), r2
               sub r1, r1, r1
%storing 1 into lit16
               addi r1, r0, 1
               sw lit16(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit17
               addi r1, r0, 1
               sw lit17(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp9(r0), r0
               lw r1, lit16(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp9(r0)
               add r1, r4, r3
               sw temp9(r0), r1
               lw r1, main0number(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp9(r0)
               add r1, r4, r3
               sw temp9(r0), r1
               lw r1, lit17(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp9(r0)
               add r1, r4, r3
               sw temp9(r0), r1
% getting variable at an offset
               lw r1, temp9(r0)
               lw r2, main0p(r1)
               sw temp10(r0), r2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying temp8 with temp10
               lw r1, temp8(r0)
               lw r2, temp10(r0)
               mul r3, r1, r2
               sw temp11(r0), r3
               sub r1, r1, r1
% assigning temp11 to main0y
               lw r1, temp11(r0)
               sw main0y(r0), r1
               addi r1, r0, 0
               % processing: write(main0y)
               lw r1, main0y(r0)
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
%storing 1 into lit18
               addi r1, r0, 1
               sw lit18(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 1 into lit19
               addi r1, r0, 1
               sw lit19(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp12(r0), r0
               lw r1, lit18(r0)
               muli r2, r1, 4
               muli r3, r2, 20
               lw r4, temp12(r0)
               add r1, r4, r3
               sw temp12(r0), r1
               lw r1, lit19(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp12(r0)
               add r1, r4, r3
               sw temp12(r0), r1
% getting variable at an offset
               lw r1, temp12(r0)
               lw r2, main0x(r1)
               sw temp13(r0), r2
               sub r1, r1, r1
% assigning temp13 to main0z
               lw r1, temp13(r0)
               sw main0z(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying main0y with main0z
               lw r1, main0y(r0)
               lw r2, main0z(r0)
               mul r3, r1, r2
               sw temp14(r0), r3
               sub r1, r1, r1
%storing 1 into lit20
               addi r1, r0, 1
               sw lit20(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit21
               addi r1, r0, 3
               sw lit21(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 3 into lit22
               addi r1, r0, 3
               sw lit22(r0), r1
                addi r1, r0, 0
% generating offset
               sw temp15(r0), r0
               lw r1, lit20(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp15(r0)
               add r1, r4, r3
               sw temp15(r0), r1
               lw r1, lit21(r0)
               muli r2, r1, 4
               muli r3, r2, 3
               lw r4, temp15(r0)
               add r1, r4, r3
               sw temp15(r0), r1
               lw r1, lit22(r0)
               muli r2, r1, 4
               muli r3, r2, 1
               lw r4, temp15(r0)
               add r1, r4, r3
               sw temp15(r0), r1
% getting variable at an offset
               lw r1, temp15(r0)
               lw r2, main0p(r1)
               sw temp16(r0), r2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%multiplying temp14 with temp16
               lw r1, temp14(r0)
               lw r2, temp16(r0)
               div r3, r1, r2
               sw temp17(r0), r3
               % processing: write(temp17)
               lw r1, temp17(r0)
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
main0x                        res 800
                              % space for variable main0p
main0p                        res 72
                              % space for variable main0y
main0y                        res 4
                              % space for variable main0z
main0z                        res 4
                              % space for variable main0number
main0number                   res 4
                              % space for variable lit1
lit1                          res 4
                              % space for variable lit2
lit2                          res 4
                              % space for variable temp1
temp1                         res 4
                              % space for variable lit3
lit3                          res 4
                              % space for variable lit4
lit4                          res 4
                              % space for variable temp2
temp2                         res 4
                              % space for variable lit5
lit5                          res 4
                              % space for variable temp3
temp3                         res 4
                              % space for variable lit6
lit6                          res 4
                              % space for variable lit7
lit7                          res 4
                              % space for variable lit8
lit8                          res 4
                              % space for variable lit9
lit9                          res 4
                              % space for variable temp4
temp4                         res 4
                              % space for variable lit10
lit10                         res 4
                              % space for variable lit11
lit11                         res 4
                              % space for variable lit12
lit12                         res 4
                              % space for variable lit13
lit13                         res 4
                              % space for variable temp5
temp5                         res 4
                              % space for variable lit14
lit14                         res 4
                              % space for variable lit15
lit15                         res 4
                              % space for variable temp6
temp6                         res 4
                              % space for variable temp7
temp7                         res 4
                              % space for variable temp8
temp8                         res 4
                              % space for variable lit16
lit16                         res 4
                              % space for variable lit17
lit17                         res 4
                              % space for variable temp9
temp9                         res 4
                              % space for variable temp10
temp10                        res 4
                              % space for variable temp11
temp11                        res 4
                              % space for variable buf
buf                           res 20

                              % space for variable lit18
lit18                         res 4
                              % space for variable lit19
lit19                         res 4
                              % space for variable temp12
temp12                        res 4
                              % space for variable temp13
temp13                        res 4
                              % space for variable temp14
temp14                        res 4
                              % space for variable lit20
lit20                         res 4
                              % space for variable lit21
lit21                         res 4
                              % space for variable lit22
lit22                         res 4
                              % space for variable temp15
temp15                        res 4
                              % space for variable temp16
temp16                        res 4
                              % space for variable temp17
temp17                        res 4
