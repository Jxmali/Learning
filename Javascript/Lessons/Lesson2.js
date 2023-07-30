let age = 25
console.log(age)
const name = "Jamal"

age = 26
console.log(age)

// --------


// position starts with 0 as the first item
// array.pop removed the last item from the list
// array.push adds an item to the list at the end
// array.unshift adds an item to the list at the start
// array.splice = the first number is the positon in the list, the second is the amount of items to remove after this point.

let array = ["bread","cheese","milk"]

array[3] = "Yoghurt"
array[4] = "flour"

array.push("rice")
array.pop()
array.unshift("Banana")

array.splice(0,3)


console.log(array)