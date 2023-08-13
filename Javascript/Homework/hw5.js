/* Fizzbuzz task (medium)

Using a loop, 
print numbers from 1 to 100 
multiple of 3 should print “Fizz”
multiples of 5 should print “Buzz”. 
print “FizzBuzz” for multiples of three and five.
*/

for (let i = 0; i<101; i++){
    if(i % 15 == 0){
        console.log("FizzBuzz")
    }else if (i % 5 == 0){
        console.log("Buzz")
    }else if(i % 3 == 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}

/* 
Take the following phrase and translate it to a different word depending on vowels shown.

phrase “turpentine and turtles” 
word equivalent "UUEEIEEAUUEE”

Note for every u&e character in the phrase the word equivalent should contain 2 of those characters.
*/


var phrase = "turpentine and turtles"
var equivalent = ""

for (let i=0; i<phrase.length; i++){
    if (phrase[i].toLowerCase() === "u" || phrase[i].toLowerCase() === "e" || phrase[i].toLowerCase() === "i" || phrase[i].toLowerCase() === "a"){
        equivalent = equivalent.concat(phrase[i])
    }
}
