// block scope and global scope
// {}-this is called a scope 


var b=2000

// let a =20
{
    let a =10
    const c=30
    var b=20
    function add(){
        let b=20
    }
}

// console.log(a)
// console.log(c)  this will show a error because the varible has some scope inside {} and var is little bit diffrent but i am not gonna use var because it will show a lot of debug inside the scope
// console.log(b)  // so it will show the scope 