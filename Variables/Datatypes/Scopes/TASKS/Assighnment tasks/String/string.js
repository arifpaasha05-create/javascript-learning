/*
what is string?
string is type of data used to store text 


use of lenght property
no of characters in string 
syntax - name.lenght

use cases 
1. password validation 
2.user name validation
3.otp validstion
4.comment 

2.to upper
case method
*it converts the complete string into uppercase 
syntax string.uppercase()

use cases :-
1.coupen code 
2.pan card
3.country code 
4.user initIALS


3.lowercases
use cases of lower case method
1.emails
2.upi id
3.file name


4.charAT()---->
syntax string.charAt(index position)

use cases:



5.at

6.includes(string)--->specific content
use cases :-
ctrl+f
1.searching
2.filteri9ng . email validation
3.checking keywords



7. startswith()
it checks wheather a string starts with particular  text 
use cases 
1.phone number validation
2.url 
3.specific file name


endswith()
use cases
1.file extension
2.emails validation
3.url 


9.indexof()
returns a first accurant character
use cases:-
 
10.last indexof()
last accurance of letter


11.slice():it supports negative index
syntax string.slice(start,end)
hide characters
   
substring()

12.Replace-
replace first matching text
syntax 
2arguments

13.trim():
removes unnessary space from begining and ending 


14.split()
a string into an a array 
use cases 
sentence from the user 



15.concat()
two strings into single


16.r epeat ()
repeats the value
*/


function toUpperCase(){
    let element = document.getElementById("input").value;
    console.log(element);
    let saveValue = "SAVE100";
    console.log(element.toUpperCase());  
}

let Cname = "arifpasha";
let firstLetter = Cname . charAt(0);
console.log ( firstLetter . toUpperCase());
console .log(Cname.indexOf("A"));
console .log(Cname.lastIndexOf("A"));



let email="abc@gmail.com";
console.log(email.includes("@"));

let phone = "9980414969";
console.log(phone.startsWith("99"));

console .log(Cname.slice(0,4));

let email1 ="arifpaasha05@gmail.com"
let email2 = "javascript@gmail.com"
let endIndex = email1.indexOf("@")
console.log(email1.slice(0,endIndex));

let result = email1.slice(0,4)+"********"+email1.slice(email1.indexOf("@"));
console .log(result);

let messeage = "javascript is easy .javascript is difficult.javascript is important";
console.log(messeage.replace("javascript","JS"))
console.log(messeage.replaceAll("javascript","JS"))


let name2 = "           Arif                    "
console.log(name2.trim());

console.log(messeage.split(" "))

let firstName = "F"
let lastName = "Arif Pasha"
let fullname = firstName.concat( " ",lastName);
console.log(fullname);

let star ="*";
console.log(star.repeat(10));