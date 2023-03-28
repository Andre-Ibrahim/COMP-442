%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
% assigning a to result
               lw r1, a(r0)
               sw result(r0), r1
               addi r1, r0, 0
%multiplying result with x
               lw r1, result(r0)
               lw r2, x(r0)
               mul r3, r1, r2
               sw temp3(r0), r3
%adding temp3 with b
               lw r1, temp3(r0)
               lw r2, b(r0)
               add r3, r1, r2
               sw temp5(r0), r3
% assigning temp5 to result
               lw r1, temp5(r0)
               sw result(r0), r1
               addi r1, r0, 0
%multiplying result with x
               lw r1, result(r0)
               lw r2, x(r0)
               mul r3, r1, r2
               sw temp6(r0), r3
%adding temp6 with c
               lw r1, temp6(r0)
               lw r2, c(r0)
               add r3, r1, r2
               sw temp8(r0), r3
% assigning temp8 to result
               lw r1, temp8(r0)
               sw result(r0), r1
               addi r1, r0, 0
% assigning A to a
               lw r1, A(r0)
               sw a(r0), r1
               addi r1, r0, 0
% assigning B to b
               lw r1, B(r0)
               sw b(r0), r1
               addi r1, r0, 0
%storing 0.0 into lit2
               addi r1, r0, 0.0
               sw lit2(r0), r1
                addi r1, r0, 0
% assigning lit2 to result
               lw r1, lit2(r0)
               sw result(r0), r1
               addi r1, r0, 0
%multiplying a with x
               lw r1, a(r0)
               lw r2, x(r0)
               mul r3, r1, r2
               sw temp13(r0), r3
%adding temp13 with b
               lw r1, temp13(r0)
               lw r2, b(r0)
               add r3, r1, r2
               sw temp15(r0), r3
% assigning temp15 to result
               lw r1, temp15(r0)
               sw result(r0), r1
               addi r1, r0, 0
               entry
               addi r14, r0, topaddr
%storing 2.0 into lit3
               addi r1, r0, 2.0
               sw lit3(r0), r1
                addi r1, r0, 0
%storing 1.0 into lit4
               addi r1, r0, 1.0
               sw lit4(r0), r1
                addi r1, r0, 0
%storing 0.0 into lit5
               addi r1, r0, 0.0
               sw lit5(r0), r1
                addi r1, r0, 0
%storing 10 into lit6
               addi r1, r0, 10
               sw lit6(r0), r1
                addi r1, r0, 0
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
               % space for variable lit1
lit1           res 4
               % space for variable result
result         res 8
               % space for variable temp3
temp3          res 8
               % space for variable temp5
temp5          res 8
               % space for variable temp6
temp6          res 8
               % space for variable temp8
temp8          res 8
               % space for variable result
result         res 8
               % space for variable lit2
lit2           res 8
               % space for variable temp13
temp13         res 8
               % space for variable temp15
temp15         res 8
               % space for variable f1
f1             res 160
               % space for variable lit3
lit3           res 8
               % space for variable lit4
lit4           res 8
               % space for variable lit5
lit5           res 8
               % space for variable f2
f2             res 120
               % space for variable lit6
lit6           res 4
               % space for variable buf
buf            res 20

