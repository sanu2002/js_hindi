// // for of 
// // for each 
// // for in ###

// // these are the special type of loop thgat are used for iterrate 
// // iver the array and map but not in object

// let myarray=[1,2,3,4,5,6]
// for (const iterator of myarray) {
//     console.log(iterator);
    
// }

// let map= new Map()
// map.set('USA','united states of amearica')
// map.set('In','India')
// map.set('Fr','France')

// console.log(map);

// for (const iterator of map) {
//     console.log(iterator);
    
// }
// // but this is not unpack the key and value pair so we Will do one thing here  use [key,value]

// for (const [iterator,value] of map) {
//     console.log(iterator,'->',value);

    
// }

// but here is a question can we iterrate the object 

// let a={
//     name:'sanu',
//     village:'budhapank'
// }

// for (const [iterator] of a) {     this will not work
//     console.log(iterator);
    
// }

let word ={
    js:'javascript',
    rb:'python',
    py:'python'
}
for (const key in word) {
   
        // console.log(`${key} shortcut for ${word[key]} `);
        
    }

const a=['sanu','salu','sima','sibani']
for (const key in a) {
    // console.log(`this array has key ${key} and value  ${a[key]}`);
   
}

// in array there is 2 things you need to understnd ?>?
// one is for of loop   [key,value] but it is not same as the case oif object still you are accessing the value but array has predefined key in js 

// we can call by using arroe function /

let b=['sanu','salu','sima']
// b.forEach(element => {
//     console.log(element);
    
// });

b.forEach(function (element){
    // console.log(element);
})

// as it is  a call back function thats why we dont need a name for that function is 


// b.forEach((elemt)=>{
//     console.log(elemt);
// })

// you can craete your own function and call it /
function name(element){
    console.log(element);
}

b.forEach(name)
