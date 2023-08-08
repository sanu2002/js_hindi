// //singleton
// if the objects contrsucts from 
// constrctor then we called it as singleton 

// objects literls 

let a=Symbol('sanu')
const jsuser={
    "name":"sanu",
    age:18,
    // a:'mykey',  this is represents as string
    [a]:'mykey',  //these are actuallly defined these are as symbol
    location:'angul',
    email:'sanujitmajhi@gmail.com',
    isloggedin:false,
    lastlogin:['monday','tuesday']
}

// you can call the instances in 2 diffrent ways 
// console.log(jsuser.name);  
// Object.freeze(jsuser)   //after this changes you are not able to change the object
// console.log(jsuser['name']);
// console.log(typeof jsuser.name);


// jsuser.name
// console.log(jsuser);

// jsuser.greeting=function(event){
//     console.log(`my name is age ${jsuser.age},${event}`)
// }

// jsuser.greeting2=function(event){
//     console.log(`my name is age ${this.age},${event}`)
// }


// console.log(jsuser.greeting())
// console.log(jsuser.greeting2())

// BUT NOTICE ONE THING WEN U USE FUNCTION WITH COSNOLE STATEMENT THEM YOU WILL GET A EXTRA undefined VALUE AND U NEED TO REMEMBER CONSOLE IS FOR DEBUGGING PURPOSE NOT FOR RETURN STATEMENT FOR RETUEN ANY VALUE FROM THE FUNCTION WE NEED TO USE RETURN STATEMENT THERE 

// LETS SEE 

jsuser.lets = function() {
    return `the age of ${this.name} is ${this.age}`;
};

console.log(jsuser.lets()); // Calling the lets function and logging its return value
// now we are good to go 


// HOW TO KNOW MORE DETAILS ON OBJECTS YOU CAN ACIEVE THAT AMOUBT OF CONSISTENCY AND PRACTICE IN JS LETS GO SEE SOME INNER CONCEPT ON THIS

// Object.freeze(jsuser)
// console.log((Object.isFrozen(jsuser)))


// console.log(Object.apply(this.jsuser));
console.log(Object.apply(this.jsuser));



