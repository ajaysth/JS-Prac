function MyName(){
    console.log("Ajay");
    
}

// MyName()


function UserLoggedIn(user){
    console.log( `${user} just logged in`);
}


//  UserLoggedIn("Ajay")


function UserLoggedIn(user){
    if(user === undefined){
        console.log("Please enter your name");
        
    }else{
        return `${user} just logged in`;
    }
}

// console.log(UserLoggedIn())


//Rest operator: used to collect multiple input in parameters (...)

function Sum(...num){
    return num
}

// console.log(Sum(2,3,4,5))


const User={
    username : "Ajay",
    price : 222
}

function objHandle(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// objHandle(User)


const myArr = [2,3,22,43,1,0]

function retArr(val){
    return val[3]
}

console.log(retArr(myArr));
