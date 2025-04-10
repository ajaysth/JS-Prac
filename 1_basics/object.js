
const mySym = Symbol("My Symbol")  //my symbol here is just a label


const user = {
    name : "Ajay",
    [mySym] : "mysymbol",
    age : 22,
    "college":"Everest College",
    isLogged : true,
    players : ["messi","suarez"]

}
// console.log(user);
// console.log(user.name);
// console.log(user["isLogged"]);
// console.log(user["college"]);
// console.log(user.college);

// console.log(user[mySym]);
// console.log(typeof user[mySym]);
// console.log(user);

// user.name = "MessiXtha"
// console.log(user["name"])

//Object.freeze(user)  //doesnt allow objects to change the values
// user.name = "woahhhh"
// console.log(user["name"])

user.greetings = function(){
    console.log("helllo i am function");
    
}

user.greetings2 = function(){
    console.log(`hello i am ${this.name}`);
    
}

console.log(user.greetings());
console.log(user.greetings2());










