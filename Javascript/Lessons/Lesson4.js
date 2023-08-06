// includes ( ) and switch

var array = [1,2,3,4,5,6,"Jamal"]

if (array.includes("z")){
    console.log("array has that item.")
}

var day = "TUESDAY"

switch(day.toLowerCase()){
    case "monday":
        console.log(`Today is ${day}.`)
        break;
    case "tuesday":
        console.log(`Today is ${day}.`)
        break;
    case "wednesday":
        console.log(`Today is ${day}.`)
        break;
    case "thursday":
        console.log(`Today is ${day}.`)
        break;
    case "friday":
        console.log(`Today is ${day}.`)
        break;
    case "saturday":
        console.log(`Today is ${day}.`)
        break;
    case "sunday":
        console.log(`Today is ${day}.`)
        break;
    default:
        console.log("not possible")
        break;
}