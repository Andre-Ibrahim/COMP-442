               lw r1, size(r0)
               sw n(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval1(r0), r1
                addi r1, r0, 0
               lw r1, litval1(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval2(r0), r1
                addi r1, r0, 0
               lw r1, litval2(r0)
               sw j(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval3(r0), r1
                addi r1, r0, 0
               lw r1, litval3(r0)
               sw temp(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval4(r0), r1
                addi r1, r0, 0
               addi r1, r0, 1
               sw litval5(r0), r1
                addi r1, r0, 0
               addi r1, r0, 1
               sw litval6(r0), r1
                addi r1, r0, 0
               lw r1, arr(r0)
               sw temp(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval7(r0), r1
                addi r1, r0, 0
               lw r1, arr(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval8(r0), r1
                addi r1, r0, 0
               lw r1, temp(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval9(r0), r1
                addi r1, r0, 0
               lw r1, litval9(r0)
               sw j(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval10(r0), r1
                addi r1, r0, 0
               lw r1, litval10(r0)
               sw i(r0), r1
               addi r1, r0, 0
               lw r1, size(r0)
               sw n(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval11(r0), r1
                addi r1, r0, 0
               lw r1, litval11(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r14, r0, topaddr
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
               addi r1, r0, 1
               sw litval12(r0), r1
                addi r1, r0, 0
               lw r1, litval12(r0)
               sw i(r0), r1
               addi r1, r0, 0
               entry
               addi r1, r0, 0
               sw litval13(r0), r1
                addi r1, r0, 0
               addi r1, r0, 64
               sw litval14(r0), r1
                addi r1, r0, 0
               lw r1, litval14(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval15(r0), r1
                addi r1, r0, 0
               addi r1, r0, 34
               sw litval16(r0), r1
                addi r1, r0, 0
               lw r1, litval16(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 2
               sw litval17(r0), r1
                addi r1, r0, 0
               addi r1, r0, 25
               sw litval18(r0), r1
                addi r1, r0, 0
               lw r1, litval18(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 3
               sw litval19(r0), r1
                addi r1, r0, 0
               addi r1, r0, 12
               sw litval20(r0), r1
                addi r1, r0, 0
               lw r1, litval20(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 4
               sw litval21(r0), r1
                addi r1, r0, 0
               addi r1, r0, 22
               sw litval22(r0), r1
                addi r1, r0, 0
               lw r1, litval22(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 5
               sw litval23(r0), r1
                addi r1, r0, 0
               addi r1, r0, 11
               sw litval24(r0), r1
                addi r1, r0, 0
               lw r1, litval24(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 6
               sw litval25(r0), r1
                addi r1, r0, 0
               addi r1, r0, 90
               sw litval26(r0), r1
                addi r1, r0, 0
               lw r1, litval26(r0)
               sw arr(r0), r1
               addi r1, r0, 0
               addi r1, r0, 7
               sw litval27(r0), r1
                addi r1, r0, 0
               addi r1, r0, 7
               sw litval28(r0), r1
                addi r1, r0, 0
               addi r1, r0, 7
               sw litval29(r0), r1
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
               % space for variable litval1
litval1        res 4
               % space for variable litval2
litval2        res 4
               % space for variable litval3
litval3        res 4
               % space for variable litval4
litval4        res 4
               % space for variable litval5
litval5        res 4
               % space for variable litval6
litval6        res 4
               % space for variable litval7
litval7        res 4
               % space for variable litval8
litval8        res 4
               % space for variable litval9
litval9        res 4
               % space for variable litval10
litval10       res 4
               % space for variable n
n              res 4
               % space for variable i
i              res 4
               % space for variable litval11
litval11       res 4
               % space for variable buf
buf            res 20

               % space for variable litval12
litval12       res 4
               % space for variable arr
arr            res 28
               % space for variable litval13
litval13       res 4
               % space for variable litval14
litval14       res 4
               % space for variable litval15
litval15       res 4
               % space for variable litval16
litval16       res 4
               % space for variable litval17
litval17       res 4
               % space for variable litval18
litval18       res 4
               % space for variable litval19
litval19       res 4
               % space for variable litval20
litval20       res 4
               % space for variable litval21
litval21       res 4
               % space for variable litval22
litval22       res 4
               % space for variable litval23
litval23       res 4
               % space for variable litval24
litval24       res 4
               % space for variable litval25
litval25       res 4
               % space for variable litval26
litval26       res 4
               % space for variable litval27
litval27       res 4
               % space for variable litval28
litval28       res 4
               % space for variable litval29
litval29       res 4
