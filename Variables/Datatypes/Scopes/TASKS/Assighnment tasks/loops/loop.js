/*
While loop:-
-executes code only while condition become true
syntax:-
while(condition){
//code}
1.checks the conditon 
2.if true---->executes
3.repeat
4.if false----->stops the execution


where we use -
1.when the number of iteration not known
2.when loop depends user input
3.when the condtion will be check before execution


use cases:-
1.login validation
2.otp verification
3.game loop








*/
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

let correctPin=1234;
let enteredPassword="";

while(correctPin != enteredPassword){
    enteredPassword= number(prompt(
        "Enter the password"
    ))
    if(  enteredPassword == correctPin){
        console.log("pin accepted,welcome to the dashboard page");
    }
    else{
        console.log("incorrect pin , try again");
    }
    
}
