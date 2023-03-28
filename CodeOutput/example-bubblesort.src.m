% assigning size to n
               lw r1, size(r0)
               sw n(r0), r1
               addi r1, r0, 0
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
% assigning lit1 to i
               lw r1, lit1(r0)
               sw i(r0), r1
               addi r1, r0, 0
%storing 0 into lit2
               addi r1, r0, 0
               sw lit2(r0), r1
                addi r1, r0, 0
% assigning lit2 to j
               lw r1, lit2(r0)
               sw j(r0), r1
               addi r1, r0, 0
%storing 0 into lit3
               addi r1, r0, 0
               sw lit3(r0), r1
                addi r1, r0, 0
% assigning lit3 to temp
               lw r1, lit3(r0)
               sw temp(r0), r1
               addi r1, r0, 0
%storing 1 into lit4
               addi r1, r0, 1
               sw lit4(r0), r1
                addi r1, r0, 0
%adding n with lit4
               lw r1, n(r0)
               lw r2, lit4(r0)
               sub r3, r1, r2
               sw temp6(r0), r3
%storing 1 into lit5
               addi r1, r0, 1
               sw lit5(r0), r1
                addi r1, r0, 0
%adding i with lit5
               lw r1, i(r0)
               lw r2, lit5(r0)
               sub r3, r1, r2
               sw temp9(r0), r3
%adding n with temp9
               lw r1, n(r0)
               lw r2, temp9(r0)
               sub r3, r1, r2
               sw temp10(r0), r3
%storing 1 into lit6
               addi r1, r0, 1
               sw lit6(r0), r1
                addi r1, r0, 0
%adding j with lit6
               lw r1, j(r0)
               lw r2, lit6(r0)
               add r3, r1, r2
               sw temp13(r0), r3
% assigning arr to temp
               lw r1, arr(r0)
               sw temp(r0), r1
               addi r1, r0, 0
%storing 1 into lit7
               addi r1, r0, 1
               sw lit7(r0), r1
                addi r1, r0, 0
%adding j with lit7
               lw r1, j(r0)
               lw r2, lit7(r0)
               add r3, r1, r2
               sw temp21(r0), r3
