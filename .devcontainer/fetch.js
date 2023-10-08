console.log('i  am first')




const promises=new Promise(function(resolve,reject){

    setTimeout(() => {
        console.log('asynv resolved')
        resolve()
        
    }, 0);


})


promises.then(function(){
    console.log('i am promise')
})




fetch('https://api.github.com/users/sanu2002')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

})
.catch(function(){
    console.log("there was an error")
})