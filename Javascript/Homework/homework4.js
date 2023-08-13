/* Write a conditional statement that takes into consideration validations (i.e case sensitivity). 
this will be entire up to you as to what the conditional statement is on. 
(if this does not make sense please refer back to the recording) */

var fruit = "Apple"

if(fruit.toLowerCase() === "apple"){
    console.log("An apple a day keeps the doctor away")
}else{
    console.log("I do not recognise that fruit")
}

// Write a conditional statement that prints whether the phone being used is an Iphone or an android

var Phone = "Iphone"

if(typeof Phone === "string"){
    if (Phone === "Iphone"){
    console.log("The phone being used is an Iphone")
    }else if(Phone === "Android"){
    console.log("This phone is an android")
    }else{
    console.log("I do not recognise this phone")
    }
}

/* Write a switch case that checks if the operation is a math operation (+,-,*,/) 
if the options is any of the options given it should give me the result of 2 variables created above the switch case. 
For example. math operation is * and the variables are 250 & 10 then the answer should log 2500 */