% assigning arr to arr
               lw r1, arr(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 1 into lit8
               addi r1, r0, 1
               sw lit8(r0), r1
                addi r1, r0, 0
%adding j with lit8
               lw r1, j(r0)
               lw r2, lit8(r0)
               add r3, r1, r2
               sw temp24(r0), r3
% assigning temp to arr
               lw r1, temp(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 1 into lit9
               addi r1, r0, 1
               sw lit9(r0), r1
                addi r1, r0, 0
%adding j with lit9
               lw r1, j(r0)
               lw r2, lit9(r0)
               add r3, r1, r2
               sw temp27(r0), r3
% assigning temp27 to j
               lw r1, temp27(r0)
               sw j(r0), r1
               addi r1, r0, 0
%storing 1 into lit10
               addi r1, r0, 1
               sw lit10(r0), r1
                addi r1, r0, 0
%adding i with lit10
               lw r1, i(r0)
               lw r2, lit10(r0)
               add r3, r1, r2
               sw temp29(r0), r3
% assigning temp29 to i
               lw r1, temp29(r0)
               sw i(r0), r1
               addi r1, r0, 0
% assigning size to n
               lw r1, size(r0)
               sw n(r0), r1
               addi r1, r0, 0
%storing 0 into lit11
               addi r1, r0, 0
               sw lit11(r0), r1
                addi r1, r0, 0
% assigning lit11 to i
               lw r1, lit11(r0)
               sw i(r0), r1
               addi r1, r0, 0
               % processing: write(arr)
               lw r1, arr(r0)
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
%storing 1 into lit12
               addi r1, r0, 1
               sw lit12(r0), r1
                addi r1, r0, 0
%adding i with lit12
               lw r1, i(r0)
               lw r2, lit12(r0)
               add r3, r1, r2
               sw temp37(r0), r3
% assigning temp37 to i
               lw r1, temp37(r0)
               sw i(r0), r1
               addi r1, r0, 0
               entry
               addi r14, r0, topaddr
%storing 0 into lit13
               addi r1, r0, 0
               sw lit13(r0), r1
                addi r1, r0, 0
%storing 64 into lit14
               addi r1, r0, 64
               sw lit14(r0), r1
                addi r1, r0, 0
% assigning lit14 to arr
               lw r1, lit14(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 1 into lit15
               addi r1, r0, 1
               sw lit15(r0), r1
                addi r1, r0, 0
%storing 34 into lit16
               addi r1, r0, 34
               sw lit16(r0), r1
                addi r1, r0, 0
% assigning lit16 to arr
               lw r1, lit16(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 2 into lit17
               addi r1, r0, 2
               sw lit17(r0), r1
                addi r1, r0, 0
%storing 25 into lit18
               addi r1, r0, 25
               sw lit18(r0), r1
                addi r1, r0, 0
% assigning lit18 to arr
               lw r1, lit18(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 3 into lit19
               addi r1, r0, 3
               sw lit19(r0), r1
                addi r1, r0, 0
%storing 12 into lit20
               addi r1, r0, 12
               sw lit20(r0), r1
                addi r1, r0, 0
% assigning lit20 to arr
               lw r1, lit20(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 4 into lit21
               addi r1, r0, 4
               sw lit21(r0), r1
                addi r1, r0, 0
%storing 22 into lit22
               addi r1, r0, 22
               sw lit22(r0), r1
                addi r1, r0, 0
% assigning lit22 to arr
               lw r1, lit22(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 5 into lit23
               addi r1, r0, 5
               sw lit23(r0), r1
                addi r1, r0, 0
%storing 11 into lit24
               addi r1, r0, 11
               sw lit24(r0), r1
                addi r1, r0, 0
% assigning lit24 to arr
               lw r1, lit24(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 6 into lit25
               addi r1, r0, 6
               sw lit25(r0), r1
                addi r1, r0, 0
%storing 90 into lit26
               addi r1, r0, 90
               sw lit26(r0), r1
                addi r1, r0, 0
% assigning lit26 to arr
               lw r1, lit26(r0)
               sw arr(r0), r1
               addi r1, r0, 0
%storing 7 into lit27
               addi r1, r0, 7
               sw lit27(r0), r1
                addi r1, r0, 0
%storing 7 into lit28
               addi r1, r0, 7
               sw lit28(r0), r1
                addi r1, r0, 0
%storing 7 into lit29
               addi r1, r0, 7
               sw lit29(r0), r1
                addi r1, r0, 0
               hlt

               % space for variable n
n              res 4
               % space for variable i
i              res 4
               % space for variable j
j              res 4
               % space for variable temp
temp           res 4
               % space for variable lit1
lit1           res 4
               % space for variable lit2
lit2           res 4
               % space for variable lit3
lit3           res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp6
temp6          res 4
               % space for variable lit5
lit5           res 4
               % space for variable temp9
temp9          res 4
               % space for variable temp10
temp10         res 4
               % space for variable lit6
lit6           res 4
               % space for variable temp13
temp13         res 4
               % space for variable lit7
lit7           res 4
               % space for variable temp21
temp21         res 4
               % space for variable lit8
lit8           res 4
               % space for variable temp24
temp24         res 4
               % space for variable lit9
lit9           res 4
               % space for variable temp27
temp27         res 4
               % space for variable lit10
lit10          res 4
               % space for variable temp29
temp29         res 4
               % space for variable n
n              res 4
               % space for variable i
i              res 4
               % space for variable lit11
lit11          res 4
               % space for variable buf
buf            res 20

               % space for variable lit12
lit12          res 4
               % space for variable temp37
temp37         res 4
               % space for variable arr
arr            res 28
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
