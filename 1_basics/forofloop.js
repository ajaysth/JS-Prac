//array specific loops
const arr =[1,2,3,4,5,];

for (const val in arr){
    //console.log(typeof val);
    
}

//map

const map = new Map()
map.set('NP',"Nepal")
map.set('NPla',"Nepaaaaal")
map.set('NlP',"Nellpal")

//console.log(map);

for(const [key,val] of map){
    // console.log(key);
    
}


const myArr = ["ajay","xth","is","messi"]
for(const value in myArr){
    // console.log(value);
    
}

const code = ["java","python","js"]

// code.forEach(function (item){
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);
    
}

// code.forEach(printMe)

const array = [
    {
        name:"aj",
        class: "bca"
    },
    {
        name:"bj",
        class: "bba"
    },
    {
        name:"cj",
        class: "llaa"
    },
    
]

array.forEach( (item) => {
    console.log(item.name);
    console.log(item.class);    
})