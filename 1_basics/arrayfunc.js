const arrFunc ={
    name : "Ajay",
    age : 22,

    printname : function(){
        name = "AjayXth"

        console.log(`my name is ${this.name}`);
        // console.log(name);
        console.log(this);
        
    }
}
// arrFunc.printname() 
// console.log(this);


// arrow function
 const newFunc = () => {
    console.log("I am arrow func");
    
 }

// console.log(newFunc);
// newFunc()

const add = (num1,num2) => {
    return num1 + num2
}

// console.log(add(3,2));

const add2 = (num1,num2) =>  (num1 + num2)

// console.log(add2(3,2));


const add3 = (num1,num2) =>  ({name :"Ajay"})

console.log(add3(3,2));

