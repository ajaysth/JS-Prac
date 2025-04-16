(function PrintMsg(){
    console.log("Hello World");
}) ();


(function PrintAnother(){
    console.log("I am another");
}) ();

(() => {
    console.log("I am arrow function");
}) ();


((name) => {
    console.log(`I am ${name}`);
}) ("Ajay");