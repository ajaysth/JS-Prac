// const foodey = new Object();
const foodey ={}

foodey.item =  "Burger"
foodey.price = 400
foodey.isAvailable = true

// console.log(foodey);

const regularuser = {
    email : "aj@gmail.com",
    userDetails:{
        names : {
            firstName : "Ajay",
            lastName : "Shrestha"
        }
    }
}

// console.log(regularuser.userDetails);
// console.log(regularuser.userDetails.names["firstName"]);


const ob1 = {1:"a",2:"b"}
const ob2 = {3:"c",4:"d"}
const ob4 = {6:"c",7:"d"}

// const ob3 = Object.assign({},ob1,ob2,ob4)
const ob3 = {...ob1,...ob2}
// console.log(ob3);


const users =[
    {
        id:1,
        name:"op"
    },
    {
        id:2,
        name:"op2"
    },
    {
        id:3,
        name:"op3"
    },
]

// console.log(users[0].id);
// console.log(users[1].name);



//*********************************************** */

const courses = {
    courseName : "BCA",
    price : 4000,
    courseTeacher : "babu"
}

const {courseTeacher : Teacher}= courses
// console.log(courseTeacher);
// console.log(Teacher);




{
    "name" : "Ajay",
    "semester" : 6,
    "faculty" : "BCA"
}



{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }



