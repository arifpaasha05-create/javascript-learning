/*


REGULAR EXPRESSION
Is a sequence of character that defines the search pattern
 it is used to 
 1.search text
 2.validate user input 
 3.replace text 

 Methods;
 regularstring.
 example
 let pattern = new RegExp("setPattern");


1.caret(^) it is used to match the start of the string

syntax: /^pattern/
use cases:- 


2.dollar($) it is used to match the end of the string
syntax: /pattern$/
use cases:-
image related files


3.dot(.) it is used to match exactly one character except newline character
syntax: /pattern./
use cases:-
domain names

4.Asterisk(*) it is used to match previous character zero or more occurrences of the preceding character   
use cases:-
country code optional 
user name first name second name last name

5.plus(+) it is used to match previous character one or more occurrences of the preceding character

6.Question mark(?) it is used to match previous character zero or one time of the character

7.character set([]) it is used to match any one character from the  given set of characters

8.negated character set([^]) it is used to match any one character that is not in the given set of characters

9.range(-)
10.digit(\d):matches any digit from 0 to 9 [0-9],\d
use case phone number validation

10.non-digit(\D):matches any character except digits [^0-9],\D

11.whitespace(\s):matches any whitespace character(space,tab,newline),\s

12.non-whitespace(\S):if any character is there means it gives true if only space without character it gives false,\S

13.word character(\w):matches any word character (letter,digits & underscore),\w

14.quantifier({n}):matches exactly n occurrences of the preceding character, {n}

*/

let caret = /^arif/;
console.log(caret.test("arif"));//true
console.log(caret.test("ali"));//false


let dollar = /abc$/;
console.log(dollar.test("abc"));//true
console.log(dollar.test("ab"));//false


let dot = /a.c/;
console.log(dot.test("abc"));//true 
console.log(dot.test("ac"));//false
console.log(dot.test("axc"));//true
console.log(dot.test("abbc"));//false
console.log(dot.test("a c"));//


let asterisk = /go*gle /;
console.log(asterisk.test("ggle"));//true
console.log(asterisk.test("gogle"));//true
console.log(asterisk.test("google"));//true
console.log(asterisk.test("gooogle"));//true


let plus = /go+gle/;
console.log(plus.test("ggle"));//false
console.log(plus.test("gogle"));//true
console.log(plus.test("google"));//true

let mark =/colou?r/;
console.log(mark.test("color"));//true
console.log(mark.test("colour"));//true
console.log(mark.test("colouur"));//false


let charset = /[^a-c]/
console.log(charset.test("apple"));//false
console.log(charset.test("banana"));//false
console.log(charset.test("cat"));//false
console.log(charset.test("dog"));//true


console.log(/\D/.test("abc"));//true
console.log(/\D/.test("123"));//false   
console.log(/\D/.test("a1bc"));//true


console.log(/\S/.test("hello world"));//false
console.log(/\S/.test("helloworld"));//true

console.log(/\w/.test("user_name"));//true

let qntf = /^a{3}$/;

let phone = /^[6-9][0-9]{9}$/;//

//requirements:-
/*user name letters numberss
@must and should 
domain name letters numbers
.com or .in or .org*/

let email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}$/;
