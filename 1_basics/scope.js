let a = 33
var b = 4

if(true){
    let a = 22
    var b = 5
    // console.log(a) // 22
    // console.log(b) // 5
}

// console.log(a) // 33
// console.log(b) // 5


function first(){
    const name = "Ajay"

    function second(){
        const player = "Messi"
        console.log(name); 
    }
    // console.log(player);  
    second()
}

// first()


if(true){
    const username = "Ajay";
    if(username === "Ajay"){
        const player = "Messi"
        // console.log(username + player);
    }
    // console.log(player);  
}
// console.log(username);



//#####################################################################################################################

console.log(addOne(2)); //doesnt give error

function addOne(num){
    return num + 1
}

// console.log(addOne(2));



// console.log(result(2)); // gives error 

const result = function addTwo(num){
    return num + 2
}
// console.log(result(2));

