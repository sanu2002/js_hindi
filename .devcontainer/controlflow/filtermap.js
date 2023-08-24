// we are going to discuss two things here one is arraow function and second one is normal function

// what is map filter reduce and all these stuff 

// Map,filter.reduce-> so these are commanly used for these pupose 
// Map- it will return the Array or the object by changing its each element 

// filter - it will give outpur accrodinf to condition 

// reduce - it will take 2 value accumulator and current value 

// let x=[1,2,3,4,5,6]
// x.forEach((element) => {
//     if (element>3){
//         console.log(element);
//     }
    
// });
// but there is one demerit here we cant further use it 
// let x=[1,2,3,4,5,6]
// let y=x.forEach((element) => {
//     if (element>3){
//         console.log(element);
//     }
    
// });
// console.log(y)

let obj={
    name:'sanu',
    village:'budhapank'

}

// for (const element of obj) {
//     console.log(element);
    
// // }
// // for (let index = 0; index < obj.length; index++) {
// //     const element = array[index];
// //     console.log(element);
    
// // }
// // so we conculde we cant use for of loop in obj 4

// for (const  key in obj) {
    
//     // console.log(key,obj[key]);
//     // console.log(key);
//     console.log(obj);

    
   
// }




// so the all rounder of loop we can called for each loop 

// so here wen we cann foreach loop then we need to know some something about call back 

// callback is  a function which is used to passed as a parametr in another object 

a=[1,2,3,4,5,6,7,8]

a.forEach(element => {
    // console.log(element);
    
});
// we can also write without using arroe function 



// a.forEach(function (element) {
//     console.log(element);
// });

// can u  make your own call back function ? 
// Yes 

function sanu(element){
    return element
}

a.forEach((element) =>{
            //   console.log(element);
});


// so here is your own call back function 

// while ,do while 

let c=0

// while (c<=10) {
//     // console.log(c);
//     c++
    
// }

let eleemt=0
do{
    // console.log(eleemt);
    eleemt++
}while (eleemt<=10);

// use while loop wen u dont know what is the exact number of iterartiuon required for satisfy the condition 

// ok then we will see something about map,filter and reduce 



x=[1,2,3,4,5,6]

// array.forEach((eleemt) => {
    
// });

// // remember 2 things  can u write thta arrow function in one line
// yes 

// const newArray = x.map(element => ({ element }));

// console.log(newArray);