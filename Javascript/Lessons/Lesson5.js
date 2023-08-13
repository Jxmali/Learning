// Count up

for (let i=0; i<=3; i++){
    console.log("hello world" +i)
}

// Count down

for (let i=3; i>=0; i--){
    if (i === 0){
        console.log("Blast Off!")
    }else{
        console.log(i)
    }
}

// array

var array = ["cheese","milk","butter","bread","apple"]

for (let i = 0; i<array.length; i++){
    console.log(array[i])
}

//exercise

for (let i = 0; i<=10; i++){
    if(i%2 === 0){
        console.log(i+ " is even")
    }else{
        console.log(i+ " is odd")
    }
}