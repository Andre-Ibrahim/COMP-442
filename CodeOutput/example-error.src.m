func2
               sub r1, r1, r1
%storing 1 into lit1
               addi r1, r0, 1
               sw lit1(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding func2a with func2b
               lw r1, func2a(r0)
               lw r2, func2b(r0)
               add r3, r1, r2
               sw temp1(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding lit1 with temp1
               lw r1, lit1(r0)
               lw r2, temp1(r0)
               add r3, r1, r2
               sw temp2(r0), r3
               sub r1, r1, r1
% assigning temp2 to func2l
               lw r1, temp2(r0)
               sw func2l(r0), r1
               addi r1, r0, 0
               % processing: write(func2a)
               lw r1, func2a(r0)
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
               % processing: write(func2b)
               lw r1, func2b(r0)
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
               lw r1, func2l(r0)
               sw func2return(r0), r1
               jr r11
% end of function
func52
               sub r1, r1, r1
%storing 1 into lit2
               addi r1, r0, 1
               sw lit2(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding func52a with func52b
               lw r1, func52a(r0)
               lw r2, func52b(r0)
               add r3, r1, r2
               sw temp3(r0), r3
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding lit2 with temp3
               lw r1, lit2(r0)
               lw r2, temp3(r0)
               add r3, r1, r2
               sw temp4(r0), r3
               sub r1, r1, r1
% assigning temp4 to func52l
               lw r1, temp4(r0)
               sw func52l(r0), r1
               addi r1, r0, 0
               % processing: write(func52a)
               lw r1, func52a(r0)
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
               % processing: write(func52b)
               lw r1, func52b(r0)
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
               lw r1, func52l(r0)
               sw func52return(r0), r1
               jr r11
% end of function
func21
               sub r1, r1, r1
%storing 99 into lit3
               addi r1, r0, 99
               sw lit3(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
% assigning lit3 to func21x
               lw r1, lit3(r0)
               sw func21x(r0), r1
               addi r1, r0, 0
               % processing: write(func21a)
               lw r1, func21a(r0)
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
               jr r11
% end of function
               entry
               addi r14, r0, topaddr
               sub r1, r1, r1
%storing 1 into lit4
               addi r1, r0, 1
               sw lit4(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 9 into lit5
               addi r1, r0, 9
               sw lit5(r0), r1
                addi r1, r0, 0
               lw r1, lit4(r0)
               sw func52a(r0), r1
               lw r1, lit5(r0)
               sw func52b(r0), r1
               jl r11, func52
               sub r1, r1, r1
%storing 5 into lit6
               addi r1, r0, 5
               sw lit6(r0), r1
                addi r1, r0, 0
               sub r1, r1, r1
%storing 12 into lit7
               addi r1, r0, 12
               sw lit7(r0), r1
                addi r1, r0, 0
               lw r1, lit6(r0)
               sw func2a(r0), r1
               lw r1, lit7(r0)
               sw func2b(r0), r1
               jl r11, func2
               sub r1, r1, r1
               sub r2, r2, r2
               sub r3, r3, r3
%adding func52return with func2return
               lw r1, func52return(r0)
               lw r2, func2return(r0)
               add r3, r1, r2
               sw temp5(r0), r3
               sub r1, r1, r1
% assigning temp5 to main0x
               lw r1, temp5(r0)
               sw main0x(r0), r1
               addi r1, r0, 0
               % processing: write(main0x)
               lw r1, main0x(r0)
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
%storing 1000 into lit8
               addi r1, r0, 1000
               sw lit8(r0), r1
                addi r1, r0, 0
               lw r1, lit8(r0)
               sw func21a(r0), r1
               jl r11, func21
               hlt

               % space for variable func2a
func2a         res 4
               % space for variable func2b
func2b         res 4
               % space for variable func2return
func2return    res 4
               % space for variable func2l
func2l         res 4
               % space for variable lit1
lit1           res 4
               % space for variable temp1
temp1          res 4
               % space for variable temp2
temp2          res 4
               % space for variable buf
buf            res 20

               % space for variable func52a
func52a        res 4
               % space for variable func52b
func52b        res 4
               % space for variable func52return
func52return   res 4
               % space for variable func52l
func52l        res 4
               % space for variable lit2
lit2           res 4
               % space for variable temp3
temp3          res 4
               % space for variable temp4
temp4          res 4
               % space for variable func21a
func21a        res 4
               % space for variable func21x
func21x        res 4
               % space for variable lit3
lit3           res 4
               % space for variable main0x
main0x         res 4
               % space for variable lit4
lit4           res 4
               % space for variable lit5
lit5           res 4
               % space for variable lit6
lit6           res 4
               % space for variable lit7
lit7           res 4
               % space for variable temp5
temp5          res 4
               % space for variable lit8
lit8           res 4
