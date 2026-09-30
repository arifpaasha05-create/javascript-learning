/*


12.pop
use cases:-
*undo operations
*recently added item remove


3.unshift():
example:-
products.unshift("shoes")
console.log(products);

use cases:-
*new notifications

shift():
use cases
* Amazon who ordered first delivery

5.includes()
example :-
console.log(products.includes("laptop"));

6.indexof() returns index value

7.find():
first element satisfied it returns particular products

example :
let products1 = [
{id:1,name:"laptop",price:2000}
]
let product=products1.find((item)=>{return item.id===1;})
console.log(product);

use cases:-
user by id
product by id
employee by name
order
name of student

8.findIndex():
returns first matching element 

example
clg (products.findIndex((item)=>{ return item.id===2}));
use cases:-
position of the student

9.Some():boolean value
atleast one element satisfies 
example:clg(products.some((item)=>{return item.price>2000}));

10.slice():extracts an array
it creates new array
* let result = products1.slice(0,2)
clg (result);
usse cases:-page nation

11.splice():use add remove replace it modifies original array
example:
clg product.splice(1,2)removes
clg product.splice(1,0,"tablet")add
products.splice(1,2,"......")

12.products.sort()
sort the element from a to z First uppercase lowercase
clg (products);















 */
let products1 = [
{id:1,name:"laptop",price:2000},
{id:2,name:"Watch",price:4000},
{id:3,name:"Tablet",price:6000}]
let product=products1.find((item)=>{return item.id===1;})
console.log(product);


console.log( (products1.findIndex((item)=>{ return item.id===2})));//find index 

console.log((products1.some((item)=>{return item.price>2000})));

 let result = products1.slice(0,2)
console.log (result);


console.log( products1.splice(1,2))//removes
console.log(products1.splice(1,0,"tablet"))//add
 console.log(products1.splice(1,2,"......"));
