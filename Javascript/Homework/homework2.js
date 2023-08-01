/* 
1. From you understanding of array create an array with 15 items inside
2. From the array just created in the above question remove the last item in the array. You cannot alter the original array.
3. Add an item to the end of the list. Cannot alter the original array
4. Find the position of the first item, middle item and last item of the list and print them off separately.
5. Modify 3 items in the array and print them off
6. Using string interpolation combine 5 different variables together
7. Delete the 2 items in the array
8. remove the first item from the array
9. add an item to the first position of the array 
*/

let array = ["milk","sugar","bread","juice","fruit","eggs","flour","butter","yoghurt","Peanuts","Ketchup","tea","coffee","chocolate","crisps"]

array.pop()
array.push("Cheese")

console.log(array[0])
console.log(array[8])
console.log(array[array.length-1])

array[2] = "Chair"
array[9] = "sofa"
array[11] = "door"

var age = 25
var name = "Jamal"
var dob = "July 1998"
var greet = "Hello"
var thank = "Thank you for reading!"

console.log(greet , "I am" , name , "." , "I was born in" , dob , "which makes me" , age , "years old" , "." , thank)

array.splice(6,2)
array.shift()
array.unshift("apples")

console.log(array)