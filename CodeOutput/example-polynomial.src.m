               addi r1, r0, 0
               sw litval1(r0), r1
                addi r1, r0, 0
               lw r1, a(r0)
               sw result(r0), r1
               addi r1, r0, 0
               lw r1, b(r0)
               sw result(r0), r1
               addi r1, r0, 0
               lw r1, c(r0)
               sw result(r0), r1
               addi r1, r0, 0
               lw r1, A(r0)
               sw a(r0), r1
               addi r1, r0, 0
               lw r1, B(r0)
               sw b(r0), r1
               addi r1, r0, 0
               addi r1, r0, 0.0
               sw litval2(r0), r1
                addi r1, r0, 0
               lw r1, litval2(r0)
               sw result(r0), r1
               addi r1, r0, 0
               lw r1, b(r0)
               sw result(r0), r1
               addi r1, r0, 0
               entry
               addi r1, r0, 2.0
               sw litval3(r0), r1
                addi r1, r0, 0
               addi r1, r0, 1.0
               sw litval4(r0), r1
                addi r1, r0, 0
               addi r1, r0, 0.0
               sw litval5(r0), r1
                addi r1, r0, 0
               addi r1, r0, 10
               sw litval6(r0), r1
                addi r1, r0, 0
               addi r14, r0, topaddr
               % processing: write(counter)
               lw r1, counter(r0)
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
               addi r14, r0, topaddr
               % processing: write(f1)
               lw r1, f1(r0)
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
               addi r14, r0, topaddr
               % processing: write(f2)
               lw r1, f2(r0)
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
               hlt

               % space for variable x
x              res 8
               % space for variable litval1
litval1        res 4
               % space for variable result
result         res 8
               % space for variable result
result         res 8
               % space for variable litval2
litval2        res 8
               % space for variable f1
f1             res 96
               % space for variable litval3
litval3        res 8
               % space for variable litval4
litval4        res 8
               % space for variable litval5
litval5        res 8
               % space for variable f2
f2             res 72
               % space for variable litval6
litval6        res 4
               % space for variable buf
buf            res 20

