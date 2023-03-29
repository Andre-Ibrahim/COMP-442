               entry
               addi r14, r0, topaddr
%storing 132 into lit1
               addi r1, r0, 132
               sw lit1(r0), r1
                addi r1, r0, 0
% assigning lit1 to x
               lw r1, lit1(r0)
               sw x(r0), r1
               addi r1, r0, 0
%storing 12 into lit2
               addi r1, r0, 12
               sw lit2(r0), r1
                addi r1, r0, 0
%multiplying x with lit2
               lw r1, x(r0)
               lw r2, lit2(r0)
               div r3, r1, r2
               sw temp2(r0), r3
% assigning temp2 to y
               lw r1, temp2(r0)
               sw y(r0), r1
               addi r1, r0, 0
%storing 1 into lit3
               addi r1, r0, 1
               sw lit3(r0), r1
                addi r1, r0, 0
%adding lit3 with y
               lw r1, lit3(r0)
               lw r2, y(r0)
               add r3, r1, r2
               sw temp5(r0), r3
%storing 3 into lit4
               addi r1, r0, 3
               sw lit4(r0), r1
                addi r1, r0, 0
%storing 2 into lit5
               addi r1, r0, 2
               sw lit5(r0), r1
                addi r1, r0, 0
%adding lit4 with lit5
               lw r1, lit4(r0)
               lw r2, lit5(r0)
               add r3, r1, r2
               sw temp7(r0), r3
%multiplying temp5 with temp7
               lw r1, temp5(r0)
               lw r2, temp7(r0)
               mul r3, r1, r2
               sw temp8(r0), r3
% assigning temp8 to z
               lw r1, temp8(r0)
               sw z(r0), r1
               addi r1, r0, 0
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
               hlt

               % space for variable x
x              res 4
               % space for variable y
y              res 4
               % space for variable z
z              res 4
               % space for variable lit1
lit1           res 4
               % space for variable lit2
lit2           res 4
               % space for variable temp2
temp2          res 4
               % space for variable lit3
lit3           res 4
               % space for variable temp5
temp5          res 4
               % space for variable lit4
lit4           res 4
               % space for variable lit5
lit5           res 4
               % space for variable temp7
temp7          res 4
               % space for variable temp8
temp8          res 4
               % space for variable buf
buf            res 20

