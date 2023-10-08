// we are going to learn promises-: the two main things that we need to understand that promises mostly ussed for conusume api data 
// but we are going to see how we create promises in js 



// history of js promises 

const promises1=new Promise(function(resolve,reject){
    //do a async task 
    //db calls , crypto graphic, network call 

    setTimeout(function(){
        console.log("async task is done");
        resolve()  //this will fix the erroe and connect with the primises if the request is succed
    },100)
})


//so wen we called the function we see only async task is performed there is no connection between the priomises and async task so what can we just then by ysing resolve function
promises1.then(function(){
    console.log('primises consumed')
    
    
})

// remember promises is a higerorder function or callback function̥.
// settimeout is also a callback function 

new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('this task has done')
        resolve({username:'sanu',email:'sanujitmajhi473@gmail.com'})

    },1000)
}).then(function(user){
   console.log(user)
})





const newpromise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error){
            resolve({username:'sanu',email:'sanujitmajhi437@gmail.com'})
        }

        else{
            reject ('someting went wrong')
        }
    })

})

newpromise3.then(function(user){
     console.log(user)
     return user.username


})
.then(function(username){console.log(username)})

.catch(function(error){
    console.log('somethibg went wrong ');

})
.finally(function(){
    console.log("all tasks are completed")
})


// this just same as the try,except and finally in python this is very usefull for handling to clean off database and close the file at a fix amount of time 




// you can also handle by this erro from usinf async await keyword y using try,catch 



// async function consumefive(){
//     try {
//         const response= await  newpromise3
//         console.log(typeof response)
//         console.log(response)
        
//     } catch (error) {
//         console.log('There is some error i  your code ')
        
//     }
// } 




// fetch is a type of promises things 

// we will discuss about this in another file just for undersatnding we are doing this 

// async function getalluser(){
//     try {
//         const response= await  fetch('https://api.github.com/users/sanu2002')
//         let convertobject=await response.json()
//         console.log(convertobject)
       
//     } catch (error) {
//         console.log('There is some error i  your code ',error)
        
//     }
// } 

// getalluser()





