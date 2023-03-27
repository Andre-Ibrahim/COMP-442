               addi r1, r0, 0
               sw litval1(r0), r1
                addi r1, r0, 0
               lw r1, litval1(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval2(r0), r1
                addi r1, r0, 0
               addi r1, r0, 1.0
               sw litval3(r0), r1
                addi r1, r0, 0
               addi r1, r0, 0
               sw litval4(r0), r1
                addi r1, r0, 0
               addi r1, r0, 1.0
               sw litval5(r0), r1
                addi r1, r0, 0
               addi r1, r0, 1
               sw litval6(r0), r1
                addi r1, r0, 0
               addi r1, r0, 77
               sw litval7(r0), r1
                addi r1, r0, 0
               lw r1, litval7(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval8(r0), r1
                addi r1, r0, 0
               addi r1, r0, 1
               sw litval9(r0), r1
                addi r1, r0, 0

               % space for variable i
i              res 4
               % space for variable litval1
litval1        res 4
               % space for variable litval2
litval2        res 4
               % space for variable litval3
litval3        res 8
               % space for variable litval4
litval4        res 4
               % space for variable litval5
litval5        res 8
               % space for variable litval6
litval6        res 4
               % space for variable litval7
litval7        res 4
               % space for variable litval8
litval8        res 4
               % space for variable litval9
litval9        res 4
