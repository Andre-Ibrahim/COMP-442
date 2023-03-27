               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw n(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1.0
               sw litval1(r0), r1
                addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1.0
               sw litval2(r0), r1
                addi r1, r0, 0
               lw r1, litval2(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval3(r0), r1
                addi r1, r0, 0
               addi r1, r0, 9
               sw litval4(r0), r1
                addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0
               addi r1, r0, 10
               sw litval5(r0), r1
                addi r1, r0, 0
               addi r1, r0, 9
               sw litval6(r0), r1
                addi r1, r0, 0
               lw r1, x(r0)
               sw x(r0), r1
               addi r1, r0, 0

               % space for variable x
x              res 4
               % space for variable litval1
litval1        res 8
               % space for variable litval2
litval2        res 8
               % space for variable litval3
litval3        res 4
               % space for variable litval4
litval4        res 4
               % space for variable litval5
litval5        res 4
               % space for variable litval6
litval6        res 4
