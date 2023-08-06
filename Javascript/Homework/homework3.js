/* Q1 
Write a conditional statement to state if hero is a dc character or marvel character. 
(i.e superman would be dc, spiderman would be marvel). */

let hero = "spiderman"

if (hero === "Superman" || hero === "Batman" || hero === "Flash" || hero === "Aquaman" || hero === "Robin"){
    console.log(`${hero} is a DC character`)
}else if(hero === "Hulk" || hero === "Thor" || hero === "Groot" || hero === "Iron Man" || hero === "Black Panther"){
    console.log(`${hero} is a Marvel character`)
}else{
    console.log(`I do not recognise ${hero}`)
}

/* Q2 
Write a conditional statement taking age as variable and what year group they will be in a school 
(i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education). 
(if this does not make sense please watch the summary video or the youtube video pasted above) */

const age = 17 

if (age >= 11 && age <= 16){
    console.log(`If you are ${age}, then you will be in Secondary school.`)
}else if (age >= 17 && age <= 18){
    console.log(`If you are ${age}, then you will be in College.`)
}else if (age >18 && age<90){
    console.log(`At ${age} you will be in optional further education`)
}else {
    console.log("Error")
}

/* Q3
Create a shopping list of 5 items. 
Now make a conditional statement that checks if the list contains 5 items only. 
if above 5 print out error and if less than 5 print out error. ( would suggest searching greater than and less than operators)*/

var shopping = ["Milk", "Bread", "Cheese", "Sugar", "Flour"]

if (shopping.length>5 || shopping.length<5){
    console.log("ERROR")
}else{
    console.log("The list contains five items.")
}