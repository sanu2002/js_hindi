// IIFE- immidiately involked function -: lets try to understsnd the concept behind this some time the call get poluutaed by the global scope so at that time if you want to excute your function immidiately after the function endinf then use the concept IIFE for writing the better code? 

// function chai(){
    // console.log('db connetd');
// }
// console.log('sanu')///here is the plolluted part support think if there is 100000 of code in between this function call then how it is going to call the function immidiated after the function code block
// chai()


// (function chai(){
//     console.log('db 1 connetd');
// })()
// now this much is ok but if change the seconf line into IIFE then it will show error lets fix this problem 
// function code(){
//     console.log('db 2 connetd');
// }
// code()


// (function chai(){
//     console.log('db 1 connetd');
// })();
// ok so wen u write the IIFE code then more than ones then u should use the ';' symbol for avoiding the error becuse code environment not able to detect the ending of that statement

// (function code(){
//     console.log('db 2 connetd');
// })()


// can  u tell me what is the error wen i write two IIFE arrow function ??

// ((name)=>{
//     console.log(`Hey ${name} db 1 connected`)
// })('sanu');

// (()=>{
//     console.log('db 2 conneted')
// })()

