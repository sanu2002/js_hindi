const  mydata=['iron','thor','superman']

// const myname=['sanu','salu','maa']


// myname.push(mydata)
// const what_i_need=myname.concat(mydata)

// console.log(what_i_need);

// spraed operator---------------

// console.log([...mydata,...myname,])
// console.log(typeof mydata);

// THERE IS NO NEED TO REMEBER ALL THE METHOD THAT ARE AVALABLE IN ARRAY 
// BETTER GO TO CONSOLE AND TYPE THAT DECLARE VARIABLE NAME AND THEN GO FURTHER

// syntax -copyWithin(target,start,end)
// syntax -copyWithin(target,start)

// const myname=['sanu','salu','maa','sima','sibani']
// console.log(myname.copyWithin(0,1));
// console.log(myname.reverse());
// console.log(myname)

// const change=myname.shift()  //mutant object
// console.log(change); 
// console.log(myname)
// console.log(myname.slice(0,2));
// console.log(myname.splice(0,2));
// console.log(myname)
// console.log(myname)


// but there is a little bit diffrence between slice and splice 
// you can see the diffrence after printing the original value


// console.log(array1.map());  here we need to undersatnd the iterator and function part so we will discuss it later





// console.log(array1.unshift(4, 5));
// Expected output: 5

// console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

// const array1 = [1, 2, 3];

// console.log(array1[0])  accessing element
// console.log(array1.length); Properties


// Mutating?-push,pop,shift,unshift

// let a =[1,2,3,4,5,6]
// console.log(a)
// console.log(a.unshift(0))
// console.log(a)
// console.log(a.shift(1));
// console.log(a)
// console.log(a.push(4));
// console.log(a)

// Non-mutating_=+++++++++

// concat,slice,tostring,
let b=[1,2,3,4,5,6]


// console.log(b.concat(3));
// console.log(b)
// console.log(b.toString());
// console.log(typeof b)

// SORTING THE ARRAY AND REVERSING THE ARRAY

// let c=[1,2,3,4,5,6]

// console.log(c.sort());
// console.log(c.reverse());

// suppose you hava a nested messay array you want to avoid all the array and represent into it a  new array in thta case what you can do

let data=[1,2,3,4,5,6,[2,3,5,6],[4,5,6,7],[[1,2,3,4,5],[3,4,5,6]]]
// console.log(data.flat(Infinity));
// console.log(Array.isArray('hitesh'));
// console.log(Array.isArray(data));
// let g='sanu'
// console.log(Array.from(g));
// let score={
//     name:'sanu',
//     village:'budhapank'
// }
// console.log(Array.from(score['name']));



