VOIDReturnType2
               jr r11
% end of function
FLOATReturnType2
               addi r1,r0,buf
               sw -8(r14),r1
               jl r15,getstr
               jl r15,strint    % Convert to integer
               sw FLOATReturnType2n(r0),r13     % Store FLOATReturnType2n
               % processing: write(FLOATReturnType2n)
               lw r1, FLOATReturnType2n(r0)
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
               sub r6, r6, r6
               addi r6, r6, 10
               putc r6
               sub r1, r1, r1
%storing 1.111 into lit1
               addi r1, r0, 1.111
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding FLOATReturnType2n with lit1
               lw r1, FLOATReturnType2n(r0)
               lw r2, lit1(r0)
               add r3, r1, r2
               sw temp1(r0), r3
               lw r1, temp1(r0)
               sw FLOATReturnType2return(r0), r1
               jr r11
% end of function
VOIDReturnType2
               jr r11
% end of function
VOIDReturnType2
               jr r11
% end of function
functionParams4
               jr r11
% end of function
printArray1
               sub r1, r1, r1
%storing 0 into lit2
               addi r1, r0, 0
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit2 to printArray1i
               lw r1, lit2(r0)
               sw printArray1i(r0), r1
               addi r1, r0, 0
               lw r1, printArray1i(r0)
               sw printArray1return(r0), r1
               jr r11
% end of function
printArray1
               sub r1, r1, r1
%storing 0 into lit3
               addi r1, r0, 0
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit3 to printArray1i
               lw r1, lit3(r0)
               sw printArray1i(r0), r1
               addi r1, r0, 0
               lw r1, printArray1i(r0)
               sw printArray1return(r0), r1
               jr r11
% end of function
printArray1
               sub r1, r1, r1
%storing 0 into lit4
               addi r1, r0, 0
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit4 to printArray1i
               lw r1, lit4(r0)
               sw printArray1i(r0), r1
               addi r1, r0, 0
               lw r1, printArray1i(r0)
               sw printArray1return(r0), r1
               jr r11
% end of function
printArray1
               sub r1, r1, r1
%storing 0 into lit5
               addi r1, r0, 0
               sw lit5(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit5 to printArray1i
               lw r1, lit5(r0)
               sw printArray1i(r0), r1
               addi r1, r0, 0
               lw r1, printArray1i(r0)
               sw printArray1return(r0), r1
               jr r11
% end of function
printArray1
               sub r1, r1, r1
%storing 0 into lit6
               addi r1, r0, 0
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit6 to printArray1i
               lw r1, lit6(r0)
               sw printArray1i(r0), r1
               addi r1, r0, 0
               lw r1, printArray1i(r0)
               sw printArray1return(r0), r1
               jr r11
% end of function
printArray1
               sub r1, r1, r1
%storing 0 into lit7
               addi r1, r0, 0
               sw lit7(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit7 to printArray1i
               lw r1, lit7(r0)
               sw printArray1i(r0), r1
               addi r1, r0, 0
               lw r1, printArray1i(r0)
               sw printArray1return(r0), r1
               jr r11
% end of function
printArray1
               sub r1, r1, r1
%storing 0 into lit8
               addi r1, r0, 0
               sw lit8(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit8 to printArray1i
               lw r1, lit8(r0)
               sw printArray1i(r0), r1
               addi r1, r0, 0
               lw r1, printArray1i(r0)
               sw printArray1return(r0), r1
               jr r11
% end of function

               % space for variable VOIDReturnType2arr
VOIDReturnType2res 4
               % space for variable VOIDReturnType2size
VOIDReturnType2res 4
               % space for variable VOIDReturnType2n
VOIDReturnType2res 4
               % space for variable FLOATReturnType2arr
FLOATReturnTyperes 4
               % space for variable FLOATReturnType2size
FLOATReturnTyperes 4
               % space for variable FLOATReturnType2return
FLOATReturnTyperes 8
               % space for variable FLOATReturnType2n
FLOATReturnTyperes 4
               % space for variable buf
buf            res 20

               % space for variable lit1
lit1           res 8
               % space for variable temp1
temp1          res 4
               % space for variable VOIDReturnType2arr
VOIDReturnType2res 4
               % space for variable VOIDReturnType2size
VOIDReturnType2res 4
               % space for variable VOIDReturnType2n
VOIDReturnType2res 4
               % space for variable VOIDReturnType2arr
VOIDReturnType2res 4
               % space for variable VOIDReturnType2size
VOIDReturnType2res 8
               % space for variable VOIDReturnType2n
VOIDReturnType2res 4
               % space for variable functionParams4x
functionParams4res 4
               % space for variable functionParams4y
functionParams4res 8
               % space for variable functionParams4z
functionParams4res 4
               % space for variable functionParams4a
functionParams4res 4
               % space for variable printArray1x
printArray1x   res 8
               % space for variable printArray1return
printArray1retures 4
               % space for variable printArray1i
printArray1i   res 4
               % space for variable lit2
lit2           res 4
               % space for variable printArray1x
printArray1x   res 4
               % space for variable printArray1return
printArray1retures 4
               % space for variable printArray1i
printArray1i   res 4
               % space for variable lit3
lit3           res 4
               % space for variable printArray1x
printArray1x   res 4
               % space for variable printArray1return
printArray1retures 4
               % space for variable printArray1i
printArray1i   res 4
               % space for variable lit4
lit4           res 4
               % space for variable printArray1x
printArray1x   res 8
               % space for variable printArray1return
printArray1retures 4
               % space for variable printArray1i
printArray1i   res 4
               % space for variable lit5
lit5           res 4
               % space for variable printArray1x
printArray1x   res 8
               % space for variable printArray1return
printArray1retures 8
               % space for variable printArray1i
printArray1i   res 4
               % space for variable lit6
lit6           res 4
               % space for variable printArray1x
printArray1x   res 8
               % space for variable printArray1return
printArray1retures 8
               % space for variable printArray1i
printArray1i   res 4
               % space for variable lit7
lit7           res 4
               % space for variable printArray1x
printArray1x   res 8
               % space for variable printArray1return
printArray1retures 8
               % space for variable printArray1i
printArray1i   res 4
               % space for variable lit8
lit8           res 4
