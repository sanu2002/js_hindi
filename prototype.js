// javascripts has a prototypial behaviour

// prototpal behaviour , and   inherotance and all 
// new keyword and this keyword only possible for this prototipal behaviour

// so we are gonna see through taking some example of string,objecyt and array 


// we are going to know  what is the important of new key word and what is the working of new keyword
// and how you can create your own method by using the prototpy and why this is importtant 




// let user1={
//     name:'sanu',
//     age:12,
//     data:function(){
//         console.log(`user name is ${this.name} and age ${this.age}`);
//     }
// };



// let  user2={
//     name:'salu',
//     age:23,
//     data:user1.data
// };



// user2.data()
// // ex-2







// let user1={
//     name:'sanu',
//     age:12,
//     data:()=>{
//         console.log(`user name is ${this.name} and age ${this.age}`);
//     }
// };




// let  user2={
//     name:'salu',
//     age:23,
//     data:user1.data
// };



// user2.data()#




// so the arrow function has some lexical property which find the name sorrunding 
// and its set the this as global and in global it sets as undefinded 

// ++++++++++++++++++++++


// function  Createuser(username,score){
//       this.username=username
//       this.scope++

// }


// Createuser.prototype.increment=function(){
//     this.score
// }
// Createuser.prototype.printme=function(){
//     console.log(`price is ${this,score}`)
// }



// const chai= Createuser('sanu',30)
// const tea= Createuser('sanu',130)

// chai.printme()


// thast why we are mentio new keyword


// you might  be end up the error like 
// idir\prototype.js:91
// chai.printme()
//      ^

// TypeError: Cannot read properties of undefined (reading 'printme')
//     at Object.<anonymous> (c:\Users\91773\OneDrive\Desktop\js\fetchapidir\prototype.js:91:6)
//     at Module._compile (node:internal/modules/cjs/loader:1233:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)
//     at Module.load (node:internal/modules/cjs/loader:1091:32)
//     at Module._load (node:internal/modules/cjs/loader:938:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v20.5.0


// ______________________________________________________





const arr1=['sanu','salu']

let str1='sanu  '


Object.prototype.dj=function (){
    console.log('i have been created by object ')
}


String.prototype.cut=function(){
    
}

// arr1.dj()

// str1.dj()




// string can i use that one ?

// yes 


// so if i created the using object not obejct constrctor the we are not gonaa use that things 







// in modern we are suing setprototypr



// next section we will learn little bit more about prototye 


