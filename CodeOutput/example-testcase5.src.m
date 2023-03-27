               lw r1, size(r0)
               sw n(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0
               sw litval1(r0), r1
                addi r1, r0, 0
               lw r1, litval1(r0)
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
               sw litval2(r0), r1
                addi r1, r0, 0
               lw r1, litval2(r0)
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
               sw litval3(r0), r1
                addi r1, r0, 0
               lw r1, arr(r0)
               sw temp(r0), r1
               addi r1, r0, 0
               addi r1, r0, 1
               sw litval4(r0), r1
                addi r1, r0, 0
               lw r1, arr(r0)
               sw temp(r0), r1
               addi r1, r0, 0

               % space for variable n
n              res 4
               % space for variable i
i              res 4
               % space for variable litval1
litval1        res 4
               % space for variable buf
buf            res 20

               % space for variable litval2
litval2        res 4
               % space for variable litval3
litval3        res 4
               % space for variable litval4
litval4        res 4
