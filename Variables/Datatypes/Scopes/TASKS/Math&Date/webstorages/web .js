/*
Web storage :-




types of web storage 
1.local storage:stores data permenently in the browser
we cant able to store 5 mb
it cant able to access store whole object data

use cases:
- dark theme
-cart items
-login info
-todo application


methods :-
setItem method(2argumentt 1."key",2value)------>store data-
get Item("key")----->get data from local storage
removeItem("key")---->removes the specific data
clear()-------->remove all data from ls
2.session storage it is temporary data it works for tabs  
use cases : login ,logout

we cant able to store 5 mb

*/
localStorage.setItem("key",100);
localStorage.setItem("key1",101);

console.log( typeof localStorage.getItem("key1"));
//console.log(number (localStorage.getItem("key1")));//

localStorage.removeItem("key1")
localStorage.clear()


let student = {
    name:"arif",
    age:22,
    course:"jfs"
}
localStorage.setItem("studentData",JSON.stringify(student));
localStorage .getItem("studentData",student);
console.log(student);//JSON.parse ,we can convert string to its original object from JSON.parse


function darkmode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    localStorage.setItem("theme","dark")
}

function lightMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    localStorage.setItem("theme","white")
}

let savedTheme = localStorage.getItem("theme")

if(savedTheme=== "dark"){
     document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; 
}