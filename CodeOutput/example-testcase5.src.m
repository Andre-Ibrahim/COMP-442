               sub r1, r1, r1
% assigning size to n
               lw r1, size(r0)
               sw n(r0), r1
               addi r1, r0, 0
               sub r1, r1, r1
%storing 0 into lit1
               addi r1, r0, 0
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit1 to i
               lw r1, lit1(r0)
               sw i(r0), r1
               addi r1, r0, 0
%starting while loop
gowhile1
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation n lt i
               lw r1, i(r0)
               lw r2, n(r0)
               clt r3, r1, r2
               sw temp1(r0), r3
               lw r1, temp1(r0)
               bz r1, endwhile1
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
               sub r1, r1, r1
%storing 1 into lit2
               addi r1, r0, 1
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding i with lit2
               lw r1, i(r0)
               lw r2, lit2(r0)
               add r3, r1, r2
               sw temp2(r0), r3
               sub r1, r1, r1
% assigning temp2 to i
               lw r1, temp2(r0)
               sw i(r0), r1
               addi r1, r0, 0
j gowhile1
endwhile1
               addi r1,r0,buf
               sw -8(r14),r1
               jl r15,getstr
               jl r15,strint    % Convert to integer
               sw n(r0),r13     % Store n
%starting while loop
gowhile2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation n lt i
               lw r1, i(r0)
               lw r2, n(r0)
               clt r3, r1, r2
               sw temp3(r0), r3
               lw r1, temp3(r0)
               bz r1, endwhile2
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
j gowhile2
endwhile2
%starting while loop
gowhile3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation n lt i
               lw r1, i(r0)
               lw r2, n(r0)
               clt r3, r1, r2
               sw temp4(r0), r3
               lw r1, temp4(r0)
               bz r1, endwhile3
j gowhile3
endwhile3
               sub r1, r1, r1
%storing 1 into lit3
               addi r1, r0, 1
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding j with lit3
               lw r1, j(r0)
               lw r2, lit3(r0)
               add r3, r1, r2
               sw temp5(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation arr gt arr
               lw r1, arr(r0)
               lw r2, arr(r0)
               cgt r3, r1, r2
               sw temp6(r0), r3
% starting if statment
                lw r1, temp6(r0)
                bz r1, else1
               sub r1, r1, r1
% assigning arr to temp
               lw r1, arr(r0)
               sw temp(r0), r1
               addi r1, r0, 0
               j endif1
else1endif1               sub r1, r1, r1
%storing 1 into lit4
               addi r1, r0, 1
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding j with lit4
               lw r1, j(r0)
               lw r2, lit4(r0)
               add r3, r1, r2
               sw temp7(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%relation arr gt arr
               lw r1, arr(r0)
               lw r2, arr(r0)
               cgt r3, r1, r2
               sw temp8(r0), r3
% starting if statment
                lw r1, temp8(r0)
                bz r1, else2
               j endif2
else2               sub r1, r1, r1
% assigning arr to temp
               lw r1, arr(r0)
               sw temp(r0), r1
               addi r1, r0, 0
endif2
               % space for variable n
n              res 4
               % space for variable i
i              res 4
               % space for variable lit1
lit1           res 4
               % space for variable temp1
temp1          res 4
               % space for variable buf
buf            res 20

               % space for variable lit2
lit2           res 4
               % space for variable temp2
temp2          res 4
               % space for variable temp3
temp3          res 4
               % space for variable temp4
temp4          res 4
               % space for variable lit3
lit3           res 4
               % space for variable temp5
temp5          res 4
               % space for variable temp6
temp6          res 4
               % space for variable lit4
lit4           res 4
               % space for variable temp7
temp7          res 4
               % space for variable temp8
temp8          res 4
