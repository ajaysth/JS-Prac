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

console.log(UserLoggedIn())