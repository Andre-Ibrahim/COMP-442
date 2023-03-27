               addi r14, r0, topaddr
               % processing: write(n)
               lw r1, n(r0)
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
               addi r1, r0, 1.111
               sw litval1(r0), r1
                addi r1, r0, 0
               addi r1, r0, 0
               sw litval2(r0), r1
                addi r1, r0, 0
               lw r1, litval2(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval3(r0), r1
                addi r1, r0, 0
               lw r1, litval3(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval4(r0), r1
                addi r1, r0, 0
               lw r1, litval4(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval5(r0), r1
                addi r1, r0, 0
               lw r1, litval5(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval6(r0), r1
                addi r1, r0, 0
               lw r1, litval6(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval7(r0), r1
                addi r1, r0, 0
               lw r1, litval7(r0)
               sw i(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval8(r0), r1
                addi r1, r0, 0
               lw r1, litval8(r0)
               sw i(r0), r1
               addi r1, r0, 0

               % space for variable n
n              res 4
               % space for variable n
n              res 4
               % space for variable buf
buf            res 20

               % space for variable litval1
litval1        res 8
               % space for variable n
n              res 4
               % space for variable n
n              res 4
               % space for variable i
i              res 4
               % space for variable litval2
litval2        res 4
               % space for variable i
i              res 4
               % space for variable litval3
litval3        res 4
               % space for variable i
i              res 4
               % space for variable litval4
litval4        res 4
               % space for variable i
i              res 4
               % space for variable litval5
litval5        res 4
               % space for variable i
i              res 4
               % space for variable litval6
litval6        res 4
               % space for variable i
i              res 4
               % space for variable litval7
litval7        res 4
               % space for variable i
i              res 4
               % space for variable litval8
litval8        res 4
