               entry
               addi r1, r0, 12
               sw litval1(r0), r1
                addi r1, r0, 0
               lw r1, litval1(r0)
               sw z(r0), r1
               addi r1, r0, 0
               lw r1, z(r0)
               sw y(r0), r1
               addi r1, r0, 0
               addi r14, r0, topaddr
               % processing: write(z)
               lw r1, z(r0)
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
               % processing: write(y)
               lw r1, y(r0)
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

               % space for variable z
z              res 4
               % space for variable y
y              res 4
               % space for variable litval1
litval1        res 4
               % space for variable buf
buf            res 20

